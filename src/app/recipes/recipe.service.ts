import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      // tslint:disable-next-line: max-line-length
      'https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200151/36578074-close-up-gourmet-tasty-crumbled-schnitzel-and-crispy-fries-with-lemon-tomato-and-lettuce-.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'http://mikiesbigburger.com/communities/1/000/002/138/441//images/13650542.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] ) {
   this.slService.addIngredients(ingredients);
  }
}
