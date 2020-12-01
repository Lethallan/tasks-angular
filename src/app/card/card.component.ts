import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'New Title'
  text = 'Home is behind, the world ahead'
  number = '42'

  imgUrl = 'https://i.ebayimg.com/images/g/IlUAAOSwBPlc~NtR/s-l300.jpg'

  getInfo(): string { return 'whoooooa' }
}