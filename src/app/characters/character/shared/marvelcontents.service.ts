import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelcontentsService {
 
  constructor(private httpClient : HttpClient) { }

  public_Key = 'd6f147a6bd7f9364730845f81f3840b4'
  hash = 'a5915c5e0109cb6687022d6b650b6850'
  md5 = '1651621289'

 private url_base = `http://gateway.marvel.com/v1/public/`


  Characters = this.url_base + `characters?ts=1&limit=100&apikey=${this.public_Key}&hash=${this.hash}`;


  getAllCharacters() : Observable<any> {
      return this.httpClient.get<any>(this.Characters) 
      .pipe(map((data: any) => data.data.results));
    }
  }