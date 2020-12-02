import {Component, Input} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card

  title = 'Title'
  text = 'Home is behind, the world ahead'

  textColor: string

  inputHandler(value) {
    this.card.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}