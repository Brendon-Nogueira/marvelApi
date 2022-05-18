import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {


   PB_KEY = 'd6f147a6bd7f9364730845f81f3840b4'
   HASH = 'a5915c5e0109cb6687022d6b650b6850'
   MD5 = '1651621289'

   URL =  `http://gateway.marvel.com/v1/public/`
  
   URL_CHARACTERS = this.URL + `characters?ts=1&limit=100&apikey=${this.PB_KEY}&hash=${this.HASH}`;
   
  
  constructor(private httpClient : HttpClient) { }
   
  getCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.URL_CHARACTERS)
    .pipe(map((data: any) => data.data.results));
  }

}
