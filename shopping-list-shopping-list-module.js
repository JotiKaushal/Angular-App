(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-list-shopping-list-module"],{

/***/ "CXQP":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "VIpv");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list.component */ "vKZt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ShoppingListModule {
}
ShoppingListModule.ɵfac = function ShoppingListModule_Factory(t) { return new (t || ShoppingListModule)(); };
ShoppingListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ShoppingListModule });
ShoppingListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"] },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ShoppingListModule, { declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"],
        _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingEditComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "VIpv":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ "9rNa");
/* harmony import */ var _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/shopping-list.action */ "eRt6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "ozzT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["f"];
function ShoppingEditComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ShoppingEditComponent {
    constructor(slService, store) {
        this.slService = slService;
        this.store = store;
        this.editMode = false;
    }
    ngOnInit() {
        //For redux NGRX
        this.subscription = this.store.select('shoppingList').subscribe(stateData => {
            if (stateData.editedIngredientIndex > -1) {
                this.editMode = true;
                this.editedItem = stateData.editedIngredient;
                //this.editedItemIdex = stateData.editedIngredientIndex;
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
            else {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["StopEdit"]());
    }
    onSubmit(form) {
        const value = form.value;
        const newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            //for redux
            this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["UpdateIngredient"](newIngredient));
            //for service
            // this.slService.updateIngredient(this.editedItemIdex, newIngredient);
        }
        else {
            //Redux implementation
            this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["AddIngredient"](newIngredient));
            //For service
            //this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
        //for redux
        this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["StopEdit"]());
    }
    onDelete() {
        //For redux
        this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__["DeleteIngredient"]());
        //For service
        //this.slService.deleteIngredient(this.editedItemIdex);
        this.onClear();
    }
}
ShoppingEditComponent.ɵfac = function ShoppingEditComponent_Factory(t) { return new (t || ShoppingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ShoppingEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShoppingEditComponent, selectors: [["app-shopping-edit"]], viewQuery: function ShoppingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slForm = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "row"], [1, "col-xs-12"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-sm-5", "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], [1, "col-sm-2", "form-group"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", "ngModel", "", "required", "", "pattern", "^[1-9]+[0-9]*$", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ShoppingEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ShoppingEditComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ShoppingEditComponent_button_17_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_Template_button_click_18_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.editMode ? "Update" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vKZt":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/shopping-list.action */ "eRt6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "ozzT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "VIpv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShoppingListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShoppingListComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onEditItem(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ingredient_r1.name, " (", ingredient_r1.amount, ") ");
} }
class ShoppingListComponent {
    constructor(slService, store) {
        this.slService = slService;
        this.store = store;
    }
    ngOnInit() {
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
    ngOnDestroy() {
        //this.subscription.unsubscribe();
    }
    onEditItem(index) {
        this.store.dispatch(new _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__["StartEdit"](index));
        //  this.slService.startedEditing.next(index);
    }
}
ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) { return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShoppingListComponent, selectors: [["app-shopping-list"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-xs-10"], [1, "list-group"], ["class", "list-group-item", "style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 2, "cursor", "pointer", 3, "click"]], template: function ShoppingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-shopping-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShoppingListComponent_a_5_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx.ingredients).ingredients);
    } }, directives: [_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingEditComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=shopping-list-shopping-list-module.js.map