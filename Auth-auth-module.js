(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-auth-module"],{

/***/ "DPou":
/*!****************************************!*\
  !*** ./src/app/Auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/placeholder/placeholder.directive */ "/iaH");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/auth.actions */ "UE0Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "npAJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ "zy28");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function AuthComponent_ng_template_0_Template(rf, ctx) { }
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_form_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "Login" : "Sign Up", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Switch To ", ctx_r2.isLoginMode ? "Sign Up" : "Login", "");
} }
class AuthComponent {
    constructor(authService, router, componentFactoyResolver, store) {
        this.authService = authService;
        this.router = router;
        this.componentFactoyResolver = componentFactoyResolver;
        this.store = store;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    ngOnInit() {
        this.storeSub = this.store.select('auth').subscribe(authState => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        //let authObs : Observable<AuthResponseData>
        this.isLoading = true;
        if (this.isLoginMode) {
            //for redux 
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LoginStart"]({ email: email, password: password }));
            //for service
            // authObs =this.authService.login(email, password);
        }
        else {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignupStart"]({ email: email, password: password }));
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
    onHandeError() {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["ClearError"]());
    }
    showErrorAlert(message) {
        //const alertCmp = new AlertComponent();
        const alertCmpFactory = this.componentFactoyResolver
            .resolveComponentFactory(_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]);
        const hostViewContainerRef = this.alertHost.viewcontainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__["PlaceholderDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.alertHost = _t.first);
    } }, decls: 5, vars: 2, consts: [["appPlaceholder", ""], [1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["style", "text-align:center;", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AuthComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AuthComponent_form_4_Template, 16, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__["PlaceholderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"]], encapsulation: 2 });


/***/ }),

/***/ "tgEQ":
/*!*************************************!*\
  !*** ./src/app/Auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "DPou");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=Auth-auth-module.js.map