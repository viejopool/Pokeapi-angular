import { Component, OnInit } from '@angular/core';
import { Result } from '@core/models/pokemon';
import { PokeApiService } from '@shared/services/poke-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  pokemon$!:Observable<Result[]>
  loading:boolean;

  constructor(private _apiPokemon:PokeApiService) {
    this.loading=false
   }

  ngOnInit(): void {
    this.pokemon$=this._apiPokemon.getPokemons()
  }
  pokemonSelect(pokemon:string){
    this._apiPokemon.setPokemonSelect(pokemon);
    this.loading=true
  }

}
