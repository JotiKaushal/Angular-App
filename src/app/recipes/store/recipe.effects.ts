import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipe.model";
import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects{

    fetchRecipes: any = createEffect((): any => { return this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),
        switchMap(fetchActionData => {
            return this.http.get<Recipe[]>(
                "https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json")
                .pipe(map(recipes => {
                    return recipes.map(recipe =>
                     {return {...recipe, ingredients 
                     : recipe.ingredients ? recipe.ingredients : []}
                     })
                 }),
                 map(recipes => {
                     return new RecipesActions.SetRecipes(recipes);
                 }
                 ));
        })
        )
    });

    storeRecipes: any = createEffect((): any => { 
        return this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPE),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
            return this.http.put("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json"
            ,recipesState.recipes)
        })
        )
    }, { dispatch: false });

    constructor(private actions$:Actions,
         private http : HttpClient,
         private store: Store<fromApp.AppState>){}
}