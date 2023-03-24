import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCompetenciasRoutingModule } from './gestion-competencias-routing.module';
import { AddCompetenciasComponent } from './modules/add-competencias/add-competencias.component';
import { ListCompetenciasComponent } from './modules/list-competencias/list-competencias.component';
import { CompetenciasComponent } from './page/competencias/competencias.component';


@NgModule({
  declarations: [
    AddCompetenciasComponent,
    ListCompetenciasComponent,
    CompetenciasComponent
  ],
  imports: [
    CommonModule,
    GestionCompetenciasRoutingModule
  ]
})
export class GestionCompetenciasModule { }
