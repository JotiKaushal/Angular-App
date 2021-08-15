import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../Auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";
import * as fromApp from '../store/app.reducer';
import * as AuthActions  from '../Auth/store/auth.actions';
import * as RecipesAction from '../recipes/store/recipe.actions';
@Component({
selector: "app-header",
templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit, OnDestroy{
constructor(private dataStorageService: DataStorageService,
    private authService : AuthService,
    private store: Store<fromApp.AppState>){}
private userSub : Subscription;
isAuthenticted = false;

    ngOnInit(){
        this.userSub =  this.store.select('auth')
        .pipe(map(authState => authState.user))
        .subscribe(user =>{
        this.isAuthenticted = !!user;
        });
    }

    ngOnDestroy(){
         this.userSub.unsubscribe();
    }

    onSaveData(){
        this.store.dispatch(new RecipesAction.StoreRecipe());
    // this.dataStorageService.storeRecipe();
    }
    onFetchData(){
       this.store.dispatch(new RecipesAction.FetchRecipes());
        // this.dataStorageService.fetchRecipes().subscribe();
    }
    onlogout(){
        this.store.dispatch(new AuthActions.logout());
       // this.authService.logout();
    }
}