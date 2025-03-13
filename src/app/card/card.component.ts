import { Component, Input } from '@angular/core';
import { HeaderSize } from './typings/header-size';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() headerSize: HeaderSize = 'm';
  @Input() headline: string = '';

  @Input() body: string = '';

  @Input() footer: string = '';

  constructor() { }
}
