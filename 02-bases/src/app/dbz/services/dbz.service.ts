import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DBService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
    {
      name: 'Trunks',
      power: 7000,
    },
    {
      name: 'Frezer',
      power: 6000,
    },
    {
      name: 'Bulma',
      power: 10,
    },
    {
      name: 'Gohan',
      power: 7500,
    },
    {
      name: 'Cell',
      power: 7000,
    },
  ];

  public onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
