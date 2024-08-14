import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];
  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.myForm = this.formBuilder.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => (this.borders = [])),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        ),
        tap((region) => region.sort((a, b) => a.name.localeCompare(b.name)))
      )
      .subscribe((countries) => {
        this.countriesByRegion = countries;
      });
  }

  onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap((alphaCode) =>
          this.countriesService.getCountryByAlphaCode(alphaCode)
        ),
        switchMap((country) =>
          this.countriesService.getCountryBordersByCodes(country.borders)
        ),
        tap((alphaCode) =>
          alphaCode.sort((a, b) => a.name.localeCompare(b.name))
        )
      )
      .subscribe((countries) => {
        this.borders = countries;
      });
  }
}
