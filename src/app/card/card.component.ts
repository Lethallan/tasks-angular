import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'Title'
  text = 'Home is behind, the world ahead'

  textColor: string

  inputHandler(value) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}