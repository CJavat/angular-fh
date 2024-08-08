import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import type { Country } from '../../interfaces/country';
@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  public searchByCountry(term: string) {
    this.countriesService
      .searchCountry(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
