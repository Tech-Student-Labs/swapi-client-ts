import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import Character from "../models/Character";
import { CharacterServiceAbstract } from '../tests/data/character-service-abstract';

import ApiResponse from "../shared/ApiResponse";

@Injectable({
  providedIn: 'root'
})

export class CharacterService implements CharacterServiceAbstract {

  apiUrl : string = "http://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  getCharacter(id : number = 1) : Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
  
  getCharacters(page: number = 1) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/?page=${page}`)
  }
}
