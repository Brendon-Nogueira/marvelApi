import { Component, OnInit } from '@angular/core';
import { MarvelcontentsService } from '../characters/character/shared/marvelcontents.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private  storiesSvc : MarvelcontentsService) { }
    allStories : any [] = []

  ngOnInit(): void {
    this.getallStories()
  }

  getallStories(){
    this.storiesSvc.getAllStories().subscribe(stories =>{
      this.allStories = stories
    })
  }
}
