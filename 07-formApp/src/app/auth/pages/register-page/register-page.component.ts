import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';
// import * as customValidators from '../../../shared/validators/validators';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {
    this.myForm = this.formbuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(
              this.validatorsService.firstNameAndLastnamePattern
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorsService.emailPattern),
          ],
          [this.emailValidator], //? [new EmailValidatorService()], -> Otra forma de hacerlo sin la inyección de dependencias.
        ],
        username: [
          '',
          [Validators.required, this.validatorsService.cantBeStrider],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', Validators.required],
      },
      {
        validators: [
          this.validatorsService.isFieldOneEqualFieldTWo(
            'password',
            'password2'
          ),
        ],
      }
    );
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
