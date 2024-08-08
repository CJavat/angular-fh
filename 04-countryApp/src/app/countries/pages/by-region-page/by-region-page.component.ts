import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import type { Country } from '../../interfaces/country';
import type { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public isLoading: boolean = false;
  public initialValue: Region = '';
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.region;

    this.selectedRegion = this.initialValue;
  }

  public searchRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
