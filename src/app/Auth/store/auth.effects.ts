import { HttpClient } from '@angular/common/http';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {environment} from '../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

export interface AuthResponseData{
    kind: string;
    idToken : string;	
    email :	string;
    refreshToken :string;
    expiresIn :	string;
    localId :	string;
    registered? : boolean;
}

const handleAthentication = (expiresIn:number, email: string, userId: string, token: string) =>{
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
   localStorage.setItem("userData", JSON.stringify(user));
    return new AuthActions.AuthenticateSuccess(
        {email: email, 
        userId:userId, 
        token: token, 
        expirationDate: expirationDate,
        redirect: true});
}
const handleError = (errorRes: any) =>{
    let errorMessage = "An error occurred!";
    if(!errorRes.error || !errorRes.error.error){
        return of(new AuthActions.AuthenticateFail(errorMessage));
    }
   switch(errorRes.error.error.message){
      
           case 'EMAIL_EXISTS':
           errorMessage = 'This email exists already';
           case 'INVALID_PASSWORD':
            errorMessage = 'Invalid password';
            case 'EMAIL_NOT_FOUND':
           errorMessage = 'This email does not exist';
   }
  return  of(new AuthActions.AuthenticateFail(errorMessage));
}

@Injectable()

export class AuthEffects {

    authSignup: any = createEffect((): any => {
         return this.actions$
        .pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap((signupAction : AuthActions.SignupStart)=>{

                return  this.http
                .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseAPIKey,
                 {
                    email:signupAction.payload.email, 
                    password: signupAction.payload.password, 
                    returnSecureToken: true}
                   ) .pipe(
                    tap(resData =>{
                        this.authService.setLogoutTimer(+resData.expiresIn*1000);
                    }),
                    map(
                   resData => {
                  return  handleAthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
               }),
               catchError(
                  errorRes=> {
                    return  handleError(errorRes);
                  })
                  );
            })
        )
    });

    authLogin: any = createEffect((): any => { return this.actions$
    .pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData : AuthActions.LoginStart) => 
    {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseAPIKey,
        {
         email:authData.payload.email, 
         password: authData.payload.password, 
         returnSecureToken: true})
         .pipe(
             tap(resData =>{
                 this.authService.setLogoutTimer(+resData.expiresIn*1000);
             }),
            map(
                resData => {
               return  handleAthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }),
            catchError(
               errorRes=> {
                 return  handleError(errorRes);
               })
            );
    }),
    );
});

authRedirect: any = createEffect((): any => { return this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
        if(authSuccessAction.payload.redirect){
        this.router.navigate(['/']);
        }
       })
    )
},   { dispatch: false });


authLogout: any = createEffect((): any => { return this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
        this.authService.clearLogoutTimer();
        localStorage.removeItem("userData");
        this.router.navigate(['/auth']);
       })
    )
},   { dispatch: false });


autoLogin: any = createEffect((): any=>{
    return this.actions$.pipe(
     ofType(AuthActions.AUTO_LOGIN),
     map(() =>{
        var userData:{
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem("userData"));
        if(!userData){
            return {type: 'DUMMY'}
        }
        else{
         const loadedUser = new User(userData.email, userData.id, userData._token, 
            new Date(userData._tokenExpirationDate));
            if(loadedUser.token){
                   const expirationDuration = new Date(
                    userData._tokenExpirationDate
                ).getTime()  - new Date().getTime();
                this.authService.setLogoutTimer(expirationDuration);
                  return new AuthActions.AuthenticateSuccess({
                   email: loadedUser.email, 
                   userId:loadedUser.id, 
                   token: loadedUser.token,
                   expirationDate: new Date(userData._tokenExpirationDate),
                   redirect: false}
                   );
               
                // this.user.next(loadedUser);
                // const expirationDuration = new Date(
                //     userData._tokenExpirationDate
                // ).getTime()  - new Date().getTime();
                // this.autoLogout(expirationDuration);
            }
            return {type: 'DUMMY'}
        }
     })

    )
})
constructor(private actions$: Actions, private http: HttpClient, private router: Router,
    private authService : AuthService){}
}