import { Component, OnInit, Input } from '@angular/core';
import { Cours } from '../../../../../model/cours';
import { CoursService } from '../../../../../services/cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {
courses: Cours[];
@Input() sujetID: Number;
  constructor(private service: CoursService) {
    this.courses = service.getCoursListBysujet(this.sujetID);
  }

  ngOnInit() {
    /* console.log('courses ' + this.courses.length);
    this.courses.forEach(course => {  console.log(course.titre + '\n'); });
   console.log('courses ' + this.courses.length); */
  }

}
