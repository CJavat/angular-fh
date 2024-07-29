import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public OnDeleteById: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }

  public onDeleteCharacterById(id: string): void {
    if (!id) return;

    this.OnDeleteById.emit(id);
  }
}
