import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from  './store/auth.actions';
export interface AuthResponseData{
    kind: string;
    idToken : string;	
    email :	string;
    refreshToken :string;
    expiresIn :	string;
    localId :	string;
    registered? : boolean;
}


@Injectable({'providedIn': 'root'})
export class AuthService{

    constructor(private http: HttpClient, 
        private router: Router, 
        private store : Store<fromApp.AppState>){}

     //user = new BehaviorSubject<User>(null);
private tokenExpirationTimer: any;
    signup(email: string, password: string){
      return  this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseAPIKey,
       {
          email:email, 
          password: password, 
          returnSecureToken: true}
         )
         .pipe(catchError(this.handleError), tap(resData =>{
             this.handleAuthentication(resData.email, 
                resData.localId, resData.idToken, 
                +resData.expiresIn);
            })) 
    }

    login(email: string, password: string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseAPIKey,
   {
    email:email, 
    password: password, 
    returnSecureToken: true}).pipe(
        catchError(this.handleError), tap(resData =>{
            this.handleAuthentication(resData.email, 
               resData.localId, resData.idToken, 
               +resData.expiresIn);
           }))
    }

    private handleError(errorRes : HttpErrorResponse){
        let errorMessage = "An error occurred!";
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
       switch(errorRes.error.error.message){
          
               case 'EMAIL_EXISTS':
               errorMessage = 'This email exists already';
               case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password';
                case 'EMAIL_NOT_FOUND':
               errorMessage = 'This email does not exist';
       }
       return throwError(errorMessage);
    }

    logout(){
        //this.user.next(null);
        this.store.dispatch(new AuthActions.logout());

        localStorage.removeItem("userData");
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      //s  this.router.navigate(["/auth"]);
    }

    autoLogout(expirationDuration : number){
        this.tokenExpirationTimer =  setTimeout(() => {
       this.logout(); 
     }, expirationDuration);
    }

    
    setLogoutTimer(expirationDuration : number){
        this.tokenExpirationTimer =  setTimeout(() => {
       this.store.dispatch(new AuthActions.logout()); 
     }, expirationDuration);
    }

clearLogoutTimer(){
    if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }
}

    autoLogin(){
    var userData:{
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem("userData"));
    if(!userData){
        return;
    }
    else{
     const loadedUser = new User(userData.email, userData.id, userData._token, 
        new Date(userData._tokenExpirationDate));
        if(loadedUser.token){
              this.store.dispatch(new AuthActions.AuthenticateSuccess({
               email: loadedUser.email, 
               userId:loadedUser.id, 
               token: loadedUser.token,
               expirationDate: new Date(userData._tokenExpirationDate),
               redirect: false},
               ));
           
            // this.user.next(loadedUser);
            const expirationDuration = new Date(
                userData._tokenExpirationDate
            ).getTime()  - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
}

    private handleAuthentication(
        email:string, 
        userId: string, 
        token: string, 
        expiresIn: number
    )
    {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        //this.user.next(user);
        this.store.dispatch(new AuthActions.AuthenticateSuccess({
            email: email, 
            userId: userId, 
            token: token,
            expirationDate: expirationDate,
           redirect: true}
            ));
        this.autoLogout(expiresIn*1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}