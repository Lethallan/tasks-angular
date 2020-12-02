import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

  toggleCards() {
    this.toggle = !this.toggle
  }

  cards: Card[] = [
    {title: 'Cat', text: 'This is Sparta!'},
    {title: 'Kangaroo', text: 'Blablabla'},
    {title: 'Happy new year', text: 'Heart-shaped box'},
    {title: 'Master of the wind', text: 'The dawn will come'}
  ]
}
