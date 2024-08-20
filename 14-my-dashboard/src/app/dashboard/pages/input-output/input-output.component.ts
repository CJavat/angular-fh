import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { ProductCardComponent } from './ui/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 20,
    },
  ]);

  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe();
  }

  private intervalSuscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  public updateProduct(product: Product, newQuantity: number): void {
    this.products.update((products) =>
      products.map((p) =>
        p.id === product.id ? { ...p, quantity: newQuantity } : p
      )
    );
  }
}
