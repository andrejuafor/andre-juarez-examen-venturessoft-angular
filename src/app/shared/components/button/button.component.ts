import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="type">
      {{ title }}
       @if(icon) {
        <fa-icon [icon]="faChevronRight"></fa-icon>
       }
    </button>
  `,
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() type!: string;
  @Input() width!: string;

  public faChevronRight = faChevronRight
}
