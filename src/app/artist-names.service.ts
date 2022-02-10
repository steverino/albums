import { Injectable } from '@angular/core';
import { ARTIST } from './artist-names';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistNamesService {

  constructor() { }

  getArtistNames(){
    let artists = ARTIST;
    return artists;
  }
}
