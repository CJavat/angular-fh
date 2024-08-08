import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'Daniel';
  public nameUpper: string = 'DANIEL';
  public fullName: string = 'DaNiEl PLascEncIa';

  public customDate: Date = new Date();
}
