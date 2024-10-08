import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      #imageFlag {
        width: 30px;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
