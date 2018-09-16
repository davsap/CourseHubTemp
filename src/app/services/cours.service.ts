import { Injectable } from '@angular/core';
import { Cours} from './../model/cours';
import { Observable } from 'rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';

// id: number,  titre: String, description: String,  contenu: String, support: String
const COURSMOCK = [
  new Cours(1, ' Écoutez l\'utilisateur avec les Forms - méthode template',
            'En Angular, il y a deux grandes méthodes pour créer des formulaires',
          '-----', 'support du cours'),
    new Cours(2, ' Écoutez l\'utilisateur avec les Forms - méthode réactive',
            'Pour illustrer la méthode réactive, vous allez créer une nouvelle section',
          '-----', 'support du cours'),
    new Cours(3, 'Interagissez avec un serveur avec HttpClient',
            'Dans une application Angular, vous aurez très souvent besoin de faire des appels à un backend ou à un autre serveur',
          '-----', 'support du cours'),
    new Cours(4, ' Créez une application complète avec Angular et Firebase',
            'Pour cette section, vous allez créer une nouvelle application et' +
             'appliquer des connaissances que vous avez apprises tout au long du cours Angular',
          '-----', 'support du cours')
   ];

@Injectable({
  providedIn: 'root'
})

export class CoursService {
courses: Cours[];
  constructor(private http: HttpClient) { }
  getCoursListBysujet(sujetID): Cours[] {
    return  COURSMOCK;
  }

  addCours(cours: Cours): void {
    // TODO : Should be implemented
  }

  getCoursV2(idf: Number, ids: Number, idc:Number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/CourseHub/api/formations/${idf}/sujets/${ids}/courses/${idc}`);
  }

  addCoursV2(cours: Cours, idf: number, ids: number) {
    this.http.post('http://localhost:8080/CourseHub/api/formations/' + idf + '/sujets/' + ids + '/courses', cours).subscribe(console.log);
  }

  getCours(id: number): Cours {
    return null;
  }
}
