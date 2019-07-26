import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public descrption: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.descrption = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
