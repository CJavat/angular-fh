import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Imagen de perrito"
        width="200"
        height="300"
        style="view-transition-name: hero-1;"
      />

      <div
        class="bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero-2;"
      ></div>
    </section>
  `,
  styles: ``,
})
export default class ViewTransitionComponent {}
