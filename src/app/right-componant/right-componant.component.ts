import { Component, OnInit } from '@angular/core';
import { PlaylistDAO } from '../dao/PlaylistDAO';
import { Musique } from '../entity/Musique';
import { Playlist } from '../entity/Playlist';

@Component({
  selector: 'app-right-componant',
  templateUrl: './right-componant.component.html',
  styleUrls: ['./right-componant.component.scss']
})
export class RightComponantComponent implements OnInit {

  playlists: Playlist[] = [];
  playlist: Playlist;
  musiques: Musique[] = [];
  display: boolean = false;

  constructor(private plDAO: PlaylistDAO) { }

  ngOnInit(): void {
    this.playlists = this.plDAO.getPlaylists();
  }

  addPl(playlistName: string) {
    let pl = new Playlist();
    pl.name = playlistName;
    this.plDAO.addNewPlaylist(pl);

  }

}
