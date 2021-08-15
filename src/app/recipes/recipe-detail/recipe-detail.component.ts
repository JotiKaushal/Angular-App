import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.action';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private route: ActivatedRoute,
     private recipeService : RecipeService,
     private router: Router,
     private store: Store<fromApp.AppState>) {
     
   }

  ngOnInit(): void {
  //   this.route.params
  //   .subscribe((param:Params) => {
  //     this.id = +param['id'];
  //    // this.recipe = this.recipeService.getRecipe(this.id);
  //  this.store.select('recipes').pipe(map(recipeState => 
  //   {return recipeState.recipes.find((recipe, index) =>{
  //    return index === this.id;
  //   })
  //    })
  //   ).subscribe(recipe => { 
  //  this.recipe = recipe;
  //   });
  //   })

  this.route.params.pipe(map(params => {
    return +params['id']
  }), switchMap(id => {
    this.id = id;
    return this.store.select('recipes');
  }),
  map(recipeState =>{
    return recipeState.recipes.find((recipe, index) =>{
      return index === this.id
    })
  })).subscribe(recipe=>{
    this.recipe = recipe;
  })
  }
  
  onAddToShoppingList(){
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    //his.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
     this.router.navigate(['edit'],{relativeTo: this.route})
  }
  onDeleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    //this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"])
  }
}