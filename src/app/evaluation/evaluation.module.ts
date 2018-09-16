import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,  NgbModule.forRoot()
  ],
  declarations: [EvaluationComponent],
  exports: [EvaluationComponent]
})
export class EvaluationModule {
  max = 10;
  rate = 7;
  isReadonly = true;
}
