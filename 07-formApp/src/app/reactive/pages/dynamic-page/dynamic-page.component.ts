import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup;

  public newFavorite: FormControl = new FormControl('', []);

  constructor(private formbuilder: FormBuilder) {
    this.myForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.formbuilder.array([
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ]),
    });
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
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
      }
    }
    return '';
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.formbuilder.control(newGame, Validators.required)
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) return this.myForm.markAllAsTouched();

    (this.myForm.controls['favoriteGames'] as FormArray) =
      this.formbuilder.array([]);
    this.myForm.reset();
  }
}
