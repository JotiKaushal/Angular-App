import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.action'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  //For redux
  ingredients :Observable<{ingredients: Ingredient[]}>;

//For service
  //ingredients : Ingredient[];

   private subscription:Subscription;

  constructor(private slService: ShoppingListService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
//Redux implementation
   this.ingredients = this.store.select('shoppingList');

   //service implementation
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    // .subscribe(
    //  (ingredients: Ingredient[])=>{
    //   this.ingredients = ingredients
    //   }
    // );
  }
  ngOnDestroy() :void{
    //this.subscription.unsubscribe();

  }
  onEditItem(index: number){
this.store.dispatch(new ShoppingListActions.StartEdit(index))
    //  this.slService.startedEditing.next(index);
  }
}
