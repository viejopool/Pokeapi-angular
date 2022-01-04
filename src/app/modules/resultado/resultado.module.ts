import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    NbCardModule
  ],exports:[ResultadoComponent]
})
export class ResultadoModule { }
