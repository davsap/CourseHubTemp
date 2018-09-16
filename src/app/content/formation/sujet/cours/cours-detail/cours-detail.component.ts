import { Component, OnInit } from '@angular/core';
import { Cours } from '../../../../../model/cours';
import { CoursService } from '../../../../../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {
  cours: Cours;
  coursId: number;

  constructor(private service: CoursService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const ids = +this.route.snapshot.paramMap.get('ids');
    const idc = +this.route.snapshot.paramMap.get('idc');
    this.service.getCoursV2(id, ids, idc).subscribe((value: Cours) => this.cours = value);
  }

}
