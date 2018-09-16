import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cours } from '../../../../../model/cours';
import { CoursService } from '../../../../../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursform',
  templateUrl: './coursform.component.html',
  styleUrls: ['./coursform.component.css']
})
export class CoursFormComponent implements OnInit {
   coursForm = this.fb.group({
    titre: [null , [Validators.required, Validators.minLength(1)]],
    description: [null , [Validators.required, Validators.minLength(1)]],
      contenuCours: [null , [Validators.required]],
      coursvideo: [null , [Validators.required]]
    });
cours: Cours;

  constructor(private fb: FormBuilder, private service: CoursService, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  onSubmit() {
      // TODO: Use EventEmitter with form value
      console.log('Formulaire soumis : ' + this.coursForm.value);
      const idf = +this.route.snapshot.paramMap.get('id');
      const ids = +this.route.snapshot.paramMap.get('ids');
      this.cours = new Cours(null,
      this.coursForm.get('titre').value,
      this.coursForm.get('description').value,
      this.coursForm.get('contenuCours').value,
      this.coursForm.get('coursvideo').value);
      console.log('Formulaire soumis : ' + this.cours.contenu);
      this.service.addCoursV2(this.cours, idf, ids);
  }

}
