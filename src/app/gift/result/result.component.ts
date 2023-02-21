import { Component, Input } from '@angular/core';
import { Card } from '../gift.interfaces';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {

  @Input() data: Card = 
  {
    title: '',
    image: ''
  };
}
