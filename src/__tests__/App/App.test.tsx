import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Mock heavy child components so App tests are fast & focused on orchestration
vi.mock('../../components/Home/Home', () => ({
  Home: () => <div data-testid='home-mock'>Home</div>,
}));
vi.mock('../../components/About/About', () => ({
  About: () => <div data-testid='about-mock'>About</div>,
}));
vi.mock('../../components/Portfolio/Portfolio', () => ({
  Portfolio: () => <div data-testid='portfolio-mock'>Portfolio</div>,
}));
vi.mock('../../components/Footer/Footer', () => ({
  Footer: ({ handleScrollToTop }: { handleScrollToTop: () => void }) => (
    <button data-testid='footer-mock' onClick={handleScrollToTop}>
      Footer
    </button>
  ),
}));
vi.mock('../../components/Contact/ContactForm/ContactForm', () => ({
  ContactForm: ({ toggleContact }: { toggleContact: () => void }) => (
    <div data-testid='contact-form-mock'>
      <button onClick={toggleContact}>Close contact</button>
    </div>
  ),
}));

// Mock framer-motion to keep DOM stable
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  return {
    ...actual,
    useScroll: () => ({ scrollYProgress: { onChange: vi.fn(), current: 0 } }),
    useSpring: vi.fn(() => 0),
    useTransform: vi.fn((value) => value),
  };
});

// Mock hooks used by App / TopNavigation / Footer
vi.mock('../../utils/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../utils/hooks')>();
  return {
    ...actual,
    scrollTop: vi.fn(),
    useMediaQuery: vi.fn(() => false), // desktop by default
    useHidescroll: vi.fn(),
  };
});

describe('App', () => {
  test('renders application wrapper and default sections', () => {
    render(<App />);
    expect(screen.getByTestId('application')).toBeInTheDocument();
    expect(screen.getByTestId('home-mock')).toBeInTheDocument();
    expect(screen.getByTestId('about-mock')).toBeInTheDocument();
    expect(screen.getByTestId('portfolio-mock')).toBeInTheDocument();
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
  });

  test('renders TopNavigation by default', () => {
    render(<App />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('clicking Contact opens ContactForm and hides TopNavigation', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: /open contact form/i }),
    );

    expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument();
    expect(screen.queryByTestId('navigation')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-mock')).not.toBeInTheDocument();
  });

  test('closing ContactForm restores main content and TopNavigation', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: /open contact form/i }),
    );
    await user.click(screen.getByRole('button', { name: /close contact/i }));

    expect(screen.queryByTestId('contact-form-mock')).not.toBeInTheDocument();
    expect(screen.getByTestId('home-mock')).toBeInTheDocument();
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('clicking Footer triggers scrollTop and focuses TopNavigation icon', async () => {
    const user = userEvent.setup();
    const { scrollTop } = await import('../../utils/hooks');

    render(<App />);
    await user.click(screen.getByTestId('footer-mock'));

    expect(scrollTop).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const logo = screen.getByLabelText(
        'CreatorLogo press to scroll to top of the page',
      );
      expect(document.activeElement).toBe(logo);
    });
  });

  test('provides initialHelperContext so nav items render', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /open contact form/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /open resumé pdf/i }),
    ).toBeInTheDocument();
  });
});
