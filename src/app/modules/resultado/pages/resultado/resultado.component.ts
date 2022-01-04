import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@core/models/pokemon';
import { PokeApiService } from '@shared/services/poke-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  pokemon$!:Observable<Pokemon>
  nombrePokemon!:string

  constructor(private _apiPokemon:PokeApiService) { }

  ngOnInit(): void {
    this._apiPokemon.getPokemonSelect().subscribe(nombre=>{
      this.nombrePokemon=nombre
      this.pokemon$=this._apiPokemon.getPokemon(this.nombrePokemon)
    })
  }

}
