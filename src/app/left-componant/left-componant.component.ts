import { Component, OnInit } from '@angular/core';
import { FolderDAO } from '../dao/FolderDAO';
import { Folder } from '../entity/Folder';

@Component({
  selector: 'app-left-componant',
  templateUrl: './left-componant.component.html',
  styleUrls: ['./left-componant.component.scss']
})
export class LeftComponantComponent implements OnInit {

  folders: Folder[] = [];

  constructor(private folderDao: FolderDAO) { }

  ngOnInit(): void {
    this.folderDao.getAllFolders().then((folders: Folder[]) => {
      this.folders = folders;
    });
  }

}
