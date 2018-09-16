import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurComponent } from './formateur/formateur.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormateurComponent, EtudiantComponent]
})
export class UsersModule { }
