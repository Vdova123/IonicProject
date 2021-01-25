(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <ion-content class=\"ion-padding ion-text-center\">\r\n      <ion-title class=\"title\">Login</ion-title>\r\n      <ion-img class=\"login-img\" src=\"https://ionicframework.com/blog/wp-content/uploads/2018/11/ionic-logo-white-300x300.png\"></ion-img>\r\n    <ion-list>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"mail\" item-start></ion-icon>\r\n          Email\r\n        </ion-label>\r\n        <ion-input color=\"black\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"lock\" item-start></ion-icon>\r\n          Password\r\n        </ion-label>\r\n        <ion-input color=\"black\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n\r\n      \r\n    </ion-list>\r\n    <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"login()\" tappable>\r\n      <ion-icon name=\"log-in\"></ion-icon>\r\n      Signin\r\n    </ion-button>\r\n    <ion-button expand=\"block\" color=\"light\" (click)=\"registerUser()\">Register</ion-button>\r\n    </ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n        <ion-title class=\"title\">Register</ion-title>\r\n        <ion-img class=\"login-img\" src=\"https://ionicframework.com/blog/wp-content/uploads/2018/11/ionic-logo-white-300x300.png\"></ion-img>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">\r\n                <ion-icon name=\"mail\" item-start></ion-icon>\r\n                Email\r\n              </ion-label>\r\n              <ion-input color=\"black\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">\r\n                <ion-icon name=\"lock\" item-start></ion-icon>\r\n                Password\r\n              </ion-label>\r\n              <ion-input color=\"black\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" (click)=\"registeUser()\">Register</ion-button>\r\n    <ion-button color=\"secondary\" routerLink=\"/home\">Go back</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/home/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        pathMatch: 'full'
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    }
                ]),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot()
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/home/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title  {\r\n    margin-top: 30vh;\r\n}\r\n\r\n.login-img {\r\n    height: 60px;\r\n    padding-top: 17px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSAge1xyXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcclxufVxyXG5cclxuLmxvZ2luLWltZyB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/home/services/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.login = function () {
        this.loginService.logUser(this.email, this.password);
    };
    LoginComponent.prototype.registerUser = function () {
        this.router.navigate(['home/register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/home/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/home/models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    User.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/home/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title  {\r\n    margin-top: 30vh;\r\n}\r\n.login-img {\r\n    height: 60px;\r\n    padding-top: 17px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlICB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xyXG59XHJcbi5sb2dpbi1pbWcge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/home/services/login/login.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/home/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toaster/toaster.service */ "./src/app/home/services/toaster/toaster.service.ts");
/* harmony import */ var _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/toaster-positions */ "./src/app/home/models/toaster-positions.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(loginService, router, toasterService) {
        this.loginService = loginService;
        this.router = router;
        this.toasterService = toasterService;
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registeUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.password.length < 5) {
                    this.toasterService.createToaster('Password must have min 5 characters!', 'danger', _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__["ToasterPositions"].Top, false);
                }
                else if (!this.loginService.isValidEmail(this.email)) {
                    this.toasterService.createToaster('invalid email', 'danger', _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__["ToasterPositions"].Top, false);
                }
                else {
                    this.toasterService.createToaster('User was registered', 'primary', _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__["ToasterPositions"].Top, false);
                    user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.email, this.password);
                    this.loginService.registerUser(user);
                    this.email = null;
                    this.password = null;
                    this.router.navigate(['home']);
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/home/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/services/login/login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/home/services/login/login.service.ts ***!
  \******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.service */ "./src/app/home/services/product/product.service.ts");
/* harmony import */ var _toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toaster/toaster.service */ "./src/app/home/services/toaster/toaster.service.ts");
/* harmony import */ var _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/toaster-positions */ "./src/app/home/models/toaster-positions.ts");







var LoginService = /** @class */ (function () {
    function LoginService(storage, router, productService, toasterService) {
        this.storage = storage;
        this.router = router;
        this.productService = productService;
        this.toasterService = toasterService;
    }
    Object.defineProperty(LoginService.prototype, "canUserEnter", {
        get: function () {
            return this._canUserEnter;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.logUser = function (email, userPassword) {
        var _this = this;
        this.storage.keys().then(function (key) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (key.includes(email)) {
                    this.storage.get(email).then(function (passowrd) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (passowrd === userPassword) {
                                this.productService.setProductsIntoStorage();
                                this._canUserEnter = true;
                                this.router.navigate(['dashboard']);
                            }
                            else {
                                this.toasterService.createToaster('Wrong email or password', 'danger', _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__["ToasterPositions"].Top, false);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                else {
                    this.toasterService.createToaster('Wrong email or password', 'danger', _models_toaster_positions__WEBPACK_IMPORTED_MODULE_6__["ToasterPositions"].Top, false);
                }
                return [2 /*return*/];
            });
        }); });
    };
    LoginService.prototype.registerUser = function (userInfo) {
        this.storage.set(userInfo.email, userInfo.password);
    };
    LoginService.prototype.isValidEmail = function (email) {
        // tslint:disable-next-line: max-line-length
        var emailCharacters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailCharacters.test(email)) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map