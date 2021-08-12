import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();
constructor(private slService : ShoppingListService)
{}
private recipes: Recipe[] =[];
  //  private recipes: Recipe[] =[
  //       new Recipe(
  //         1,
  //         "Green Salad",
  //         "Easy healthy recipe",
  //       "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1600x1066/gallery-1464124561-shot-1-033.jpg?resize=980:*",
  //       [new Ingredient('Meat',1),
  //       new Ingredient('French Fries',20)]),
  //       new Recipe(
  //         2,
  //         "Vegetarian Mapo Tofu",
  //         "Easy healthy recipe",
  //       "https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_384/Vegetarian-Mapo-Tofu.jpg",
  //       [new Ingredient('Meat',1),
  //       new Ingredient('Buns',2)]),
  //   ];

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipeChanged.next(this.recipes.slice());
}

      getRecipes(){
          return this.recipes.slice();//will return copy of original array
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index : number,
         newRecipe : Recipe){
           this.recipes[index] = newRecipe;
           this.recipeChanged.next(this.recipes.slice());
         }

         deleteRecipe(index: number){
           this.recipes.splice(index, 1);
           this.recipeChanged.next(this.recipes.slice());
         }
}