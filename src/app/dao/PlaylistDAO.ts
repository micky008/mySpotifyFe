import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Playlist } from "../entity/Playlist";

@Injectable({
    providedIn: 'root'
})
export class PlaylistDAO {

    private playlists: Playlist[] = [];

    public getPlaylists(): Playlist[] {
        return this.playlists;
    }

    public addPlaylist(playList: Playlist): void {
        this.playlists.push(playList);
    }

    constructor(private http: HttpClient) { }

    public async save(): Promise<boolean> {
        return Promise.resolve(true);
    }

    public async addNewPlaylist(playlist: Playlist): Promise<Playlist> {
        let pl = await this.http.put<Playlist>(environment.host + "playlist", playlist).toPromise();
        this.addPlaylist(pl);
        return pl;
    }

}