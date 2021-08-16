import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_FAIL ='[Auth] Authenticate Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const SIGNUP = '[Auth] Signup';
export const CLEAR_ERROR = '[Auth] Clear error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export class AuthenticateSuccess implements Action{
    readonly type = AUTHENTICATE_SUCCESS;

    constructor(
        public payload: {
            email: string; 
            userId: string; 
            token: string; 
            expirationDate: Date,
            redirect: boolean}){}
}

export class logout implements Action{
    readonly type = LOGOUT;
}

export class LoginStart implements Action{
    readonly type = LOGIN_START;
    constructor(public payload: {email: string, password: string}){};
}

export class AuthenticateFail implements Action{
    readonly type = AUTHENTICATE_FAIL;
    constructor(public payload : string){}
}

export class SignupStart implements Action{
    readonly type = SIGNUP_START;
    constructor(public payload: {email: string, password: string}){};
}

export class ClearError implements Action{
    readonly type = CLEAR_ERROR;
}

export class Autologin implements Action{
    readonly type = AUTO_LOGIN;
}
export type AuthActions = AuthenticateSuccess | logout | LoginStart | AuthenticateFail | SignupStart | ClearError | Autologin;