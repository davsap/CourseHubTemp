export class User {
        id: number;
        nom: String;
        prenom: String;
        email: String;
        pseudo: String;
        situation: String;
        password: String;
        ville: String;
        zip: number;
        pays: String;
        token: string;

        public constructor(id: number, nom: String, prenom: String, email: String, pseudo: String, situation: String,
            password: String, ville: String, zip: number, pays: String, token: string) {
            this.id = id;
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.pseudo = pseudo;
            this.situation = situation;
            this.password = password;
            this.ville = ville;
            this.zip = zip;
            this.pays = pays;
            this.token = token;
        }

}
