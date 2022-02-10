import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from 'src/app/album-service.service';

@Component({
  selector: 'app-album-name',
  templateUrl: './album-name.component.html',
  styleUrls: ['./album-name.component.css']
})
export class AlbumNameComponent implements OnInit {

  albums: any;

  constructor(private albumService: AlbumServiceService) { }

  ngOnInit(): void {
    this.albums = this.albumService.getAlbumNames();
    return this.albums;
  }

}