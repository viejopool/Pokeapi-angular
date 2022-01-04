import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { NbLayoutModule,NbListModule,NbCardModule,NbUserModule } from '@nebular/theme';
import { ResultadoModule } from '@modules/resultado/resultado.module';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    NbLayoutModule,
    ResultadoModule,
    NbListModule,
    NbCardModule,
    NbUserModule
  ]
})
export class ListadoModule { }
