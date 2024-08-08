import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { provideHttpClient } from '@angular/common/http'; //? Forma actualizada del HttpClientModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, CountriesModule],
  providers: [provideHttpClient()], //? Forma actualizada del HttpClientModule
  bootstrap: [AppComponent],
})
export class AppModule {}
