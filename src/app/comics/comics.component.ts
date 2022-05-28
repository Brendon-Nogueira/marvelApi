import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelcontentsService } from '../characters/character/shared/marvelcontents.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  all_Comics : Observable<any> | any
  constructor( private comicsSvc : MarvelcontentsService) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics(){
    this.all_Comics = this.comicsSvc.getAllComics
  }
}
