export class Musique {
    public id: string;
    public titre: string;
    public artiste: string;
    public genre: string;
    public album: string;
    public annee: string;
    public fullName: string;
    public type: string;

    constructor() {
        this.album = "";
        this.annee = "";
        this.artiste = "";
        this.fullName = "";
        this.genre = "";
        this.id = "";
        this.titre = "";
        this.type = "";
    }

}