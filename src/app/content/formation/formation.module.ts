import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationCardComponent } from './formation-list/formation-card/formation-card.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { EvaluationModule } from '../../evaluation/evaluation.module';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { SujetListComponent } from './sujet/sujet-list/sujet-list.component';
import { CoursFormComponent } from './sujet/cours/coursform/coursform.component';
import { CoursDetailComponent } from './sujet/cours/cours-detail/cours-detail.component';
import { CoursListComponent } from './sujet/cours/cours-list/cours-list.component';
import { SujetFormComponent } from './sujet/sujet-form/sujet-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { QuillModule } from 'ngx-quill';
import { RouterModule } from '../../../../node_modules/@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';

@NgModule({
  imports: [
    CommonModule, EvaluationModule, AccordionModule.forRoot(), QuillModule, ReactiveFormsModule, FormsModule, RouterModule
  ],
  declarations: [FormationCardComponent, FormationListComponent, FormationDetailComponent, FormationFormComponent,
    SujetListComponent, CoursFormComponent, CoursListComponent, SujetFormComponent, DashboardComponent
    , CoursDetailComponent, FormationAdminComponent],
  exports : [FormationCardComponent, FormationListComponent, FormationDetailComponent, SujetListComponent, CoursFormComponent,
    CoursListComponent, SujetFormComponent, DashboardComponent
    , CoursDetailComponent, FormationAdminComponent]
})
export class FormationModule { }
