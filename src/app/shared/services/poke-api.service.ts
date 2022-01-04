import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPokemon, Result,Pokemon } from '@core/models/pokemon';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  url:string;
  pokemonSelect:BehaviorSubject<string>

  constructor(private http:HttpClient) {
    this.url=environment.url
    this.pokemonSelect=new BehaviorSubject('')
   }
   getPokemons():Observable<Result[]>{
     return this.http.get<ListPokemon>(this.url).pipe(map(lista=>lista.results))
   }
   setPokemonSelect(pokemon:string){
     this.pokemonSelect.next(pokemon)
   }
   getPokemonSelect():Observable<string>{
   return this.pokemonSelect.asObservable()
  }
   getPokemon(nombre:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}\\${nombre}`)
   }

}
