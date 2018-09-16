export class Cours {
    id: number;
    titre: string;
    description: string;
    contenu: string;
    video: string;

    constructor(id: number,  titre: string, description: string,  contenu: string, video: string) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.contenu = contenu;
        this.video = video;
    }

}
