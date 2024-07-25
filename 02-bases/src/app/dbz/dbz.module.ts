import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
})
export class DbzModule {}
