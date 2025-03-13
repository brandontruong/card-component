import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content />',
})
export class CardContentComponent { }