import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SujetService } from '../../../../services/sujet.service';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from '../../../../model/sujet';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  sujetForm = this.fb.group({
    titre: ['']
  });
  constructor(private fb: FormBuilder, private service: SujetService, private route: ActivatedRoute) { }
sujet: Sujet;
  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.sujetForm.value);
    this.sujet = new Sujet(null, this.sujetForm.get('titre').value);
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.addSujet(this.sujet, id);
  }

}
