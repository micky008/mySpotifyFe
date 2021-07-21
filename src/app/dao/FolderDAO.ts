import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Folder } from "../entity/Folder";

@Injectable({
    providedIn: 'root'
})
export class FolderDAO {

    constructor(private http: HttpClient) { }

    public getAllFolders(): Promise<Folder[]> {
        return this.http.get<Folder[]>(environment.host + "folder").toPromise();
    }

    public getInternFolder(uuid: string): Promise<Folder[]> {
        return this.http.get<Folder[]>(environment.host + "folder/" + uuid).toPromise();
    }

}