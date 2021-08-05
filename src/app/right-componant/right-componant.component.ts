import { Component, DoCheck, OnInit } from '@angular/core';
import { PlaylistDAO } from '../dao/PlaylistDAO';
import { Musique } from '../entity/Musique';
import { Playlist } from '../entity/Playlist';
import { DragDropService } from '../services/dragdrop.service';

@Component({
  selector: 'app-right-componant',
  templateUrl: './right-componant.component.html',
  styleUrls: ['./right-componant.component.scss']
})
export class RightComponantComponent implements OnInit, DoCheck {

  playlists: Playlist[] = [];
  playlist: Playlist = new Playlist();
  display: boolean = false;

  constructor(private plDAO: PlaylistDAO, private ddService: DragDropService) { }

  ngOnInit(): void {
    this.playlists = this.plDAO.getPlaylists();
  }


  ngDoCheck(): void {
    if (this.playlists && this.playlists.length > 0 && this.playlist.id == null) {
      this.playlist = this.playlists[0];
    }
  }

  addPl(playlistName: string) {
    let pl = new Playlist();
    pl.name = playlistName;
    this.plDAO.addNewPlaylist(pl);
  }



  drop(event: any) {
    this.addMusiqueInPlayList(this.ddService.musique);
  }

  private addMusiqueInPlayList(zik: Musique): void {
    this.playlist.musiques.push(zik);
  }

  save() {
    this.plDAO.savePlayList(this.playlist);
  }

}
