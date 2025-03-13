import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header.component';
import { CardContentComponent } from './card/card-content.component';
import { CardFooterComponent } from './card/card-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-project';
  saveHandler() {
    alert('hello world');
  }
}
