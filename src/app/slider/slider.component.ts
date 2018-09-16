import { Component, OnInit } from '@angular/core';
import { FormationService } from './../services/formation.service';
import { Formation } from './../model/formation';
import { Observable } from '../../../node_modules/rxjs';

@Component({
 selector: 'app-slider',
 templateUrl: './slider.component.html',
 styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

 /* myInterval = 1500;*/
 myInterval: Number;
  activeSlideIndex = 0;

  slides = [
    {text : 'Les formations que vous cherchez', image: 'assets/1.jpg'},
    {text : 'Apprenez à votre rythme', image: 'assets/2.jpg'},
    {text : 'Partagez vos connaissances', image: 'assets/3.jpg'},
    {text : 'Concevez vos formations', image: 'assets/6.jpg'}
  ];

  formations: Formation[];

   constructor(private service: FormationService) {
 }
 /*  constructor() {
  } */

 ngOnInit() {
  this.myInterval = 2500;

  this.service.getLatest().subscribe(value => {
    this.formations = value;
    //  this.slides.push({text : this.formations[0].titre , image :  this.formations[0].image});

   /* this.formations.forEach(formation => {
       this.slides.push({text : formation.titre , image : formation.image});
       });*/
  });
//

}
}
