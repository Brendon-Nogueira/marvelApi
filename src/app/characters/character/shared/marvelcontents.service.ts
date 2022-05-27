import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelcontentsService {
 
  constructor(private httpClient : HttpClient) { }

 /* teste01 PUBLIC_KEY = 'd6f147a6bd7f9364730845f81f3840b4'
  HASH = 'e1214ab105787e7a79059842f2e82da3'
  md5 = '1653260397''*/

   public_key = '4ee285969837755c6f60807605fd284a'
   ts = '1653343957754'
   HASH = '5a3325c95d3dba11206101aacdc905a1'

  

 private url_base = `http://gateway.marvel.com/v1/public/`


  all_Characters = this.url_base + `characters?ts=${this.ts}&limit=100&apikey=${this.public_key}&hash=${this.HASH}`;


  getAllCharacters() : Observable<any> {
      return this.httpClient.get<any>(this.all_Characters) 
      .pipe(map((data: any) => data.data.results));
    }
  }