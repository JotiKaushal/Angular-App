import { state } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListAction from '../store/shopping-list.action';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
@ViewChild('f') slForm : NgForm;
  subscription: Subscription;
editMode= false;
// editedItemIdex: number;
editedItem: Ingredient;
constructor(private slService: ShoppingListService,
  private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
    //For redux NGRX
 this.subscription = this.store.select('shoppingList').subscribe(stateData =>{
  if(stateData.editedIngredientIndex > -1){
this.editMode = true;
this.editedItem = stateData.editedIngredient;
//this.editedItemIdex = stateData.editedIngredientIndex;
this.slForm.setValue({
  name: this.editedItem.name,
  amount: this.editedItem.amount
});
  }else{
    this.editMode = false;
  }
});

//Fr service
    // this.subscription = this.slService.startedEditing
    // .subscribe(
    //   (index: number) =>{
    //    this.editMode = true; 
    //    this.editedItemIdex = index;
    //    this.editedItem = this.slService.getIngredient(index)
    //   this.slForm.setValue({
    //     name: this.editedItem.name,
    //     amount: this.editedItem.amount
    //   });
    //   }
    // );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListAction.StopEdit());
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient =
     new Ingredient(value.name, value.amount);
     if(this.editMode){
     //for redux
      this.store.dispatch(new ShoppingListAction.UpdateIngredient(newIngredient));
       //for service
      // this.slService.updateIngredient(this.editedItemIdex, newIngredient);
     }
     else{
       //Redux implementation
      this.store.dispatch(new 
        ShoppingListAction
        .AddIngredient(newIngredient));

      //For service
      //this.slService.addIngredient(newIngredient);
     }
     this.editMode = false;
     form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
    //for redux
    this.store.dispatch(new ShoppingListAction.StopEdit());
  }

  onDelete(){
    //For redux
    this.store.dispatch(new ShoppingListAction.DeleteIngredient());
    //For service
    //this.slService.deleteIngredient(this.editedItemIdex);
    this.onClear();
  }
}
