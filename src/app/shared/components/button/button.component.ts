import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-button',
  template: `
    <button mat-stroked-button [ngClass]="type">
      {{ title }}
    </button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() type!: string;
  //Flat
  //Stroked
}
