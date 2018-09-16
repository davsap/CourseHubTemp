import { Component, OnInit, Input } from '@angular/core';
import { SujetService } from '../../../../services/sujet.service';
import { Sujet } from '../../../../model/sujet';
import { CoursService } from '../../../../services/cours.service';
import { Formation } from '../../../../model/formation';
import { FormationService } from '../../../../services/formation.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.css']
})
export class SujetListComponent implements OnInit {
  formation: Formation;
   constructor(private service: FormationService, private route: ActivatedRoute) { }

   ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.service.getFormationV2(id).subscribe((value: Formation) => this.formation = value);
   }
  }


