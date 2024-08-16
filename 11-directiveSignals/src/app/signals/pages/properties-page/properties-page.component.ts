import { Component, computed, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent implements OnDestroy {
  public user = signal<User>({
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });
  public fullName = computed<string>(
    () => `${this.user()!.first_name} ${this.user()!.last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log(this.user().first_name);
  });

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated(field: string, value: string) {
    // this.user.update((current) => ({
    //   ...current,
    //   [field]: value,
    // }));

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;

        case 'id':
          current.id = Number(value);
          break;

        default:
          return current;
      }

      return current;
    });
  }
}
