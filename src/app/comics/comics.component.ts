import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelcontentsService } from '../characters/character/shared/marvelcontents.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  allComics : any [] = []
  constructor( private comicsSvc : MarvelcontentsService) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics(){
    this.comicsSvc.getAllComics().subscribe(comics =>{
      this.allComics = comics
    })
  }
}
