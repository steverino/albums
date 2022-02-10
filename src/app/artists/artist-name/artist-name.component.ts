import { Component, OnInit } from '@angular/core';
import { ArtistNamesService } from 'src/app/artist-names.service';

@Component({
  selector: 'app-artist-name',
  templateUrl: './artist-name.component.html',
  styleUrls: ['./artist-name.component.css'],
})
export class ArtistNameComponent implements OnInit {
 
  artists: any;
  
  constructor(private artistNameService: ArtistNamesService) {

  }
  
  ngOnInit(): void {
    this.artists = this.artistNameService.getArtistNames();  
    return this.artists;
    
  }


}