(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-edit-expense-edit-module"],{

/***/ "./src/app/modules/expense-edit/expense-edit-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/expense-edit/expense-edit-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExpenseEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseEditRoutingModule", function() { return ExpenseEditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_expense_edit_expense_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/expense-edit/expense-edit.page */ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.ts");




var routes = [
    {
        path: ':id',
        component: _pages_expense_edit_expense_edit_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseEditPage"]
    }
];
var ExpenseEditRoutingModule = /** @class */ (function () {
    function ExpenseEditRoutingModule() {
    }
    ExpenseEditRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExpenseEditRoutingModule);
    return ExpenseEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/expense-edit/expense-edit.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/expense-edit/expense-edit.module.ts ***!
  \*************************************************************/
/*! exports provided: ExpenseEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseEditModule", function() { return ExpenseEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _helpdesk_create_helpdesk_create_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../helpdesk-create/helpdesk-create.module */ "./src/app/modules/helpdesk-create/helpdesk-create.module.ts");
/* harmony import */ var _expense_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expense-edit-routing.module */ "./src/app/modules/expense-edit/expense-edit-routing.module.ts");
/* harmony import */ var _pages_expense_edit_expense_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/expense-edit/expense-edit.page */ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.ts");










var ExpenseEditModule = /** @class */ (function () {
    function ExpenseEditModule() {
    }
    ExpenseEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_expense_edit_expense_edit_page__WEBPACK_IMPORTED_MODULE_9__["ExpenseEditPage"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _expense_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__["ExpenseEditRoutingModule"],
                _helpdesk_create_helpdesk_create_module__WEBPACK_IMPORTED_MODULE_7__["HelpdeskCreateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _pages_expense_edit_expense_edit_page__WEBPACK_IMPORTED_MODULE_9__["ExpenseEditPage"]
            ]
        })
    ], ExpenseEditModule);
    return ExpenseEditModule;
}());



/***/ }),

/***/ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-edit\">\n    <div class=\"block-helpdesk-edit\" ngClass=\"{{ requestStatusClass }}\">\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">Status</label>\n                <p class=\"created\">Créé le {{ request?.Date | itxMoment:'DD MMMM YYYY' }}</p>\n            </div>\n            <div class=\"label\"><div class=\"content\">{{ requestStatus }}</div></div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">{{ translation.createRequest.general.priority.title }}</label>\n                <p><span class=\"itx-icon-icon_priority\"></span>{{ translation.enum.priority[request?.Priority.ID] }}</p>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{ translation.createRequest.typeOfRequest }}</label>\n            <p>{{ request?.Type.Name }}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Date</label>\n            <p>{{ request?.ExpenseInfo.Date | itxMoment:'DD MMMM YYYY' }}</p>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">Catégorie</label>\n                <p><span class=\"itx-icon-icon_priority\"></span>{{ expenseCategory?.Name }}</p>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">Currency</label>\n                <p><span class=\"itx-icon-icon_frais\"></span>{{ currency?.Name }}</p>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Price</label>\n            <p>{{ request?.ExpenseInfo.Price }} {{ currency?.Code }}</p>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">Payment method</label>\n                <p><span class=\"itx-icon-icon_priority\"></span>{{ paymentMethod?.Name }}</p>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div *ngIf=\"request?.ExpenseInfo.Comment\" class=\"form-group\">\n            <label for=\"\">Comment</label>\n            <p>{{ request?.ExpenseInfo.Comment }}</p>\n        </div>\n        <div *ngIf=\"request?.AttachmentFiles.length > 0\" class=\"form-group files\">\n            <label for=\"\">Pièce jointe</label>\n            <ul>\n                <ng-container *ngFor=\"let file of base64Files\">\n                    <li *ngIf=\"file.type === 'img'\" class=\"img\">\n                        <img [src]=\"file.base64\" alt=\"{{ file.name }}\">\n                    </li>\n                    <li *ngIf=\"file.type !== 'img'\" class=\"other\">\n                        <span>{{ file.type }}</span>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n        <div *ngIf=\"requestMessages?.length > 0\" class=\"form-group response\">\n            <label for=\"\">Historique des messages</label>\n            <ul class=\"messages\">\n                <ng-container *ngFor=\"let message of requestMessages\">\n                    <li ngClass=\"{{ amIAuthor(message) ? 'me' : '' }}\">\n                        <p class=\"message\">{{ message.Message }}</p>\n                        <p class=\"author\">{{ message.Author }} {{ message.Date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                    </li>\n                    <div class=\"files\">\n                        <ul>\n                            <ng-container *ngFor=\"let file of message.file\">\n                                <li *ngIf=\"file.type === 'img'\" class=\"img\">\n                                    <img [src]=\"file.base64\" alt=\"{{ file.name }}\">\n                                    <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                                </li>\n                                <li *ngIf=\"file.type !== 'img'\" class=\"other\">\n                                    <span>{{ file.type }}</span>\n                                    <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </div>\n                </ng-container>\n            </ul>\n        </div>\n        <ng-container *ngIf=\"completeRequest\">\n            <form [formGroup]=\"helpdeskForm\">\n                    <div class=\"form-group response\" ngClass=\"{{ response.invalid && (response.touched || response.dirty) ? 'error' : '' }}\">\n                        <label for=\"\">Votre réponse <span class=\"error\" *ngIf=\"response.invalid && (response.touched || response.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                        <input type=\"text\" name=\"response\" [formControl]=\"response\" autocomplete=\"off\">\n                    </div>\n                <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\"></itx-helpdesk-create-upload>\n            </form>\n        </ng-container>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-edit {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a,\n  .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p {\n    color: white !important;\n    min-height: 2.1vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a span,\n    .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p span {\n      display: none; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a:after,\n  .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p:after {\n    content: \"\";\n    display: inline-block;\n    background-color: rgba(150, 150, 150, 0.35);\n    vertical-align: sub;\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite;\n    height: 2.1vh;\n    width: 70%;\n    position: absolute;\n    left: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group .label {\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group .label .content {\n      height: 100%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group {\n    position: relative;\n    border-bottom: 1px solid #DADADA;\n    padding-bottom: 2.33333333vh;\n    margin-bottom: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error {\n      border-bottom: 1px solid #e75c80; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error label {\n        color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error input {\n        border: 0 !important;\n        box-shadow: none !important; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.response input {\n      font-family: \"poppinslight\";\n      font-size: 0.9em;\n      line-height: 1.1em;\n      color: #969696;\n      opacity: 0.9;\n      text-align: left;\n      margin: 0;\n      padding: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files .spinner {\n      margin: 7vh auto;\n      width: 70px;\n      text-align: center;\n      opacity: 0.4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files .spinner > div {\n      width: 16px;\n      height: 16px;\n      background-color: #093152;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files ul {\n      padding: 0;\n      margin: 0;\n      list-style: none; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files ul li {\n        display: inline-block;\n        border-radius: 8px;\n        width: 50%;\n        margin-bottom: 1.16666667vh;\n        overflow: hidden;\n        text-align: center;\n        background-color: #f0f3f4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.files ul li img {\n          display: block;\n          margin: 0;\n          max-width: 100%;\n          color: #969696; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner {\n      margin: 7vh auto;\n      width: 70px;\n      text-align: center;\n      opacity: 0.4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner > div {\n      width: 16px;\n      height: 16px;\n      background-color: #093152;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .author {\n      background-color: transparent;\n      margin: 0;\n      padding: 1vh;\n      width: 100%; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n      margin-top: 1.16666667vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li {\n        border-radius: 8px;\n        width: 50%;\n        margin-left: 50%;\n        margin-bottom: 1.16666667vh;\n        overflow: hidden;\n        text-align: center;\n        background-color: #f0f3f4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li span {\n          display: block;\n          text-align: center;\n          color: #969696;\n          font-family: \"poppinsmedium\";\n          padding: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li img {\n          display: block;\n          margin: 0;\n          max-width: 100%;\n          color: #969696; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper {\n      float: left;\n      width: 75%;\n      padding-right: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p {\n        font-family: \"poppinslight\";\n        font-size: 0.9em;\n        line-height: 1.1em;\n        color: #969696;\n        opacity: 0.8;\n        margin: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p.created {\n          font-size: 0.7em; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p span[class^=itx-icon-] {\n          font-size: 1.6em;\n          margin-right: 5px;\n          vertical-align: sub;\n          color: #b3bfc8; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .label {\n      position: absolute;\n      width: 25%;\n      padding-left: 2.33333333vh;\n      right: 2.33333333vh;\n      top: 0;\n      right: 0;\n      margin: auto;\n      height: 3vh;\n      text-align: center; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .label .content {\n        background-color: #969696;\n        padding: 1vw;\n        color: white;\n        border-radius: 4px;\n        font-size: 0.6em;\n        text-transform: uppercase;\n        font-family: \"poppinssemibold\"; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group p {\n      font-family: \"poppinslight\";\n      font-size: 0.9em;\n      line-height: 1.1em;\n      color: #969696;\n      opacity: 0.8;\n      margin: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages {\n      padding: 0;\n      margin: 3vh 0 0 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li {\n        margin-bottom: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p {\n          position: relative;\n          color: #2D2D2D;\n          font-family: \"poppinsregular\";\n          font-size: 0.9em;\n          line-height: 1.1em; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.message {\n            border-radius: 8px;\n            background-color: #f0f3f4;\n            padding: 1.16666667vh 2.33333333vh 1.75vh;\n            width: 75%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.message:after {\n              content: \"\";\n              width: 0;\n              height: 0;\n              border-style: solid;\n              border-width: 6px 6px 6px 0;\n              border-color: transparent #f0f3f4 transparent transparent;\n              position: absolute;\n              left: -6px;\n              top: 0;\n              bottom: 0;\n              margin: auto; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.author {\n            margin-top: 1vh;\n            font-size: 0.7em;\n            color: #969696; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.message {\n          background-color: #def3fb;\n          margin-left: 25%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.message:after {\n            border-width: 6px 0 6px 6px;\n            border-color: transparent transparent transparent #def3fb;\n            right: -6px;\n            left: initial; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.author {\n          text-align: right; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.error .form-group .label .content {\n    background-color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.created .form-group .label .content {\n    background-color: #b3bfc8; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.pending .form-group .label .content {\n    background-color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.inprogress .form-group .label .content {\n    background-color: #093152; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.completed .form-group .label .content {\n    background-color: #093152; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.closed .form-group .label .content {\n    background-color: #DF2656; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9leHBlbnNlLWVkaXQvcGFnZXMvZXhwZW5zZS1lZGl0L2V4cGVuc2UtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMscUJBQXdDO0VBQ3hDLDRCQUF1QztFQUN2QywyQkFBc0MsRUFvWnpDOztBQXhaRDs7SUFZb0Isd0JBQXVCO0lBQ3ZCLGtCQUFpQixFQUtwQjs7QUFsQmpCOztNQWdCd0IsY0FBYSxFQUNoQjs7QUFqQnJCOztJQXFCb0IsWUFBVztJQUNYLHNCQUFxQjtJQUNyQiw0Q0FBc0Q7SUFDdEQsb0JBQW1CO0lBQ25CLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsY0FBYTtJQUNiLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsUUFBTyxFQUNWOztBQTlCakI7SUFnQ29CLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFHL0I7O0FBbkNqQjtNQWtDK0IsYUFBWSxFQUFJOztBQWxDL0M7SUF3Q1ksbUJBQWtCO0lBQ2xCLGlDRFpZO0lDYVosNkJBQXdDO0lBQ3hDLDRCQUF1QyxFQTZTMUM7O0FBeFZUO01BOENnQixpQ0QxQlksRUNtQ2Y7O0FBdkRiO1FBaURvQixlRDlCRyxFQytCTjs7QUFsRGpCO1FBb0RvQixxQkFBb0I7UUFDcEIsNEJBQTJCLEVBQzlCOztBQXREakI7TUEwRGdCLDRCRGpCaUI7TUNrQmpCLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsZURqQ087TUNrQ1AsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixVQUFTO01BQ1QsV0FBVSxFQUNiOztBQWxFYjtNQXdFb0IsaUJBQWlDO01BQ2pDLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsYUFBWSxFQUNmOztBQTVFakI7TUErRW9CLFlBQVc7TUFDWCxhQUFZO01BQ1osMEJEL0RRO01DZ0VSLG9CQUFtQjtNQUNuQixzQkFBcUI7TUFDckIsaUVBQWdFO01BQ2hFLHlEQUF3RCxFQUMzRDs7QUF0RmpCO01BeUZvQixnQ0FBK0I7TUFDL0Isd0JBQXVCLEVBQzFCOztBQTNGakI7TUE4Rm9CLGdDQUErQjtNQUMvQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUFnQiw0QkFBMkIsRUFBQTtFQUMzQztJQUFNLDRCQUE2QixFQUFBLEVBQUE7O0FBR3ZDO0VBQ0k7SUFDSSw0QkFBMkI7SUFDM0Isb0JBQW1CLEVBQUE7RUFDckI7SUFDRSw0QkFBNkI7SUFDN0Isb0JBQXFCLEVBQUEsRUFBQTs7QUE3RzdDO01BbUhvQixXQUFVO01BQ1YsVUFBUztNQUNULGlCQUFnQixFQWtCbkI7O0FBdklqQjtRQXdId0Isc0JBQXFCO1FBQ3JCLG1CQUFrQjtRQUNsQixXQUFVO1FBQ1YsNEJBQTZDO1FBQzdDLGlCQUFnQjtRQUNoQixtQkFBa0I7UUFDbEIsMEJBQXlCLEVBUTVCOztBQXRJckI7VUFpSTRCLGVBQWM7VUFDZCxVQUFTO1VBQ1QsZ0JBQWU7VUFDZixlRHhHTCxFQ3lHRTs7QUFySXpCO01BOElvQixpQkFBaUM7TUFDakMsWUFBVztNQUNYLG1CQUFrQjtNQUNsQixhQUFZLEVBQ2I7O0FBbEpuQjtNQXFKb0IsWUFBVztNQUNYLGFBQVk7TUFDWiwwQkRySVE7TUNzSVIsb0JBQW1CO01BQ25CLHNCQUFxQjtNQUNyQixpRUFBZ0U7TUFDaEUseURBQXdELEVBQ3pEOztBQTVKbkI7TUErSm9CLGdDQUErQjtNQUMvQix3QkFBdUIsRUFDeEI7O0FBaktuQjtNQW9Lb0IsZ0NBQStCO01BQy9CLHdCQUF1QixFQUN4Qjs7QUF0S25CO01BeUtvQiw4QkFBNkI7TUFDN0IsVUFBUztNQUNULGFBQVk7TUFDWixZQUFXLEVBQ1o7O0FBRUQ7RUFDRTtJQUFnQiw0QkFBMkIsRUFBQTtFQUMzQztJQUFNLDRCQUE2QixFQUFBLEVBQUE7O0FBR3JDO0VBQ0U7SUFDRSw0QkFBMkI7SUFDM0Isb0JBQW1CLEVBQUE7RUFDbkI7SUFDQSw0QkFBNkI7SUFDN0Isb0JBQXFCLEVBQUEsRUFBQTs7QUExTDNDO01BZ01vQixXQUFVO01BQ1YsVUFBUztNQUNULGlCQUFnQjtNQUNoQix5QkFBMEMsRUEwQjdDOztBQTdOakI7UUFzTXdCLG1CQUFrQjtRQUNsQixXQUFVO1FBQ1YsaUJBQWdCO1FBQ2hCLDRCQUE2QztRQUM3QyxpQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ2xCLDBCQUF5QixFQWdCNUI7O0FBNU5yQjtVQStNNEIsZUFBYztVQUNkLG1CQUFrQjtVQUNsQixlRHJMTDtVQ3NMSyw2QkR4S087VUN5S1Asc0JBQWlDLEVBQ3BDOztBQXBOekI7VUF1TjRCLGVBQWM7VUFDZCxVQUFTO1VBQ1QsZ0JBQWU7VUFDZixlRDlMTCxFQytMRTs7QUEzTnpCO01BaU9nQixZQUFXO01BQ1gsV0FBVTtNQUNWLDRCQUF1QyxFQXFCMUM7O0FBeFBiO1FBc09vQiw0QkQ3TGE7UUM4TGIsaUJBQWdCO1FBQ2hCLG1CQUFrQjtRQUNsQixlRDdNRztRQzhNSCxhQUFZO1FBQ1osVUFBUyxFQVlaOztBQXZQakI7VUE4T3dCLGlCQUFnQixFQUNuQjs7QUEvT3JCO1VBa1B3QixpQkFBZ0I7VUFDaEIsa0JBQXFDO1VBQ3JDLG9CQUFtQjtVQUNuQixlRDVOQSxFQzZOSDs7QUF0UHJCO01BMlBnQixtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLDJCQUFzQztNQUN0QyxvQkFBK0I7TUFDL0IsT0FBTTtNQUNOLFNBQVE7TUFDUixhQUFZO01BQ1osWUFBVztNQUNYLG1CQUFrQixFQVdyQjs7QUE5UWI7UUFzUW9CLDBCRDFPRztRQzJPSCxhQUFZO1FBQ1osYURwUUg7UUNxUUcsbUJBQWtCO1FBQ2xCLGlCQUFnQjtRQUNoQiwwQkFBeUI7UUFDekIsK0JEaE9tQixFQ2lPdEI7O0FBN1FqQjtNQWlSZ0IsNEJEeE9pQjtNQ3lPakIsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixlRHhQTztNQ3lQUCxhQUFZO01BQ1osVUFBUyxFQUNaOztBQXZSYjtNQTBSZ0IsV0FBVTtNQUNWLGtCQUFpQixFQTJEcEI7O0FBdFZiO1FBOFJvQiw0QkFBdUMsRUF1RDFDOztBQXJWakI7VUFpU3dCLG1CQUFrQjtVQUNsQixlRHZRQztVQ3dRRCw4QkR4UGE7VUN5UGIsaUJBQWdCO1VBQ2hCLG1CQUFrQixFQTRCckI7O0FBalVyQjtZQXdTNEIsbUJBQWtCO1lBQ2xCLDBCQUF5QjtZQUN6QiwwQ0FBbUY7WUFDbkYsV0FBVSxFQWdCYjs7QUEzVHpCO2NBOFNnQyxZQUFXO2NBQ1gsU0FBUTtjQUNSLFVBQVM7Y0FDVCxvQkFBbUI7Y0FDbkIsNEJBQTJCO2NBQzNCLDBEQUF5RDtjQUN6RCxtQkFBa0I7Y0FDbEIsV0FBVTtjQUNWLE9BQU07Y0FDTixVQUFTO2NBQ1QsYUFBWSxFQUVmOztBQTFUN0I7WUE2VDRCLGdCQUFlO1lBQ2YsaUJBQWdCO1lBQ2hCLGVEblNMLEVDb1NFOztBQWhVekI7VUFzVWdDLDBCQUF5QjtVQUN6QixpQkFBZ0IsRUFRbkI7O0FBL1U3QjtZQTBVb0MsNEJBQTJCO1lBQzNCLDBEQUF5RDtZQUN6RCxZQUFXO1lBQ1gsY0FBYSxFQUNoQjs7QUE5VWpDO1VBaVZnQyxrQkFBaUIsRUFDcEI7O0FBbFY3QjtJQThWd0IsMEJEM1VELEVDNFVGOztBQS9WckI7SUF3V3dCLDBCRG5WQSxFQ29WSDs7QUF6V3JCO0lBa1h3QiwwQkQvVkQsRUNnV0Y7O0FBblhyQjtJQTRYd0IsMEJEMVdJLEVDMldQOztBQTdYckI7SUFzWXdCLDBCRHBYSSxFQ3FYUDs7QUF2WXJCO0lBZ1p3QiwwQkQ3WEQsRUM4WEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVuc2UtZWRpdC9wYWdlcy9leHBlbnNlLWVkaXQvZXhwZW5zZS1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi5pdHgtaGVscGRlc2stZWRpdCB7XG4gICAgcGFkZGluZy10b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgIHBhZGRpbmctYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDI7XG4gICAgcGFkZGluZy1yaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgIHBhZGRpbmctbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgLmJsb2NrLWhlbHBkZXNrLWVkaXQge1xuXG4gICAgICAgICYuc2hlbGwge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyLjF2aDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYTphZnRlcixcbiAgICAgICAgICAgICAgICBwOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkaXR4LXRleHQtZGFyaywgMC42NSk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi4xdmg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7IGhlaWdodDogMTAwJTsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGl0eC1sYWJlbC1saWdodHJlZDtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlc3BvbnNlIGlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpbGVzIHtcblxuICAgICAgICAgICAgICAgIC8vIFNQSU5ORVJcbiAgICAgICAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJGl0eC1kZWZhdWx0LXBhZGRpbmcgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zcGlubmVyID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC1sYWJlbC1kYXJrYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc3Bpbm5lciAuYm91bmNlMSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zcGlubmVyIC5ib3VuY2UyIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gICAgICAgICAgICAgICAgICAgIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICB9IDQwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTUElOTkVSXG5cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogKCRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMykgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWRhcms7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maWxlcyB7XG5cbiAgICAgICAgICAgICAgICAvLyBTUElOTkVSXG4gICAgICAgICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICRpdHgtZGVmYXVsdC1wYWRkaW5nIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3Bpbm5lciAuYm91bmNlMSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3Bpbm5lciAuYm91bmNlMiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXZoO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gICAgICAgICAgICAgICAgICAgIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gICAgICAgICAgICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICB9IDQwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU1BJTk5FUlxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICgkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDMpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICgkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDMpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2Y0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNNZWRpdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgICAgICAmLmNyZWF0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW5bY2xhc3NePWl0eC1pY29uLV0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGl0eC1kZWZhdWx0LWd1dHRlciAvIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtaWNvbnMtZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICAgICAgICAgICAgICByaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LXRleHQtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXZ3O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogM3ZoIDAgMCAwO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWRhcmtlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNSZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDYgJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDZweCA2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjBmM2Y0IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmF1dGhvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5tZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmM2ZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggMCA2cHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZGVmM2ZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gLy8gRk9STS1HUk9VUFxuXG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jcmVhdGVkIHtcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWdyZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnBlbmRpbmcge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pbnByb2dyZXNzIHtcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jb21wbGV0ZWQge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsb3NlZCB7XG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC1sYWJlbC1yZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.ts ***!
  \******************************************************************************/
/*! exports provided: ExpenseEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseEditPage", function() { return ExpenseEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_services_expense_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/expense.service */ "./src/app/modules/core/services/expense.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/references/currencies.service */ "./src/app/modules/core/services/references/currencies.service.ts");
/* harmony import */ var _core_services_references_expense_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../core/services/references/expense-categories.service */ "./src/app/modules/core/services/references/expense-categories.service.ts");
/* harmony import */ var _core_services_references_payment_methods_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../core/services/references/payment-methods.service */ "./src/app/modules/core/services/references/payment-methods.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");















var ExpenseEditPage = /** @class */ (function () {
    function ExpenseEditPage(fb, router, route, createRequestService, sessionService, expenseService, currenciesService, expenseCategoriesService, paymentMethodsService, langService, sanitizer) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createRequestService = createRequestService;
        this.sessionService = sessionService;
        this.expenseService = expenseService;
        this.currenciesService = currenciesService;
        this.expenseCategoriesService = expenseCategoriesService;
        this.paymentMethodsService = paymentMethodsService;
        this.langService = langService;
        this.sanitizer = sanitizer;
        this.completeRequest = false;
        this.requestStatusClass = 'shell';
        this.base64Files = [];
        this.translation = this.langService.lang;
        this.response = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            response: this.response,
            file: this.file
        });
        this.route.params.subscribe(function (params) {
            _this.requestId = params['id'];
        });
        this.sessionService.userInfos$.subscribe(function (res) {
            _this.userInfos = res;
        });
        this.combinedExpenseByIdAndMessages = Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["combineLatest"])(this.expenseService.expenseById$, this.expenseService.expenseMessages$);
        this.combinedExpenseByIdAndMessagesObs = this.combinedExpenseByIdAndMessages.subscribe(function (_a) {
            var expenseById = _a[0], expenseMessages = _a[1];
            _this.request = expenseById;
            _this.requestMessages = expenseMessages;
            _this.setStatus();
            _this.getExpenseEvent();
            _this.getExpenseCat(_this.request.ExpenseInfo.Category);
            _this.getCurrency(_this.request.ExpenseInfo.Currency);
            _this.getPaymentMethod(_this.request.ExpenseInfo.PaymentMethod);
            if (_this.request.AttachmentFiles) {
                _this.getAttachedFiles();
            }
            var isEditMode = _this.request.Status.ID === 2 ? true : false;
            _this.createRequestService.editRequestView(true, isEditMode);
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                _this.addMessage();
            }
            else {
                _this.markAllDirty(_this.helpdeskForm);
            }
        });
    }
    ExpenseEditPage.prototype.ngOnInit = function () {
        this.loadData();
        this.sessionService.getUserInfos();
    };
    ExpenseEditPage.prototype.ngOnDestroy = function () {
        this.createRequestService.createRequest(false);
        this.createRequestService.editRequestView(false, false);
        this.combinedExpenseByIdAndMessagesObs.unsubscribe();
        this.sendRequestSubscription.unsubscribe();
    };
    ExpenseEditPage.prototype.loadData = function () {
        this.base64Files = [];
        this.expenseService.getExpenseRequestsById(this.requestId);
        this.expenseService.getExpenseRequestsMessages(this.requestId);
    };
    ExpenseEditPage.prototype.markAllDirty = function (control) {
        if (control.hasOwnProperty('controls')) {
            control.markAsDirty();
            var ctrl = control;
            for (var inner in ctrl.controls) {
                if (ctrl.controls[inner]) {
                    this.markAllDirty(ctrl.controls[inner]);
                }
            }
        }
        else {
            (control).markAsDirty();
        }
    };
    ExpenseEditPage.prototype.getAttachedFiles = function () {
        var _this = this;
        this.request.AttachmentFiles.forEach(function (file) {
            if (file.Type === 'JPG' || file.Type === 'jpg' || file.Type === 'jpeg' || file.Type === 'png') {
                _this.getFile(file);
            }
            else {
                _this.reorganizeFilesAndMessages({
                    base64: null,
                    type: file.Type,
                    name: file.Name,
                    date: file.Date
                });
            }
        });
    };
    ExpenseEditPage.prototype.getExpenseEvent = function () {
    };
    ExpenseEditPage.prototype.getExpenseCat = function (id) {
        var _this = this;
        this.expenseCategoriesService.getExpenseCategoriesById(id).subscribe(function (res) {
            _this.expenseCategory = res;
        });
    };
    ExpenseEditPage.prototype.getCurrency = function (code) {
        var _this = this;
        this.currenciesService.getCurrenciesByCode(code).subscribe(function (res) {
            _this.currency = res;
        });
    };
    ExpenseEditPage.prototype.getPaymentMethod = function (id) {
        var _this = this;
        this.paymentMethodsService.getPaymentMethodsById(id).subscribe(function (res) {
            _this.paymentMethod = res;
        });
    };
    ExpenseEditPage.prototype.reorganizeFilesAndMessages = function (file) {
        var pushed = false;
        for (var i = 0; i < this.requestMessages.length; i++) {
            var message = this.requestMessages[i];
            var messageDate = moment__WEBPACK_IMPORTED_MODULE_5__(message.Date);
            var fileDateUp = moment__WEBPACK_IMPORTED_MODULE_5__(file.date).add(5, 's');
            var fileDateDown = moment__WEBPACK_IMPORTED_MODULE_5__(file.date).subtract(5, 's');
            if (moment__WEBPACK_IMPORTED_MODULE_5__(messageDate).isBetween(fileDateDown, fileDateUp, 'seconds')) {
                if (!message.file) {
                    message.file = [];
                }
                message.file.push(file);
                pushed = true;
                break;
            }
        }
        if (!pushed) {
            this.base64Files.push(file);
        }
    };
    ExpenseEditPage.prototype.getFile = function (file) {
        var _this = this;
        this.expenseService.getAttachmentFile64(this.requestId, file.Name).subscribe(function (res) {
            _this.reorganizeFilesAndMessages({
                base64: _this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + res._body),
                type: 'img',
                name: file.Name,
                date: file.Date
            });
        });
    };
    ExpenseEditPage.prototype.addMessage = function () {
        var _this = this;
        this.createRequestService.requestInProgress(true);
        this.expenseService.addExpenseRequestsMessage(this.requestId, this.response.value, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            // this.loadData();
            _this.router.navigate(['/']);
        });
    };
    ExpenseEditPage.prototype.amIAuthor = function (message) {
        var iAmAuthor;
        if (message.Author === this.userInfos.data.UserInfo.DisplayName) {
            iAmAuthor = true;
        }
        else {
            iAmAuthor = false;
        }
        return iAmAuthor;
    };
    ExpenseEditPage.prototype.setStatus = function () {
        if (this.request.Status.ID === 1) {
            this.completeRequest = false;
            this.requestStatus = this.translation.requestStatus.created || 'created';
            this.requestStatusClass = 'created';
        }
        else if (this.request.Status.ID === 2) {
            this.completeRequest = true;
            this.requestStatus = this.translation.requestStatus.pending || 'Pending';
            this.requestStatusClass = 'pending';
            this.createRequestService.createRequest(true);
        }
        else if (this.request.Status.ID === 3) {
            this.completeRequest = false;
            this.requestStatus = this.translation.requestStatus.inProgress || 'In Progress';
            this.requestStatusClass = 'inprogress';
        }
        else if (this.request.Status.ID === 4) {
            this.completeRequest = false;
            this.requestStatus = this.translation.requestStatus.completed || 'Completed';
            this.requestStatusClass = 'completed';
        }
        else {
            this.completeRequest = false;
            this.requestStatus = this.translation.requestStatus.closed || 'Closed';
            this.requestStatusClass = 'closed';
        }
    };
    ExpenseEditPage.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    ExpenseEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-edit',
            template: __webpack_require__(/*! ./expense-edit.page.html */ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.html"),
            styles: [__webpack_require__(/*! ./expense-edit.page.scss */ "./src/app/modules/expense-edit/pages/expense-edit/expense-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__["CreateRequestService"],
            _core_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _core_services_expense_service__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"],
            _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_10__["CurrenciesService"],
            _core_services_references_expense_categories_service__WEBPACK_IMPORTED_MODULE_11__["ExpenseCategoriesService"],
            _core_services_references_payment_methods_service__WEBPACK_IMPORTED_MODULE_12__["PaymentMethodsService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_13__["LangService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ExpenseEditPage);
    return ExpenseEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=expense-edit-expense-edit-module.js.map