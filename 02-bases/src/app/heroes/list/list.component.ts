import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Iron-Man',
    'Spider-Man',
    'Hulk',
    'Thor',
    'Captain America',
  ];

  public deletedHeroe?: string = '';

  public removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }
}
