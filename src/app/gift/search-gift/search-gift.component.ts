import { Component, ViewChild, ElementRef } from '@angular/core';
import { GiftService } from '../service/gift.service';

@Component({
  selector: 'app-search-gift',
  templateUrl: './search-gift.component.html',
  styleUrls: ['./search-gift.component.css']
})
export class SearchGiftComponent {
  
  @ViewChild('txtSearch') search!: ElementRef;

  constructor( private giftService: GiftService){}

  buscarGift(){
    this.giftService.buscarGift(this.search.nativeElement.value);
    this.search.nativeElement.value = '';
  }
}
