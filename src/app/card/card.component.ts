import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() headline: string = '';

  @Input() body: string = '';

  @Input() footer: string = '';

  constructor() { }
}
