import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Playlist } from "../entity/Playlist";

@Injectable({
    providedIn: 'root'
})
export class PlaylistDAO {

    private playlists: Playlist[] = [];

    public async init(): Promise<void> {
        let res = await this.http.get<Playlist[]>(environment.host + "playlist").toPromise();
        for (let pl of res) {
            this.playlists.push(pl);
        }
        return Promise.resolve(undefined);
    }

    public getPlaylists(): Playlist[] {
        return this.playlists;
    }

    public addPlaylist(playList: Playlist): void {
        this.playlists.push(playList);
    }

    constructor(private http: HttpClient) { }

    public async addNewPlaylist(playlist: Playlist): Promise<Playlist> {
        let pl = await this.http.put<Playlist>(environment.host + "playlist", playlist).toPromise();
        this.addPlaylist(pl);
        return pl;
    }

    public async savePlayList(playlist: Playlist): Promise<boolean> {
        return this.http.post<boolean>(environment.host + "playlist", playlist).toPromise();
    }

}