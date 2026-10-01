import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from './ContactForm';
import { sendEmailProd } from './helpers/sendEmailProd';

vi.mock('./helpers/sendEmailProd', () => ({
  sendEmailProd: vi.fn(),
}));

const fillContactForm = async (
  user: ReturnType<typeof userEvent.setup>,
  email = 'ada@example.com',
  message = 'Hello there',
) => {
  await user.type(screen.getByLabelText('Name:'), 'Ada Lovelace');
  await user.type(screen.getByLabelText('E-mail:'), email);
  await user.type(screen.getByLabelText('Message:'), message);
};

describe('ContactForm', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.mocked(sendEmailProd).mockReset();
  });

  it('renders the dialog and focuses the name field', () => {
    render(<ContactForm toggleContact={vi.fn()} />);

    expect(screen.getByRole('dialog', { name: 'Contact' })).toBeInTheDocument();
    expect(document.getElementById('name')).toHaveFocus();
  });

  it('shows required validation for every field when submitted empty', async () => {
    render(<ContactForm toggleContact={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(
      await screen.findByText(
        'Oh, I think you might have forgotten to state your name?',
      ),
    ).toHaveAttribute('role', 'alert');
    expect(
      screen.getByText(
        "Oh noes, if you don't type a email I will not be able to answer you!",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Oh noes, you forgot to type a message!'),
    ).toBeInTheDocument();
    for (const field of ['name', 'email', 'message']) {
      expect(document.getElementById(field)).toHaveAttribute(
        'aria-invalid',
        'true',
      );
    }
  });

  it('validates email format and minimum message length', async () => {
    render(<ContactForm toggleContact={vi.fn()} />);
    const user = userEvent.setup();
    await fillContactForm(user, 'not-an-email', 'Hi');

    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(
      await screen.findByText(
        'The email address you have provided seems to be invalid, please try again!',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Min length is 5')).toBeInTheDocument();
    expect(document.getElementById('email')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(document.getElementById('message')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('revalidates an invalid email as the user edits it', async () => {
    render(<ContactForm toggleContact={vi.fn()} />);
    const user = userEvent.setup();
    await fillContactForm(user, 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    const emailError = await screen.findByText(
      'The email address you have provided seems to be invalid, please try again!',
    );
    expect(emailError).toBeInTheDocument();

    const emailField = document.getElementById('email')!;
    await user.clear(emailField);
    await user.type(emailField, 'ada@example.com');

    expect(emailError).not.toBeInTheDocument();
    expect(document.getElementById('email')).toHaveAttribute(
      'aria-invalid',
      'false',
    );
  });

  it('shows loading and the thank-you page after a valid submission', async () => {
    vi.mocked(sendEmailProd).mockImplementation((_form, dispatch) => {
      setTimeout(() => dispatch({ type: 'SUCCESS' }), 50);
    });
    const toggleContact = vi.fn();
    render(<ContactForm toggleContact={toggleContact} />);
    const user = userEvent.setup();
    await fillContactForm(user);

    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(await screen.findByText('Sending message...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sending...' })).toBeDisabled();
    expect(sendEmailProd).toHaveBeenCalledOnce();

    const thankYouHeading = await screen.findByRole(
      'heading',
      {
        name: 'Message has been sent!',
      },
      { timeout: 1000 },
    );
    expect(thankYouHeading).toBeInTheDocument();
    expect(thankYouHeading).toHaveFocus();
    expect(
      screen.getByText(
        'Thank you for reaching out! I will get back at you as soon as possible!',
      ),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Close contact form and return to start',
      }),
    );
    expect(toggleContact).toHaveBeenCalledOnce();
  });

  it('shows the retry state when sending fails and retries on request', async () => {
    vi.mocked(sendEmailProd).mockImplementation((_form, dispatch) => {
      setTimeout(() => dispatch({ type: 'ERROR' }), 50);
    });
    render(<ContactForm toggleContact={vi.fn()} />);
    const user = userEvent.setup();
    await fillContactForm(user);
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(
      await screen.findByText(
        'Something has gone wrong :/, please try to send the message again.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Failed to send message. Please try again.'));
    expect(screen.getByLabelText('Name:')).toBeDisabled();

    await user.click(
      screen.getByRole('button', { name: 'Try sending message again' }),
    );
    await waitFor(() => expect(sendEmailProd).toHaveBeenCalledTimes(2));
    expect(
      await screen.findByText(
        'Something has gone wrong :/, please try to send the message again.',
      ),
    ).toBeInTheDocument();
  });

  it('closes the form 300ms after clicking the close control', () => {
    vi.useFakeTimers();
    const toggleContact = vi.fn();
    render(<ContactForm toggleContact={toggleContact} />);

    fireEvent.click(screen.getByRole('button', { name: 'Close contact form' }));

    expect(toggleContact).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(299);
    });
    expect(toggleContact).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(toggleContact).toHaveBeenCalledOnce();
  });

  it.each(['Enter', ' '])('closes with the %s key', (key) => {
    vi.useFakeTimers();
    const toggleContact = vi.fn();
    render(<ContactForm toggleContact={toggleContact} />);

    fireEvent.keyDown(
      screen.getByRole('button', { name: 'Close contact form' }),
      {
        key,
      },
    );

    expect(toggleContact).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(toggleContact).toHaveBeenCalledOnce();
  });

  it('does not close on unrelated keyboard input', () => {
    vi.useFakeTimers();
    const toggleContact = vi.fn();
    render(<ContactForm toggleContact={toggleContact} />);

    fireEvent.keyDown(
      screen.getByRole('button', { name: 'Close contact form' }),
      {
        key: 'Escape',
      },
    );
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(toggleContact).not.toHaveBeenCalled();
  });
});
