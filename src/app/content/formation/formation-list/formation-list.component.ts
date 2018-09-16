import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../../../model/formation';
import { FormationService } from '../../../services/formation.service';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
formations: Formation[];
  constructor(private service: FormationService) { }

  ngOnInit() {
   this.service.getFormationsV2().subscribe((value: Formation[]) => this.formations = value);
  }

}
