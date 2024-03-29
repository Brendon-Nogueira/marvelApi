import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';

import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './characters/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    StoriesComponent,
    NavbarComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
