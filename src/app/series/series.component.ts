import { Component, OnInit } from '@angular/core';
import { MarvelcontentsService } from '../characters/character/shared/marvelcontents.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  allSeries : any [] = []
  constructor(private seriesSvc : MarvelcontentsService) { }

  
  ngOnInit(): void {
    this.getSeries()
  }
  getSeries(){
    this.seriesSvc.getAllSeries().subscribe(series =>{
      this.allSeries = series
    })
  }
}
