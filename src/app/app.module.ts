import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumNameComponent } from './albums/album-name/album-name.component';
import { ArtistNameComponent } from './artists/artist-name/artist-name.component';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ArtistsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AlbumNameComponent,
    ArtistNameComponent,
    SongsComponent,

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
