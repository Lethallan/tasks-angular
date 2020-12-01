import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'Title'
  text = 'Home is behind, the world ahead'

  inputHandler(event: any) {
    const value = event.target.value
    this.title = value
  }
}