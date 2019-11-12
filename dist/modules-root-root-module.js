(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-root-root-module"],{

/***/ "./src/app/modules/root/root-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/root/root-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/app/modules/root/root.component.ts");




var routes = [
    {
        path: '',
        component: _root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"],
        children: [
            {
                path: '',
                loadChildren: './../dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'my-requests',
                loadChildren: './../helpdesk-list/helpdesk-list.module#HelpdeskListModule',
                data: {
                    title: 'root.myRequests'
                }
            },
            {
                path: 'my-expenses',
                loadChildren: './../expense-list/expense-list.module#ExpenseListModule',
                data: {
                    title: 'root.myExpenses'
                }
            },
            {
                path: 'create-requests',
                loadChildren: './../helpdesk-create/helpdesk-create.module#HelpdeskCreateModule',
                data: {
                    title: 'root.createRequests'
                }
            },
            {
                path: 'edit-requests',
                loadChildren: './../helpdesk-edit/helpdesk-edit.module#HelpdeskEditModule',
                data: {
                    title: 'root.editRequests'
                }
            },
            {
                path: 'edit-expense',
                loadChildren: './../expense-edit/expense-edit.module#ExpenseEditModule',
                data: {
                    title: 'root.editExpense'
                }
            },
            {
                path: 'edit-profile-requests',
                loadChildren: './../profile-edit/profile-edit.module#ProfileEditModule',
                data: {
                    title: 'root.editProfileRequests'
                }
            },
            {
                path: 'my-profile',
                loadChildren: './../my-profile/my-profile.module#MyProfileModule',
                data: {
                    title: 'root.myProfile'
                }
            }
        ]
    }
];
var RootRoutingModule = /** @class */ (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RootRoutingModule);
    return RootRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/root/root.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/root/root.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<itx-left-menu></itx-left-menu>\n<itx-top-bar></itx-top-bar>\n<router-outlet></router-outlet>\n<itx-bottom-bar></itx-bottom-bar>"

/***/ }),

/***/ "./src/app/modules/root/root.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/root/root.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/root/root.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/root/root.component.ts ***!
  \************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_left_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/services/left-menu.service */ "./src/app/modules/core/services/left-menu.service.ts");




var RootComponent = /** @class */ (function () {
    function RootComponent(renderer, leftMenuService) {
        this.renderer = renderer;
        this.leftMenuService = leftMenuService;
        this._observables = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth < 1024) {
            // Subscribe to the service who handle the state of the left menu - return a boolean
            this._observables.add(this.leftMenuService.openMenu$.subscribe(function (open) {
                // Set / Unset class on the HTML DOM tag
                // Set overflow to hidden
                _this.renderer[open ? 'addClass' : 'removeClass'](document.getElementsByTagName("html")[0], 'o-hidden');
            }));
        }
    };
    RootComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe
        this._observables.unsubscribe();
    };
    RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root-comp',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/modules/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/modules/root/root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _core_services_left_menu_service__WEBPACK_IMPORTED_MODULE_3__["LeftMenuService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/modules/root/root.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/root/root.module.ts ***!
  \*********************************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root-routing.module */ "./src/app/modules/root/root-routing.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.component */ "./src/app/modules/root/root.component.ts");








// Components

var components = [
    _root_component__WEBPACK_IMPORTED_MODULE_8__["RootComponent"]
];
var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                components
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _root_routing_module__WEBPACK_IMPORTED_MODULE_7__["RootRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], RootModule);
    return RootModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-root-root-module.js.map