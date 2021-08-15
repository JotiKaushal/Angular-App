import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component"; 
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit, OnDestroy{
    isLoginMode = true;
    isLoading = false;
    error : string = null;
@ViewChild(PlaceholderDirective, {static: false})  
alertHost : PlaceholderDirective;

private closeSub : Subscription;
private storeSub : Subscription;
constructor(private authService: AuthService, 
    private router: Router,
    private componentFactoyResolver: ComponentFactoryResolver,
    private store : Store<fromApp.AppState>){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    ngOnInit(){
       this.storeSub =  this.store.select('auth').subscribe(
            authState =>{
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if(this.error){
                this.showErrorAlert(this.error);
            }
            }
        )
    }

    onSubmit(form : NgForm){
        if(!form.valid){
            return;
        }

        const email = form.value.email;
        const password = form.value.password;
       //let authObs : Observable<AuthResponseData>

        this.isLoading = true;
     if(this.isLoginMode){
         //for redux 
         this.store.dispatch(new AuthActions.LoginStart({email: email, password:password}))
       //for service
         // authObs =this.authService.login(email, password);
     }
    else{
        this.store.dispatch(new AuthActions.SignupStart({email: email, password:password}))
     // authObs = this.authService.signup(email, password);
    }

   

    // authObs.subscribe(
    //     resData => {
    //     console.log(resData);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']);
    //    },
    // errorMessage=> {
    //  console.log(errorMessage);
    // this.error = errorMessage;
    // this.showErrorAlert(errorMessage);
    //  this.isLoading = false;
    //  }
    // );
    
    form.reset();
}

onHandeError(){
    this.store.dispatch(new AuthActions.ClearError());
}

private showErrorAlert(message : string){
   //const alertCmp = new AlertComponent();
  const alertCmpFactory = this.componentFactoyResolver
  .resolveComponentFactory(AlertComponent);
  const hostViewContainerRef = this.alertHost.viewcontainerRef;
  hostViewContainerRef.clear();

   const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
   componentRef.instance.message = message;
   this.closeSub = componentRef.instance.close.subscribe( () => {
       this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
   })
}

ngOnDestroy(){
if(this.closeSub){
    this.closeSub.unsubscribe();
}
if(this.storeSub){
    this.storeSub.unsubscribe();
}
}

}