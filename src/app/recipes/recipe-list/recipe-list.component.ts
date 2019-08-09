import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/03/main/2565401_oadvi0560.jpg?itok=tgPQGUFF'),
    new Recipe('Another Recipe Test', 'This is simply a test', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/03/main/2565401_oadvi0560.jpg?itok=tgPQGUFF')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecepeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
