import { Injectable } from "@angular/core";
import { Musique } from "../entity/Musique";

@Injectable({
    providedIn: 'root'
})
export class DragDropService {
    public musique: Musique;

}