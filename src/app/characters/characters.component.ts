import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelcontentsService } from './character/shared/marvelcontents.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersSvc : MarvelcontentsService) { }

  allCharacters : Observable<any> | any

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){
    this.allCharacters = this.charactersSvc.getAllCharacters()
  }

 
}
