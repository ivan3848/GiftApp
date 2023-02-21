import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { GiftService } from '../../gift/service/gift.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {

  get option(): string[] {
    return this.giftService.history;
  }

  @ViewChild('txtHistory') history!: ElementRef

  search(event: any){
    this.giftService.buscarGift(event.srcElement.text)
  }

  constructor( private giftService: GiftService ){

  }
}
