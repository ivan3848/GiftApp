import { Component } from '@angular/core';
import { Card, Data } from '../gift.interfaces';
import { GiftService } from '../service/gift.service';

@Component({
  selector: 'app-gift-main-page',
  templateUrl: './gift-main-page.component.html'
})

export class GiftMainPageComponent {

  get data(){
    let result: Card[] = [];
    
    this.giftService.results.forEach(item => {
      result.push({
        title: item.title,
        image: item.images.downsized_medium.url
      });
    });

    return result;
  } 

  constructor(private giftService: GiftService){}
  }
