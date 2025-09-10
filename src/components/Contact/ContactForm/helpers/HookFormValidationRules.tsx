export const contactFormRules = {
  inputNameRules: {
    required: 'Oh, I think you might have forgotten to state your name?',
  },
  inputEmailRules: {
    required:
      "Oh noes, if you don't type a email I will not be able to answer you!",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message:
        'The email address you have provided seems to be invalid, please try again!',
    },
  },
  textAreaMessageRules: {
    required: 'Oh noes, you forgot to type a message!',
    minLength: { value: 5, message: 'Min length is 5' },
  },
};
