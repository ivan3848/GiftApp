
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GiftApiResponse, Data, Card } from '../gift.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GiftService {

  private _apiKey: string = 'WYzZ3VjsGB0u08XbwNbNSVxcGV2ZlPkS';
  private _urlGift:    string = 'https://api.giphy.com/v1/gifs/search';
  private _urlSticker:    string = 'https://api.giphy.com/v1/stickers/search';

  public results: Data[] = [];

  private _history: string[] = [];

  get history(): string[]{
    return this._history.slice(0, 10);
  }

  constructor( private http: HttpClient ){}

  buscarGift( gift: string){
    if(gift.trim().length === 0){
      alert('Ingrese un nombre valdio');
    }

    gift = gift.trim().toLowerCase();

    this.validateIfExistInHistory(gift);
    this._history.unshift(gift);

    let params = new HttpParams()
        .set('api_key', this._apiKey)
        .set('q', gift);
    
     this.http.get<GiftApiResponse>(this._urlSticker, { params })
        .subscribe((resp) => 
        {
          this.results = resp.data;
        });
  }

  validateIfExistInHistory(gift: string){
    let item = this._history.indexOf(gift);

    console.log(item);
    
    if (item !== -1) {
      this._history.splice(item, 1);
    }
  }
}
