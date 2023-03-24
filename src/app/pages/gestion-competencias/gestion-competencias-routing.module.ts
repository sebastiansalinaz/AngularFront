import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenciasComponent } from './page/competencias/competencias.component';

const routes: Routes = [
  {
    path: '',
    component: CompetenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCompetenciasRoutingModule { }
