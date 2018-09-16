import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../model/formation';
import { FormationService } from '../../../services/formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formations: Formation[];
  constructor(private service: FormationService, private route: ActivatedRoute) { }

  ngOnInit() {
   const id = +this.route.snapshot.paramMap.get('id');
   this.service.getFormationsByUserID(id).subscribe((value: Formation[]) => this.formations = value);

  }
}
