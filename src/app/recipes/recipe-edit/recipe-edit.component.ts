import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer'
import { map } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as RecipeActions from '../store/recipe.actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit , OnDestroy{
id: number;
editMode = false;
recipeForm: FormGroup;
private storeSub : Subscription;

  constructor(private route : ActivatedRoute,
    private recipeService: RecipeService,
    private router :Router,
    private store : Store<fromApp.AppState>) {


   }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => 
    {
     this.id = + params["id"];
     this.editMode = params['id'] != null;
     this.initForm();
    })
  }

  ngOnDestroy(){
    if(this.storeSub){
    this.storeSub.unsubscribe();
    }
  }

  onSubmit(){
   if(this.editMode){
     this.store.dispatch(
       new RecipeActions.UpdateRecipe(
         {index: this.id, 
          newRecipe: this.recipeForm.value}))
     //this.recipeService.updateRecipe(this.id, this.recipeForm.value);
   }else{
    this.store.dispatch(
      new RecipeActions.AddRecipe(this.recipeForm.value))
    //this.recipeService.addRecipe(this.recipeForm.value);
   }
   this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,
          Validators.required),
        'amount': new FormControl(null,
          [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
     this.router.navigate(['../',{relativeTo: this.route}])
  }

  private initForm(){
    let recipeName = '';
    let imagePath = '';
    let recipeDescription = '';
    let recipeIngredients= new FormArray([]);
    if(this.editMode){

  //const recipe = this.recipeService.getRecipe(this.id);
 this.storeSub = this.store.select('recipes').pipe(map(recipeState =>{
    return recipeState.recipes.find((recipe, index) =>{
       return index === this.id;
    })
     })).subscribe(recipe => {
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
      for(let ingredient of recipe.ingredients){
        recipeIngredients.push(
        new FormGroup({
          'name':new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount,
            [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
        );
      }
    }
  })
}

this.recipeForm = new FormGroup({
  'name': new FormControl(recipeName, Validators.required),
  'imagePath': new FormControl(imagePath, Validators.required),
  'description': new FormControl(recipeDescription, Validators.required),
  'ingredients': recipeIngredients
});
  }
}
