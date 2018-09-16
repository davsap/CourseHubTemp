import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';
import { FormationService } from '../../../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../../../model/formation';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {

constructor(private service: FormationService, private route: ActivatedRoute, private router: Router) { }
  formation: Observable<Formation>;
// formation: Formation;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
   this.service.getFormationV2(id).subscribe((value: Observable<Formation>) => this.formation = value);
    // this.service.getFormationV2(id).subscribe((value: Formation) => this.formation = value);
    }

    addSujet() {
      this.router.navigateByUrl('/formationadmin/' + this.route.snapshot.paramMap.get('id') + '/sujet');
      }
    addCours(sujetid: any) {
   //   console.log('sujet id is :' + id);
     this.router.navigateByUrl('/formationadmin/' + this.route.snapshot.paramMap.get('id') + '/sujet/' + sujetid + '/cours');
      }
    editCours(sujetid: any, coursid: any) {
   //   console.log('sujet id is :' + id);
     this.router.navigateByUrl('/formationadmin/' + this.route.snapshot.paramMap.get('id') + '/sujet/' + sujetid + '/cours/' + coursid);
      }
}
