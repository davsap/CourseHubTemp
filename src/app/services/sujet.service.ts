import { Injectable } from '@angular/core';
import {Sujet} from './../model/sujet';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

const SUJETMOCK = [
  new Sujet(1, ' Commencez avec Angular'),
  new Sujet(2, 'Construisez une application Angular'),
  new Sujet(3, 'Enrichissez votre application'),
  new Sujet(4, ' Interagissez avec un utilisateur et un serveur')
 ];
  @Injectable({
    providedIn: 'root'
  })
export class SujetService {

  constructor(private http: HttpClient) { }

  getSujetsV2(id: number): Observable<Sujet[]> {
    return this.http.get<any>('http://localhost:8080/CourseHub/api/formations/' + id + '/sujets');
  }
  addSujet(sujet: Sujet, id: number) {
    this.http.post('http://localhost:8080/CourseHub/api/formations/' + id + '/sujets', sujet).subscribe(console.log);
  }

  getSujets(formationID: number): Sujet[] {
    return SUJETMOCK;
  }

}
