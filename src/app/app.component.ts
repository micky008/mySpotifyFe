import { Component, OnInit } from '@angular/core';
import { FolderDAO } from './dao/FolderDAO';
import { PlaylistDAO } from './dao/PlaylistDAO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MonTitre';

  constructor(private pldao: PlaylistDAO) { }

  ngOnInit(): void {
    this.pldao.init();
  }


}
