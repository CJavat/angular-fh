import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: '',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';
}
