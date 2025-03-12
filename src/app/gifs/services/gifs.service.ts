import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { GifhyResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  constructor(){
    this.loadTreadingGifs();
  }

private http = inject(HttpClient)

loadTreadingGifs(){

  this.http.get<GifhyResponse>(`${environment.giphyUrl}/gifs/trending`,{
    params:{
      api_key: environment.giphyApiKey,
      limit: 20,

    }
  }).subscribe((resp) =>{
    console.log({resp})
  })

}



}
