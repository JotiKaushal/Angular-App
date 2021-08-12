import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../Auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";


@Component({
selector: "app-header",
templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit, OnDestroy{
constructor(private dataStorageService: DataStorageService,
    private authService : AuthService){}
private userSub : Subscription;
isAuthenticted = false;

    ngOnInit(){
        this.userSub =  this.authService.user.subscribe(user =>{
        this.isAuthenticted = !!user;
        });
    }

    ngOnDestroy(){
         this.userSub.unsubscribe();
    }

    onSaveData(){
     this.dataStorageService.storeRecipe();
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
    onlogout(){
        this.authService.logout();
    }
}