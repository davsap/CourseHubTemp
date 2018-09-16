import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';
import { User } from 'src/app/model/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {
  formationForm = this.fb.group({
    titre: [null , [Validators.required, Validators.minLength(1)]],
    description: [null , [Validators.required, Validators.minLength(1)]],
    date: [null , [Validators.required]],
    imageFormation: [null , [Validators.required]]
  });
  formation: Formation;
  userMock: User;
  user: User;

  constructor(private fb: FormBuilder, private service: FormationService, private cookieService: CookieService) { }
  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.userMock = new User(this.user.id, null, null, null, null, null, null, null, null, null, null);
  }

  onSubmit() {
    console.log('Formulaire soumis : ' + this.formationForm.value);
    this.formation = new Formation(
    null,
    this.formationForm.get('titre').value,
    this.formationForm.get('description').value,
    this.formationForm.get('date').value,
    this.formationForm.get('imageFormation').value,
    this.userMock);
    this.service.addFormation(this.formation);
  }

get id() {
    return this.formationForm.get('id');
  }
get titre() {
  return this.formationForm.get('titre');
}
get description() {
  return this.formationForm.get('description');
}
get date() {
  return this.formationForm.get('date');
}
get imageFormation() {
  return this.formationForm.get('imageFormation');
}
}
