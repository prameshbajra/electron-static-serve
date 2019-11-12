(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-list-expense-list-module"],{

/***/ "./src/app/modules/expense-list/components/expense-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/expense-list/components/expense-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-list\">\n    <nav>\n        <ul>\n            <li (click)=\"activateTab(0)\" [ngClass]=\"{ active: requestStatusActiveTab === 0 }\">{{ translation.expenses.open }}<span class=\"count\">{{ openRequests?.length }}</span></li>\n            <li (click)=\"activateTab(1)\" [ngClass]=\"{ active: requestStatusActiveTab === 1 }\">{{ translation.expenses.closed }}<span class=\"count\">{{ closedRequests?.length }}</span></li>\n        </ul>\n    </nav>\n    <div class=\"content-wrapper\" [ngSwitch]=\"requestStatusActiveTab\">\n        <section *ngSwitchCase=\"0\" [@showCard]=\"openRequests.length\">\n            <ng-container *ngIf=\"displayOpenRequests\">\n                <div [@slide] *ngFor=\"let openRequest of openRequests; trackBy: trackByRequest\">\n                    <itx-helpdesk-card [typeID]=\"11\" [request]=\"openRequest\"></itx-helpdesk-card>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"!displayOpenRequests\">\n                <p [@slide] class=\"blue-gradient\">{{ translation.expenses.noExpenses }}</p>\n            </ng-container>\n        </section>\n        <section *ngSwitchCase=\"1\" [@showCard]=\"closedRequests.length\">\n            <ng-container *ngIf=\"displayClosedRequests\">\n                <div [@slide] *ngFor=\"let closedRequest of closedRequests; trackBy: trackByRequest\">\n                    <itx-helpdesk-card [typeID]=\"11\" [request]=\"closedRequest\"></itx-helpdesk-card>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"!displayClosedRequests\">\n                <p [@slide] class=\"blue-gradient\">{{ translation.expenses.noExpenses }}</p>\n            </ng-container>\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/expense-list/components/expense-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/expense-list/components/expense-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-list {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh; }\n\n.itx-helpdesk-list h2 {\n    font-size: 1.4em;\n    color: white;\n    font-family: \"poppinslight\";\n    margin-bottom: 1.16666667vh;\n    margin-top: 2.33333333vh; }\n\n.itx-helpdesk-list h2 span.count {\n      text-align: center;\n      font-size: 0.6em;\n      background-color: #1d5b84;\n      color: white;\n      line-height: 2.7vh;\n      height: 2.5vh;\n      width: 2.5vh;\n      display: inline-block;\n      margin-left: 10px;\n      border-radius: 50%;\n      vertical-align: bottom; }\n\n.itx-helpdesk-list nav ul {\n    padding: 0;\n    margin: 0; }\n\n.itx-helpdesk-list nav ul li {\n      display: block;\n      text-transform: uppercase;\n      text-align: center;\n      padding: 10px 0;\n      font-family: \"poppinsmedium\";\n      color: white;\n      box-shadow: inset 0 -1px 0 0 #093152;\n      width: 50%;\n      float: left; }\n\n.itx-helpdesk-list nav ul li.active {\n        box-shadow: inset 0 -3px 0 0 #085f88; }\n\n.itx-helpdesk-list nav ul li span.count {\n        text-align: center;\n        font-size: 0.6em;\n        background-color: #1d5b84;\n        color: white;\n        line-height: 2.7vh;\n        height: 2.5vh;\n        width: 2.5vh;\n        display: inline-block;\n        margin-left: 10px;\n        border-radius: 50%;\n        vertical-align: bottom; }\n\n.itx-helpdesk-list .content-wrapper {\n    padding-right: 2.33333333vh;\n    padding-left: 2.33333333vh;\n    padding-top: 2.33333333vh;\n    clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9leHBlbnNlLWxpc3QvY29tcG9uZW50cy9leHBlbnNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMscUJBQXdDLEVBbUUzQzs7QUFyRUQ7SUFLUSxpQkFBZ0I7SUFDaEIsYURGUztJQ0dULDRCRGtDeUI7SUNqQ3pCLDRCQUE2QztJQUM3Qyx5QkFBb0MsRUFldkM7O0FBeEJMO01BWVksbUJBQWtCO01BQ2xCLGlCQUFnQjtNQUNoQiwwQkFBeUI7TUFDekIsYURYSztNQ1lMLG1CQUFrQjtNQUNsQixjQUFhO01BQ2IsYUFBWTtNQUNaLHNCQUFxQjtNQUNyQixrQkFBb0M7TUFDcEMsbUJBQWtCO01BQ2xCLHVCQUFzQixFQUN6Qjs7QUF2QlQ7SUE0QlksV0FBVTtJQUNWLFVBQVMsRUErQlo7O0FBNURUO01BZ0NnQixlQUFjO01BQ2QsMEJBQXlCO01BQ3pCLG1CQUFrQjtNQUNsQixnQkFBb0M7TUFDcEMsNkJETW1CO01DTG5CLGFEakNDO01Da0NELHFDRHBCWTtNQ3FCWixXQUFVO01BQ1YsWUFBVyxFQW1CZDs7QUEzRGI7UUEyQ29CLHFDQUFvQyxFQUN2Qzs7QUE1Q2pCO1FBK0NvQixtQkFBa0I7UUFDbEIsaUJBQWdCO1FBQ2hCLDBCQUF5QjtRQUN6QixhRDlDSDtRQytDRyxtQkFBa0I7UUFDbEIsY0FBYTtRQUNiLGFBQVk7UUFDWixzQkFBcUI7UUFDckIsa0JBQW9DO1FBQ3BDLG1CQUFrQjtRQUNsQix1QkFBc0IsRUFDekI7O0FBMURqQjtJQWdFUSw0QkFBdUM7SUFDdkMsMkJBQXNDO0lBQ3RDLDBCQUFxQztJQUNyQyxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVuc2UtbGlzdC9jb21wb25lbnRzL2V4cGVuc2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi5pdHgtaGVscGRlc2stbGlzdCB7XG4gICAgcGFkZGluZy10b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgIHBhZGRpbmctYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDI7XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgIGNvbG9yOiAkaXR4LXdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICgkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDMpIC8gMjtcbiAgICAgICAgbWFyZ2luLXRvcDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgICAgIHNwYW4uY291bnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDViODQ7XG4gICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjd2aDtcbiAgICAgICAgICAgIGhlaWdodDogMi41dmg7XG4gICAgICAgICAgICB3aWR0aDogMi41dmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJGl0eC1kZWZhdWx0LWd1dHRlciAvIDI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgkaXR4LWRlZmF1bHQtZ3V0dGVyIC8gMikgMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTWVkaXVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaXR4LXdoaXRlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgJGl0eC1sYWJlbC1kYXJrYmx1ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwICMwODVmODg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3Bhbi5jb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNWI4NDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjd2aDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjV2aDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG4gICAgICAgIHBhZGRpbmctbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICBwYWRkaW5nLXRvcDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/expense-list/components/expense-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/expense-list/components/expense-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return ExpenseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/expense.service */ "./src/app/modules/core/services/expense.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _core_services_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/services/window.service */ "./src/app/modules/core/services/window.service.ts");







var ExpenseListComponent = /** @class */ (function () {
    function ExpenseListComponent(expenseService, langService, document, window) {
        var _this = this;
        this.expenseService = expenseService;
        this.langService = langService;
        this.document = document;
        this.window = window;
        this.openRequests = [];
        this.closedRequests = [];
        this.displayOpenRequests = true;
        this.displayClosedRequests = true;
        this.numberToLoad = 10;
        this.count = 1;
        this.loadAt = 300;
        this.translation = this.langService.lang;
        this.requestStatusActiveTab = 0;
        this.openRequestsObserver = this.expenseService.openRequests$.subscribe(function (requests) {
            _this.openRequests.splice(_this.openRequests.length - 10, 10);
            requests.forEach(function (request) {
                _this.openRequests.push(request);
            });
            _this.displayOpenRequests = _this.openRequests.length > 0 ? true : false;
            _this.requestOnLoad = false;
        });
        this.closedRequestsObserver = this.expenseService.closedRequests$.subscribe(function (requests) {
            _this.closedRequests.splice(_this.closedRequests.length - 10, 10);
            requests.forEach(function (request) {
                _this.closedRequests.push(request);
            });
            _this.displayClosedRequests = _this.closedRequests.length ? true : false;
            _this.requestOnLoad = false;
        });
    }
    ExpenseListComponent.prototype.ngOnInit = function () {
        this.getOpenHelpdeskRequests();
        this.getClosedHelpdeskRequests();
    };
    ExpenseListComponent.prototype.ngOnDestroy = function () {
        this.openRequestsObserver.unsubscribe();
        this.closedRequestsObserver.unsubscribe();
    };
    ExpenseListComponent.prototype.onWindowScroll = function () {
        var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > this.count * this.loadAt && !this.requestOnLoad) {
            if (this.requestStatusActiveTab === 0) {
                this.getOpenHelpdeskRequests();
            }
            else {
                this.getClosedHelpdeskRequests();
            }
            this.count++;
        }
    };
    ExpenseListComponent.prototype.getOpenHelpdeskRequests = function () {
        this.requestOnLoad = true;
        if (!this.openRequests[this.openRequests.length - 1]) {
            this.expenseService.getOpenExpenseRequests(0, this.numberToLoad);
        }
        else {
            this.expenseService.getOpenExpenseRequests(this.openRequests[this.openRequests.length - 1].ID, this.numberToLoad);
        }
        this.openRequests = this.openRequests.concat([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    };
    ExpenseListComponent.prototype.getClosedHelpdeskRequests = function () {
        this.requestOnLoad = true;
        if (!this.closedRequests[this.closedRequests.length - 1]) {
            this.expenseService.getClosedExpenseRequests(0, this.numberToLoad);
        }
        else {
            this.expenseService.getClosedExpenseRequests(this.closedRequests[this.closedRequests.length - 1].ID, this.numberToLoad);
        }
        this.closedRequests = this.closedRequests.concat([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    };
    ExpenseListComponent.prototype.activateTab = function (tab) {
        this.requestStatusActiveTab = tab;
        this.count = 1;
    };
    ExpenseListComponent.prototype.trackByRequest = function (index, request) {
        return index;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ExpenseListComponent.prototype, "onWindowScroll", null);
    ExpenseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-expense-list',
            template: __webpack_require__(/*! ./expense-list.component.html */ "./src/app/modules/expense-list/components/expense-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(80%)', opacity: 0, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-10%)', opacity: 0.8, offset: 0.7 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(5%)', opacity: 1, offset: 0.9 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1, offset: 1 })
                        ]))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(80%)', opacity: 0, offset: 1 })
                        ]))])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showCard', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()]), { optional: true })]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()]), { optional: true })])
                ]),
            ],
            styles: [__webpack_require__(/*! ./expense-list.component.scss */ "./src/app/modules/expense-list/components/expense-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__["LangService"],
            Document, Object])
    ], ExpenseListComponent);
    return ExpenseListComponent;
}());



/***/ }),

/***/ "./src/app/modules/expense-list/expense-list-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/expense-list/expense-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExpenseListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListRoutingModule", function() { return ExpenseListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_expense_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/expense-list.component */ "./src/app/modules/expense-list/components/expense-list.component.ts");




var routes = [
    {
        path: '',
        component: _components_expense_list_component__WEBPACK_IMPORTED_MODULE_3__["ExpenseListComponent"]
    }
];
var ExpenseListRoutingModule = /** @class */ (function () {
    function ExpenseListRoutingModule() {
    }
    ExpenseListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExpenseListRoutingModule);
    return ExpenseListRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/expense-list/expense-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/expense-list/expense-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ExpenseListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListModule", function() { return ExpenseListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _expense_list_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expense-list-routing.module */ "./src/app/modules/expense-list/expense-list-routing.module.ts");
/* harmony import */ var _components_expense_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/expense-list.component */ "./src/app/modules/expense-list/components/expense-list.component.ts");









var ExpenseListModule = /** @class */ (function () {
    function ExpenseListModule() {
    }
    ExpenseListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_expense_list_component__WEBPACK_IMPORTED_MODULE_8__["ExpenseListComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _expense_list_routing_module__WEBPACK_IMPORTED_MODULE_7__["ExpenseListRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _components_expense_list_component__WEBPACK_IMPORTED_MODULE_8__["ExpenseListComponent"]
            ]
        })
    ], ExpenseListModule);
    return ExpenseListModule;
}());



/***/ })

}]);
//# sourceMappingURL=expense-list-expense-list-module.js.map