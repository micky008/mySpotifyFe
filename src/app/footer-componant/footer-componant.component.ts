import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MusiqueDAO } from '../dao/MusiqueDAO';
import { PlaylistDAO } from '../dao/PlaylistDAO';
import { Musique } from '../entity/Musique';
import { Playlist } from '../entity/Playlist';


@Component({
  selector: 'app-footer-componant',
  templateUrl: './footer-componant.component.html',
  styleUrls: ['./footer-componant.component.scss']
})
export class FooterComponantComponent implements OnChanges, OnInit {

  playlists: Playlist[] = [];
  playlist: Playlist;
  musiques: Musique[] = [];
  musique: Musique;
  @ViewChild('audioCtl') audio: HTMLAudioElement;


  constructor(private musiqueDAO: MusiqueDAO, private plDAO: PlaylistDAO) { }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.playlists = this.plDAO.getPlaylists();
  }

  /**
   * 
   * @param evt 
   * completeMethod	event.originalEvent: browser event
   * event.query: Value to search with
   */
  search(evt: any): void {

  }

  chargeMusique(idMusique: string) {
    let url: string = this.musiqueDAO.getStream(idMusique);
    //let audioPlayer: HTMLAudioElement = this.playerRef.nativeElement;
    this.audio.setAttribute('src', url);
    //audioPlayer.setAttribute('src', url);
  }

}
