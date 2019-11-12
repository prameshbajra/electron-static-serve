(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpdesk-edit-helpdesk-edit-module"],{

/***/ "./src/app/modules/helpdesk-edit/helpdesk-edit-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/helpdesk-edit/helpdesk-edit-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HelpdeskEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskEditRoutingModule", function() { return HelpdeskEditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_helpdesk_edit_helpdesk_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/helpdesk-edit/helpdesk-edit.page */ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.ts");




var routes = [
    {
        path: ':id',
        component: _pages_helpdesk_edit_helpdesk_edit_page__WEBPACK_IMPORTED_MODULE_3__["HelpdeskEditPage"]
    }
];
var HelpdeskEditRoutingModule = /** @class */ (function () {
    function HelpdeskEditRoutingModule() {
    }
    HelpdeskEditRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HelpdeskEditRoutingModule);
    return HelpdeskEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-edit/helpdesk-edit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/helpdesk-edit/helpdesk-edit.module.ts ***!
  \***************************************************************/
/*! exports provided: HelpdeskEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskEditModule", function() { return HelpdeskEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _helpdesk_create_helpdesk_create_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../helpdesk-create/helpdesk-create.module */ "./src/app/modules/helpdesk-create/helpdesk-create.module.ts");
/* harmony import */ var _helpdesk_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpdesk-edit-routing.module */ "./src/app/modules/helpdesk-edit/helpdesk-edit-routing.module.ts");
/* harmony import */ var _pages_helpdesk_edit_helpdesk_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/helpdesk-edit/helpdesk-edit.page */ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.ts");










var HelpdeskEditModule = /** @class */ (function () {
    function HelpdeskEditModule() {
    }
    HelpdeskEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_helpdesk_edit_helpdesk_edit_page__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditPage"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _helpdesk_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__["HelpdeskEditRoutingModule"],
                _helpdesk_create_helpdesk_create_module__WEBPACK_IMPORTED_MODULE_7__["HelpdeskCreateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _pages_helpdesk_edit_helpdesk_edit_page__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditPage"]
            ]
        })
    ], HelpdeskEditModule);
    return HelpdeskEditModule;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-edit\">\n    <div class=\"block-helpdesk-edit\" ngClass=\"{{ requestStatusClass }}\">\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">{{ translation.createRequest.general.status }}</label>\n                <p class=\"created\">{{ translation.createRequest.general.createAt }} {{ request?.Date | itxMoment:'DD MMMM YYYY' }}</p>\n            </div>\n            <div class=\"label\"><div class=\"content\">{{ requestStatus }}</div></div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"content-wrapper\">\n                <label for=\"\">{{ translation.createRequest.general.priority.title }}</label>\n                <p><span class=\"itx-icon-icon_priority\"></span>{{ translation.enum.priority[request?.Priority.ID] }}</p>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{ translation.createRequest.general.typeOfRequest }}</label>\n            <p>{{ request?.Type.Name }}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{ translation.createRequest.general.titleLabel }}</label>\n            <p>{{ request?.Title }}</p>\n        </div>\n        <div class=\"form-group desc\">\n          <label for=\"\">{{ translation.createRequest.general.description }}</label>\n          <p class=\"message\">{{ request?.Description }}</p>\n          <p class=\"author\">{{ request?.Date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n          <div *ngIf=\"request?.AttachmentFiles.length > 0\" class=\"files\">\n            <ul>\n              <ng-container *ngFor=\"let file of base64Files\">\n                <li *ngIf=\"file.type === 'img'\" class=\"img\">\n                  <img [src]=\"file.base64\" alt=\"{{ file.name }}\">\n                  <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                </li>\n                <li *ngIf=\"file.type !== 'img'\" class=\"other\">\n                  <span>{{ file.type }}</span>\n                  <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                </li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"requestMessages?.length > 0\" class=\"form-group\">\n            <ul class=\"messages\">\n                <ng-container *ngFor=\"let message of requestMessages\">\n                    <li ngClass=\"{{ message.AuthorIsExpatriate ? 'me' : '' }}\">\n                        <p class=\"message\">{{ message.Message }}</p>\n                        <p class=\"author\">{{ message.Author }} {{ message.Date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                    </li>\n                    <div class=\"files\">\n                        <ul>\n                            <ng-container *ngFor=\"let file of message.file\">\n                                <li *ngIf=\"file.type === 'img'\" class=\"img\">\n                                    <img [src]=\"file.base64\" alt=\"{{ file.name }}\">\n                                    <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                                </li>\n                                <li *ngIf=\"file.type !== 'img'\" class=\"other\">\n                                    <span>{{ file.type }}</span>\n                                    <p class=\"author\">{{ file.date | itxMoment:'ddd, DD MMM. HH:mm' }}</p>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </div>\n                </ng-container>\n            </ul>\n        </div>\n        <ng-container *ngIf=\"completeRequest\">\n            <form [formGroup]=\"helpdeskForm\">\n                <div class=\"form-group response\" ngClass=\"{{ response.invalid && (response.touched || response.dirty) ? 'error' : '' }}\">\n                    <label for=\"\">{{ translation.createRequest.general.yourResponse }} <span class=\"error\" *ngIf=\"response.invalid && (response.touched || response.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                    <input type=\"text\" name=\"response\" [formControl]=\"response\" autocomplete=\"off\">\n                </div>\n                <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\"></itx-helpdesk-create-upload>\n            </form>\n        </ng-container>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.4; }\n  100% {\n    opacity: 1; } }\n\n@keyframes pulse {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.4; }\n  100% {\n    opacity: 1; } }\n\n.itx-helpdesk-edit {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a,\n  .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p {\n    color: white !important;\n    min-height: 2.1vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a span,\n    .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p span {\n      display: none; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group a:after,\n  .itx-helpdesk-edit .block-helpdesk-edit.shell .form-group p:after {\n    content: \"\";\n    display: inline-block;\n    background-color: rgba(150, 150, 150, 0.35);\n    vertical-align: sub;\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite;\n    height: 2.1vh;\n    width: 70%;\n    position: absolute;\n    left: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group .label {\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.shell .form-group .label .content {\n      height: 100%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group {\n    position: relative;\n    border-bottom: 1px solid #DADADA;\n    padding-bottom: 2.33333333vh;\n    margin-bottom: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error {\n      border-bottom: 1px solid #e75c80; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error label {\n        color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error label .error {\n          font-size: 0.8em;\n          font-family: \"poppinslight\"; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.error input {\n        border: 0 !important;\n        box-shadow: none !important; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.response input {\n      font-family: \"poppinslight\";\n      font-size: 0.9em;\n      line-height: 1.1em;\n      color: #969696;\n      opacity: 0.9;\n      text-align: left;\n      margin: 0;\n      padding: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc {\n      border: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc p {\n        border-radius: 8px;\n        width: 75%;\n        margin-left: 25%;\n        color: #2D2D2D;\n        font-family: \"poppinsregular\";\n        position: relative; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc p.message {\n          border-radius: 8px;\n          background-color: #def3fb;\n          padding: 1.75vh 2.33333333vh 1.75vh;\n          width: 75%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc p.message:after {\n            content: \"\";\n            width: 0;\n            height: 0;\n            border-style: solid;\n            border-width: 6px 0 6px 6px;\n            border-color: transparent transparent transparent #def3fb;\n            position: absolute;\n            right: -6px;\n            left: initial;\n            top: 0;\n            bottom: 0;\n            margin: auto; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc p.author {\n          margin-top: 1vh;\n          font-size: 0.7em;\n          color: #969696;\n          text-align: right; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group.desc p small {\n          font-size: 10px;\n          font-style: italic;\n          position: absolute;\n          top: 1.4vh;\n          right: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner {\n      margin: 7vh auto;\n      width: 70px;\n      text-align: center;\n      opacity: 0.4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner > div {\n      width: 16px;\n      height: 16px;\n      background-color: #093152;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files .author {\n      background-color: transparent;\n      margin: 0;\n      padding: 1vh;\n      width: 100%; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n      margin-top: 1.16666667vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li {\n        border-radius: 8px;\n        width: 50%;\n        margin-left: 50%;\n        margin-bottom: 1.16666667vh;\n        overflow: hidden;\n        text-align: center;\n        background-color: #f0f3f4; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li span {\n          display: block;\n          text-align: center;\n          color: #969696;\n          font-family: \"poppinsmedium\";\n          padding: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .files ul li img {\n          display: block;\n          margin: 0;\n          max-width: 100%;\n          color: #969696; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper {\n      float: left;\n      width: 75%;\n      padding-right: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p {\n        font-family: \"poppinslight\";\n        font-size: 0.9em;\n        line-height: 1.1em;\n        color: #969696;\n        opacity: 0.8;\n        margin: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p.created {\n          font-size: 0.7em; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .content-wrapper p span[class^=itx-icon-] {\n          font-size: 1.6em;\n          margin-right: 5px;\n          vertical-align: sub;\n          color: #b3bfc8; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .label {\n      position: absolute;\n      width: 25%;\n      padding-left: 2.33333333vh;\n      right: 2.33333333vh;\n      top: 0;\n      right: 0;\n      margin: auto;\n      height: 3vh;\n      text-align: center; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group .label .content {\n        background-color: #969696;\n        padding: 1vw;\n        color: white;\n        border-radius: 4px;\n        font-size: 0.6em;\n        text-transform: uppercase;\n        font-family: \"poppinssemibold\"; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group p {\n      font-family: \"poppinslight\";\n      font-size: 0.9em;\n      line-height: 1.1em;\n      color: #969696;\n      opacity: 0.8;\n      margin: 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages {\n      padding: 0;\n      margin: 3vh 0 0 0; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li {\n        margin-bottom: 2.33333333vh; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p {\n          position: relative;\n          color: #2D2D2D;\n          font-family: \"poppinsregular\";\n          font-size: 0.9em;\n          line-height: 1.1em; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.message {\n            border-radius: 8px;\n            background-color: #f0f3f4;\n            padding: 1.16666667vh 2.33333333vh 1.75vh;\n            width: 75%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.message:after {\n              content: \"\";\n              width: 0;\n              height: 0;\n              border-style: solid;\n              border-width: 6px 6px 6px 0;\n              border-color: transparent #f0f3f4 transparent transparent;\n              position: absolute;\n              left: -6px;\n              top: 0;\n              bottom: 0;\n              margin: auto; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li p.author {\n            margin-top: 1vh;\n            font-size: 0.7em;\n            color: #969696; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.message {\n          background-color: #def3fb;\n          margin-left: 25%; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.message:after {\n            border-width: 6px 0 6px 6px;\n            border-color: transparent transparent transparent #def3fb;\n            right: -6px;\n            left: initial; }\n\n.itx-helpdesk-edit .block-helpdesk-edit .form-group ul.messages li.me p.author {\n          text-align: right; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.error .form-group .label .content {\n    background-color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.created .form-group .label .content {\n    background-color: #b3bfc8; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.pending .form-group .label .content {\n    background-color: #DF2656; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.inprogress .form-group .label .content {\n    background-color: #093152; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.completed .form-group .label .content {\n    background-color: #093152; }\n\n.itx-helpdesk-edit .block-helpdesk-edit.closed .form-group .label .content {\n    background-color: #DF2656; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1lZGl0L3BhZ2VzL2hlbHBkZXNrLWVkaXQvaGVscGRlc2stZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSTtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksYUFBWSxFQUFBO0VBRWhCO0lBQ0ksV0FBVSxFQUFBLEVBQUE7O0FBUmxCO0VBQ0k7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLGFBQVksRUFBQTtFQUVoQjtJQUNJLFdBQVUsRUFBQSxFQUFBOztBQUlsQjtFQUNJLG9CQUF1QztFQUN2QyxxQkFBd0M7RUFDeEMsNEJBQXVDO0VBQ3ZDLDJCQUFzQyxFQW9ZekM7O0FBeFlEOztJQVlvQix3QkFBdUI7SUFDdkIsa0JBQWlCLEVBS3BCOztBQWxCakI7O01BZ0J3QixjQUFhLEVBQ2hCOztBQWpCckI7O0lBcUJvQixZQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLDRDQUFzRDtJQUN0RCxvQkFBbUI7SUFDbkIscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixjQUFhO0lBQ2IsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixRQUFPLEVBQ1Y7O0FBOUJqQjtJQWdDb0IscUNBQTRCO1lBQTVCLDZCQUE0QixFQUcvQjs7QUFuQ2pCO01Ba0MrQixhQUFZLEVBQUk7O0FBbEMvQztJQXdDWSxtQkFBa0I7SUFDbEIsaUNEeEJZO0lDeUJaLDZCQUF3QztJQUN4Qyw0QkFBdUMsRUE2UjFDOztBQXhVVDtNQThDZ0IsaUNEdENZLEVDb0RmOztBQTVEYjtRQWlEb0IsZUQxQ0csRUNnRE47O0FBdkRqQjtV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LGlCQUFnQjtRQUNoQiwwQkFBeUI7UUFDekIsK0JENU5tQixFQzZOdEI7O0FBN1BqQjtNQWlRZ0IsNEJEcE9pQjtNQ3FPakIsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixlRHBQTztNQ3FQUCxhQUFZO01BQ1osVUFBUyxFQUNaOztBQXZRYjtNQTBRZ0IsV0FBVTtNQUNWLGtCQUFpQixFQTJEcEI7O0FBdFViO1FBOFFvQiw0QkFBdUMsRUF1RDFDOztBQXJVakI7VUFpUndCLG1CQUFrQjtVQUNsQixlRG5RQztVQ29RRCw4QkRwUGE7VUNxUGIsaUJBQWdCO1VBQ2hCLG1CQUFrQixFQTRCckI7O0FBalRyQjtZQXdSNEIsbUJBQWtCO1lBQ2xCLDBCQUF5QjtZQUN6QiwwQ0FBbUY7WUFDbkYsV0FBVSxFQWdCYjs7QUEzU3pCO2NBOFJnQyxZQUFXO2NBQ1gsU0FBUTtjQUNSLFVBQVM7Y0FDVCxvQkFBbUI7Y0FDbkIsNEJBQTJCO2NBQzNCLDBEQUF5RDtjQUN6RCxtQkFBa0I7Y0FDbEIsV0FBVTtjQUNWLE9BQU07Y0FDTixVQUFTO2NBQ1QsYUFBWSxFQUVmOztBQTFTN0I7WUE2UzRCLGdCQUFlO1lBQ2YsaUJBQWdCO1lBQ2hCLGVEL1JMLEVDZ1NFOztBQWhUekI7VUFzVGdDLDBCQUF5QjtVQUN6QixpQkFBZ0IsRUFRbkI7O0FBL1Q3QjtZQTBUb0MsNEJBQTJCO1lBQzNCLDBEQUF5RDtZQUN6RCxZQUFXO1lBQ1gsY0FBYSxFQUNoQjs7QUE5VGpDO1VBaVVnQyxrQkFBaUIsRUFDcEI7O0FBbFU3QjtJQThVd0IsMEJEdlVELEVDd1VGOztBQS9VckI7SUF3VndCLDBCRC9VQSxFQ2dWSDs7QUF6VnJCO0lBa1d3QiwwQkQzVkQsRUM0VkY7O0FBbldyQjtJQTRXd0IsMEJEdFdJLEVDdVdQOztBQTdXckI7SUFzWHdCLDBCRGhYSSxFQ2lYUDs7QUF2WHJCO0lBZ1l3QiwwQkR6WEQsRUMwWEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWVkaXQvcGFnZXMvaGVscGRlc2stZWRpdC9oZWxwZGVzay1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5pdHgtaGVscGRlc2stZWRpdCB7XG4gICAgcGFkZGluZy10b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgIHBhZGRpbmctYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDI7XG4gICAgcGFkZGluZy1yaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgIHBhZGRpbmctbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgLmJsb2NrLWhlbHBkZXNrLWVkaXQge1xuXG4gICAgICAgICYuc2hlbGwge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyLjF2aDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYTphZnRlcixcbiAgICAgICAgICAgICAgICBwOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkaXR4LXRleHQtZGFyaywgMC42NSk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi4xdmg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7IGhlaWdodDogMTAwJTsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGl0eC1sYWJlbC1saWdodHJlZDtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRpdHgtcG9wcGluc0xpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucmVzcG9uc2UgaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNMaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWRhcms7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZGVzYyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNSZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWYzZmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDQgJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggMCA2cHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2RlZjNmYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmF1dGhvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maWxlcyB7XG5cbiAgICAgICAgICAgICAgICAvLyBTUElOTkVSXG4gICAgICAgICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICRpdHgtZGVmYXVsdC1wYWRkaW5nIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3Bpbm5lciAuYm91bmNlMSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3Bpbm5lciAuYm91bmNlMiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXZoO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gICAgICAgICAgICAgICAgICAgIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gICAgICAgICAgICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICB9IDQwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU1BJTk5FUlxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICgkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDMpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICgkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDMpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2Y0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNNZWRpdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgICAgICAmLmNyZWF0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW5bY2xhc3NePWl0eC1pY29uLV0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGl0eC1kZWZhdWx0LWd1dHRlciAvIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtaWNvbnMtZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICAgICAgICAgICAgICByaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LXRleHQtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXZ3O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogM3ZoIDAgMCAwO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWRhcmtlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNSZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDYgJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDZweCA2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjBmM2Y0IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmF1dGhvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5tZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmM2ZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggMCA2cHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZGVmM2ZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gLy8gRk9STS1HUk9VUFxuXG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jcmVhdGVkIHtcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWdyZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnBlbmRpbmcge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pbnByb2dyZXNzIHtcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jb21wbGV0ZWQge1xuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsb3NlZCB7XG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC1sYWJlbC1yZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.ts ***!
  \*********************************************************************************/
/*! exports provided: HelpdeskEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskEditPage", function() { return HelpdeskEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_services_helpdesk_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/helpdesk.service */ "./src/app/modules/core/services/helpdesk.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");












var HelpdeskEditPage = /** @class */ (function () {
    function HelpdeskEditPage(fb, router, route, helpdeskService, createRequestService, sessionService, langService, sanitizer) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.helpdeskService = helpdeskService;
        this.createRequestService = createRequestService;
        this.sessionService = sessionService;
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
        this.combinedHelpdeskByIdAndMessages = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["combineLatest"])(this.helpdeskService.helpdeskById$, this.helpdeskService.helpdeskMessages$);
        this.combinedHelpdeskByIdAndMessagesObs = this.combinedHelpdeskByIdAndMessages.subscribe(function (_a) {
            var helpdeskById = _a[0], helpdeskMessages = _a[1];
            _this.request = helpdeskById;
            _this.requestMessages = helpdeskMessages;
            _this.setStatus();
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
    HelpdeskEditPage.prototype.ngOnInit = function () {
        this.loadData();
        this.sessionService.getUserInfos();
    };
    HelpdeskEditPage.prototype.ngOnDestroy = function () {
        this.createRequestService.createRequest(false);
        this.createRequestService.editRequestView(false, false);
        this.combinedHelpdeskByIdAndMessagesObs.unsubscribe();
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskEditPage.prototype.loadData = function () {
        this.base64Files = [];
        this.helpdeskService.getHelpdeskRequestsById(this.requestId);
        this.helpdeskService.getHelpdeskRequestsMessages(this.requestId);
    };
    HelpdeskEditPage.prototype.getAttachedFiles = function () {
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
    HelpdeskEditPage.prototype.reorganizeFilesAndMessages = function (file) {
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
    HelpdeskEditPage.prototype.getFile = function (file) {
        var _this = this;
        this.helpdeskService.getAttachmentFile64(this.requestId, file.Name).subscribe(function (res) {
            _this.reorganizeFilesAndMessages({
                base64: _this.sanitizer.bypassSecurityTrustResourceUrl('data:image/' + file.Type + ';base64, ' + res._body),
                type: 'img',
                name: file.Name,
                date: file.Date
            });
        });
    };
    HelpdeskEditPage.prototype.addMessage = function () {
        var _this = this;
        this.createRequestService.requestInProgress(true);
        this.helpdeskService.addHelpdeskRequestsMessage(this.requestId, this.response.value, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            // this.loadData();
            _this.router.navigate(['/']);
        });
    };
    HelpdeskEditPage.prototype.markAllDirty = function (control) {
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
    HelpdeskEditPage.prototype.amIAuthor = function (message) {
        return message.Author === this.userInfos.data.UserInfo.DisplayName;
    };
    HelpdeskEditPage.prototype.setStatus = function () {
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
    HelpdeskEditPage.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-edit',
            template: __webpack_require__(/*! ./helpdesk-edit.page.html */ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.html"),
            styles: [__webpack_require__(/*! ./helpdesk-edit.page.scss */ "./src/app/modules/helpdesk-edit/pages/helpdesk-edit/helpdesk-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_helpdesk_service__WEBPACK_IMPORTED_MODULE_6__["HelpdeskService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__["CreateRequestService"],
            _core_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_10__["LangService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], HelpdeskEditPage);
    return HelpdeskEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=helpdesk-edit-helpdesk-edit-module.js.map