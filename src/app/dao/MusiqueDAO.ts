import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Folder } from "../entity/Folder";
import { Musique } from "../entity/Musique";

@Injectable({
    providedIn: 'root'
})
export class MusiqueDAO {

    constructor(private http: HttpClient) { }

    public getAllMusiques(folder: Folder): Promise<Musique[]> {
        return this.http.get<Musique[]>(environment.host + "musique/" + folder.id).toPromise();
    }

    public getStream(idMusique: string): string {
        return environment.host + "musique/steam" + idMusique;
    }


}