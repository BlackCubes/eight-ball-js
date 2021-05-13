import regex from './regex';

const validateForm = (inputName, inputValue, errors) => {
  switch (inputName) {
    case 'ask':
      if (!inputValue.length) {
        errors[inputName] = 'Required.';
      } else if (regex.numsParenthesis.test(inputValue)) {
        errors[inputName] = 'Numbers and/or parenthesis are not allowed.';
      } else {
        errors[inputName] = '';
      }
      break;

    default:
      break;
  }
};

export default validateForm;
