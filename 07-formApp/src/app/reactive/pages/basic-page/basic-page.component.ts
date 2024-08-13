import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.myForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit(): void {
    this.myForm.reset();
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        // case 'min':
        //   return `Este campo debe ser mayor o igual a ${errors['min'].requiredValue}`;
      }
    }
    return '';
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
