import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordDirective, multi: true }]
})
export class ConfirmPasswordDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return forbiddenNameValidator(control)
  }

  constructor() { }

}


export const forbiddenNameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    if(password && repeatPassword) {
      return password.value ==! repeatPassword.value ? { 'identityRevealed': true } : null;
    }
  };
}