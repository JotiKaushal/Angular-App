import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import { AuthService } from "../Auth/auth.service";


@Injectable()
export class DataStorageService{
constructor(private http: HttpClient, private recipesService: RecipeService,
    private authService: AuthService){}

storeRecipe(){
const recipe = this.recipesService.getRecipes();
 this.http.put("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json"
,recipe).subscribe(
response => {
    console.log(response)
}
);
}

fetchRecipes(){
   return this.http.get<Recipe[]>(
       "https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json")
    .pipe(map(recipes => {
       return recipes.map(recipe =>
        {return {...recipe, ingredients 
        : recipe.ingredients ? recipe.ingredients : []}
        })
    }),
    tap(
        recipes => {
            this.recipesService.setRecipes(recipes);
        }
    ));
}
}