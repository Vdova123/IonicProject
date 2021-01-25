(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js ***!
  \*****************************************************************************/
/*! exports provided: untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/** @type {?} */
var untilDestroyed = function (componentInstance, destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];
        if (isFunction(originalDestroy) === false) {
            throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
        }
        if (!componentInstance['__takeUntilDestroy']) {
            componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            componentInstance[destroyMethodName] = function () {
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                componentInstance['__takeUntilDestroy'].next(true);
                componentInstance['__takeUntilDestroy'].complete();
            };
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentInstance['__takeUntilDestroy']));
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRha2UtdW50aWwtZGVzdHJveS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRha2UtdW50aWwtZGVzdHJveS9zcmMvdGFrZS11bnRpbC1kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3QgdW50aWxEZXN0cm95ZWQgPSAoXG4gIGNvbXBvbmVudEluc3RhbmNlLFxuICBkZXN0cm95TWV0aG9kTmFtZSA9ICduZ09uRGVzdHJveSdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBjb21wb25lbnRJbnN0YW5jZVtkZXN0cm95TWV0aG9kTmFtZV07XG4gIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIH0gaXMgdXNpbmcgdW50aWxEZXN0cm95ZWQgYnV0IGRvZXNuJ3QgaW1wbGVtZW50ICR7ZGVzdHJveU1ldGhvZE5hbWV9YFxuICAgICk7XG4gIH1cbiAgaWYgKCFjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pIHtcbiAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICBpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgJiYgb3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10ubmV4dCh0cnVlKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXS5jb21wbGV0ZSgpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRha2VVbnRpbDxUPihjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pKTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBR0Esb0JBQW9CLEtBQUs7SUFDdkIsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEM7O0FBRUQsSUFBYSxjQUFjLEdBQUcsVUFDNUIsaUJBQWlCLEVBQ2pCLGlCQUFpQztJQUFqQyxrQ0FBQSxFQUFBLGlDQUFpQztJQUM5QixPQUFBLFVBQUksTUFBcUI7O1FBQzVCLElBQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0QsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBRVgsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksdURBQ2MsaUJBQW1CLENBQ3RFLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzVDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUV4RCxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO2dCQUNyQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BELENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUksaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0U7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/covid/covid.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/covid/covid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n<ion-item>\r\n  <ion-label>Country</ion-label>\r\n  <ion-select value=\"03\" (ionChange)=\"onSelectCountry(selectedCountry)\" [(ngModel)]=\"selectedCountry\"  ngDefaultControl>\r\n    <ion-select-option *ngFor=\"let country of countries.result\" [value]=\"country\" >{{country.name}}</ion-select-option>   \r\n  </ion-select>\r\n</ion-item>\r\n<ion-card>\r\n  <ion-img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkLb7ph-LLgG_wqfvL_VDe0cU1hfox-bRQQ&usqp=CAU\"></ion-img>\r\n  <ion-card-content>\r\n    <ion-card-header>\r\n      <div class=\"country-flag\">\r\n        <ion-img  [src]=\"countryFlag\"></ion-img>\r\n      </div>\r\n      <ion-card-title style=\"margin-bottom: 10px;\">{{lastCovidStat?.Country}}</ion-card-title>\r\n      <ion-card-subtitle>Cases: {{lastCovidStat?.Cases| number}}</ion-card-subtitle>\r\n      <ion-card-subtitle>Date: {{lastCovidStat?.Date| date}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>\r\n<div class=\"home\">\r\n  <ion-button color=\"secondary\" (click)=\"goBack()\">Back</ion-button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <img class=\"navbar__image\"\r\n    src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/512px-Ionic_Logo.svg.png\">\r\n  <img src=\"https://cdn3.iconfinder.com/data/icons/mobile-functions/154/phone-menu-128.png\" (click)=\"openMenu($event)\">\r\n</div>\r\n<ion-content id=\"men\" class=\"background\" overflow-scroll=\"false\">\r\n  <ion-header class=\"second-header ion-padding\">\r\n    <ion-title>\r\n      <ion-searchbar class=\"search-bar ion-padding\" [(ngModel)]=\"userInput\" (ionChange)=\"onInputChange($event)\">\r\n      </ion-searchbar>\r\n    </ion-title>\r\n    <ion-card-content class=\"custom-buttons\">\r\n      <ion-button color=\"secondary\" (click)=\"filterSelectedCategory('')\">All</ion-button>\r\n      <ion-button color=\"secondary\" (click)=\"filterSelectedCategory('napoje')\">Drinks</ion-button>\r\n      <ion-button color=\"secondary\" (click)=\"filterSelectedCategory('jidlo')\">Food</ion-button>\r\n      <ion-button color=\"secondary\" (click)=\"filterSelectedCategory('svacina')\">Snack</ion-button>\r\n    </ion-card-content>\r\n  </ion-header>\r\n<div class=\"home\">\r\n    <div *ngFor=\"let product of filteredProducts\">\r\n        <app-product [name]=\"product.name\" [quantity]=\"product.quantity\" [url]=\"product.imageUrl\" [price]=\"product.price\" [ID]=\"product.id\"\r\n          class=\"product\" [showButtons]=\"true\"></app-product>\r\n      </div>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/popup/popup.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/popup/popup.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding ion-text-center\">\r\n    <ion-title class=\"title\">Ionic Eshop Menu</ion-title>\r\n    <ion-img class=\"login-img\" src=\"https://ionicframework.com/blog/wp-content/uploads/2018/11/ionic-logo-white-300x300.png\"></ion-img>\r\n<ion-list>\r\n</ion-list>\r\n<ion-button color=\"primary\" (click)=\"close()\">Quit</ion-button>\r\n<ion-button color=\"secondary\" (click)=\"goToPurchasedProducts()\">Visit Orders</ion-button>\r\n<ion-button color=\"primary\" (click)=\"goToCovid()\">Covid Stats</ion-button>\r\n<ion-button color=\"danger\" (click)=\"logout()\">logOut</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/product-detail/product-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/product/product-detail/product-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\r\n    <img [src]=\"product?.imageUrl\" class=\"product-image\">\r\n    <ion-card-content>\r\n      <ion-card-title>\r\n        {{product?.name}}\r\n        </ion-card-title>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nullam faucibus mi quis velit. Maecenas libero. Integer lacinia. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Duis viverra diam non justo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n<ion-button color=\"secondary\" (click)=\"goBack()\">Back</ion-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/product.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/product/product.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"product-content\" [ngClass]=\"{'purchuased-products': !showButtons}\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{name}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-img class=\"product-image\" [src]=\"url\" alt=\"\"></ion-img>\r\n    <div  class=\"quantity-changer bussiness-card\">\r\n        Price:\r\n        <span>\r\n         {{price}} Kč\r\n        </span>\r\n      </div>\r\n    <div  class=\"quantity-changer bussiness-card\" *ngIf=\"showButtons\" >\r\n        Count:\r\n        <span>\r\n         {{quantity}}\r\n        </span>\r\n      </div>\r\n    <ion-button color=\"secondary\" *ngIf=\"showButtons\"  [routerLink]=\"['product',ID]\">Detail</ion-button>\r\n    <ion-button *ngIf=\"showButtons\" color=\"primary\"(click)=\"buyProduct(ID)\">Buy</ion-button>\r\n</ion-card>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/purchuased-products/purchuased-products.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/product/purchuased-products/purchuased-products.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button color=\"secondary\" (click)=\"goBack()\">Back</ion-button>\r\n<ion-content class=\"ion-padding ion-text-center background\" id=\"men\"  overflow-scroll=\"false\">\r\n  <ion-title class=\"title\">Eshop Purchuased Products</ion-title>\r\n  <ion-img class=\"login-img\" src=\"https://ionicframework.com/blog/wp-content/uploads/2018/11/ionic-logo-white-300x300.png\"></ion-img>\r\n  Total number of spent money: {{moneyTotal}} Kč\r\n  <div *ngFor=\"let product of purchuasedProducts\">\r\n    <app-product [name]=\"product.name\" [quantity]=\"product.quantity\" [url]=\"product.imageUrl\" [price]=\"product.price\" [ID]=\"product.id\"\r\n      class=\"product\" [showButtons]=\"true\"></app-product>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/covid/covid.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/covid/covid.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".country-flag ion-img {\n  height: 50px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvdmlkL0M6XFxNb2JpbHkgcHJvamVrdFxcaW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvdmlkXFxjb3ZpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2NvdmlkL2NvdmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY292aWQvY292aWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRyeS1mbGFnIHtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0iLCIuY291bnRyeS1mbGFnIGlvbi1pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/covid/covid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/covid/covid.component.ts ***!
  \****************************************************/
/*! exports provided: CovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidComponent", function() { return CovidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var _home_services_covid_covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/services/covid/covid.service */ "./src/app/home/services/covid/covid.service.ts");
/* harmony import */ var _models_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/countries */ "./src/app/dashboard/models/countries.ts");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/country */ "./src/app/dashboard/models/country.ts");
/* harmony import */ var _models_covid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/covid */ "./src/app/dashboard/models/covid.ts");







var CovidComponent = /** @class */ (function () {
    function CovidComponent(covidService) {
        this.covidService = covidService;
        this.covidStats = [];
        this.lastCovidStat = new _models_covid__WEBPACK_IMPORTED_MODULE_6__["CovidModel"]();
        this.countries = new _models_countries__WEBPACK_IMPORTED_MODULE_4__["Countries"]();
        this.selectedCountry = new _models_country__WEBPACK_IMPORTED_MODULE_5__["Country"]();
        this.getCountriesForSelect();
        this.getCovidData('cz');
    }
    CovidComponent.prototype.setCovidData = function (responseData) {
        this.covidStats = responseData;
        this.lastCovidStat = this.covidStats[this.covidStats.length - 1];
        this.countryFlag = "https://flagpedia.net/data/flags/normal/" + this.lastCovidStat.CountryCode.toLowerCase() + ".png";
    };
    CovidComponent.prototype.getCovidData = function (countryName) {
        var _this = this;
        this.covidService.getCovidStatsByCountryCode(countryName)
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe(function (response) {
            response !== null && response !== undefined && _this.setCovidData(response);
        });
    };
    CovidComponent.prototype.getCountriesForSelect = function () {
        var _this = this;
        this.covidService
            .getCountries()
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe(function (result) {
            if (result && result.code === 200) {
                _this.countries = result;
            }
        });
    };
    CovidComponent.prototype.onSelectCountry = function (country) {
        this.getCovidData(country.code);
    };
    CovidComponent.prototype.goBack = function () {
        window.history.back();
    };
    CovidComponent.prototype.ngOnInit = function () {
    };
    CovidComponent.prototype.ngOnDestroy = function () {
    };
    CovidComponent.ctorParameters = function () { return [
        { type: _home_services_covid_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"] }
    ]; };
    CovidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-covid',
            template: __webpack_require__(/*! raw-loader!./covid.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/covid/covid.component.html"),
            styles: [__webpack_require__(/*! ./covid.component.scss */ "./src/app/dashboard/covid/covid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_services_covid_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"]])
    ], CovidComponent);
    return CovidComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.navbar__image{\r\n     \r\n    align-self: center;\r\n    float: left;\r\n    padding: 5px 5px;\r\n    max-width: 150px;\r\n}\r\n\r\n\r\n.header {\r\n    background-image: url(\"https://wallpaperfm.com/img/original/d/c/3/24686.jpg\");\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n\r\nimg {\r\n    height: 50px;\r\n}\r\n\r\n\r\n.second-header {\r\n    height: 200px;\r\n    padding-top: 65px;\r\n    background-image: url(\"http://www.jip-potraviny.cz/upload/image/1513672655_Zlin_10.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.custom-buttons {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdGQUF3RjtJQUN4Riw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7O0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyX19pbWFnZXtcclxuICAgICBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93YWxscGFwZXJmbS5jb20vaW1nL29yaWdpbmFsL2QvYy8zLzI0Njg2LmpwZ1wiKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zZWNvbmQtaGVhZGVyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cuamlwLXBvdHJhdmlueS5jei91cGxvYWQvaW1hZ2UvMTUxMzY3MjY1NV9abGluXzEwLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY3VzdG9tLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/services/product/product.service */ "./src/app/home/services/product/product.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/dashboard/popup/popup.component.ts");
/* harmony import */ var _pipes_CharacterReplace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/CharacterReplace */ "./src/app/dashboard/pipes/CharacterReplace.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productService, storage, modalController, activatedRoute) {
        var _this = this;
        this.productService = productService;
        this.storage = storage;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.products = new Array();
        this.filteredProducts = new Array();
        this.storage.get('products')
            .then(function (result) {
            _this.products = result;
            _this.filteredProducts = _this.products;
        });
    }
    DashboardComponent.prototype.ionViewCanEnter = function () {
        this.filterSelectedCategory('');
    };
    DashboardComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.products = this.productService.returnProducts();
        if (!this.products || this.products.length === 0) {
            this.storage.get('products')
                .then(function (result) {
                _this.products = result;
                _this.filteredProducts = _this.products;
            });
        }
    };
    DashboardComponent.prototype.onInputChange = function ($event) {
        var _this = this;
        this.userInput = $event.detail.value;
        this.filteredProducts = (this.userInput) ? this.products
            .filter(function (x) { return Object(_pipes_CharacterReplace__WEBPACK_IMPORTED_MODULE_7__["replaceDiacritic"])(x.name.toLocaleLowerCase())
            .includes(Object(_pipes_CharacterReplace__WEBPACK_IMPORTED_MODULE_7__["replaceDiacritic"])(_this.userInput.toLocaleLowerCase())); }) : this.products;
    };
    DashboardComponent.prototype.filterSelectedCategory = function (category) {
        if (this.products) {
            this.filteredProducts = (category.length !== 0) ? this.products
                .filter(function (x) { return x.category
                .find(function (c) { return Object(_pipes_CharacterReplace__WEBPACK_IMPORTED_MODULE_7__["replaceDiacritic"])(c.toLocaleLowerCase())
                === Object(_pipes_CharacterReplace__WEBPACK_IMPORTED_MODULE_7__["replaceDiacritic"])(category.toLocaleLowerCase()); }); }) : this.products;
        }
    };
    DashboardComponent.prototype.openMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.modalController.create({
                            component: _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"]
                        });
                        return [4 /*yield*/, modal.then(function (result) {
                                result.present();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.filterSelectedCategory('');
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/dashboard/product/product.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/dashboard/popup/popup.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/dashboard/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_purchuased_products_purchuased_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/purchuased-products/purchuased-products.component */ "./src/app/dashboard/product/purchuased-products/purchuased-products.component.ts");
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./covid/covid.component */ "./src/app/dashboard/covid/covid.component.ts");













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    },
                    {
                        path: 'product/:id',
                        component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"]
                    },
                    {
                        path: 'purchased',
                        component: _product_purchuased_products_purchuased_products_component__WEBPACK_IMPORTED_MODULE_11__["PurchuasedProductsComponent"]
                    },
                    {
                        path: 'covid',
                        component: _covid_covid_component__WEBPACK_IMPORTED_MODULE_12__["CovidComponent"]
                    }
                ]),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"],
                _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"],
                _product_purchuased_products_purchuased_products_component__WEBPACK_IMPORTED_MODULE_11__["PurchuasedProductsComponent"],
                _covid_covid_component__WEBPACK_IMPORTED_MODULE_12__["CovidComponent"]
            ],
            entryComponents: [
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/models/countries.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/models/countries.ts ***!
  \***********************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
var Countries = /** @class */ (function () {
    function Countries() {
        this.result = [];
    }
    return Countries;
}());



/***/ }),

/***/ "./src/app/dashboard/models/country.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/models/country.ts ***!
  \*********************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/dashboard/models/covid.ts":
/*!*******************************************!*\
  !*** ./src/app/dashboard/models/covid.ts ***!
  \*******************************************/
/*! exports provided: CovidModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidModel", function() { return CovidModel; });
var CovidModel = /** @class */ (function () {
    function CovidModel() {
    }
    return CovidModel;
}());



/***/ }),

/***/ "./src/app/dashboard/pipes/CharacterReplace.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/pipes/CharacterReplace.ts ***!
  \*****************************************************/
/*! exports provided: replaceDiacritic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceDiacritic", function() { return replaceDiacritic; });
function replaceDiacritic(character) {
    var result = character.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return result;
}


/***/ }),

/***/ "./src/app/dashboard/popup/popup.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/popup/popup.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-popup{\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n.login-img {\r\n    height: 70px;\r\n}\r\n.title  {\r\n    margin-top: 30vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcG9wdXB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5sb2dpbi1pbWcge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi50aXRsZSAge1xyXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/popup/popup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/popup/popup.component.ts ***!
  \****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PopupComponent = /** @class */ (function () {
    function PopupComponent(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    PopupComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupComponent.prototype.logout = function () {
        this.close();
        this.router.navigate(['/home']);
    };
    PopupComponent.prototype.goToPurchasedProducts = function () {
        this.close();
        this.router.navigate(['dashboard/purchased']);
    };
    PopupComponent.prototype.goToCovid = function () {
        this.close();
        this.router.navigate(['dashboard/covid']);
    };
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! raw-loader!./popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/dashboard/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product/product-detail/product-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/product/product-detail/product-detail.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title  {\r\n    margin-top: 30vh;\r\n}\r\n\r\n.login-img {\r\n    height: 60px;\r\n    padding-top: 17px;\r\n}\r\n\r\n.product-image {\r\n    height: 100px;\r\n    -o-object-fit: contain;\r\n    object-fit: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9kdWN0L3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUgIHtcclxuICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbn1cclxuXHJcbi5sb2dpbi1pbWcge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAtby1vYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/product/product-detail/product-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/product/product-detail/product-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/services/product/product.service */ "./src/app/home/services/product/product.service.ts");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(activateRouter, productService) {
        var _this = this;
        this.activateRouter = activateRouter;
        this.productService = productService;
        this.activateRouter.params.
            subscribe(function (result) {
            _this.product = _this.productService.getProduct(+result.id);
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/dashboard/product/product-detail/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product/product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/product/product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-image {\r\n    height: 100px;\r\n    width: 250px;\r\n    -o-object-fit: contain;\r\n    object-fit: contain;\r\n}\r\n.product-content{\r\n    background-color: #fff;\r\n    margin: auto;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    width: 90%;\r\n    border: 1px solid #d4d8e0;\r\n    border-radius: 15px;\r\n    width: 250px;\r\n    height: 270px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    margin-top: 22px;\r\n}\r\n.quantity-changer {\r\n    border-top: 1px solid #d4d8e0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    white-space: nowrap;\r\n    padding: 10px 15px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n  }\r\n.purchuased-products {\r\n    height: 200px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBaUI7SUFBakIsNkJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuLnByb2R1Y3QtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDhlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG5cclxuLnF1YW50aXR5LWNoYW5nZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ4ZTA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnB1cmNodWFzZWQtcHJvZHVjdHMge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/product/product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/services/product/product.service */ "./src/app/home/services/product/product.service.ts");



var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService) {
        this.productService = productService;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.buyProduct = function (ID) {
        this.productService.buy(ID);
    };
    ProductComponent.ctorParameters = function () { return [
        { type: src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProductComponent.prototype, "price", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProductComponent.prototype, "quantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProductComponent.prototype, "ID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductComponent.prototype, "showButtons", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/dashboard/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_home_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product/purchuased-products/purchuased-products.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/product/purchuased-products/purchuased-products.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-img {\r\n    height: 70px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QvcHVyY2h1YXNlZC1wcm9kdWN0cy9wdXJjaHVhc2VkLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QvcHVyY2h1YXNlZC1wcm9kdWN0cy9wdXJjaHVhc2VkLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4taW1nIHtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/product/purchuased-products/purchuased-products.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/product/purchuased-products/purchuased-products.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchuasedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchuasedProductsComponent", function() { return PurchuasedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var PurchuasedProductsComponent = /** @class */ (function () {
    function PurchuasedProductsComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.moneyTotal = 0;
        this.purchuasedProducts = new Array();
        this.storage.get('purchuasedProducts').then(function (result) {
            _this.purchuasedProducts = result;
            if (result) {
                for (var i = 0; i <= _this.purchuasedProducts.length - 1; i++) {
                    _this.moneyTotal = _this.moneyTotal + _this.purchuasedProducts[i].price;
                }
            }
        });
    }
    PurchuasedProductsComponent.prototype.ngOnInit = function () {
    };
    PurchuasedProductsComponent.prototype.goBack = function () {
        window.history.back();
    };
    PurchuasedProductsComponent.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    PurchuasedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'purchuased-products',
            template: __webpack_require__(/*! raw-loader!./purchuased-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/product/purchuased-products/purchuased-products.component.html"),
            styles: [__webpack_require__(/*! ./purchuased-products.component.css */ "./src/app/dashboard/product/purchuased-products/purchuased-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], PurchuasedProductsComponent);
    return PurchuasedProductsComponent;
}());



/***/ }),

/***/ "./src/app/home/services/covid/covid.service.ts":
/*!******************************************************!*\
  !*** ./src/app/home/services/covid/covid.service.ts ***!
  \******************************************************/
/*! exports provided: CovidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidService", function() { return CovidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CovidService = /** @class */ (function () {
    function CovidService(httpService) {
        this.httpService = httpService;
    }
    CovidService.prototype.getCovidStatsByCountryCode = function (countryCode) {
        return this.httpService.get("https://api.covid19api.com/country/" + countryCode + "/status/confirmed");
    };
    CovidService.prototype.getCountries = function () {
        return this.httpService.get("./assets/countries/countries.json");
    };
    CovidService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CovidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CovidService);
    return CovidService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map