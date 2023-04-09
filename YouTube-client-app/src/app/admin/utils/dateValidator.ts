import { AbstractControl, ValidationErrors } from '@angular/forms';

function dateValidator(control: AbstractControl): ValidationErrors | null {
  const inputValue: number = Date.parse(control.value);
  const now: number = Date.now();

  if (inputValue > now) {
    return { futureDate: true };
  }

  return null;
}

export default dateValidator;
