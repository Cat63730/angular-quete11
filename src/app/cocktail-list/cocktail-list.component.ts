import { Component } from '@angular/core';
import { Cocktail } from '../models/model';
import { CocktailService } from '../cocktail.service';
 

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent{
  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktail().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile.result;
    })
  }
  }

