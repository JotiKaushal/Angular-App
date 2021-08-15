(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/WaZ":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AUTHENTICATE_SUCCESS, LOGOUT, LOGIN_START, AUTHENTICATE_FAIL, SIGNUP_START, SIGNUP, CLEAR_ERROR, AUTO_LOGIN, AuthenticateSuccess, logout, LoginStart, AuthenticateFail, SignupStart, ClearError, Autologin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_SUCCESS", function() { return AUTHENTICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_FAIL", function() { return AUTHENTICATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_START", function() { return SIGNUP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERROR", function() { return CLEAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_LOGIN", function() { return AUTO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateSuccess", function() { return AuthenticateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStart", function() { return LoginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateFail", function() { return AuthenticateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupStart", function() { return SignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearError", function() { return ClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autologin", function() { return Autologin; });
const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
const LOGOUT = '[Auth] Logout';
const LOGIN_START = '[Auth] Login Start';
const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
const SIGNUP_START = '[Auth] Signup Start';
const SIGNUP = '[Auth] Signup';
const CLEAR_ERROR = '[Auth] Clear error';
const AUTO_LOGIN = '[Auth] Auto Login';
class AuthenticateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_SUCCESS;
    }
}
class logout {
    constructor() {
        this.type = LOGOUT;
    }
}
class LoginStart {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_START;
    }
    ;
}
class AuthenticateFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_FAIL;
    }
}
class SignupStart {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP_START;
    }
    ;
}
class ClearError {
    constructor() {
        this.type = CLEAR_ERROR;
    }
}
class Autologin {
    constructor() {
        this.type = AUTO_LOGIN;
    }
}


/***/ }),

/***/ "/iaH":
/*!*************************************************************!*\
  !*** ./src/app/shared/placeholder/placeholder.directive.ts ***!
  \*************************************************************/
/*! exports provided: PlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function() { return PlaceholderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlaceholderDirective {
    constructor(viewcontainerRef) {
        this.viewcontainerRef = viewcontainerRef;
    }
}
PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(t) { return new (t || PlaceholderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
PlaceholderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlaceholderDirective, selectors: [["", "appPlaceholder", ""]] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Digisoft\source\repos\JotiKaushal\Angular-App\src\main.ts */"zUnb");


/***/ }),

/***/ "1nPk":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown-directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler() { return ctx.toggleOpen(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
    } } });


/***/ }),

/***/ "9rNa":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseAPIKey: 'AIzaSyCPr0kqMOWskpWn6lU1VoB8Hs5spAaBf-A'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GXvH":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ "g0Sx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes/recipe.service */ "ceC1");
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth/auth.service */ "npAJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







class DataStorageService {
    constructor(http, recipesService, authService, store) {
        this.http = http;
        this.recipesService = recipesService;
        this.authService = authService;
        this.store = store;
    }
    storeRecipe() {
        const recipe = this.recipesService.getRecipes();
        this.http.put("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json", recipe).subscribe(response => {
            console.log(response);
        });
    }
    fetchRecipes() {
        return this.http.get("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(recipes => {
            return recipes.map(recipe => {
                return Object.assign(Object.assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(recipes => {
            this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_1__["SetRecipes"](recipes));
            // this.recipesService.setRecipes(recipes);
        }));
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ "VYMa");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-directive */ "1nPk");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "zy28");
/* harmony import */ var _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder.directive */ "/iaH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.reducer */ "ZSCJ");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "qkvP");
/* harmony import */ var _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes/store/recipe.reducer */ "d5Cv");



const appReducer = {
    shoppingList: _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__["shoppingListReducer"],
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
    recipes: _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__["RecipeReducer"]
};


/***/ }),

/***/ "SDDU":
/*!********************************************!*\
  !*** ./src/app/Auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "UE0Z");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.model */ "dzTO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "npAJ");











const handleAthentication = (expiresIn, email, userId, token) => {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, userId, token, expirationDate);
    localStorage.setItem("userData", JSON.stringify(user));
    return new _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticateSuccess"]({ email: email,
        userId: userId,
        token: token,
        expirationDate: expirationDate,
        redirect: true });
};
const handleError = (errorRes) => {
    let errorMessage = "An error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticateFail"](errorMessage));
    }
    switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
        case 'INVALID_PASSWORD':
            errorMessage = 'Invalid password';
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist';
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticateFail"](errorMessage));
};
class AuthEffects {
    constructor(actions$, http, router, authService) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authSignup = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$
                .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((signupAction) => {
                return this.http
                    .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseAPIKey, {
                    email: signupAction.payload.email,
                    password: signupAction.payload.password,
                    returnSecureToken: true
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(resData => {
                    this.authService.setLogoutTimer(+resData.expiresIn * 1000);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resData => {
                    return handleAthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
                    return handleError(errorRes);
                }));
            }));
        });
        this.authLogin = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$
                .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGIN_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((authData) => {
                return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseAPIKey, {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(resData => {
                    this.authService.setLogoutTimer(+resData.expiresIn * 1000);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resData => {
                    return handleAthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
                    return handleError(errorRes);
                }));
            }));
        });
        this.authRedirect = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["AUTHENTICATE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((authSuccessAction) => {
                if (authSuccessAction.payload.redirect) {
                    this.router.navigate(['/']);
                }
            }));
        }, { dispatch: false });
        this.authLogout = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
                this.authService.clearLogoutTimer();
                localStorage.removeItem("userData");
                this.router.navigate(['/auth']);
            }));
        }, { dispatch: false });
        this.autoLogin = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["AUTO_LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
                var userData = JSON.parse(localStorage.getItem("userData"));
                if (!userData) {
                    return { type: 'DUMMY' };
                }
                else {
                    const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
                    if (loadedUser.token) {
                        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                        this.authService.setLogoutTimer(expirationDuration);
                        return new _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticateSuccess"]({
                            email: loadedUser.email,
                            userId: loadedUser.id,
                            token: loadedUser.token,
                            expirationDate: new Date(userData._tokenExpirationDate),
                            redirect: false
                        });
                        // this.user.next(loadedUser);
                        // const expirationDuration = new Date(
                        //     userData._tokenExpirationDate
                        // ).getTime()  - new Date().getTime();
                        // this.autoLogout(expirationDuration);
                    }
                    return { type: 'DUMMY' };
                }
            }));
        });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/store/auth.actions */ "/WaZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth/auth.service */ "npAJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__["Autologin"]());
        //this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "U7/q":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.effects.ts ***!
  \*************************************************/
/*! exports provided: RecipeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEffects", function() { return RecipeEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.actions */ "g0Sx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







class RecipeEffects {
    constructor(actions$, http, store) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.fetchRecipes = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(fetchActionData => {
                return this.http.get("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json")
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(recipes => {
                    return recipes.map(recipe => {
                        return Object.assign(Object.assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
                    });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(recipes => {
                    return new _recipe_actions__WEBPACK_IMPORTED_MODULE_2__["SetRecipes"](recipes);
                }));
            }));
        });
        this.storeRecipes = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["STORE_RECIPE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.select('recipes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([actionData, recipesState]) => {
                return this.http.put("https://ng-course-recipe-book-689f7-default-rtdb.firebaseio.com/recipes.json", recipesState.recipes);
            }));
        }, { dispatch: false });
    }
}
RecipeEffects.ɵfac = function RecipeEffects_Factory(t) { return new (t || RecipeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
RecipeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RecipeEffects, factory: RecipeEffects.ɵfac });


/***/ }),

/***/ "UE0Z":
/*!********************************************!*\
  !*** ./src/app/Auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AUTHENTICATE_SUCCESS, LOGOUT, LOGIN_START, AUTHENTICATE_FAIL, SIGNUP_START, SIGNUP, CLEAR_ERROR, AUTO_LOGIN, AuthenticateSuccess, logout, LoginStart, AuthenticateFail, SignupStart, ClearError, Autologin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_SUCCESS", function() { return AUTHENTICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_FAIL", function() { return AUTHENTICATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_START", function() { return SIGNUP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERROR", function() { return CLEAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_LOGIN", function() { return AUTO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateSuccess", function() { return AuthenticateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStart", function() { return LoginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateFail", function() { return AuthenticateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupStart", function() { return SignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearError", function() { return ClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autologin", function() { return Autologin; });
const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
const LOGOUT = '[Auth] Logout';
const LOGIN_START = '[Auth] Login Start';
const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
const SIGNUP_START = '[Auth] Signup Start';
const SIGNUP = '[Auth] Signup';
const CLEAR_ERROR = '[Auth] Clear error';
const AUTO_LOGIN = '[Auth] Auto Login';
class AuthenticateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_SUCCESS;
    }
}
class logout {
    constructor() {
        this.type = LOGOUT;
    }
}
class LoginStart {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_START;
    }
    ;
}
class AuthenticateFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_FAIL;
    }
}
class SignupStart {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP_START;
    }
    ;
}
class ClearError {
    constructor() {
        this.type = CLEAR_ERROR;
    }
}
class Autologin {
    constructor() {
        this.type = AUTO_LOGIN;
    }
}


/***/ }),

/***/ "VYMa":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [1, "alert-box-actions"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".backdrop[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top:0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0,0,0,0.75);\r\n    z-index:50;\r\n}\r\n\r\n.alert-box[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 20vw;\r\n    width: 60vw;\r\n    padding:  16px;\r\n    z-index: 100;\r\n    background: white;\r\n    box-shadow: 0 2px 8px rbga(0,0,0,0.26) ;\r\n}\r\n\r\n.alert-box-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIHotaW5kZXg6NTA7XHJcbn1cclxuXHJcbi5hbGVydC1ib3h7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwdmg7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBwYWRkaW5nOiAgMTZweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJiZ2EoMCwwLDAsMC4yNikgO1xyXG59XHJcblxyXG5cclxuLmFsZXJ0LWJveC1hY3Rpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _app_routing_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.modules */ "aT7r");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.module */ "jbVo");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _Auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth/store/auth.effects */ "SDDU");
/* harmony import */ var _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipes/store/recipe.effects */ "U7/q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_modules__WEBPACK_IMPORTED_MODULE_3__["AppRouteModule"],
            _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_Auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_10__["AuthEffects"], _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_11__["RecipeEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_modules__WEBPACK_IMPORTED_MODULE_3__["AppRouteModule"],
        _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"]] }); })();


/***/ }),

/***/ "ZSCJ":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducer.ts ***!
  \**************************************************************/
/*! exports provided: shoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingListReducer", function() { return shoppingListReducer; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ "9rNa");
/* harmony import */ var _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.action */ "eRt6");


const initialState = {
    ingredients: [
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apple', 5),
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomotos', 5)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state = initialState, action) {
    switch (action.type) {
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            return Object.assign(Object.assign({}, state), { ingredients: [...state.ingredients, action.payload] });
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            return Object.assign(Object.assign({}, state), { ingredients: [...state.ingredients, ...action.payload] });
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            //ALWAYS COPY IMMUTABLE DATA
            //connot overrite old state data
            const ingredient = state.ingredients[state.editedIngredientIndex];
            //copy it then overwrite old data
            const updatedIngredient = Object.assign(Object.assign({}, ingredient), action.payload);
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] =
                updatedIngredient;
            return Object.assign(Object.assign({}, state), { ingredients: updatedIngredients, editedIngredientIndex: -1, editedIngredient: null });
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            return Object.assign(Object.assign({}, state), { ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex != state.editedIngredientIndex;
                }), editedIngredientIndex: -1, editedIngredient: null });
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedIngredientIndex: action.payload, editedIngredient: Object.assign({}, state.ingredients[action.payload]) });
        case _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedIngredientIndex: -1, editedIngredient: null });
        default:
            return state;
    }
}


/***/ }),

/***/ "aT7r":
/*!****************************************!*\
  !*** ./src/app/app-routing.modules.ts ***!
  \****************************************/
/*! exports provided: AppRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteModule", function() { return AppRouteModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const appRoutes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "recipes", loadChildren: () => Promise.all(/*! import() | recipes-recipes-module */[__webpack_require__.e("default~Auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("recipes-recipes-module")]).then(__webpack_require__.bind(null, /*! ./recipes/recipes.module */ "7Lvj")).then(m => m.RecipeModule) },
    { path: "shopping-list", loadChildren: () => Promise.all(/*! import() | shopping-list-shopping-list-module */[__webpack_require__.e("default~Auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("shopping-list-shopping-list-module")]).then(__webpack_require__.bind(null, /*! ./shopping-list/shopping-list.module */ "CXQP")).then(m => m.ShoppingListModule) },
    { path: "auth", loadChildren: () => Promise.all(/*! import() | Auth-auth-module */[__webpack_require__.e("default~Auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("Auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./Auth/auth.module */ "tgEQ")).then(m => m.AuthModule) }
];
class AppRouteModule {
}
AppRouteModule.ɵfac = function AppRouteModule_Factory(t) { return new (t || AppRouteModule)(); };
AppRouteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRouteModule });
AppRouteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"], initialNavigation: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRouteModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ceC1":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.action */ "eRt6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "ozzT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class RecipeService {
    constructor(slService, store) {
        this.slService = slService;
        this.store = store;
        this.recipeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.recipes = [];
    }
    //  private recipes: Recipe[] =[
    //       new Recipe(
    //         1,
    //         "Green Salad",
    //         "Easy healthy recipe",
    //       "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1600x1066/gallery-1464124561-shot-1-033.jpg?resize=980:*",
    //       [new Ingredient('Meat',1),
    //       new Ingredient('French Fries',20)]),
    //       new Recipe(
    //         2,
    //         "Vegetarian Mapo Tofu",
    //         "Easy healthy recipe",
    //       "https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_384/Vegetarian-Mapo-Tofu.jpg",
    //       [new Ingredient('Meat',1),
    //       new Ingredient('Buns',2)]),
    //   ];
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice(); //will return copy of original array
    }
    addIngredientToShoppingList(ingredients) {
        //redux
        this.store.dispatch(new _shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["AddIngredients"](ingredients));
        //For service
        //this.slService.addIngredients(ingredients);
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac });


/***/ }),

/***/ "ckZ1":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "d5Cv":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.reducer.ts ***!
  \*************************************************/
/*! exports provided: RecipeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeReducer", function() { return RecipeReducer; });
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.actions */ "g0Sx");

const initialState = {
    recipes: []
};
function RecipeReducer(state = initialState, action) {
    switch (action.type) {
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["SET_RECIPES"]:
            return Object.assign(Object.assign({}, state), { recipes: [...action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_RECIPE"]:
            return Object.assign(Object.assign({}, state), { recipes: [...state.recipes, action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_RECIPE"]:
            const updatedRecipe = Object.assign(Object.assign({}, state.recipes[action.payload.index]), action.payload.newRecipe);
            const updatedRecipes = [...state.recipes];
            updatedRecipes[action.payload.index] = updatedRecipe;
            return Object.assign(Object.assign({}, state), { recipes: updatedRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_RECIPE"]:
            return Object.assign(Object.assign({}, state), { recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "dzTO":
/*!************************************!*\
  !*** ./src/app/Auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "eRt6":
/*!*************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.action.ts ***!
  \*************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
const START_EDIT = '[Shopping List] Start Edit';
const STOP_EDIT = '[Shopping List] Stop Edit';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
}
class AddIngredients {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
}
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
}
class DeleteIngredient {
    constructor() {
        this.type = DELETE_INGREDIENT;
    }
}
class StartEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
}
class StopEdit {
    constructor() {
        this.type = STOP_EDIT;
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth/store/auth.actions */ "UE0Z");
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ "g0Sx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "GXvH");
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth/auth.service */ "npAJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/dropdown-directive */ "1nPk");










function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Authenticate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onlogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSaveData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Save Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onFetchData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fetch Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(dataStorageService, authService, store) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.store = store;
        this.isAuthenticted = false;
    }
    ngOnInit() {
        this.userSub = this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(authState => authState.user))
            .subscribe(user => {
            this.isAuthenticted = !!user;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    onSaveData() {
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["StoreRecipe"]());
        // this.dataStorageService.storeRecipe();
    }
    onFetchData() {
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["FetchRecipes"]());
        // this.dataStorageService.fetchRecipes().subscribe();
    }
    onlogout() {
        this.store.dispatch(new _Auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"]());
        // this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 4, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "/shopping-list"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngIf"], ["class", "dropdown", "appDropdown", "", 4, "ngIf"], ["routerLink", "/recipes"], ["routerLink", "/auth"], [2, "cursor", "pointer", 3, "click"], ["appDropdown", "", 1, "dropdown"], ["role", "button", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "caret"], [1, "dropdown-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Recipe Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 11, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isAuthenticted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__["DropdownDirective"]], encapsulation: 2 });


/***/ }),

/***/ "g0Sx":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_RECIPES, FETCH_RECIPES, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE, STORE_RECIPE, SetRecipes, FetchRecipes, AddRecipe, UpdateRecipe, DeleteRecipe, StoreRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECIPES", function() { return SET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES", function() { return FETCH_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECIPE", function() { return UPDATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECIPE", function() { return DELETE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_RECIPE", function() { return STORE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipes", function() { return SetRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipes", function() { return FetchRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipe", function() { return AddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecipe", function() { return UpdateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecipe", function() { return DeleteRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRecipe", function() { return StoreRecipe; });
const SET_RECIPES = '[Recipes] Set Recipe';
const FETCH_RECIPES = '[Recipes] Fetch Recipes';
const ADD_RECIPE = '[Recipe] Add Recipe';
const UPDATE_RECIPE = '[Recipe] Update Recipe';
const DELETE_RECIPE = '[Recipe] Delete Recipe';
const STORE_RECIPE = '[Recipe] Store Recipe';
class SetRecipes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
}
class FetchRecipes {
    constructor() {
        this.type = FETCH_RECIPES;
    }
}
class AddRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
}
class UpdateRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
}
class DeleteRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
}
class StoreRecipe {
    constructor() {
        this.type = STORE_RECIPE;
    }
}


/***/ }),

/***/ "jbVo":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth/auth-interceptor.service */ "ysaz");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/recipe.service */ "ceC1");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/data-storage.service */ "GXvH");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "ozzT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"],
        _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _Auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptorService"],
            multi: true }
    ] });


/***/ }),

/***/ "npAJ":
/*!**************************************!*\
  !*** ./src/app/Auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "dzTO");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/auth.actions */ "UE0Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









class AuthService {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
    }
    signup(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    handleError(errorRes) {
        let errorMessage = "An error occurred!";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password';
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    logout() {
        //this.user.next(null);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logout"]());
        localStorage.removeItem("userData");
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        //s  this.router.navigate(["/auth"]);
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    setLogoutTimer(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logout"]());
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
    autoLogin() {
        var userData = JSON.parse(localStorage.getItem("userData"));
        if (!userData) {
            return;
        }
        else {
            const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
            if (loadedUser.token) {
                this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthenticateSuccess"]({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate),
                    redirect: false
                }));
                // this.user.next(loadedUser);
                const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                this.autoLogout(expirationDuration);
            }
        }
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](email, userId, token, expirationDate);
        //this.user.next(user);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthenticateSuccess"]({
            email: email,
            userId: userId,
            token: token,
            expirationDate: expirationDate,
            redirect: true
        }));
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ozzT":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingredient.model */ "9rNa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apple', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomotos', 5)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}


/***/ }),

/***/ "qkvP":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.model */ "ckZ1");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "/WaZ");


const initialState = {
    user: null,
    authError: null,
    loading: false
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATE_SUCCESS"]:
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return Object.assign(Object.assign({}, state), { authError: null, user: user });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
            return Object.assign(Object.assign({}, state), { authError: null, user: null, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_START"]:
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_START"]:
            return Object.assign(Object.assign({}, state), { authError: null, loading: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATE_FAIL"]:
            return Object.assign(Object.assign({}, state), { user: null, authError: action.payload, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERROR"]:
            return Object.assign(Object.assign({}, state), { authError: null });
        default:
            return state;
    }
}


/***/ }),

/***/ "ysaz":
/*!**************************************************!*\
  !*** ./src/app/Auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "npAJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class AuthInterceptorService {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(authState => {
            return authState.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedRequest = req.clone({ params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('auth', user.token) });
            return next.handle(modifiedRequest);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zy28":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n  border-radius: 50%;\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n  color:blue;\r\n  font-size: 11px;\r\n  text-indent: -99999em;\r\n  margin: 55px auto;\r\n  position: relative;\r\n  width: 10em;\r\n  height: 10em;\r\n  box-shadow: inset 0 0 0 1em;\r\n  transform: translateZ(0);\r\n}\r\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  content: '';\r\n}\r\n.loader[_ngcontent-%COMP%]:before {\r\n  width: 5.2em;\r\n  height: 10.2em;\r\n  background: #0dc5c1;\r\n  border-radius: 10.2em 0 0 10.2em;\r\n  top: -0.1em;\r\n  left: -0.1em;\r\n  transform-origin: 5.1em 5.1em;\r\n  animation: load2 2s infinite ease 1.5s;\r\n}\r\n.loader[_ngcontent-%COMP%]:after {\r\n  width: 5.2em;\r\n  height: 10.2em;\r\n  background: #0dc5c1;\r\n  border-radius: 0 10.2em 10.2em 0;\r\n  top: -0.1em;\r\n  left: 4.9em;\r\n  transform-origin: 0.1em 5.1em;\r\n  animation: load2 2s infinite ease;\r\n}\r\n@keyframes load2 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFHM0Isd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBRVosNkJBQTZCO0VBRTdCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxXQUFXO0VBRVgsNkJBQTZCO0VBRTdCLGlDQUFpQztBQUNuQztBQVdBO0VBQ0U7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6ImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcixcclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubG9hZGVyIHtcclxuICBjb2xvcjpibHVlO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB0ZXh0LWluZGVudDogLTk5OTk5ZW07XHJcbiAgbWFyZ2luOiA1NXB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMGVtO1xyXG4gIGhlaWdodDogMTBlbTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxZW07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDUuMmVtO1xyXG4gIGhlaWdodDogMTAuMmVtO1xyXG4gIGJhY2tncm91bmQ6ICMwZGM1YzE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAuMmVtIDAgMCAxMC4yZW07XHJcbiAgdG9wOiAtMC4xZW07XHJcbiAgbGVmdDogLTAuMWVtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNS4xZW0gNS4xZW07XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNS4xZW0gNS4xZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQyIDJzIGluZmluaXRlIGVhc2UgMS41cztcclxuICBhbmltYXRpb246IGxvYWQyIDJzIGluZmluaXRlIGVhc2UgMS41cztcclxufVxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICB3aWR0aDogNS4yZW07XHJcbiAgaGVpZ2h0OiAxMC4yZW07XHJcbiAgYmFja2dyb3VuZDogIzBkYzVjMTtcclxuICBib3JkZXItcmFkaXVzOiAwIDEwLjJlbSAxMC4yZW0gMDtcclxuICB0b3A6IC0wLjFlbTtcclxuICBsZWZ0OiA0LjllbTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAuMWVtIDUuMWVtO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAuMWVtIDUuMWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMiAycyBpbmZpbml0ZSBlYXNlO1xyXG4gIGFuaW1hdGlvbjogbG9hZDIgMnMgaW5maW5pdGUgZWFzZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWQyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map