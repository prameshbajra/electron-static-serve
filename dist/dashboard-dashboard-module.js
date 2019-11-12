(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/modules/dashboard/components/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header ngClass=\"{{ !userInfos ? 'shell' : '' }}\" [@animate] class=\"dahsboard-header\">\n  <div #renderImgEL [@scale] class=\"img-profile-wrapper\" [ngStyle]=\"{'display': userConfig?.modules.profile.features.picture.edit.enabled === 'true' ? 'none' : 'block'}\" [ngStyle]=\"{'backgroundImage': userPicture}\" >\n   \n    <div *ngIf=\"userConfig?.modules.profile.enabled === true\" (click)=\"goToProfile()\" class=\"profile-pic-placeholder\" [ngClass]=\"{ userPic: userPicture }\">\n      <span *ngIf=\"!userPicture\" class=\"itx-icon-profil\"></span>\n    </div>\n    \n    <div *ngIf=\"userConfig?.modules.profile.enabled !== true\" class=\"profile-pic-placeholder cursor_disable\" [ngClass]=\"{ userPic: userPicture }\">\n      <span *ngIf=\"!userPicture\" class=\"itx-icon-profil\"></span>\n    </div>\n\n    <div class=\"edit\" *ngIf=\"userConfig?.modules.profile.features.picture.edit.enabled === true\" ><span (click)=\"uploadPicture($event)\" class=\"itx-icon-icon_edit\"></span></div>\n  </div>\n\n  <div class=\"info-profile-wrapper\">\n    <h3 [@fade]>{{ userInfos?.FirstName }} {{ userInfos?.LastName }}</h3>\n    <div [@fade] class=\"location-wrapper\">\n      <span class=\"ion-android-pin\"></span>\n      <p>{{ userInfos?.Company }}, {{ userInfos?.Country.Name }}</p>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/header/header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/header/header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue, .dahsboard-header .img-profile-wrapper .profile-pic-placeholder {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.dahsboard-header {\n  position: relative; }\n\n.dahsboard-header.shell h3,\n  .dahsboard-header.shell p {\n    position: relative;\n    min-width: 50%;\n    min-height: 2.8vh;\n    color: rgba(0, 0, 0, 0); }\n\n.dahsboard-header.shell p {\n    min-height: 1.8vh; }\n\n.dahsboard-header.shell h3:after,\n  .dahsboard-header.shell p:after {\n    opacity: 1;\n    border-radius: 4px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 2.8vh;\n    -webkit-animation: pulse 1.2s infinite;\n            animation: pulse 1.2s infinite; }\n\n.dahsboard-header.shell h3:after {\n    width: 60%; }\n\n.dahsboard-header.shell p:after {\n    height: 1.8vh; }\n\n.dahsboard-header .img-profile-wrapper {\n    height: 25vw;\n    width: 25vw;\n    border-radius: 50%;\n    background-color: rgba(9, 49, 82, 0.25);\n    text-align: center;\n    margin: auto;\n    position: relative;\n    background-size: cover;\n    background-repeat: none;\n    background-position: center; }\n\n.dahsboard-header .img-profile-wrapper .profile-pic-placeholder {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      margin: auto;\n      text-align: center;\n      opacity: 0.6;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden; }\n\n.dahsboard-header .img-profile-wrapper .profile-pic-placeholder.userPic {\n        opacity: 0; }\n\n.dahsboard-header .img-profile-wrapper .profile-pic-placeholder span[class^=itx-icon] {\n        font-size: 4em;\n        color: #3CADE3;\n        line-height: 24vw; }\n\n.dahsboard-header .img-profile-wrapper .cursor_disable {\n      cursor: default; }\n\n.dahsboard-header .img-profile-wrapper .edit {\n      width: 5vw;\n      height: 5vw;\n      border-radius: 50%;\n      position: absolute;\n      right: 1vw;\n      top: 1vw;\n      background-color: white;\n      line-height: 1.3em;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.dahsboard-header .img-profile-wrapper .edit span[class^=itx-icon] {\n        z-index: 1;\n        cursor: pointer;\n        color: #55C0EA;\n        font-size: 0.8em; }\n\n.dahsboard-header .img-profile-wrapper .edit:before {\n        content: \"\";\n        display: block;\n        width: 10vw;\n        height: 10vw;\n        position: absolute;\n        border-radius: 50%;\n        z-index: -100; }\n\n.dahsboard-header .info-profile-wrapper h3 {\n    color: white;\n    font-size: 1.4rem;\n    text-align: center;\n    font-family: \"poppinsregular\";\n    margin: 1.5vh 0 0.8vh; }\n\n.dahsboard-header .info-profile-wrapper .location-wrapper {\n    text-align: center;\n    margin-bottom: 3vh; }\n\n.dahsboard-header .info-profile-wrapper .location-wrapper .ion-android-pin {\n      color: white;\n      font-size: 1em;\n      display: inline-block;\n      margin-right: 5px; }\n\n.dahsboard-header .info-profile-wrapper .location-wrapper p {\n      margin: 0;\n      font-size: 0.8em;\n      display: inline-block;\n      color: white;\n      font-family: \"poppinsregular\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDNUZEO0VBQ0UsbUJBQWtCLEVBMkluQjs7QUE1SUQ7O0lBT00sbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsd0JBQXVCLEVBQ3hCOztBQVhMO0lBY00sa0JBQWlCLEVBQ2xCOztBQWZMOztJQW1CTSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFNBQVE7SUFDUixhQUFZO0lBQ1osY0FBYTtJQUNiLHVDQUE4QjtZQUE5QiwrQkFBOEIsRUFDL0I7O0FBNUJMO0lBK0JNLFdBQVUsRUFDWDs7QUFoQ0w7SUFtQ00sY0FBYSxFQUNkOztBQXBDTDtJQXdDSSxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQix3Q0FBMkQ7SUFDM0QsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUN2Qiw0QkFBMkIsRUE0RDVCOztBQTdHSDtNQW9ETSxZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLHdCQUF1QjtNQUN2QixpQkFBZ0IsRUFZakI7O0FBekVMO1FBaUVRLFdBQVUsRUFDWDs7QUFsRVA7UUFxRVEsZUFBYztRQUNkLGVEeERnQjtRQ3lEaEIsa0JBQWlCLEVBQ2xCOztBQXhFUDtNQTRFTSxnQkFBZSxFQUNoQjs7QUE3RUw7TUFnRk0sV0FBVTtNQUNWLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixTQUFRO01BQ1Isd0JEbEZXO01DbUZYLG1CQUFrQjtNQUNsQixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLHdCQUF1QixFQWtCeEI7O0FBNUdMO1FBNkZRLFdBQVU7UUFDVixnQkFBZTtRQUNmLGVEOUVnQjtRQytFaEIsaUJBQWdCLEVBQ2pCOztBQWpHUDtRQW9HUSxZQUFXO1FBQ1gsZUFBYztRQUNkLFlBQVc7UUFDWCxhQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLG1CQUFrQjtRQUNsQixjQUFZLEVBQ2I7O0FBM0dQO0lBaUhNLGFEN0dXO0lDOEdYLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsOEJEekUrQjtJQzBFL0Isc0JBQXFCLEVBQ3RCOztBQXRITDtJQXlITSxtQkFBa0I7SUFDbEIsbUJBQWtCLEVBZ0JuQjs7QUExSUw7TUE2SFEsYUR6SFM7TUMwSFQsZUFBYztNQUNkLHNCQUFxQjtNQUNyQixrQkFBcUMsRUFDdEM7O0FBaklQO01Bb0lRLFVBQVM7TUFDVCxpQkFBZ0I7TUFDaEIsc0JBQXFCO01BQ3JCLGFEbklTO01Db0lULDhCRDdGNkIsRUM4RjlCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uZGFoc2JvYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLnNoZWxsIHtcblxuICAgIGgzLFxuICAgIHAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICBtaW4taGVpZ2h0OiAyLjh2aDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgbWluLWhlaWdodDogMS44dmg7XG4gICAgfVxuXG4gICAgaDM6YWZ0ZXIsXG4gICAgcDphZnRlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyLjh2aDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS4ycyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBoMzphZnRlciB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cblxuICAgIHA6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAxLjh2aDtcbiAgICB9XG4gIH1cblxuICAuaW1nLXByb2ZpbGUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAyNXZ3O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkaXR4LWxhYmVsLWRhcmtibHVlLCAwLjc1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5wcm9maWxlLXBpYy1wbGFjZWhvbGRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgQGV4dGVuZCAuaXR4LWJhY2tncm91bmQtYmx1ZTtcblxuICAgICAgJi51c2VyUGljIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgc3BhbltjbGFzc149aXR4LWljb25dIHtcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIGNvbG9yOiAkaXR4LWdyYWRpZW50LWE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHZ3O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jdXJzb3JfZGlzYWJsZSB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLmVkaXQge1xuICAgICAgd2lkdGg6IDV2dztcbiAgICAgIGhlaWdodDogNXZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDF2dztcbiAgICAgIHRvcDogMXZ3O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIHNwYW5bY2xhc3NePWl0eC1pY29uXSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICRpdHgtbGFiZWwtYmx1ZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHotaW5kZXg6LTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mby1wcm9maWxlLXdyYXBwZXIge1xuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAkaXR4LXdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zUmVndWxhcjtcbiAgICAgIG1hcmdpbjogMS41dmggMCAwLjh2aDtcbiAgICB9XG5cbiAgICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG5cbiAgICAgIC5pb24tYW5kcm9pZC1waW4ge1xuICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyIC8gNDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRpdHgtcG9wcGluc1JlZ3VsYXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/core/services/references/user-configuration.service */ "./src/app/modules/core/services/references/user-configuration.service.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, router, sanitizer, renderer, elRef, userConfigService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.elRef = elRef;
        this.userConfigService = userConfigService;
        this.userPicture = null;
        this.userInfosObs = this.userService.userInfos$.subscribe(function (res) {
            _this.userInfos = res;
            _this.getPictureUser();
        }, function (err) {
            console.log('Error retrieving UserInfo');
        });
        this.userConfig = this.userConfigService.userconfig;
        this.userPictureSub = this.userService.userPic$.subscribe(function (res) {
            var newStyle = 'url(data:image/jpg;base64,' + res._body.replace(/"/g, '') + ')';
            _this.userPicture = newStyle;
            //this.renderImage('data:image/jpg;base64,' + res._body.replace(/"/g, ''));
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userService.getUserInfos().subscribe();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userInfosObs.unsubscribe();
        this.userPictureSub.unsubscribe();
    };
    HeaderComponent.prototype.renderImage = function (b64Img) {
        this.imgEl = this.renderer.createElement('img');
        this.canvas = this.renderer.createElement('canvas');
        this.renderer.appendChild(this.renderImgEL.nativeElement.children[0], this.imgEl);
        this.renderer.appendChild(this.renderImgEL.nativeElement.children[0], this.canvas);
        this.imgEl.src = b64Img;
        this.renderImg(b64Img);
    };
    HeaderComponent.prototype.renderImg = function (b64Img) {
        var canvas = this.canvas;
        exif_js__WEBPACK_IMPORTED_MODULE_6__["getData"](b64Img, function () {
            var allMetaData = exif_js__WEBPACK_IMPORTED_MODULE_6__["getAllTags"](this);
            var exifOrientation = allMetaData.Orientation;
            var ctx = canvas.getContext('2d');
            var width = this.imgEl.width;
            var height = this.imgEl.height;
            if (exifOrientation === 5
                || exifOrientation === 6
                || exifOrientation === 7
                || exifOrientation === 8) {
                canvas.width = height;
                canvas.height = width;
            }
            else {
                canvas.width = width;
                canvas.height = height;
            }
            // transform context before drawing image
            switch (exifOrientation) {
                case 2:
                    ctx.transform(-1, 0, 0, 1, width, 0);
                    break;
                case 3:
                    ctx.transform(-1, 0, 0, -1, width, height);
                    break;
                case 4:
                    ctx.transform(1, 0, 0, -1, 0, height);
                    break;
                case 5:
                    ctx.transform(0, 1, 1, 0, 0, 0);
                    break;
                case 6:
                    ctx.transform(0, 1, -1, 0, height, 0);
                    break;
                case 7:
                    ctx.transform(0, -1, -1, 0, height, width);
                    break;
                case 8:
                    ctx.transform(0, -1, 1, 0, 0, width);
                    break;
                default:
                    ctx.transform(1, 0, 0, 1, 0, 0);
            }
            // Draw img into canvas
            ctx.drawImage(this.imgEl, 0, 0, width, height);
        });
    };
    HeaderComponent.prototype.uploadPicture = function (event) {
        this.router.navigate(['', { outlets: { modal: 'upload-picture' } }]);
    };
    HeaderComponent.prototype.goToProfile = function () {
        var _this = this;
        // this.router.navigate(['my-profile', { outlets: { modal: null } }]);
        this.router.navigate([{ outlets: { modal: null } }], { skipLocationChange: true, queryParams: { skipLocationChange: true } }).then(function (res) {
            _this.router.navigate(['my-profile']);
        });
    };
    HeaderComponent.prototype.getPictureUser = function () {
        this.userService.getPictureUser().subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('renderImgEL'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "renderImgEL", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-dashboard-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/dashboard/components/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scale', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0, transformOrigin: '50%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0, offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1.1)', opacity: 0.8, offset: 0.8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)', opacity: 1, offset: 1 })
                    ])))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(350, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()]), { optional: true })]),
                ])
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/dashboard/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_7__["UserConfigService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.ts");




var routes = [
    {
        path: '',
        component: _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/dashboard/components/header/header.component.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-page\">\n    <itx-dashboard-header></itx-dashboard-header>\n    <div *ngIf=\"helpdeskRequests?.length <= 0\" class=\"dashboard-section-wrapper\" [@fade]>\n        <p class=\"blue-gradient\">{{ translation.dashboard.noRequestsText }}</p>\n    </div>\n    <div *ngIf=\"userConfig?.modules.requests.enabled === true\" class=\"dashboard-section-wrapper\" [@showCard]=\"helpdeskRequests.length\"> \n        <div [@slide] *ngFor=\"let request of helpdeskRequests; trackBy: trackByRequest\">\n            <itx-helpdesk-card [typeID]=\"1\" [request]=\"request\"></itx-helpdesk-card>\n        </div>\n        <button *ngIf=\"helpdeskRequests?.length > 0\" routerLink=\"/my-requests\" class=\"btn blue\">{{ translation.dashboard.btnAllRequests }}</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.dashboard-page {\n  padding-top: 10.5vh;\n  padding-bottom: 10.5vh; }\n\n.dashboard-page .dashboard-section-wrapper {\n    padding: 2.33333333vh; }\n\n.dashboard-page .dashboard-section-wrapper .btn.blue {\n      width: 100%;\n      margin-top: 1.16666667vh; }\n\n.dashboard-page .dashboard-section-wrapper .blue-gradient {\n      margin-top: 5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMsdUJBQTBDLEVBYzdDOztBQWhCRDtJQUtRLHNCQUFpQyxFQVVwQzs7QUFmTDtNQVFZLFlBQVc7TUFDWCx5QkFBMEMsRUFDN0M7O0FBVlQ7TUFhWSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uZGFzaGJvYXJkLXBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDEuNTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAxLjU7XG5cbiAgICAuZGFzaGJvYXJkLXNlY3Rpb24td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcblxuICAgICAgICAuYnRuLmJsdWUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAoJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAuYmx1ZS1ncmFkaWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.page.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/requests.service */ "./src/app/modules/core/services/requests.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/core/services/references/user-configuration.service */ "./src/app/modules/core/services/references/user-configuration.service.ts");







var DashboardPage = /** @class */ (function () {
    function DashboardPage(popupService, requestsService, langService, userConfigService) {
        var _this = this;
        this.popupService = popupService;
        this.requestsService = requestsService;
        this.langService = langService;
        this.userConfigService = userConfigService;
        this.translation = this.langService.lang;
        this.userConfig = this.userConfigService.userconfig;
        this.helpdeskRequests = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        this.allOpenRequestsObs = this.requestsService.allOpenRequests$.subscribe(function (res) {
            _this.helpdeskRequests = res;
            _this.helpdeskRequests.splice(9, _this.helpdeskRequests.length - 9);
        });
    }
    DashboardPage.prototype.ngOnInit = function () {
        var onboarding = localStorage.getItem('onboarding');
        if (onboarding === '1' || !onboarding) {
            var popupOptions = {
                title: this.translation.dashboard.popIn.title,
                text: this.translation.dashboard.popIn.desc,
                bgState: false,
                position: {
                    bottom: '14vh'
                }
            };
            this.popupService.setPopupState(true, popupOptions);
            localStorage.setItem('onboarding', '0');
        }
        else {
            // this.helpdeskRequests = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        }
        this.requestsService.getAllOpenRequests();
    };
    DashboardPage.prototype.ngOnDestroy = function () {
        this.allOpenRequestsObs.unsubscribe();
    };
    DashboardPage.prototype.trackByRequest = function (index, request) {
        return index;
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-dashboard-page',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s 750ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })))
                ]),
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
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()]), { optional: true })]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()]), { optional: true })])
                ]),
            ],
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/modules/dashboard/pages/dashboard/dashboard.page.scss")]
        })
        // tslint:disable-next-line component-class-suffix
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"],
            _core_services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_5__["LangService"],
            _app_modules_core_services_references_user_configuration_service__WEBPACK_IMPORTED_MODULE_6__["UserConfigService"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map