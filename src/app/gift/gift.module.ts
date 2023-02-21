import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { SearchGiftComponent } from './search-gift/search-gift.component';
import { SharedModule } from '../shared/shared.module';
import { GiftMainPageComponent } from './gift-main-page/gift-main-page.component';



@NgModule({
  declarations: [
    ResultComponent,
    SearchGiftComponent,
    GiftMainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GiftMainPageComponent,
    ResultComponent,
    SearchGiftComponent
  ]
})
export class GiftModule { }
