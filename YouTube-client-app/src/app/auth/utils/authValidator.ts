import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const inputValue: string = control.value;

  const validationResults = {
    useDifferentCase: !inputValue.match(/^(?=.*[a-z])(?=.*[A-Z])/),
    useLettersAndNumbers: !inputValue.match(/^(?=.*[a-zA-Z])(?=.*\d)/),
    useSpecialChar: !inputValue.match(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>])/,
    ),
  };

  const isValid =
    !validationResults.useDifferentCase &&
    !validationResults.useLettersAndNumbers &&
    !validationResults.useSpecialChar;
  return isValid ? null : validationResults;
}

export default passwordValidator;
