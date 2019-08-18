import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Shnitzel",
      "This is simply a test",
      "https://pudgefactor.com/wp-content/uploads/2015/08/Featured-Chicken-Schnitzel-500x375.jpg",
      [new Ingredient(`Meat`, 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "This is simply a test",
      "https://www.fatburgercanada.com/wp-content/uploads/2015/07/fatburger_0001_DoubleFatCheese-541x633.png",
      [new Ingredient("Buns", 2), new Ingredient("meat", 1)]
    )
  ];

  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice(); //o slice serve para retornar uma cópia do Array
  }

  addToShoppingListService(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
