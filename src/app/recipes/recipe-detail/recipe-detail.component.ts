import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

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
     private router: Router) {
     
   }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
    //const id = this.route.snapshot.params['id'];
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
     this.router.navigate(['edit'],{relativeTo: this.route})
  }
}
