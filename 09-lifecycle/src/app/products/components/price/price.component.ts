import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log('COMPONENTE HIJO: ngOnInit');

    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick ${value}`)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('COMPONENTE HIJO: ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    this.interval$!.unsubscribe();
  }
}
