import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup;
  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  constructor(private formbuilder: FormBuilder) {
    this.myForm = this.formbuilder.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  onSave() {
    if (this.myForm.invalid) return this.myForm.markAllAsTouched();

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
