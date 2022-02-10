import { Injectable } from '@angular/core';
import { ALBUM } from './album-names';

@Injectable({
  providedIn: 'root',
})
export class AlbumServiceService {
  constructor() {}

  getAlbumNames() {
    let albums = ALBUM;
    return albums;
  }
}
