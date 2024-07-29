import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7000,
    },
    {
      id: uuid(),
      name: 'Frezer',
      power: 6000,
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 10,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 7000,
    },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  public deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
