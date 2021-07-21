import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FolderDAO } from '../dao/FolderDAO';
import { MusiqueDAO } from '../dao/MusiqueDAO';
import { Folder } from '../entity/Folder';
import { Musique } from '../entity/Musique';

@Component({
  selector: 'app-center-componant',
  templateUrl: './center-componant.component.html',
  styleUrls: ['./center-componant.component.scss']
})
export class CenterComponantComponent implements OnChanges, OnInit, OnDestroy {
  private handlerRoute: Subscription;
  folders: Folder[];
  musiques: Musique[];

  constructor(private route: ActivatedRoute, private folderDAO: FolderDAO, public musqiueDAO: MusiqueDAO) {
    this.handlerRoute = this.route.paramMap.subscribe(map => {
      console.log('here');
      let uuid: string = map.get('folderId');
      if (uuid == null) {
        return;
      }
      this.folderDAO.getInternFolder(uuid).then(folders => {
        this.folders = folders;
      });
      let folder = new Folder();
      folder.id = uuid;
      this.musqiueDAO.getAllMusiques(folder).then(ziks => {
        this.musiques = ziks;
      });
    });

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy(): void {
    if (this.handlerRoute) {
      this.handlerRoute.unsubscribe();
    }
  }

  ngOnInit(): void {

  }

}
