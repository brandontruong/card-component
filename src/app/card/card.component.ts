import { Component, Input } from '@angular/core';
import { HeaderSize } from './typings/header-size';
import { Accent } from './typings/accent';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() headerSize: HeaderSize = 'm';
  @Input() accent: Accent = 'info';
  @Input() headline: string = '';

  @Input() body: string = '';
  constructor() { }
}
