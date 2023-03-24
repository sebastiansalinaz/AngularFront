import { Injectable } from '@angular/core';
import { competenciaModel } from '@models/competencia.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {

  competenciasModel: competenciaModel;

  constructor(
    private _coreService: CoreService
  ) { }

  public traerCompetencias() {
    return this._coreService.get<competenciaModel[]>('competencias');
  }
  public getCompetenciasById(id) {
    return this._coreService.get<competenciaModel>('competencias/' + id);
  }

  crearCompetencias(mPago: competenciaModel) {
    return this._coreService.post<competenciaModel>('competencias', mPago);
  }


  eliminarCompetencias(mPagoId: number) {
    return this._coreService.delete('competencias/' + mPagoId);
  }
  actualizarCompetencias(mPago: competenciaModel) {
    return this._coreService.put('competencias/' + mPago.id, mPago);
  }
}
