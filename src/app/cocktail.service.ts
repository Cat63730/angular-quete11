import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

   public getCocktail(): Observable<any>{
    return this.http.get<any>("assets/cocktails.json");
  }
}
