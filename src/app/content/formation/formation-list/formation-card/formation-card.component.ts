import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../../../../model/formation';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent implements OnInit {
@Input() formation: Formation;
  constructor() { }

  ngOnInit() {
  }

}
