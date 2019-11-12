(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-helpdesk-new-helpdesk-new-module"],{

/***/ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/helpdesk-new/components/helpdesk-new.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-new\" [ngClass]=\"{ subMenuOn: showSubMenuBool }\">\n  <div *ngIf=\"createNew\" class=\"block-helpdesk-new\" [@blockState]>\n    <ng-container *ngIf=\"!showSubMenuBool\">\n      <h2 class=\"blue-gradient\">{{ translation.createRequest.menu.title }}</h2>\n      <ul class=\"mainMenu\">\n        <li *ngIf=\"userConfig?.modules.helpdesk.enabled === true\">\n          <a (click)=\"navigateTo('/create-requests/other')\">\n            <span class=\"itx-icon-demande\"></span>\n          </a>\n          <p>{{ translation.createRequest.menu.helpdesk }}</p>\n        </li>\n        <li *ngIf=\"userConfig?.modules.profile.enabled === true\">\n          <a (click)=\"showSubMenu()\">\n            <span class=\"itx-icon-profil\"></span>\n          </a>\n          <p>{{ translation.createRequest.menu.profile }}</p>\n        </li>\n        <!-- <li>\n            <a (click)=\"navigateTo('/create-requests/expense')\">\n              <span class=\"itx-icon-noteDeFrais\"></span>\n            </a>\n            <p>{{ translation.createRequest.menu.expense }}</p>\n          </li> -->\n      </ul>\n    </ng-container>\n    <ng-container *ngIf=\"showSubMenuBool\">\n      <div class=\"title-wrapper\">\n        <span (click)=\"showSubMenu()\" class=\"itx-icon-arrow\"></span>\n        <h2 class=\"blue-gradient\">{{ translation.createRequest.menu.title }}</h2>\n        <h3>Profile</h3>\n      </div>\n      <ul class=\"subMenu\">\n        <li *ngIf=\"userConfig?.modules.profile.features.address.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/adresses')\"><span\n              class=\"itx-icon-icon_adresses\"></span>{{ translation.createRequest.menu.address }}</a></li>\n        <li *ngIf=\"userConfig?.modules.profile.features.contact.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/contact')\"><span\n              class=\"itx-icon-icon_profil\"></span>{{ translation.createRequest.menu.contact }}</a></li>\n        <li *ngIf=\"userConfig?.modules.profile.features.status.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/status')\"><span\n              class=\"itx-icon-icon_coeur\"></span>{{ translation.createRequest.menu.status }}</a></li>\n        <li *ngIf=\"userConfig?.modules.profile.features.passport.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/passport')\"><span\n              class=\"itx-icon-icon_profil\"></span>{{ translation.createRequest.menu.passport }}</a></li>\n        <li *ngIf=\"userConfig?.modules.profile.features.children.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/children')\"><span\n              class=\"itx-icon-icon_profil\"></span>{{ translation.createRequest.menu.childrens }}</a></li>\n        <li *ngIf=\"userConfig?.modules.profile.features.bank.edit.enabled === true\"><a\n            (click)=\"navigateTo('/create-requests/bank')\"><span\n              class=\"itx-icon-icon_frais\"></span>{{ translation.createRequest.menu.bank }}</a></li>\n      </ul>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/helpdesk-new/components/helpdesk-new.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue, .itx-helpdesk-new .block-helpdesk-new ul.mainMenu li a {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-new {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n.itx-helpdesk-new .block-helpdesk-new {\n    border-radius: 12px 12px 0 0;\n    background-color: white;\n    padding: 2.33333333vh;\n    padding-bottom: 10.5vh;\n    position: relative;\n    border: 1px solid transparent;\n    position: absolute;\n    left: 2.33333333vh;\n    right: 2.33333333vh;\n    bottom: 0; }\n\n.itx-helpdesk-new .block-helpdesk-new.subMenuOn h2 {\n      margin: 0; }\n\n.itx-helpdesk-new .block-helpdesk-new h2 {\n      font-size: 1.6em;\n      margin: 3.5vh 0; }\n\n.itx-helpdesk-new .block-helpdesk-new .title-wrapper {\n      position: relative;\n      display: block; }\n\n.itx-helpdesk-new .block-helpdesk-new .title-wrapper .itx-icon-arrow {\n        position: absolute;\n        display: block;\n        margin-right: 2.33333333vh;\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n        color: #4F5F6A;\n        font-size: 1.2em;\n        top: 0;\n        bottom: 0;\n        height: -webkit-max-content;\n        height: -moz-max-content;\n        height: max-content;\n        margin: auto; }\n\n.itx-helpdesk-new .block-helpdesk-new .title-wrapper h2 {\n        text-align: center;\n        display: block;\n        margin: 2.33333333vh auto 1.16666667vh; }\n\n.itx-helpdesk-new .block-helpdesk-new .title-wrapper h3 {\n        text-align: center;\n        font-size: 1.6em;\n        margin: 0 0 2.33333333vh;\n        color: #4C81AA;\n        font-family: \"poppinslight\"; }\n\n.itx-helpdesk-new .block-helpdesk-new ul {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.mainMenu li {\n        display: block;\n        float: left;\n        width: 50%;\n        height: auto;\n        text-align: center;\n        margin: 2.33333333vh 0 1.75vh;\n        padding: 0 3.5vh; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.mainMenu li a {\n          display: inline-block;\n          line-height: 25vw;\n          height: 25vw;\n          width: 25vw;\n          border-radius: 50%;\n          font-size: 1.9em;\n          font-weight: normal;\n          box-shadow: inset 0 5px 18px 5px rgba(0, 0, 0, 0.2);\n          cursor: pointer; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.mainMenu li p {\n          display: block;\n          color: #2D2D2D;\n          font-size: 0.9em;\n          margin-top: 2.33333333vh; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.subMenu li {\n        border-bottom: 1px solid #DADADA; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.subMenu li:last-child {\n          border: 0; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.subMenu li a {\n          cursor: pointer;\n          padding: 2.33333333vh 0;\n          display: block;\n          margin: 0;\n          color: #2D2D2D;\n          font-size: 0.9em;\n          line-height: 1em;\n          font-family: \"poppinssemibold\"; }\n\n.itx-helpdesk-new .block-helpdesk-new ul.subMenu li a span[class^=itx-icon] {\n            font-size: 1.4em;\n            color: #b3bfc8;\n            margin-right: 5px;\n            vertical-align: sub;\n            float: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1uZXcvY29tcG9uZW50cy9oZWxwZGVzay1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMscUJBQXdDO0VBQ3hDLDRCQUF1QztFQUN2QywyQkFBc0MsRUF5SHpDOztBQTdIRDtJQU9RLDZCQUE0QjtJQUM1Qix3QkRKUztJQ0tULHNCQUFpQztJQUNqQyx1QkFBMEM7SUFDMUMsbUJBQWtCO0lBQ2xCLDhCQUE2QjtJQUU3QixtQkFBa0I7SUFDbEIsbUJBQThCO0lBQzlCLG9CQUErQjtJQUMvQixVQUFTLEVBMkdaOztBQTVITDtNQXFCWSxVQUFTLEVBQ1Y7O0FBdEJYO01BMEJZLGlCQUFnQjtNQUNoQixnQkFBZ0MsRUFDbkM7O0FBNUJUO01BK0JVLG1CQUFrQjtNQUNsQixlQUFjLEVBMEJmOztBQTFEVDtRQW1DWSxtQkFBa0I7UUFDbEIsZUFBYztRQUNkLDJCQUFvQztRQUNwQyxrQ0FBeUI7Z0JBQXpCLDBCQUF5QjtRQUN6QixlRC9CTTtRQ2dDTixpQkFBZ0I7UUFDaEIsT0FBTTtRQUNOLFVBQVM7UUFDVCw0QkFBbUI7UUFBbkIseUJBQW1CO1FBQW5CLG9CQUFtQjtRQUNuQixhQUFZLEVBQ2I7O0FBN0NYO1FBK0NZLG1CQUFrQjtRQUNsQixlQUFjO1FBQ2QsdUNBQTBELEVBQzNEOztBQWxEWDtRQW9EWSxtQkFBa0I7UUFDbEIsaUJBQWdCO1FBQ2hCLHlCQUFrQztRQUNsQyxlRHREYztRQ3VEZCw0QkRmcUIsRUNnQnRCOztBQXpEWDtNQThEWSxpQkFBZ0I7TUFDaEIsV0FBVTtNQUNWLFVBQVMsRUEyRFo7O0FBM0hUO1FBb0VnQixlQUFjO1FBQ2QsWUFBVztRQUNYLFdBQVU7UUFDVixhQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLDhCQUF1RDtRQUN2RCxpQkFBaUMsRUFvQmxDOztBQTlGZjtVQTZFa0Isc0JBQXFCO1VBQ3JCLGtCQUFpQjtVQUNqQixhQUFZO1VBQ1osWUFBVztVQUNYLG1CQUFrQjtVQUNsQixpQkFBZ0I7VUFDaEIsb0JBQW1CO1VBQ25CLG9EQUFtRDtVQUVuRCxnQkFBYyxFQUNmOztBQXZGakI7VUF5RmtCLGVBQWM7VUFDZCxlRC9ETztVQ2dFUCxpQkFBZ0I7VUFDaEIseUJBQWtDLEVBQ25DOztBQTdGakI7UUFtR2dCLGlDRHRFUSxFQzRGVDs7QUF6SGY7VUFxRytCLFVBQVMsRUFBSTs7QUFyRzVDO1VBd0drQixnQkFBZTtVQUNmLHdCQUFxQztVQUNyQyxlQUFjO1VBQ2QsVUFBUztVQUNULGVEakZPO1VDa0ZQLGlCQUFnQjtVQUNoQixpQkFBZ0I7VUFDaEIsK0JEbkVxQixFQzRFdEI7O0FBeEhqQjtZQWtIb0IsaUJBQWdCO1lBQ2hCLGVEMUZJO1lDMkZKLGtCQUFxQztZQUNyQyxvQkFBbUI7WUFDbkIsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1uZXcvY29tcG9uZW50cy9oZWxwZGVzay1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT0xPUlNcbi8vXG4kaXR4LXByaW1hcnk6ICM2OGIxZWE7XG4kaXR4LXByaW1hcnktbGlnaHQ6ICM2RUJCRjc7XG4kaXR4LXByaW1hcnktZGFyazogIzRDODFBQTtcbiRpdHgtcHJpbWFyeS1kYXJrZXI6ICMyRjUxNkE7XG5cbiRpdHgtd2hpdGU6IHdoaXRlO1xuXG4kaXR4LWxpZ2h0OiAjQjFEM0VEO1xuXG4kaXR4LXRleHQ6ICM0RjVGNkE7XG4kaXR4LWRpc2FibGVkOiAjQkRCRUJFO1xuXG4kaXR4LWFsZXJ0OiAjRTIxQTRGO1xuXG4vL1xuJGl0eC1ncmFkaWVudC1hOiAjM0NBREUzO1xuJGl0eC1ncmFkaWVudC1iOiAjNzNENkYxO1xuXG4kaXR4LWxhYmVsLWJsdWU6ICM1NUMwRUE7XG4kaXR4LWxhYmVsLWRhcmtibHVlOiAjMDkzMTUyO1xuJGl0eC1sYWJlbC1yZWQ6ICNERjI2NTY7XG4kaXR4LWxhYmVsLWxpZ2h0cmVkOiAjZTc1YzgwO1xuJGl0eC1sYWJlbC1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LWljb25zLWJsdWU6ICMwOTQwNkU7XG4vLyAkaXR4LWljb25zLWdyZXk6ICNDRUQ2REM7XG4kaXR4LWljb25zLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtdGV4dC1kYXJrZXI6ICMyRDJEMkQ7XG4kaXR4LXRleHQtZGFyazogIzk2OTY5NjtcbiRpdHgtdGV4dC1saWdodDogI0RBREFEQTtcbiRpdHgtdGV4dC1saWdodGVyOiAjRkZGRkZGO1xuXG5cbi8vIEZPTlRTXG5cbiRpdHgtb3BlblNhbnNMaWdodDogJ09wZW5TYW5zLUxpZ2h0JztcbiRpdHgtb3BlblNhbnNSZWd1bGFyOiAnT3BlblNhbnMtUmVndWxhcic7XG4kaXR4LW9wZW5TYW5zU2VtaUJvbGQ6ICdPcGVuU2Fucy1TZW1pYm9sZCc7XG4kaXR4LW9wZW5TYW5zQm9sZDogJ09wZW5TYW5zLUJvbGQnO1xuJGl0eC1pY29uczogJ2l0eC1pY29ucyc7XG5cbiRpdHgtcG9wcGluc0xpZ2h0OiAncG9wcGluc2xpZ2h0JztcbiRpdHgtcG9wcGluc01lZGl1bTogJ3BvcHBpbnNtZWRpdW0nO1xuJGl0eC1wb3BwaW5zUmVndWxhcjogJ3BvcHBpbnNyZWd1bGFyJztcbiRpdHgtcG9wcGluc1NlbWlCb2xkOiAncG9wcGluc3NlbWlib2xkJztcblxuLy8gRk9OVCBTSVpFXG5cbiRpdHgtZm9udEJpZ2dlcjogNDhweDtcbiRpdHgtZm9udEJpZzogMzJweDtcbiRpdHgtZm9udE1lZGl1bTogMjRweDtcbiRpdHgtZm9udFN0YW5kYXJkOiAxNnB4O1xuJGl0eC1mb250U21hbGw6IDE0cHg7XG4kaXR4LWZvbnRFeHRyYVNtYWxsOiAxMnB4O1xuXG5cbi8vIFRSQU5TSVRJT05cbiRpdHgtdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcblxuLy8gQ1NTIFBST1BFUlRZXG5cbi8vIExheW91dFxuJGl0eC1kZWZhdWx0LWd1dHRlcjogMjBweDtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDI6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiAyO1xuJGl0eC1kZWZhdWx0LWd1dHRlci14NDogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDQ7XG5cbi8vIEhlaWdodFxuJGl0eC1zbWFsbC1oZWlnaHQ6IDMycHg7XG4kaXR4LW1lZGl1bS1oZWlnaHQ6IDQwcHg7XG4kaXR4LWJpZy1oZWlnaHQ6IDQ1cHg7XG5cbi8vIEJvcmRlciByYWRpdXNcbiRpdHgtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kc2NyZWVuLW1kOiAxMjAwcHg7XG4kc2NyZWVuLXhzOiA3NjdweDtcblxuJGRlc2t0b3A6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDgwcHgpXCI7XG4kdGFibGV0LWxhbmRzY2FwZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweClcIjtcbiR0YWJsZXQtcG9ydHJhaXQ6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweClcIjtcbiRtb2JpbGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweClcIjtcblxuLy8gcGFkZGluZyBtYXJnaW5cbiRpdHgtZGVmYXVsdC1wYWRkaW5nOiA3dmg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1tZDogNDBweDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLXNtOiAzMHB4O1xuXG4vLyBHcmFkaWVudCBiYWNrZ3JvdW5kXG4uaXR4LWJhY2tncm91bmQtYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDgsNTksMTAyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDgsNTksMTAyLDAuOSkgMCUsIHJnYmEoOSw2NywxMTQsMC45KSAxMDAlKTtcbn1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vdGhlbWUvX3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uaXR4LWhlbHBkZXNrLW5ldyB7XG4gICAgcGFkZGluZy10b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgIHBhZGRpbmctYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDI7XG4gICAgcGFkZGluZy1yaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgIHBhZGRpbmctbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuXG4gICAgLmJsb2NrLWhlbHBkZXNrLW5ldyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICByaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgJi5zdWJNZW51T24ge1xuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAkaXR4LWRlZmF1bHQtcGFkZGluZy8yIDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgLml0eC1pY29uLWFycm93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkaXR4LWRlZmF1bHQtcGFkZGluZy8zO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIGNvbG9yOiAkaXR4LXRleHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46ICRpdHgtZGVmYXVsdC1wYWRkaW5nLzMgYXV0byAkaXR4LWRlZmF1bHQtcGFkZGluZy82O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgJGl0eC1kZWZhdWx0LXBhZGRpbmcvMztcbiAgICAgICAgICAgIGNvbG9yOiAkaXR4LXByaW1hcnktZGFyaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNMaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCTE9DSyBNRU5VXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAmLm1haW5NZW51IHtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICRpdHgtZGVmYXVsdC1wYWRkaW5nLzMgMCAkaXR4LWRlZmF1bHQtcGFkZGluZy80O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJGl0eC1kZWZhdWx0LXBhZGRpbmcvMjtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45ZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA1cHggMThweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgQGV4dGVuZCAuaXR4LWJhY2tncm91bmQtYmx1ZTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrZXI7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJGl0eC1kZWZhdWx0LXBhZGRpbmcvMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zdWJNZW51IHtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXI6IDA7IH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMykgMDtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrZXI7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNTZW1pQm9sZDtcblxuICAgICAgICAgICAgICAgICAgc3BhbltjbGFzc149aXR4LWljb25dIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtaWNvbnMtZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/helpdesk-new/components/helpdesk-new.component.ts ***!
  \***************************************************************************/
/*! exports provided: HelpdeskNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskNewComponent", function() { return HelpdeskNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/modal.service */ "./src/app/modules/core/services/modal.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/core/services/references/user-configuration.service */ "./src/app/modules/core/services/references/user-configuration.service.ts");









var HelpdeskNewComponent = /** @class */ (function () {
    function HelpdeskNewComponent(popupService, modalService, langService, router, userService, userConfigService) {
        var _this = this;
        this.popupService = popupService;
        this.modalService = modalService;
        this.langService = langService;
        this.router = router;
        this.userService = userService;
        this.userConfigService = userConfigService;
        this.showSubMenuBool = false;
        this.translation = this.langService.lang;
        this.userConfig = this.userConfigService.userconfig;
        this.modalService.modalState$.subscribe(function (res) {
            _this.createNew = res;
        });
        this.userService.userInfos$.subscribe(function (userInfos) {
            _this.userInfos = userInfos;
        });
    }
    HelpdeskNewComponent.prototype.ngOnInit = function () {
        var popupState = this.popupService.popupState;
        if (popupState) {
            this.popupService.setPopupState(false);
        }
        this.userService.getUserInfos().subscribe();
    };
    HelpdeskNewComponent.prototype.navigateTo = function (route) {
        var _this = this;
        this.router.navigate([{ outlets: { modal: null } }], { skipLocationChange: true, queryParams: { skipLocationChange: true } }).then(function (res) {
            _this.router.navigate([route]);
        });
        // this.router.navigate([route]);
    };
    HelpdeskNewComponent.prototype.showSubMenu = function () {
        this.showSubMenuBool = !this.showSubMenuBool;
    };
    HelpdeskNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-new',
            template: __webpack_require__(/*! ./helpdesk-new.component.html */ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('blockState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ bottom: '-100%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ bottom: '0' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ bottom: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ bottom: '-100%' }))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./helpdesk-new.component.scss */ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"],
            _core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__["LangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_8__["UserConfigService"]])
    ], HelpdeskNewComponent);
    return HelpdeskNewComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-new/helpdesk-new-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/helpdesk-new/helpdesk-new-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HelpdeskNewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskNewRoutingModule", function() { return HelpdeskNewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_helpdesk_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helpdesk-new.component */ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.ts");




var routes = [
    {
        path: '',
        component: _components_helpdesk_new_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskNewComponent"]
    }
];
var HelpdeskNewRoutingModule = /** @class */ (function () {
    function HelpdeskNewRoutingModule() {
    }
    HelpdeskNewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HelpdeskNewRoutingModule);
    return HelpdeskNewRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-new/helpdesk-new.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/helpdesk-new/helpdesk-new.module.ts ***!
  \*************************************************************/
/*! exports provided: HelpdeskNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskNewModule", function() { return HelpdeskNewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _helpdesk_new_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpdesk-new-routing.module */ "./src/app/modules/helpdesk-new/helpdesk-new-routing.module.ts");
/* harmony import */ var _components_helpdesk_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-new.component */ "./src/app/modules/helpdesk-new/components/helpdesk-new.component.ts");









var HelpdeskNewModule = /** @class */ (function () {
    function HelpdeskNewModule() {
    }
    HelpdeskNewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_helpdesk_new_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskNewComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _helpdesk_new_routing_module__WEBPACK_IMPORTED_MODULE_7__["HelpdeskNewRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _components_helpdesk_new_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskNewComponent"]
            ]
        })
    ], HelpdeskNewModule);
    return HelpdeskNewModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-helpdesk-new-helpdesk-new-module.js.map