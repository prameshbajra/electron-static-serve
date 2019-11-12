(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~expense-edit-expense-edit-module~helpdesk-create-helpdesk-create-module~helpdesk-edit-helpde~5ee8e489"],{

/***/ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js ***!
  \**************************************************************************/
/*! exports provided: NgxSpinner, SPINNER_ANIMATIONS, SPINNER_PLACEMENT, NgxSpinnerModule, ɵk, ɵf, ɵi, ɵg, ɵj, ɵe, ɵn, ɵh, ɵl, ɵd, ɵc, ɵb, ɵa, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinner", function() { return NgxSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_ANIMATIONS", function() { return SPINNER_ANIMATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_PLACEMENT", function() { return SPINNER_PLACEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function() { return NgxSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return BarsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BlinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DoubleBounceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return FbCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return FoldingCubeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return HorizontalBounceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgxSpinnerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return PlateRotateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return RotatingDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return Spin1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Spin2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Spin3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Spin4Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return SpinnerAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSpinnerService = /** @class */ (function () {
    function NgxSpinnerService() {
    }
    NgxSpinnerService.globalSpinnerConf = {};
    NgxSpinnerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxSpinnerService.ctorParameters = function () { return []; };
    return NgxSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SPINNER_PLACEMENT = {
    block_window: "block_window",
    block_ui: "block_ui",
    inplace: "inplace",
};
/** @enum {number} */
var SPINNER_ANIMATIONS = {
    blink: 0,
    fb_card: 1,
    plate_rotate: 2,
    double_bounce: 3,
    folding_cube: 4,
    bars: 5,
    rotating_dots: 6,
    horizontal_bounce: 7,
    spin_1: 8,
    spin_2: 9,
    spin_3: 10,
};
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.blink] = "blink";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.fb_card] = "fb_card";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.plate_rotate] = "plate_rotate";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.double_bounce] = "double_bounce";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.folding_cube] = "folding_cube";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.bars] = "bars";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.rotating_dots] = "rotating_dots";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.horizontal_bounce] = "horizontal_bounce";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.spin_1] = "spin_1";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.spin_2] = "spin_2";
SPINNER_ANIMATIONS[SPINNER_ANIMATIONS.spin_3] = "spin_3";
var /** @type {?} */ DEFAULT_CONFIG = {
    placement: SPINNER_PLACEMENT.inplace,
    animation: SPINNER_ANIMATIONS.blink,
    size: "2rem",
    bgColor: "rgba(255,255,255,0.8)",
    color: "#e46521",
    secondaryColor: "#1574b3",
    tertiaryColor: "#c31a4f"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSpinner = /** @class */ (function () {
    function NgxSpinner(ngxSpinnerService) {
        this.ngxSpinnerService = ngxSpinnerService;
        this._config = {};
        // assign default config
        this.assignConfig(DEFAULT_CONFIG);
        // override wtih globle config
        this.assignConfig(NgxSpinnerService.globalSpinnerConf);
        // hide spinner as default
        this._isVisible = false;
    }
    Object.defineProperty(NgxSpinner.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isVisible;
        },
        set: /**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            if (condition)
                this.show();
            else
                this.hide();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxSpinner.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            // override with spinner config
            this.assignConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxSpinner.prototype.show = /**
     * @return {?}
     */
    function () {
        this._isVisible = true;
    };
    /**
     * @return {?}
     */
    NgxSpinner.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._isVisible = false;
    };
    /**
     * @return {?}
     */
    NgxSpinner.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this._isVisible = !this._isVisible;
    };
    /**
     * @param {?} conf
     * @return {?}
     */
    NgxSpinner.prototype.assignConfig = /**
     * @param {?} conf
     * @return {?}
     */
    function (conf) {
        var /** @type {?} */ cnf = Object.assign(conf);
        for (var /** @type {?} */ prop in cnf) {
            if (cnf.hasOwnProperty(prop))
                this._config[prop] = cnf[prop];
        }
    };
    NgxSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-spinner',
                    template: "<!-- spinner -->\n<ng-template *ngIf=\"visible\" [spinner-animation]=\"config\"></ng-template>",
                    styles: [":host.block_window{align-items:center;justify-content:center;position:fixed;display:flex;width:100%;height:100%;top:0;left:0;z-index:10002}:host.block_ui{align-items:center;justify-content:center;position:absolute;display:flex;width:100%;height:100%;top:0;left:0;z-index:10001}:host.inplace{position:absolute;background:0 0!important;display:flex;width:100%;height:100%;top:0;left:0;align-items:center;justify-content:start}"],
                    host: { '[class]': 'visible?config.placement:""', '[style.background]': 'visible?config.bgColor:""' }
                },] },
    ];
    /** @nocollapse */
    NgxSpinner.ctorParameters = function () { return [
        { type: NgxSpinnerService }
    ]; };
    NgxSpinner.propDecorators = {
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxSpinner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BlinkComponent = /** @class */ (function () {
    function BlinkComponent() {
    }
    /**
     * @return {?}
     */
    BlinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BlinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'spinner-blink',
                    template: "<div class=\"sk-scaleout\" [style.height]=\"config.size\" [style.width]=\"config.size\" [style.background]=\"config.color\">\n</div>",
                    styles: [".sk-scaleout{margin:0;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-scaleout;animation:1s ease-in-out infinite sk-scaleout}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"]
                },] },
    ];
    /** @nocollapse */
    BlinkComponent.ctorParameters = function () { return []; };
    return BlinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FbCardComponent = /** @class */ (function () {
    function FbCardComponent() {
    }
    /**
     * @return {?}
     */
    FbCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FbCardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-fb-card',
                    template: "<div class=\"FB-Loading-Card\" [style.height]=\"config.size\" [style.width]=\"config.size\">\n\t<div>\n\t <div [style.background]=\"config.color\"></div>\n\t <div [style.background]=\"config.color\"></div>\n\t <div [style.background]=\"config.color\"></div>\n\t</div>\n\t<div [style.background]=\"config.color\"></div>\n\t<div [style.background]=\"config.color\"></div>\n\t<div [style.background]=\"config.color\"></div>\n </div>",
                    styles: ["@charset \"UTF-8\";.FB-Loading-Card{display:block;padding:12px}.FB-Loading-Card>div:nth-child(1){width:100%;height:30px}.FB-Loading-Card>div>div:nth-child(1){position:relative;left:0;height:40px;width:40px;-webkit-animation-name:shine;animation-name:shine;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.FB-Loading-Card>div:nth-child(2),.FB-Loading-Card>div:nth-child(3),.FB-Loading-Card>div:nth-child(4),.FB-Loading-Card>div>div:nth-child(2),.FB-Loading-Card>div>div:nth-child(3){position:relative;height:6px;-webkit-animation-name:shine;animation-name:shine;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes shine{from{transition:none}to{background-color:#f6f7f8;transition:all .3s ease-out}}@keyframes shine{from{transition:none}to{background-color:#f6f7f8;transition:all .3s ease-out}}.FB-Loading-Card>div>div:nth-child(2){left:50px;top:-33px;width:25%}.FB-Loading-Card>div>div:nth-child(3){left:50px;top:-20px;width:15%}.FB-Loading-Card>div:nth-child(2){left:0;top:30px;width:80%}.FB-Loading-Card>div:nth-child(3){left:0;top:45px;width:90%}.FB-Loading-Card>div:nth-child(4){left:0;top:60px;width:50%}"]
                },] },
    ];
    /** @nocollapse */
    FbCardComponent.ctorParameters = function () { return []; };
    return FbCardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlateRotateComponent = /** @class */ (function () {
    function PlateRotateComponent() {
    }
    /**
     * @return {?}
     */
    PlateRotateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PlateRotateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-plate-rotate',
                    template: "<div class=\"spinner\" [style.height]=\"config.size\" [style.width]=\"config.size\" [style.background]=\"config.color\"\t></div>",
                    styles: [".spinner{width:40px;height:40px;-webkit-animation:1.2s ease-in-out infinite sk-rotateplane;animation:1.2s ease-in-out infinite sk-rotateplane}@-webkit-keyframes sk-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}100%{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotateplane{0%{transform:perspective(120px) rotateX(0) rotateY(0);-webkit-transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
                },] },
    ];
    /** @nocollapse */
    PlateRotateComponent.ctorParameters = function () { return []; };
    return PlateRotateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DoubleBounceComponent = /** @class */ (function () {
    function DoubleBounceComponent() {
    }
    /**
     * @return {?}
     */
    DoubleBounceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DoubleBounceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-double-bounce',
                    template: "<div class=\"spinner\" [style.height]=\"config.size\" [style.width]=\"config.size\">\n  <div class=\"double-bounce1\" [style.background]=\"config.color\"></div>\n  <div class=\"double-bounce2\" [style.background]=\"config.secondaryColor\"></div>\n</div>",
                    styles: [".spinner{position:relative}.double-bounce1,.double-bounce2{width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-bounce;animation:2s ease-in-out infinite sk-bounce}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"]
                },] },
    ];
    /** @nocollapse */
    DoubleBounceComponent.ctorParameters = function () { return []; };
    return DoubleBounceComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FoldingCubeComponent = /** @class */ (function () {
    function FoldingCubeComponent() {
    }
    /**
     * @return {?}
     */
    FoldingCubeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles.nativeElement.innerHTML = "<style>.sk-folding-cube .sk-cube:before { background-color: " + this.config.color + " }</style>";
    };
    FoldingCubeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-folding-cube',
                    template: "<div class=\"sk-folding-cube\" [style.height]=\"config.size\" [style.width]=\"config.size\">\n  <div class=\"sk-cube1 sk-cube\"></div>\n  <div class=\"sk-cube2 sk-cube\"></div>\n  <div class=\"sk-cube4 sk-cube\"></div>\n  <div class=\"sk-cube3 sk-cube\"></div>\n</div>\n<div #styles></div>",
                    styles: [".sk-folding-cube{position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.sk-folding-cube .sk-cube{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube .sk-cube:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:2.4s linear infinite both sk-foldCubeAngle;animation:2.4s linear infinite both sk-foldCubeAngle;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube .sk-cube2{-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube .sk-cube3{-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube .sk-cube4{-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube .sk-cube2:before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube .sk-cube3:before{-webkit-animation-delay:.6s;animation-delay:.6s}.sk-folding-cube .sk-cube4:before{-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}"]
                },] },
    ];
    /** @nocollapse */
    FoldingCubeComponent.ctorParameters = function () { return []; };
    FoldingCubeComponent.propDecorators = {
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["styles",] }]
    };
    return FoldingCubeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BarsComponent = /** @class */ (function () {
    function BarsComponent() {
    }
    /**
     * @return {?}
     */
    BarsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BarsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-bars',
                    template: "<div class=\"spinner\" [style.height]=\"config.size\" >\n  <div class=\"rect1\" [style.background]=\"config.color\"></div>\n  <div class=\"rect2\" [style.background]=\"config.color\"></div>\n  <div class=\"rect3\" [style.background]=\"config.color\"></div>\n  <div class=\"rect4\" [style.background]=\"config.color\"></div>\n  <div class=\"rect5\" [style.background]=\"config.color\"></div>\n</div>",
                    styles: [".spinner{margin:0}.spinner>div{height:100%;width:.4rem;margin:0 .15rem;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-stretchdelay;animation:1.2s ease-in-out infinite sk-stretchdelay}.spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}"]
                },] },
    ];
    /** @nocollapse */
    BarsComponent.ctorParameters = function () { return []; };
    return BarsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RotatingDotsComponent = /** @class */ (function () {
    function RotatingDotsComponent() {
    }
    /**
     * @return {?}
     */
    RotatingDotsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RotatingDotsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-rotating-dots',
                    template: "<div class=\"spinner\" [style.height]=\"config.size\" [style.width]=\"config.size\">\n  <div class=\"dot1\" [style.background]=\"config.color\"></div>\n  <div class=\"dot2\" [style.background]=\"config.color\"></div>\n</div>",
                    styles: [".spinner{position:relative;text-align:center;-webkit-animation:2s linear infinite sk-rotate;animation:2s linear infinite sk-rotate}.dot1,.dot2{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-bounce;animation:2s ease-in-out infinite sk-bounce}.dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-rotate{100%{-webkit-transform:rotate(360deg)}}@keyframes sk-rotate{100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"]
                },] },
    ];
    /** @nocollapse */
    RotatingDotsComponent.ctorParameters = function () { return []; };
    return RotatingDotsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HorizontalBounceComponent = /** @class */ (function () {
    function HorizontalBounceComponent() {
    }
    /**
     * @return {?}
     */
    HorizontalBounceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HorizontalBounceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-horizontal-bounce',
                    template: "<div class=\"spinner\">\n  <div class=\"bounce1\" [style.height]=\"config.size\" [style.width]=\"config.size\" [style.background]=\"config.color\"></div>\n  <div class=\"bounce2\" [style.height]=\"config.size\" [style.width]=\"config.size\" [style.background]=\"config.color\"></div>\n  <div class=\"bounce3\" [style.height]=\"config.size\" [style.width]=\"config.size\" [style.background]=\"config.color\"></div>\n</div>",
                    styles: [".spinner{text-align:center}.spinner>div{margin:0 .15rem;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-bouncedelay;animation:1.4s ease-in-out infinite both sk-bouncedelay}.spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"]
                },] },
    ];
    /** @nocollapse */
    HorizontalBounceComponent.ctorParameters = function () { return []; };
    return HorizontalBounceComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Spin1Component = /** @class */ (function () {
    function Spin1Component() {
    }
    /**
     * @return {?}
     */
    Spin1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles.nativeElement.innerHTML = "<style>.sk-circle .sk-child:before { background-color: " + this.config.color + " }</style>";
    };
    Spin1Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-spin1',
                    template: "<div class=\"sk-circle\" [style.height]=\"config.size\" [style.width]=\"config.size\">\n  <div class=\"sk-circle1 sk-child\" ></div>\n  <div class=\"sk-circle2 sk-child\" ></div>\n  <div class=\"sk-circle3 sk-child\" ></div>\n  <div class=\"sk-circle4 sk-child\" ></div>\n  <div class=\"sk-circle5 sk-child\" ></div>\n  <div class=\"sk-circle6 sk-child\" ></div>\n  <div class=\"sk-circle7 sk-child\" ></div>\n  <div class=\"sk-circle8 sk-child\" ></div>\n  <div class=\"sk-circle9 sk-child\" ></div>\n  <div class=\"sk-circle10 sk-child\"></div>\n  <div class=\"sk-circle11 sk-child\"></div>\n  <div class=\"sk-circle12 sk-child\"></div>\n</div>\n<div #styles></div>",
                    styles: [".sk-circle{position:relative}.sk-circle .sk-child{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle .sk-child:before{content:'';display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleBounceDelay;animation:1.2s ease-in-out infinite both sk-circleBounceDelay}.sk-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleBounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circleBounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"]
                },] },
    ];
    /** @nocollapse */
    Spin1Component.ctorParameters = function () { return []; };
    Spin1Component.propDecorators = {
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["styles",] }]
    };
    return Spin1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Spin2Component = /** @class */ (function () {
    function Spin2Component() {
    }
    /**
     * @return {?}
     */
    Spin2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles.nativeElement.innerHTML = "<style>.sk-fading-circle .sk-circle:before { background-color: " + this.config.color + " }</style>";
    };
    Spin2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-spin2',
                    template: "<div class=\"sk-fading-circle\" [style.height]=\"config.size\" [style.width]=\"config.size\" >\n\t\t<div class=\"sk-circle1 sk-circle\"></div>\n\t\t<div class=\"sk-circle2 sk-circle\"></div>\n\t\t<div class=\"sk-circle3 sk-circle\"></div>\n\t\t<div class=\"sk-circle4 sk-circle\"></div>\n\t\t<div class=\"sk-circle5 sk-circle\"></div>\n\t\t<div class=\"sk-circle6 sk-circle\"></div>\n\t\t<div class=\"sk-circle7 sk-circle\"></div>\n\t\t<div class=\"sk-circle8 sk-circle\"></div>\n\t\t<div class=\"sk-circle9 sk-circle\"></div>\n\t\t<div class=\"sk-circle10 sk-circle\"></div>\n\t\t<div class=\"sk-circle11 sk-circle\"></div>\n\t\t<div class=\"sk-circle12 sk-circle\"></div>\n\t</div>\n\t<div #styles></div>",
                    styles: [".sk-fading-circle{position:relative}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:'';display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
                },] },
    ];
    /** @nocollapse */
    Spin2Component.ctorParameters = function () { return []; };
    Spin2Component.propDecorators = {
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["styles",] }]
    };
    return Spin2Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Spin3Component = /** @class */ (function () {
    function Spin3Component() {
    }
    /**
     * @return {?}
     */
    Spin3Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Spin3Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-spin3',
                    template: "<div [style.height]=\"config.size\" [style.width]=\"config.size\" class=\"lds-ring\">\n\t<div [style.height]=\"config.size\" [style.width]=\"config.size\" [style.borderTopColor]=\"config.color\"></div>\n\t<div [style.height]=\"config.size\" [style.width]=\"config.size\" [style.borderTopColor]=\"config.color\"></div>\n\t<div [style.height]=\"config.size\" [style.width]=\"config.size\" [style.borderTopColor]=\"config.color\"></div>\n\t<div [style.height]=\"config.size\" [style.width]=\"config.size\" [style.borderTopColor]=\"config.color\"></div>\n</div>",
                    styles: [".lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid transparent;border-radius:50%;-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring}.lds-ring div:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                },] },
    ];
    /** @nocollapse */
    Spin3Component.ctorParameters = function () { return []; };
    return Spin3Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SpinnerAnimationDirective = /** @class */ (function () {
    function SpinnerAnimationDirective(viewContainerRef, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Object.defineProperty(SpinnerAnimationDirective.prototype, "config", {
        set: /**
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this.init(conf);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} conf
     * @return {?}
     */
    SpinnerAnimationDirective.prototype.init = /**
     * @param {?} conf
     * @return {?}
     */
    function (conf) {
        var /** @type {?} */ componenet = BlinkComponent;
        if (conf.animation == SPINNER_ANIMATIONS.blink) {
            // blink
            componenet = BlinkComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.fb_card) {
            // fb_card
            componenet = FbCardComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.plate_rotate) {
            componenet = PlateRotateComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.double_bounce) {
            componenet = DoubleBounceComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.folding_cube) {
            componenet = FoldingCubeComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.bars) {
            componenet = BarsComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.rotating_dots) {
            componenet = RotatingDotsComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.horizontal_bounce) {
            componenet = HorizontalBounceComponent;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.spin_1) {
            componenet = Spin1Component;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.spin_2) {
            componenet = Spin2Component;
        }
        else if (conf.animation == SPINNER_ANIMATIONS.spin_3) {
            componenet = Spin3Component;
        } /* else if(conf.animation==SPINNER_ANIMATIONS.spin_4) {
                    componenet = Spin4Component;
                } */
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(componenet);
        this.viewContainerRef.clear();
        var /** @type {?} */ componentRef = this.viewContainerRef.createComponent(componentFactory);
        (componentRef.instance).config = conf;
    };
    SpinnerAnimationDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[spinner-animation]'
                },] },
    ];
    /** @nocollapse */
    SpinnerAnimationDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    SpinnerAnimationDirective.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['spinner-animation',] }]
    };
    return SpinnerAnimationDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Spin4Component = /** @class */ (function () {
    function Spin4Component() {
    }
    /**
     * @return {?}
     */
    Spin4Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Spin4Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-spin4',
                    template: "",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    Spin4Component.ctorParameters = function () { return []; };
    return Spin4Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSpinnerModule = /** @class */ (function () {
    function NgxSpinnerModule() {
    }
    /**
     * @param {?=} conf
     * @return {?}
     */
    NgxSpinnerModule.config = /**
     * @param {?=} conf
     * @return {?}
     */
    function (conf) {
        if (conf === void 0) { conf = {}; }
        NgxSpinnerService.globalSpinnerConf = Object.assign(conf);
        return this;
    };
    NgxSpinnerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    entryComponents: [
                        Spin4Component, Spin3Component, Spin2Component, Spin1Component, HorizontalBounceComponent, BlinkComponent, FbCardComponent, PlateRotateComponent, DoubleBounceComponent, FoldingCubeComponent, BarsComponent, RotatingDotsComponent
                    ],
                    declarations: [
                        SpinnerAnimationDirective,
                        NgxSpinner,
                        BlinkComponent, FbCardComponent, PlateRotateComponent, DoubleBounceComponent, FoldingCubeComponent, BarsComponent, RotatingDotsComponent, HorizontalBounceComponent, Spin1Component, Spin2Component, Spin3Component, Spin4Component
                    ],
                    exports: [NgxSpinner],
                    providers: [NgxSpinnerService]
                },] },
    ];
    return NgxSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHBvb2wtbmd4LXNwaW5uZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL25neC1zcGlubmVyL25neC1zcGlubmVyLnNlcnZpY2UudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL25neC1zcGlubmVyLnR5cGVzLnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9uZ3gtc3Bpbm5lci9uZ3gtc3Bpbm5lci5jb21wb25lbnQudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL2JsaW5rL2JsaW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQGhhcmRwb29sL25neC1zcGlubmVyL3NyYy9hcHAvbmd4LXNwaW5uZXIvZmItY2FyZC9mYi1jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQGhhcmRwb29sL25neC1zcGlubmVyL3NyYy9hcHAvbmd4LXNwaW5uZXIvcGxhdGUtcm90YXRlL3BsYXRlLXJvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL2RvdWJsZS1ib3VuY2UvZG91YmxlLWJvdW5jZS5jb21wb25lbnQudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL2ZvbGRpbmctY3ViZS9mb2xkaW5nLWN1YmUuY29tcG9uZW50LnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9iYXJzL2JhcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9yb3RhdGluZy1kb3RzL3JvdGF0aW5nLWRvdHMuY29tcG9uZW50LnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9ob3Jpem9udGFsLWJvdW5jZS9ob3Jpem9udGFsLWJvdW5jZS5jb21wb25lbnQudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL3NwaW4xL3NwaW4xLmNvbXBvbmVudC50cyIsIm5nOi8vQGhhcmRwb29sL25neC1zcGlubmVyL3NyYy9hcHAvbmd4LXNwaW5uZXIvc3BpbjIvc3BpbjIuY29tcG9uZW50LnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9zcGluMy9zcGluMy5jb21wb25lbnQudHMiLCJuZzovL0BoYXJkcG9vbC9uZ3gtc3Bpbm5lci9zcmMvYXBwL25neC1zcGlubmVyL3NwaW5uZXItYW5pbWF0aW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGhhcmRwb29sL25neC1zcGlubmVyL3NyYy9hcHAvbmd4LXNwaW5uZXIvc3BpbjQvc3BpbjQuY29tcG9uZW50LnRzIiwibmc6Ly9AaGFyZHBvb2wvbmd4LXNwaW5uZXIvc3JjL2FwcC9uZ3gtc3Bpbm5lci9uZ3gtc3Bpbm5lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNwaW5uZXJDb25maWcgfSBmcm9tICcuLi9uZ3gtc3Bpbm5lci50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyU2VydmljZSB7XG5cdFxuXHRzdGF0aWMgZ2xvYmFsU3Bpbm5lckNvbmY6IElTcGlubmVyQ29uZmlnID0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblx0XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElTcGlubmVyQ29uZmlnIHtcblx0cGxhY2VtZW50PzogU1BJTk5FUl9QTEFDRU1FTlQ7XG5cdGFuaW1hdGlvbj86IFNQSU5ORVJfQU5JTUFUSU9OUztcblx0c2l6ZT86IHN0cmluZztcblx0YmdDb2xvcj86IHN0cmluZztcblx0Y29sb3I/OiBzdHJpbmc7XG5cdHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuXHR0ZXJ0aWFyeUNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTcGlubmVyQW5pbWF0aW9uIHtcblx0Y29uZmlnOiBJU3Bpbm5lckNvbmZpZztcbn1cblxuZXhwb3J0IGVudW0gU1BJTk5FUl9QTEFDRU1FTlQge1xuXHRibG9ja193aW5kb3cgPSBcImJsb2NrX3dpbmRvd1wiLFxuXHRibG9ja191aSA9IFwiYmxvY2tfdWlcIixcblx0aW5wbGFjZSA9IFwiaW5wbGFjZVwiXG59XG5cbmV4cG9ydCBlbnVtIFNQSU5ORVJfQU5JTUFUSU9OUyB7XG5cdGJsaW5rLFxuXHRmYl9jYXJkLFxuXHRwbGF0ZV9yb3RhdGUsXG5cdGRvdWJsZV9ib3VuY2UsXG5cdGZvbGRpbmdfY3ViZSxcblx0YmFycyxcblx0cm90YXRpbmdfZG90cyxcblx0aG9yaXpvbnRhbF9ib3VuY2UsXG5cdHNwaW5fMSxcblx0c3Bpbl8yLFxuXHRzcGluXzNcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHOiBJU3Bpbm5lckNvbmZpZyA9IHtcblx0cGxhY2VtZW50OiBTUElOTkVSX1BMQUNFTUVOVC5pbnBsYWNlLFxuXHRhbmltYXRpb246IFNQSU5ORVJfQU5JTUFUSU9OUy5ibGluayxcblx0c2l6ZTogXCIycmVtXCIsXG5cdGJnQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCIsXG5cdGNvbG9yOiBcIiNlNDY1MjFcIixcblx0c2Vjb25kYXJ5Q29sb3I6IFwiIzE1NzRiM1wiLFxuXHR0ZXJ0aWFyeUNvbG9yOiBcIiNjMzFhNGZcIlxufTsiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5zZXJ2aWNlJztcbmltcG9ydCB7IElTcGlubmVyQ29uZmlnLCBERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4uL25neC1zcGlubmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYDwhLS0gc3Bpbm5lciAtLT5cbjxuZy10ZW1wbGF0ZSAqbmdJZj1cInZpc2libGVcIiBbc3Bpbm5lci1hbmltYXRpb25dPVwiY29uZmlnXCI+PC9uZy10ZW1wbGF0ZT5gLFxuXHRzdHlsZXM6IFtgOmhvc3QuYmxvY2tfd2luZG93e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOmZpeGVkO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwMDAyfTpob3N0LmJsb2NrX3Vpe2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwMDAxfTpob3N0LmlucGxhY2V7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDowIDAhaW1wb3J0YW50O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnN0YXJ0fWBdLFxuXHRob3N0OiB7ICdbY2xhc3NdJzogJ3Zpc2libGU/Y29uZmlnLnBsYWNlbWVudDpcIlwiJywgJ1tzdHlsZS5iYWNrZ3JvdW5kXSc6ICd2aXNpYmxlP2NvbmZpZy5iZ0NvbG9yOlwiXCInIH1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lciB7XG5cdHByaXZhdGUgX2NvbmZpZzogSVNwaW5uZXJDb25maWcgPSB7fTtcblx0cHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuO1xuXHRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBuZ3hTcGlubmVyU2VydmljZTogTmd4U3Bpbm5lclNlcnZpY2UpIHtcblx0XHQvLyBhc3NpZ24gZGVmYXVsdCBjb25maWdcblx0XHR0aGlzLmFzc2lnbkNvbmZpZyhERUZBVUxUX0NPTkZJRyk7XG5cdFx0Ly8gb3ZlcnJpZGUgd3RpaCBnbG9ibGUgY29uZmlnXG5cdFx0dGhpcy5hc3NpZ25Db25maWcoTmd4U3Bpbm5lclNlcnZpY2UuZ2xvYmFsU3Bpbm5lckNvbmYpO1xuXHRcdC8vIGhpZGUgc3Bpbm5lciBhcyBkZWZhdWx0XG5cdFx0dGhpcy5faXNWaXNpYmxlID0gZmFsc2U7XG5cdH1cblxuXHRASW5wdXQoKVxuXHRzZXQgdmlzaWJsZShjb25kaXRpb246IGFueSl7XG5cdFx0aWYoY29uZGl0aW9uKVxuXHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdH1cblx0Z2V0IHZpc2libGUoKXtcblx0XHRyZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuXHR9XG5cdEBJbnB1dCgpXG5cdHNldCBjb25maWcoY29uZjogSVNwaW5uZXJDb25maWcpe1xuXHRcdC8vIG92ZXJyaWRlIHdpdGggc3Bpbm5lciBjb25maWdcblx0XHR0aGlzLmFzc2lnbkNvbmZpZyhjb25mKTtcblx0fVxuXHRnZXQgY29uZmlnKCl7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXHRcblx0c2hvdygpOiB2b2lkIHtcblx0XHR0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xuXHR9XG5cblx0aGlkZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdHRvZ2dsZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9pc1Zpc2libGUgPSAhdGhpcy5faXNWaXNpYmxlO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25Db25maWcoY29uZjogSVNwaW5uZXJDb25maWcpIHtcblx0XHRsZXQgY25mID0gT2JqZWN0LmFzc2lnbihjb25mKTtcblx0XHRmb3IobGV0IHByb3AgaW4gY25mKXtcblx0XHRcdGlmKGNuZi5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnW3Byb3BdID0gY25mW3Byb3BdO1xuXHRcdH1cblx0fVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNwaW5uZXJBbmltYXRpb24sIElTcGlubmVyQ29uZmlnIH0gZnJvbSAnLi4vbmd4LXNwaW5uZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcGlubmVyLWJsaW5rJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2stc2NhbGVvdXRcIiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCI+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNrLXNjYWxlb3V0e21hcmdpbjowO2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1zY2FsZW91dDthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stc2NhbGVvdXR9QC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHNrLXNjYWxlb3V0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjB9fWBdXG59KVxuZXhwb3J0IGNsYXNzIEJsaW5rQ29tcG9uZW50IGltcGxlbWVudHMgSVNwaW5uZXJBbmltYXRpb24ge1xuXG5cdGNvbmZpZzogSVNwaW5uZXJDb25maWc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTcGlubmVyQ29uZmlnLCBJU3Bpbm5lckFuaW1hdGlvbiB9IGZyb20gJy4uL25neC1zcGlubmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZiLWNhcmQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJGQi1Mb2FkaW5nLUNhcmRcIiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCI+XG5cdDxkaXY+XG5cdCA8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuXHQgPGRpdiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb25maWcuY29sb3JcIj48L2Rpdj5cblx0IDxkaXYgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCI+PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuXHQ8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuXHQ8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuIDwvZGl2PmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LkZCLUxvYWRpbmctQ2FyZHtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTJweH0uRkItTG9hZGluZy1DYXJkPmRpdjpudGgtY2hpbGQoMSl7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweH0uRkItTG9hZGluZy1DYXJkPmRpdj5kaXY6bnRoLWNoaWxkKDEpe3Bvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6MDtoZWlnaHQ6NDBweDt3aWR0aDo0MHB4Oy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2hpbmU7YW5pbWF0aW9uLW5hbWU6c2hpbmU7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MnM7YW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9LkZCLUxvYWRpbmctQ2FyZD5kaXY6bnRoLWNoaWxkKDIpLC5GQi1Mb2FkaW5nLUNhcmQ+ZGl2Om50aC1jaGlsZCgzKSwuRkItTG9hZGluZy1DYXJkPmRpdjpudGgtY2hpbGQoNCksLkZCLUxvYWRpbmctQ2FyZD5kaXY+ZGl2Om50aC1jaGlsZCgyKSwuRkItTG9hZGluZy1DYXJkPmRpdj5kaXY6bnRoLWNoaWxkKDMpe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo2cHg7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGluZTthbmltYXRpb24tbmFtZTpzaGluZTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoyczthbmltYXRpb24tZHVyYXRpb246MnM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcn1ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbmV7ZnJvbXt0cmFuc2l0aW9uOm5vbmV9dG97YmFja2dyb3VuZC1jb2xvcjojZjZmN2Y4O3RyYW5zaXRpb246YWxsIC4zcyBlYXNlLW91dH19QGtleWZyYW1lcyBzaGluZXtmcm9te3RyYW5zaXRpb246bm9uZX10b3tiYWNrZ3JvdW5kLWNvbG9yOiNmNmY3Zjg7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0fX0uRkItTG9hZGluZy1DYXJkPmRpdj5kaXY6bnRoLWNoaWxkKDIpe2xlZnQ6NTBweDt0b3A6LTMzcHg7d2lkdGg6MjUlfS5GQi1Mb2FkaW5nLUNhcmQ+ZGl2PmRpdjpudGgtY2hpbGQoMyl7bGVmdDo1MHB4O3RvcDotMjBweDt3aWR0aDoxNSV9LkZCLUxvYWRpbmctQ2FyZD5kaXY6bnRoLWNoaWxkKDIpe2xlZnQ6MDt0b3A6MzBweDt3aWR0aDo4MCV9LkZCLUxvYWRpbmctQ2FyZD5kaXY6bnRoLWNoaWxkKDMpe2xlZnQ6MDt0b3A6NDVweDt3aWR0aDo5MCV9LkZCLUxvYWRpbmctQ2FyZD5kaXY6bnRoLWNoaWxkKDQpe2xlZnQ6MDt0b3A6NjBweDt3aWR0aDo1MCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgRmJDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgSVNwaW5uZXJBbmltYXRpb24ge1xuXG5cdGNvbmZpZzogSVNwaW5uZXJDb25maWc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTcGlubmVyQW5pbWF0aW9uLCBJU3Bpbm5lckNvbmZpZyB9IGZyb20gJy4uL25neC1zcGlubmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBsYXRlLXJvdGF0ZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNwaW5uZXJcIiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCJcdD48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNwaW5uZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDstd2Via2l0LWFuaW1hdGlvbjoxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLXJvdGF0ZXBsYW5lO2FuaW1hdGlvbjoxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLXJvdGF0ZXBsYW5lfUAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMTgwZGVnKX19QGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZXswJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApfTUwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwKX0xMDAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF0ZVJvdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIElTcGlubmVyQW5pbWF0aW9uIHtcblxuXHRjb25maWc6IElTcGlubmVyQ29uZmlnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3Bpbm5lckFuaW1hdGlvbiwgSVNwaW5uZXJDb25maWcgfSBmcm9tICcuLi9uZ3gtc3Bpbm5lci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kb3VibGUtYm91bmNlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLnNpemVcIiBbc3R5bGUud2lkdGhdPVwiY29uZmlnLnNpemVcIj5cbiAgPGRpdiBjbGFzcz1cImRvdWJsZS1ib3VuY2UxXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5zZWNvbmRhcnlDb2xvclwiPjwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5kb3VibGUtYm91bmNlMSwuZG91YmxlLWJvdW5jZTJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5Oi42O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbjoycyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1ib3VuY2U7YW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLWJvdW5jZX0uZG91YmxlLWJvdW5jZTJ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzO2FuaW1hdGlvbi1kZWxheTotMXN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzay1ib3VuY2V7MCUsMTAwJXt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCl9NTAle3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKX19YF1cbn0pXG5leHBvcnQgY2xhc3MgRG91YmxlQm91bmNlQ29tcG9uZW50IGltcGxlbWVudHMgSVNwaW5uZXJBbmltYXRpb24ge1xuXG5cdGNvbmZpZzogSVNwaW5uZXJDb25maWc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNwaW5uZXJBbmltYXRpb24sIElTcGlubmVyQ29uZmlnIH0gZnJvbSAnLi4vbmd4LXNwaW5uZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9sZGluZy1jdWJlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2stZm9sZGluZy1jdWJlXCIgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2stY3ViZTEgc2stY3ViZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY3ViZTIgc2stY3ViZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY3ViZTQgc2stY3ViZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY3ViZTMgc2stY3ViZVwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2ICNzdHlsZXM+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zay1mb2xkaW5nLWN1YmV7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpfS5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmV7ZmxvYXQ6bGVmdDt3aWR0aDo1MCU7aGVpZ2h0OjUwJTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfS5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC1hbmltYXRpb246Mi40cyBsaW5lYXIgaW5maW5pdGUgYm90aCBzay1mb2xkQ3ViZUFuZ2xlO2FuaW1hdGlvbjoyLjRzIGxpbmVhciBpbmZpbml0ZSBib3RoIHNrLWZvbGRDdWJlQW5nbGU7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMTAwJX0uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpfS5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxLjEpIHJvdGF0ZVooMTgwZGVnKX0uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTt0cmFuc2Zvcm06c2NhbGUoMS4xKSByb3RhdGVaKDI3MGRlZyl9LnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTI6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfS5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNnM7YW5pbWF0aW9uLWRlbGF5Oi42c30uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNDpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjlzO2FuaW1hdGlvbi1kZWxheTouOXN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGV7MCUsMTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtvcGFjaXR5OjB9MjUlLDc1JXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxfTEwMCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGV7MCUsMTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtvcGFjaXR5OjB9MjUlLDc1JXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxfTEwMCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7b3BhY2l0eTowfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBGb2xkaW5nQ3ViZUNvbXBvbmVudCBpbXBsZW1lbnRzIElTcGlubmVyQW5pbWF0aW9uIHtcblx0QFZpZXdDaGlsZChcInN0eWxlc1wiKSBzdHlsZXM6IEVsZW1lbnRSZWY7XG5cdGNvbmZpZzogSVNwaW5uZXJDb25maWc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHlsZXMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBgPHN0eWxlPi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmNvbmZpZy5jb2xvcn0gfTwvc3R5bGU+YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNwaW5uZXJBbmltYXRpb24gfSBmcm9tICcuLi9uZ3gtc3Bpbm5lci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1iYXJzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLnNpemVcIiA+XG4gIDxkaXYgY2xhc3M9XCJyZWN0MVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVjdDJcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb25maWcuY29sb3JcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyZWN0NFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVjdDVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb25maWcuY29sb3JcIj48L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2Auc3Bpbm5lcnttYXJnaW46MH0uc3Bpbm5lcj5kaXZ7aGVpZ2h0OjEwMCU7d2lkdGg6LjRyZW07bWFyZ2luOjAgLjE1cmVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtYW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stc3RyZXRjaGRlbGF5O2FuaW1hdGlvbjoxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLXN0cmV0Y2hkZWxheX0uc3Bpbm5lciAucmVjdDJ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjFzfS5zcGlubmVyIC5yZWN0M3std2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30uc3Bpbm5lciAucmVjdDR7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS45czthbmltYXRpb24tZGVsYXk6LS45c30uc3Bpbm5lciAucmVjdDV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44czthbmltYXRpb24tZGVsYXk6LS44c31ALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5ezAlLDEwMCUsNDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSguNCl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSgxKX19QGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXl7MCUsMTAwJSw0MCV7dHJhbnNmb3JtOnNjYWxlWSguNCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC40KX0yMCV7dHJhbnNmb3JtOnNjYWxlWSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSl9fWBdXG59KVxuZXhwb3J0IGNsYXNzIEJhcnNDb21wb25lbnQgaW1wbGVtZW50cyBJU3Bpbm5lckFuaW1hdGlvbiB7XG5cdGNvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3Bpbm5lckFuaW1hdGlvbiB9IGZyb20gJy4uL25neC1zcGlubmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvdGF0aW5nLWRvdHMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiPlxuICA8ZGl2IGNsYXNzPVwiZG90MVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZG90MlwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zcGlubmVye3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBzay1yb3RhdGU7YW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBzay1yb3RhdGV9LmRvdDEsLmRvdDJ7d2lkdGg6NjAlO2hlaWdodDo2MCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLWJvdW5jZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stYm91bmNlfS5kb3Qye3RvcDphdXRvO2JvdHRvbTowOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xczthbmltYXRpb24tZGVsYXk6LTFzfUAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzay1yb3RhdGV7MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc2stYm91bmNlezAlLDEwMCV7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfTUwJXt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSl9fWBdXG59KVxuZXhwb3J0IGNsYXNzIFJvdGF0aW5nRG90c0NvbXBvbmVudCBpbXBsZW1lbnRzIElTcGlubmVyQW5pbWF0aW9uIHtcblx0Y29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTcGlubmVyQW5pbWF0aW9uIH0gZnJvbSAnLi4vbmd4LXNwaW5uZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9yaXpvbnRhbC1ib3VuY2UnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm91bmNlMlwiIFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLnNpemVcIiBbc3R5bGUud2lkdGhdPVwiY29uZmlnLnNpemVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb25maWcuY29sb3JcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJvdW5jZTNcIiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29uZmlnLmNvbG9yXCI+PC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNwaW5uZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnNwaW5uZXI+ZGl2e21hcmdpbjowIC4xNXJlbTtib3JkZXItcmFkaXVzOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIHNrLWJvdW5jZWRlbGF5O2FuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGggc2stYm91bmNlZGVsYXl9LnNwaW5uZXIgLmJvdW5jZTF7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zMnM7YW5pbWF0aW9uLWRlbGF5Oi0uMzJzfS5zcGlubmVyIC5ib3VuY2Uyey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTZzO2FuaW1hdGlvbi1kZWxheTotLjE2c31ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXl7MCUsMTAwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5ezAlLDEwMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsQm91bmNlQ29tcG9uZW50IGltcGxlbWVudHMgSVNwaW5uZXJBbmltYXRpb24ge1xuXHRjb25maWc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3Bpbm5lckFuaW1hdGlvbiB9IGZyb20gJy4uL25neC1zcGlubmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNwaW4xJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2stY2lyY2xlXCIgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlMSBzay1jaGlsZFwiID48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTIgc2stY2hpbGRcIiA+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzay1jaXJjbGUzIHNrLWNoaWxkXCIgPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlNCBzay1jaGlsZFwiID48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTUgc2stY2hpbGRcIiA+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzay1jaXJjbGU2IHNrLWNoaWxkXCIgPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlNyBzay1jaGlsZFwiID48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTggc2stY2hpbGRcIiA+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzay1jaXJjbGU5IHNrLWNoaWxkXCIgPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlMTAgc2stY2hpbGRcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTExIHNrLWNoaWxkXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzay1jaXJjbGUxMiBzay1jaGlsZFwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2ICNzdHlsZXM+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zay1jaXJjbGV7cG9zaXRpb246cmVsYXRpdmV9LnNrLWNpcmNsZSAuc2stY2hpbGR7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LnNrLWNpcmNsZSAuc2stY2hpbGQ6YmVmb3Jle2NvbnRlbnQ6Jyc7ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO3dpZHRoOjE1JTtoZWlnaHQ6MTUlO2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGggc2stY2lyY2xlQm91bmNlRGVsYXk7YW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBzay1jaXJjbGVCb3VuY2VEZWxheX0uc2stY2lyY2xlIC5zay1jaXJjbGUyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMGRlZyl9LnNrLWNpcmNsZSAuc2stY2lyY2xlM3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNjBkZWcpfS5zay1jaXJjbGUgLnNrLWNpcmNsZTR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGU1ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTIwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGU2ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxNTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTUwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGU3ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGU4ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjEwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGU5ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjQwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGUxMHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LnNrLWNpcmNsZSAuc2stY2lyY2xlMTF7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMDBkZWcpfS5zay1jaXJjbGUgLnNrLWNpcmNsZTEyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzMwZGVnKX0uc2stY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzO2FuaW1hdGlvbi1kZWxheTotMXN9LnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS45czthbmltYXRpb24tZGVsYXk6LS45c30uc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfS5zay1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uN3M7YW5pbWF0aW9uLWRlbGF5Oi0uN3N9LnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42czthbmltYXRpb24tZGVsYXk6LS42c30uc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5zay1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNHM7YW5pbWF0aW9uLWRlbGF5Oi0uNHN9LnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uM3M7YW5pbWF0aW9uLWRlbGF5Oi0uM3N9LnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMnM7YW5pbWF0aW9uLWRlbGF5Oi0uMnN9LnNrLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMXM7YW5pbWF0aW9uLWRlbGF5Oi0uMXN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5ezAlLDEwMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5ezAlLDEwMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBTcGluMUNvbXBvbmVudCBpbXBsZW1lbnRzIElTcGlubmVyQW5pbWF0aW9uIHtcblx0QFZpZXdDaGlsZChcInN0eWxlc1wiKSBzdHlsZXM6IEVsZW1lbnRSZWY7XG5cdGNvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3R5bGVzLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdHlsZT4uc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuY29uZmlnLmNvbG9yfSB9PC9zdHlsZT5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTcGlubmVyQW5pbWF0aW9uIH0gZnJvbSAnLi4vbmd4LXNwaW5uZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3BpbjInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzay1mYWRpbmctY2lyY2xlXCIgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiID5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlMSBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlMiBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlMyBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlNCBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlNSBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlNiBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlNyBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlOCBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlOSBzay1jaXJjbGVcIj48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2stY2lyY2xlMTAgc2stY2lyY2xlXCI+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInNrLWNpcmNsZTExIHNrLWNpcmNsZVwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJzay1jaXJjbGUxMiBzay1jaXJjbGVcIj48L2Rpdj5cblx0PC9kaXY+XG5cdDxkaXYgI3N0eWxlcz48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNrLWZhZGluZy1jaXJjbGV7cG9zaXRpb246cmVsYXRpdmV9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzt3aWR0aDoxNSU7aGVpZ2h0OjE1JTtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIHNrLWNpcmNsZUZhZGVEZWxheTthbmltYXRpb246MS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIHNrLWNpcmNsZUZhZGVEZWxheX0uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzBkZWcpfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUzey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyl9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTIwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEyMGRlZyl9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTZ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNTBkZWcpfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIxMGRlZyl9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI0MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNDBkZWcpfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTExey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzAwZGVnKX0uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMzBkZWcpfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xczthbmltYXRpb24tZGVsYXk6LTFzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjlzO2FuaW1hdGlvbi1kZWxheTotLjlzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjdzO2FuaW1hdGlvbi1kZWxheTotLjdzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjZzO2FuaW1hdGlvbi1kZWxheTotLjZzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjRzO2FuaW1hdGlvbi1kZWxheTotLjRzfS5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zczthbmltYXRpb24tZGVsYXk6LS4zc30uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMnM7YW5pbWF0aW9uLWRlbGF5Oi0uMnN9LnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjFzO2FuaW1hdGlvbi1kZWxheTotLjFzfUAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVGYWRlRGVsYXl7MCUsMTAwJSwzOSV7b3BhY2l0eTowfTQwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2stY2lyY2xlRmFkZURlbGF5ezAlLDEwMCUsMzkle29wYWNpdHk6MH00MCV7b3BhY2l0eToxfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBTcGluMkNvbXBvbmVudCBpbXBsZW1lbnRzIElTcGlubmVyQW5pbWF0aW9uIHtcblx0QFZpZXdDaGlsZChcInN0eWxlc1wiKSBzdHlsZXM6IEVsZW1lbnRSZWY7XG5cdGNvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3R5bGVzLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdHlsZT4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5jb25maWcuY29sb3J9IH08L3N0eWxlPmA7XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTcGlubmVyQW5pbWF0aW9uIH0gZnJvbSAnLi4vbmd4LXNwaW5uZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3BpbjMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiIGNsYXNzPVwibGRzLXJpbmdcIj5cblx0PGRpdiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLmJvcmRlclRvcENvbG9yXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuXHQ8ZGl2IFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLnNpemVcIiBbc3R5bGUud2lkdGhdPVwiY29uZmlnLnNpemVcIiBbc3R5bGUuYm9yZGVyVG9wQ29sb3JdPVwiY29uZmlnLmNvbG9yXCI+PC9kaXY+XG5cdDxkaXYgW3N0eWxlLmhlaWdodF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS53aWR0aF09XCJjb25maWcuc2l6ZVwiIFtzdHlsZS5ib3JkZXJUb3BDb2xvcl09XCJjb25maWcuY29sb3JcIj48L2Rpdj5cblx0PGRpdiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy5zaXplXCIgW3N0eWxlLmJvcmRlclRvcENvbG9yXT1cImNvbmZpZy5jb2xvclwiPjwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5sZHMtcmluZyBkaXZ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOi4zcmVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtYW5pbWF0aW9uOjEuMnMgY3ViaWMtYmV6aWVyKC41LDAsLjUsMSkgaW5maW5pdGUgbGRzLXJpbmc7YW5pbWF0aW9uOjEuMnMgY3ViaWMtYmV6aWVyKC41LDAsLjUsMSkgaW5maW5pdGUgbGRzLXJpbmd9Lmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS40NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNDVzfS5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uM3M7YW5pbWF0aW9uLWRlbGF5Oi0uM3N9Lmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTVzfUAtd2Via2l0LWtleWZyYW1lcyBsZHMtcmluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBsZHMtcmluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19YF1cbn0pXG5leHBvcnQgY2xhc3MgU3BpbjNDb21wb25lbnQgaW1wbGVtZW50cyBJU3Bpbm5lckFuaW1hdGlvbiB7XG5cdGNvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3Bpbm5lckNvbmZpZywgU1BJTk5FUl9BTklNQVRJT05TLCBJU3Bpbm5lckFuaW1hdGlvbiB9IGZyb20gJy4vbmd4LXNwaW5uZXIudHlwZXMnO1xuaW1wb3J0IHsgQmxpbmtDb21wb25lbnQgfSBmcm9tICcuL2JsaW5rL2JsaW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2ZiLWNhcmQvZmItY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhdGVSb3RhdGVDb21wb25lbnQgfSBmcm9tICcuL3BsYXRlLXJvdGF0ZS9wbGF0ZS1yb3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IERvdWJsZUJvdW5jZUNvbXBvbmVudCB9IGZyb20gJy4vZG91YmxlLWJvdW5jZS9kb3VibGUtYm91bmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2xkaW5nQ3ViZUNvbXBvbmVudCB9IGZyb20gJy4vZm9sZGluZy1jdWJlL2ZvbGRpbmctY3ViZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyc0NvbXBvbmVudCB9IGZyb20gJy4vYmFycy9iYXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3RhdGluZ0RvdHNDb21wb25lbnQgfSBmcm9tICcuL3JvdGF0aW5nLWRvdHMvcm90YXRpbmctZG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEJvdW5jZUNvbXBvbmVudCB9IGZyb20gJy4vaG9yaXpvbnRhbC1ib3VuY2UvaG9yaXpvbnRhbC1ib3VuY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW4xQ29tcG9uZW50IH0gZnJvbSAnLi9zcGluMS9zcGluMS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BpbjJDb21wb25lbnQgfSBmcm9tICcuL3NwaW4yL3NwaW4yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGluM0NvbXBvbmVudCB9IGZyb20gJy4vc3BpbjMvc3BpbjMuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW40Q29tcG9uZW50IH0gZnJvbSAnLi9zcGluNC9zcGluNC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3Bpbm5lci1hbmltYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQW5pbWF0aW9uRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXHRcblx0QElucHV0KCdzcGlubmVyLWFuaW1hdGlvbicpXG4gIHNldCBjb25maWcoY29uZjogSVNwaW5uZXJDb25maWcpe1xuXHRcdHRoaXMuaW5pdChjb25mKTtcblx0fVxuXHRcblx0cHJpdmF0ZSBpbml0KGNvbmY6IElTcGlubmVyQ29uZmlnKXtcblx0XHRsZXQgY29tcG9uZW5ldCA9IEJsaW5rQ29tcG9uZW50O1xuXHRcdGlmKGNvbmYuYW5pbWF0aW9uPT1TUElOTkVSX0FOSU1BVElPTlMuYmxpbmspe1x0XHQvLyBibGlua1xuXHRcdFx0Y29tcG9uZW5ldCA9IEJsaW5rQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLmZiX2NhcmQpIHtcdFx0Ly8gZmJfY2FyZFxuXHRcdFx0Y29tcG9uZW5ldCA9IEZiQ2FyZENvbXBvbmVudDtcblx0XHR9IGVsc2UgaWYoY29uZi5hbmltYXRpb249PVNQSU5ORVJfQU5JTUFUSU9OUy5wbGF0ZV9yb3RhdGUpIHtcblx0XHRcdGNvbXBvbmVuZXQgPSBQbGF0ZVJvdGF0ZUNvbXBvbmVudDtcblx0XHR9IGVsc2UgaWYoY29uZi5hbmltYXRpb249PVNQSU5ORVJfQU5JTUFUSU9OUy5kb3VibGVfYm91bmNlKSB7XG5cdFx0XHRjb21wb25lbmV0ID0gRG91YmxlQm91bmNlQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLmZvbGRpbmdfY3ViZSkge1xuXHRcdFx0Y29tcG9uZW5ldCA9IEZvbGRpbmdDdWJlQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLmJhcnMpIHtcblx0XHRcdGNvbXBvbmVuZXQgPSBCYXJzQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLnJvdGF0aW5nX2RvdHMpIHtcblx0XHRcdGNvbXBvbmVuZXQgPSBSb3RhdGluZ0RvdHNDb21wb25lbnQ7XG5cdFx0fSBlbHNlIGlmKGNvbmYuYW5pbWF0aW9uPT1TUElOTkVSX0FOSU1BVElPTlMuaG9yaXpvbnRhbF9ib3VuY2UpIHtcblx0XHRcdGNvbXBvbmVuZXQgPSBIb3Jpem9udGFsQm91bmNlQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLnNwaW5fMSkge1xuXHRcdFx0Y29tcG9uZW5ldCA9IFNwaW4xQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLnNwaW5fMikge1xuXHRcdFx0Y29tcG9uZW5ldCA9IFNwaW4yQ29tcG9uZW50O1xuXHRcdH0gZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLnNwaW5fMykge1xuXHRcdFx0Y29tcG9uZW5ldCA9IFNwaW4zQ29tcG9uZW50O1xuXHRcdH0gLyogZWxzZSBpZihjb25mLmFuaW1hdGlvbj09U1BJTk5FUl9BTklNQVRJT05TLnNwaW5fNCkge1xuXHRcdFx0Y29tcG9uZW5ldCA9IFNwaW40Q29tcG9uZW50O1xuXHRcdH0gKi9cblxuXHRcdGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW5ldCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0bGV0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPElTcGlubmVyQW5pbWF0aW9uPiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY29uZmlnID0gY29uZjtcblx0fVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNwaW5uZXJBbmltYXRpb24gfSBmcm9tICcuLi9uZ3gtc3Bpbm5lci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zcGluNCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNwaW40Q29tcG9uZW50IGltcGxlbWVudHMgSVNwaW5uZXJBbmltYXRpb24ge1xuXHRjb25maWc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neFNwaW5uZXIgfSBmcm9tICcuL25neC1zcGlubmVyL25neC1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3Bpbm5lckNvbmZpZyB9IGZyb20gJy4vbmd4LXNwaW5uZXIudHlwZXMnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL25neC1zcGlubmVyL25neC1zcGlubmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lckFuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc3Bpbm5lci1hbmltYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJsaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9ibGluay9ibGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9mYi1jYXJkL2ZiLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRlUm90YXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wbGF0ZS1yb3RhdGUvcGxhdGUtcm90YXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3VibGVCb3VuY2VDb21wb25lbnQgfSBmcm9tICcuL2RvdWJsZS1ib3VuY2UvZG91YmxlLWJvdW5jZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9sZGluZ0N1YmVDb21wb25lbnQgfSBmcm9tICcuL2ZvbGRpbmctY3ViZS9mb2xkaW5nLWN1YmUuY29tcG9uZW50JztcbmltcG9ydCB7IEJhcnNDb21wb25lbnQgfSBmcm9tICcuL2JhcnMvYmFycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm90YXRpbmdEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9yb3RhdGluZy1kb3RzL3JvdGF0aW5nLWRvdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEhvcml6b250YWxCb3VuY2VDb21wb25lbnQgfSBmcm9tICcuL2hvcml6b250YWwtYm91bmNlL2hvcml6b250YWwtYm91bmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGluMUNvbXBvbmVudCB9IGZyb20gJy4vc3BpbjEvc3BpbjEuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW4yQ29tcG9uZW50IH0gZnJvbSAnLi9zcGluMi9zcGluMi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BpbjNDb21wb25lbnQgfSBmcm9tICcuL3NwaW4zL3NwaW4zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGluNENvbXBvbmVudCB9IGZyb20gJy4vc3BpbjQvc3BpbjQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTcGluNENvbXBvbmVudCwgU3BpbjNDb21wb25lbnQsIFNwaW4yQ29tcG9uZW50LCBTcGluMUNvbXBvbmVudCwgSG9yaXpvbnRhbEJvdW5jZUNvbXBvbmVudCwgQmxpbmtDb21wb25lbnQsIEZiQ2FyZENvbXBvbmVudCwgUGxhdGVSb3RhdGVDb21wb25lbnQsIERvdWJsZUJvdW5jZUNvbXBvbmVudCwgRm9sZGluZ0N1YmVDb21wb25lbnQsIEJhcnNDb21wb25lbnQsIFJvdGF0aW5nRG90c0NvbXBvbmVudFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTcGlubmVyQW5pbWF0aW9uRGlyZWN0aXZlLCBcblx0XHROZ3hTcGlubmVyLCBcblx0XHRCbGlua0NvbXBvbmVudCwgRmJDYXJkQ29tcG9uZW50LCBQbGF0ZVJvdGF0ZUNvbXBvbmVudCwgRG91YmxlQm91bmNlQ29tcG9uZW50LCBGb2xkaW5nQ3ViZUNvbXBvbmVudCwgQmFyc0NvbXBvbmVudCwgUm90YXRpbmdEb3RzQ29tcG9uZW50LCBIb3Jpem9udGFsQm91bmNlQ29tcG9uZW50LCBTcGluMUNvbXBvbmVudCwgU3BpbjJDb21wb25lbnQsIFNwaW4zQ29tcG9uZW50LCBTcGluNENvbXBvbmVudCBcblx0XSxcblx0ZXhwb3J0czogWyBOZ3hTcGlubmVyIF0sXG5cdHByb3ZpZGVyczogWyBOZ3hTcGlubmVyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJNb2R1bGUge1xuXG5cdHN0YXRpYyBjb25maWcoY29uZjogSVNwaW5uZXJDb25maWcgPSB7fSl7XG5cdFx0Tmd4U3Bpbm5lclNlcnZpY2UuZ2xvYmFsU3Bpbm5lckNvbmYgPSBPYmplY3QuYXNzaWduKGNvbmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFRQztLQUFpQjswQ0FGMEIsRUFBRTs7Z0JBSDdDLFVBQVU7Ozs7NEJBSFg7Ozs7Ozs7OztrQkNlZ0IsY0FBYztjQUNsQixVQUFVO2FBQ1gsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJwQixBQUFPLHFCQUFNLGNBQWMsR0FBbUI7SUFDN0MsU0FBUyxFQUFFLGlCQUFpQixDQUFDLE9BQU87SUFDcEMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEtBQUs7SUFDbkMsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDLEtBQUssRUFBRSxTQUFTO0lBQ2hCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGFBQWEsRUFBRSxTQUFTO0NBQ3hCLENBQUM7Ozs7OztBQzFDRjtJQWVDLG9CQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjt1QkFIdEIsRUFBRTs7UUFLbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7UUFFbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN4QjtJQUVELHNCQUNJLCtCQUFPOzs7O1FBTVg7WUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkI7Ozs7O1FBVEQsVUFDWSxTQUFjO1lBQ3pCLElBQUcsU0FBUztnQkFDWCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O2dCQUVaLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiOzs7T0FBQTtJQUlELHNCQUNJLDhCQUFNOzs7O1FBSVY7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDcEI7Ozs7O1FBUEQsVUFDVyxJQUFvQjs7WUFFOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qjs7O09BQUE7Ozs7SUFLRCx5QkFBSTs7O0lBQUo7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN2Qjs7OztJQUVELHlCQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsMkJBQU07OztJQUFOO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDbkM7Ozs7O0lBRU8saUNBQVk7Ozs7Y0FBQyxJQUFvQjtRQUN4QyxxQkFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixLQUFJLHFCQUFJLElBQUksSUFBSSxHQUFHLEVBQUM7WUFDbkIsSUFBRyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7OztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsZ0dBQzZEO29CQUN4RSxNQUFNLEVBQUUsQ0FBQywwYUFBMGEsQ0FBQztvQkFDcGIsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixFQUFFLDJCQUEyQixFQUFFO2lCQUNyRzs7OztnQkFUUSxpQkFBaUI7OzswQkF1QnhCLEtBQUs7eUJBVUwsS0FBSzs7cUJBbENQOzs7Ozs7O0FDQUE7SUFZRTtLQUFpQjs7OztJQUVqQixpQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc0lBQ0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsNlhBQTZYLENBQUM7aUJBQ3hZOzs7O3lCQVJEOzs7Ozs7O0FDQUE7SUFvQkU7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwrYUFTSjtvQkFDTixNQUFNLEVBQUUsQ0FBQyw2NUNBQTI1QyxDQUFDO2lCQUN0NkM7Ozs7MEJBaEJEOzs7Ozs7O0FDQUE7SUFXRTtLQUFpQjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxrSUFBeUg7b0JBQ25JLE1BQU0sRUFBRSxDQUFDLDJ2QkFBMnZCLENBQUM7aUJBQ3R3Qjs7OzsrQkFQRDs7Ozs7OztBQ0FBO0lBY0U7S0FBaUI7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsK1BBR0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsOGdCQUE4Z0IsQ0FBQztpQkFDemhCOzs7O2dDQVZEOzs7Ozs7O0FDQUE7SUFpQkU7S0FBaUI7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLGlFQUErRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssZUFBWSxDQUFDO0tBQ2xJOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxtU0FNUTtvQkFDbEIsTUFBTSxFQUFFLENBQUMsb3hEQUFveEQsQ0FBQztpQkFDL3hEOzs7Ozt5QkFFQyxTQUFTLFNBQUMsUUFBUTs7K0JBZnBCOzs7Ozs7O0FDQUE7SUFpQkU7S0FBaUI7Ozs7SUFFakIsZ0NBQVE7OztJQUFSO0tBQ0M7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxnWkFNTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxpdEJBQWl0QixDQUFDO2lCQUM1dEI7Ozs7d0JBYkQ7Ozs7Ozs7QUNBQTtJQWNFO0tBQWlCOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtPQUdMO29CQUNMLE1BQU0sRUFBRSxDQUFDLHF3QkFBcXdCLENBQUM7aUJBQ2h4Qjs7OztnQ0FWRDs7Ozs7OztBQ0FBO0lBZUU7S0FBaUI7Ozs7SUFFakIsNENBQVE7OztJQUFSO0tBQ0M7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsdWFBSUw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsc2xCQUFzbEIsQ0FBQztpQkFDam1COzs7O29DQVhEOzs7Ozs7O0FDQUE7SUEwQkU7S0FBaUI7Ozs7SUFFakIsaUNBQVE7OztJQUFSO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLDREQUEwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssZUFBWSxDQUFDO0tBQzlIOztnQkEzQkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNnBCQWNRO29CQUNsQixNQUFNLEVBQUUsQ0FBQyxzMkVBQXMyRSxDQUFDO2lCQUNqM0U7Ozs7O3lCQUVDLFNBQVMsU0FBQyxRQUFROzt5QkF2QnBCOzs7Ozs7O0FDQUE7SUEwQkU7S0FBaUI7Ozs7SUFFakIsaUNBQVE7OztJQUFSO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLG9FQUFrRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssZUFBWSxDQUFDO0tBQ3RJOztnQkEzQkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsb3NCQWNTO29CQUNuQixNQUFNLEVBQUUsQ0FBQywrM0VBQSszRSxDQUFDO2lCQUMxNEU7Ozs7O3lCQUVDLFNBQVMsU0FBQyxRQUFROzt5QkF2QnBCOzs7Ozs7O0FDQUE7SUFnQkU7S0FBaUI7Ozs7SUFFakIsaUNBQVE7OztJQUFSO0tBQ0M7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSwraUJBS0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsa3ZCQUFrdkIsQ0FBQztpQkFDN3ZCOzs7O3lCQVpEOzs7Ozs7O0FDQUE7SUFvQkMsbUNBQW9CLGdCQUFrQyxFQUFVLHdCQUFrRDtRQUE5RixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtLQUFLO0lBRXZILHNCQUNLLDZDQUFNOzs7OztRQURYLFVBQ1ksSUFBb0I7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjs7O09BQUE7Ozs7O0lBRU8sd0NBQUk7Ozs7Y0FBQyxJQUFvQjtRQUNoQyxxQkFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUM7O1lBQzNDLFVBQVUsR0FBRyxjQUFjLENBQUM7U0FDNUI7YUFBTSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsa0JBQWtCLENBQUMsT0FBTyxFQUFFOztZQUNyRCxVQUFVLEdBQUcsZUFBZSxDQUFDO1NBQzdCO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLFlBQVksRUFBRTtZQUMxRCxVQUFVLEdBQUcsb0JBQW9CLENBQUM7U0FDbEM7YUFBTSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsa0JBQWtCLENBQUMsYUFBYSxFQUFFO1lBQzNELFVBQVUsR0FBRyxxQkFBcUIsQ0FBQztTQUNuQzthQUFNLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7WUFDMUQsVUFBVSxHQUFHLG9CQUFvQixDQUFDO1NBQ2xDO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLElBQUksRUFBRTtZQUNsRCxVQUFVLEdBQUcsYUFBYSxDQUFDO1NBQzNCO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtZQUMzRCxVQUFVLEdBQUcscUJBQXFCLENBQUM7U0FDbkM7YUFBTSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUU7WUFDL0QsVUFBVSxHQUFHLHlCQUF5QixDQUFDO1NBQ3ZDO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtZQUNwRCxVQUFVLEdBQUcsY0FBYyxDQUFDO1NBQzVCO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtZQUNwRCxVQUFVLEdBQUcsY0FBYyxDQUFDO1NBQzVCO2FBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtZQUNwRCxVQUFVLEdBQUcsY0FBYyxDQUFDO1NBQzVCOzs7UUFJRCxxQkFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLHFCQUFJLFlBQVksR0FBb0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7Z0JBM0N2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBakIwQixnQkFBZ0I7Z0JBQUUsd0JBQXdCOzs7eUJBc0JuRSxLQUFLLFNBQUMsbUJBQW1COztvQ0F0QjNCOzs7Ozs7O0FDQUE7SUFXRTtLQUFpQjs7OztJQUVqQixpQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7eUJBUEQ7Ozs7Ozs7QUNBQTs7Ozs7OztJQW9DUSx1QkFBTTs7OztJQUFiLFVBQWMsSUFBeUI7UUFBekIscUJBQUEsRUFBQSxTQUF5QjtRQUN0QyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDO0tBQ1o7O2dCQXBCRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2Q7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUscUJBQXFCO3FCQUNuTztvQkFDRCxZQUFZLEVBQUU7d0JBQ2IseUJBQXlCO3dCQUN6QixVQUFVO3dCQUNWLGNBQWMsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7cUJBQ25PO29CQUNELE9BQU8sRUFBRSxDQUFFLFVBQVUsQ0FBRTtvQkFDdkIsU0FBUyxFQUFFLENBQUUsaUJBQWlCLENBQUU7aUJBQ2hDOzsyQkFqQ0Q7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-spinner/fesm5/ngx-spinner.js ***!
  \*******************************************************/
/*! exports provided: NgxSpinnerService, NgxSpinnerComponent, NgxSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function() { return NgxSpinnerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function() { return NgxSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function() { return NgxSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    NgxSpinnerService.prototype.show = /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerObservable.next(true);
    };
    /**
     * To hide spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    NgxSpinnerService.prototype.hide = /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerObservable.next(false);
    };
    NgxSpinnerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxSpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSpinnerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    return NgxSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerComponent = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    function NgxSpinnerComponent(spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        /**
         * To set backdrop color('rgba(51,51,51,0.8)')
         * Only supports RGBA color format
         * \@memberof NgxSpinnerComponent
         */
        this.bdColor = 'rgba(51,51,51,0.8)';
        /**
         * To set spinner size
         *
         * \@memberof NgxSpinnerComponent
         */
        this.size = '';
        /**
         * To set spinner color('#fff')
         *
         * \@memberof NgxSpinnerComponent
         */
        this.color = '#fff';
        /**
         * To set loading text(false)
         *
         * \@memberof NgxSpinnerComponent
         */
        this.loadingText = false;
        /**
         * Flag to show/hide spinner
         *
         * \@memberof NgxSpinnerComponent
         */
        this.showSpinner = false;
        /**
         * Array for spinner divs
         *
         * \@memberof NgxSpinnerComponent
         */
        this.divArray = [];
        /**
         * Counter for div
         *
         * \@memberof NgxSpinnerComponent
         */
        this.divCount = 0;
        this.spinnerSubscription = this.spinnerService.spinnerObservable.subscribe(function (flag) {
            _this.showSpinner = flag;
        });
    }
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * Initialization method
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnInit = /**
     * Initialization method
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.onInputChange();
    };
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * On changes event for input variables
     *
     * \@memberof NgxSpinnerComponent
     * @param {?} changes
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnChanges = /**
     * On changes event for input variables
     *
     * \@memberof NgxSpinnerComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var typeChange = changes["type"];
        /** @type {?} */
        var sizeChange = changes["size"];
        if (typeChange) {
            if (typeof typeChange.currentValue !== 'undefined' && typeChange.currentValue !== typeChange.previousValue) {
                if (typeChange.currentValue !== '') {
                    this.type = typeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
        if (sizeChange) {
            if (typeof sizeChange.currentValue !== 'undefined' && sizeChange.currentValue !== sizeChange.previousValue) {
                if (sizeChange.currentValue !== '') {
                    this.size = sizeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
    };
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * To get class for spinner
     *
     * \@memberof NgxSpinnerComponent
     * @param {?=} type
     * @param {?=} size
     * @return {?}
     */
    NgxSpinnerComponent.prototype.getClass = /**
     * To get class for spinner
     *
     * \@memberof NgxSpinnerComponent
     * @param {?=} type
     * @param {?=} size
     * @return {?}
     */
    function (type, size) {
        if (type === void 0) { type = 'ball-scale-multiple'; }
        if (size === void 0) { size = 'large'; }
        this.divCount = LOADERS[type];
        this.divArray = Array(this.divCount).fill(0).map(function (x, i) { return i; });
        /** @type {?} */
        var sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    };
    /**
     * After input variables chnage event
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * After input variables chnage event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.onInputChange = /**
     * After input variables chnage event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.spinnerClass = this.getClass(this.type, this.size);
    };
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * Component destroy event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnDestroy = /**
     * Component destroy event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.spinnerSubscription.unsubscribe();
    };
    NgxSpinnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-spinner',
                    template: "<div class=\"black-overlay\" *ngIf=\"showSpinner\" [ngStyle]=\"{'background-color': bdColor}\">\n    <div [class]=\"spinnerClass\" [style.color]=\"color\">\n        <div *ngFor=\"let i of divArray\"></div>\n    </div>\n</div>\n<div class=\"loading-text\" *ngIf=\"showSpinner\">\n    <ng-content></ng-content>\n</div>",
                    styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{position:relative;box-sizing:border-box}.la-ball-8bits{display:block;font-size:0;color:#fff;width:12px;height:12px}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;-webkit-transform:translate(100%,100%);transform:translate(100%,100%);-webkit-animation:1s infinite ball-8bits;animation:1s infinite ball-8bits}.la-ball-8bits>div:nth-child(1){-webkit-animation-delay:-.9375s;animation-delay:-.9375s;top:-100%;left:0}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s;top:-100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s;top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s;top:-33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s;top:0;left:100%}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s;top:33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s;top:66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s;top:100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s;top:100%;left:0}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s;top:100%;left:-33.3333333333%}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s;top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s;top:33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s;top:0;left:-100%}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s;top:-33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s;top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s;top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm{width:6px;height:6px}.la-ball-8bits.la-sm>div{width:2px;height:2px}.la-ball-8bits.la-2x{width:24px;height:24px}.la-ball-8bits.la-2x>div{width:8px;height:8px}.la-ball-8bits.la-3x{width:36px;height:36px}.la-ball-8bits.la-3x>div{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{position:relative;box-sizing:border-box}.la-ball-atom{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-atom>div:nth-child(1){position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:4.5s linear infinite ball-atom-shrink;animation:4.5s linear infinite ball-atom-shrink}.la-ball-atom>div:not(:nth-child(1)){position:absolute;left:0;z-index:0;width:100%;height:100%;background:0 0;-webkit-animation:1.5s steps(2,end) infinite ball-atom-zindex;animation:1.5s steps(2,end) infinite ball-atom-zindex}.la-ball-atom>div:not(:nth-child(1)):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size;animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-125ms;animation-delay:-.5s,-125ms}.la-ball-atom.la-sm{width:16px;height:16px}.la-ball-atom.la-sm>div:not(:nth-child(1)):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x{width:64px;height:64px}.la-ball-atom.la-2x>div:not(:nth-child(1)):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x{width:96px;height:96px}.la-ball-atom.la-3x>div:not(:nth-child(1)):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}@keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}.la-ball-beat,.la-ball-beat>div{position:relative;box-sizing:border-box}.la-ball-beat{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.7s linear -.15s infinite ball-beat;animation:.7s linear -.15s infinite ball-beat}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{width:26px;height:8px}.la-ball-beat.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x{width:108px;height:36px}.la-ball-beat.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x{width:162px;height:54px}.la-ball-beat.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{position:relative;box-sizing:border-box}.la-ball-circus{display:block;font-size:0;color:#fff;width:16px;height:16px}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size;animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size}.la-ball-circus>div:nth-child(1){-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{width:8px;height:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{width:32px;height:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}@keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{position:relative;box-sizing:border-box}.la-ball-climbing-dot{display:block;font-size:0;color:#fff;width:42px;height:32px}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-climbing-dot>div:nth-child(1){position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:.6s ease-in-out infinite ball-climbing-dot-jump;animation:.6s ease-in-out infinite ball-climbing-dot-jump}.la-ball-climbing-dot>div:not(:nth-child(1)){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;-webkit-transform:translate(60%,0);transform:translate(60%,0);-webkit-animation:1.8s linear infinite ball-climbing-dot-steps;animation:1.8s linear infinite ball-climbing-dot-steps}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(2){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{width:20px;height:16px}.la-ball-climbing-dot.la-sm>div:nth-child(1){width:6px;height:6px}.la-ball-climbing-dot.la-sm>div:not(:nth-child(1)){width:6px;height:1px}.la-ball-climbing-dot.la-2x{width:84px;height:64px}.la-ball-climbing-dot.la-2x>div:nth-child(1){width:28px;height:28px}.la-ball-climbing-dot.la-2x>div:not(:nth-child(1)){width:28px;height:4px}.la-ball-climbing-dot.la-3x{width:126px;height:96px}.la-ball-climbing-dot.la-3x>div:nth-child(1){width:42px;height:42px}.la-ball-climbing-dot.la-3x>div:not(:nth-child(1)){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:50%;left:50%;background:0 0;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate;animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate}.la-ball-clip-rotate-multiple>div:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple>div:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse>div:first-child{position:absolute;width:32px;height:32px;background:0 0;border-style:solid;border-width:2px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate}.la-ball-clip-rotate-pulse>div:last-child{width:16px;height:16px;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale}.la-ball-clip-rotate-pulse.la-sm{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-bottom-color:transparent;border-radius:100%;-webkit-animation:.75s linear infinite ball-clip-rotate;animation:.75s linear infinite ball-clip-rotate}.la-ball-clip-rotate.la-sm{width:16px;height:16px}.la-ball-clip-rotate.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x{width:64px;height:64px}.la-ball-clip-rotate.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x{width:96px;height:96px}.la-ball-clip-rotate.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{position:relative;box-sizing:border-box}.la-ball-elastic-dots{display:block;color:#fff;width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{float:none;background-color:currentColor;border:0 solid currentColor;display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:1s infinite ball-elastic-dots-anim;animation:1s infinite ball-elastic-dots-anim}.la-ball-elastic-dots.la-sm{width:60px;height:4px}.la-ball-elastic-dots.la-sm>div{width:4px;height:4px}.la-ball-elastic-dots.la-2x{width:240px;height:20px}.la-ball-elastic-dots.la-2x>div{width:20px;height:20px}.la-ball-elastic-dots.la-3x{width:360px;height:30px}.la-ball-elastic-dots.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-fall;animation:1s ease-in-out infinite ball-fall}.la-ball-fall>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{position:relative;box-sizing:border-box}.la-ball-fussion{display:block;font-size:0;color:#fff;width:8px;height:8px}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:12px;height:12px;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:1s infinite ball-fussion-ball1;animation:1s infinite ball-fussion-ball1}.la-ball-fussion>div:nth-child(1){top:0;left:50%;z-index:1}.la-ball-fussion>div:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion>div:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion>div:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm{width:4px;height:4px}.la-ball-fussion.la-sm>div{width:6px;height:6px}.la-ball-fussion.la-2x{width:16px;height:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{width:24px;height:24px}.la-ball-fussion.la-3x>div{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat,.la-ball-grid-beat>div{position:relative;box-sizing:border-box}.la-ball-grid-beat{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm{width:18px;height:18px}.la-ball-grid-beat.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x{width:72px;height:72px}.la-ball-grid-beat.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x{width:108px;height:108px}.la-ball-grid-beat.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}@keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{position:relative;box-sizing:border-box}.la-ball-grid-pulse{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm{width:18px;height:18px}.la-ball-grid-pulse.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x{width:72px;height:72px}.la-ball-grid-pulse.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x{width:108px;height:108px}.la-ball-grid-pulse.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}@keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{position:relative;box-sizing:border-box}.la-ball-newton-cradle{display:block;font-size:0;color:#fff;width:40px;height:10px}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle>div:first-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-left;animation:1s ease-out infinite ball-newton-cradle-left}.la-ball-newton-cradle>div:last-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-right;animation:1s ease-out infinite ball-newton-cradle-right}.la-ball-newton-cradle.la-sm{width:20px;height:4px}.la-ball-newton-cradle.la-sm>div{width:4px;height:4px}.la-ball-newton-cradle.la-2x{width:80px;height:20px}.la-ball-newton-cradle.la-2x>div{width:20px;height:20px}.la-ball-newton-cradle.la-3x{width:120px;height:30px}.la-ball-newton-cradle.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{position:relative;box-sizing:border-box}.la-ball-pulse-rise{display:block;font-size:0;color:#fff;width:70px;height:14px}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even;animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{width:34px;height:6px}.la-ball-pulse-rise.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x{width:140px;height:28px}.la-ball-pulse-rise.la-2x>div{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x{width:210px;height:42px}.la-ball-pulse-rise.la-3x>div{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{position:relative;box-sizing:border-box}.la-ball-pulse-sync{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.6s ease-in-out infinite ball-pulse-sync;animation:.6s ease-in-out infinite ball-pulse-sync}.la-ball-pulse-sync>div:nth-child(1){-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{width:26px;height:8px}.la-ball-pulse-sync.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x{width:108px;height:36px}.la-ball-pulse-sync.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x{width:162px;height:54px}.la-ball-pulse-sync.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{position:relative;box-sizing:border-box}.la-ball-pulse{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:1s infinite ball-pulse;animation:1s infinite ball-pulse}.la-ball-pulse>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse.la-sm{width:26px;height:8px}.la-ball-pulse.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x{width:108px;height:36px}.la-ball-pulse.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x{width:162px;height:54px}.la-ball-pulse.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}@keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{position:relative;box-sizing:border-box}.la-ball-rotate{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%;-webkit-animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation;animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation}.la-ball-rotate>div:after,.la-ball-rotate>div:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate>div:before{top:0;left:-150%}.la-ball-rotate>div:after{top:0;left:150%}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{width:4px;height:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{width:20px;height:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-running-dots,.la-ball-running-dots>div{position:relative;box-sizing:border-box}.la-ball-running-dots{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:2s linear infinite ball-running-dots-animate;animation:2s linear infinite ball-running-dots-animate}.la-ball-running-dots>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{width:4px;height:4px}.la-ball-running-dots.la-sm>div{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x{width:20px;height:20px}.la-ball-running-dots.la-2x>div{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x{width:30px;height:30px}.la-ball-running-dots.la-3x>div{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{width:16px;height:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{width:64px;height:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{position:relative;box-sizing:border-box}.la-ball-scale-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:2s ease-in-out infinite ball-scale-pulse;animation:2s ease-in-out infinite ball-scale-pulse}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{width:16px;height:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{width:64px;height:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple;animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple}.la-ball-scale-ripple-multiple>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple;animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple}.la-ball-scale-ripple.la-sm{width:16px;height:16px}.la-ball-scale-ripple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x{width:64px;height:64px}.la-ball-scale-ripple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x{width:96px;height:96px}.la-ball-scale-ripple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}.la-ball-scale,.la-ball-scale>div{position:relative;box-sizing:border-box}.la-ball-scale{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-scale;animation:1s ease-in-out infinite ball-scale}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{width:16px;height:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{width:64px;height:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.la-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade;animation:1s linear infinite ball-spin-clockwise-fade}.la-ball-spin-clockwise-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.la-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm{width:16px;height:16px}.la-ball-spin-clockwise.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x{width:64px;height:64px}.la-ball-spin-clockwise.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x{width:96px;height:96px}.la-ball-spin-clockwise.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-spin-fade,.la-ball-spin-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm{width:16px;height:16px}.la-ball-spin-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x{width:64px;height:64px}.la-ball-spin-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x{width:96px;height:96px}.la-ball-spin-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{position:relative;box-sizing:border-box}.la-ball-spin-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:2s linear infinite ball-spin-rotate;animation:2s linear infinite ball-spin-rotate}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:2s ease-in-out infinite ball-spin-bounce;animation:2s ease-in-out infinite ball-spin-bounce}.la-ball-spin-rotate>div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm{width:16px;height:16px}.la-ball-spin-rotate.la-2x{width:64px;height:64px}.la-ball-spin-rotate.la-3x{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{position:relative;box-sizing:border-box}.la-ball-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin;animation:1s ease-in-out infinite ball-spin}.la-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm{width:16px;height:16px}.la-ball-spin.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x{width:64px;height:64px}.la-ball-spin.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x{width:96px;height:96px}.la-ball-spin.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-clockwise-spin;animation:1s ease-in-out infinite ball-square-clockwise-spin}.la-ball-square-clockwise-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{position:relative;box-sizing:border-box}.la-ball-square-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-spin;animation:1s ease-in-out infinite ball-square-spin}.la-ball-square-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm{width:12px;height:12px}.la-ball-square-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x{width:52px;height:52px}.la-ball-square-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x{width:78px;height:78px}.la-ball-square-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{position:relative;box-sizing:border-box}.la-ball-triangle-path{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path>div:nth-child(1){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-one;animation:2s ease-in-out infinite ball-triangle-path-ball-one}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-two;animation:2s ease-in-out infinite ball-triangle-path-ball-two}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-tree;animation:2s ease-in-out infinite ball-triangle-path-ball-tree}.la-ball-triangle-path.la-sm{width:16px;height:16px}.la-ball-triangle-path.la-sm>div{width:4px;height:4px}.la-ball-triangle-path.la-2x{width:64px;height:64px}.la-ball-triangle-path.la-2x>div{width:20px;height:20px}.la-ball-triangle-path.la-3x{width:96px;height:96px}.la-ball-triangle-path.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{box-sizing:border-box}.la-ball-zig-zag-deflect{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:1.5s linear infinite ball-zig-deflect;animation:1.5s linear infinite ball-zig-deflect}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:1.5s linear infinite ball-zag-deflect;animation:1.5s linear infinite ball-zag-deflect}.la-ball-zig-zag-deflect.la-sm{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-webkit-keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{box-sizing:border-box}.la-ball-zig-zag{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag>div:first-child{-webkit-animation:.7s linear infinite ball-zig-effect;animation:.7s linear infinite ball-zig-effect}.la-ball-zig-zag>div:last-child{-webkit-animation:.7s linear infinite ball-zag-effect;animation:.7s linear infinite ball-zag-effect}.la-ball-zig-zag.la-sm{width:16px;height:16px}.la-ball-zig-zag.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x{width:64px;height:64px}.la-ball-zig-zag.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x{width:96px;height:96px}.la-ball-zig-zag.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@-webkit-keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}@keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}.la-cog,.la-cog>div{position:relative;box-sizing:border-box}.la-cog{display:block;font-size:0;color:#fff;width:31px;height:31px}.la-cog.la-dark{color:#333}.la-cog>div{display:inline-block;float:none;border:2px dashed currentColor;width:100%;height:100%;background-color:transparent;border-radius:100%;-webkit-animation:4s linear infinite cog-rotate;animation:4s linear infinite cog-rotate}.la-cog>div:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid currentColor;border-radius:100%}.la-cog.la-sm{width:15px;height:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{width:61px;height:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{width:91px;height:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-cube-transition,.la-cube-transition>div{position:relative;box-sizing:border-box}.la-cube-transition{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:1.6s ease-in-out infinite cube-transition;animation:1.6s ease-in-out infinite cube-transition}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{width:16px;height:16px}.la-cube-transition.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x{width:64px;height:64px}.la-cube-transition.la-2x>div{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x{width:96px;height:96px}.la-cube-transition.la-3x>div{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}@keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}.la-fire,.la-fire>div{position:relative;box-sizing:border-box}.la-fire{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-fire.la-dark{color:#333}.la-fire>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:2px;-webkit-transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:1.5s linear infinite fire-diamonds;animation:1.5s linear infinite fire-diamonds}.la-fire>div:nth-child(1){-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{width:16px;height:16px}.la-fire.la-sm>div{width:6px;height:6px}.la-fire.la-2x{width:64px;height:64px}.la-fire.la-2x>div{width:24px;height:24px}.la-fire.la-3x{width:96px;height:96px}.la-fire.la-3x>div{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{position:relative;box-sizing:border-box}.la-line-scale-party{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm{width:20px;height:16px}.la-line-scale-party.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x{width:80px;height:64px}.la-line-scale-party.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x{width:120px;height:96px}.la-line-scale-party.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:nth-child(1),.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:nth-child(1),.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{width:20px;height:16px}.la-line-scale-pulse-out.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x{width:80px;height:64px}.la-line-scale-pulse-out.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x{width:120px;height:96px}.la-line-scale-pulse-out.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale,.la-line-scale>div{position:relative;box-sizing:border-box}.la-line-scale{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale.la-dark{color:#333}.la-line-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:1.2s infinite line-scale;animation:1.2s infinite line-scale}.la-line-scale>div:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{width:20px;height:16px}.la-line-scale.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x{width:80px;height:64px}.la-line-scale.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x{width:120px;height:96px}.la-line-scale.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating;animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating}.la-line-spin-clockwise-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade;animation:1s ease-in-out infinite line-spin-clockwise-fade}.la-line-spin-clockwise-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotating-rotate;animation:6s linear infinite ball-spin-fade-rotating-rotate}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade-rotating;animation:1s ease-in-out infinite line-spin-fade-rotating}.la-line-spin-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{position:relative;box-sizing:border-box}.la-line-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade;animation:1s ease-in-out infinite line-spin-fade}.la-line-spin-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm{width:16px;height:16px}.la-line-spin-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x{width:64px;height:64px}.la-line-spin-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x{width:96px;height:96px}.la-line-spin-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}.la-pacman,.la-pacman>div{position:relative;box-sizing:border-box}.la-pacman{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-pacman.la-dark{color:#333}.la-pacman>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-pacman>div:nth-child(1),.la-pacman>div:nth-child(2){width:0;height:0;background:0 0;border-style:solid;border-width:16px;border-right-color:transparent;border-radius:100%;-webkit-animation:.5s infinite pacman-rotate-half-up;animation:.5s infinite pacman-rotate-half-up}.la-pacman>div:nth-child(2){margin-top:-32px;-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:2s linear infinite pacman-balls;animation:2s linear infinite pacman-balls}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{width:16px;height:16px}.la-pacman.la-sm>div:nth-child(1),.la-pacman.la-sm>div:nth-child(2){border-width:8px}.la-pacman.la-sm>div:nth-child(2){margin-top:-16px}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){width:4px;height:4px}.la-pacman.la-2x{width:64px;height:64px}.la-pacman.la-2x>div:nth-child(1),.la-pacman.la-2x>div:nth-child(2){border-width:32px}.la-pacman.la-2x>div:nth-child(2){margin-top:-64px}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){width:16px;height:16px}.la-pacman.la-3x{width:96px;height:96px}.la-pacman.la-3x>div:nth-child(1),.la-pacman.la-3x>div:nth-child(2){border-width:48px}.la-pacman.la-3x>div:nth-child(2){margin-top:-96px}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{position:relative;box-sizing:border-box}.la-square-jelly-box{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-square-jelly-box>div:nth-child(1),.la-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box>div:nth-child(1){top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.la-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}.la-square-jelly-box.la-sm{width:16px;height:16px}.la-square-jelly-box.la-2x{width:64px;height:64px}.la-square-jelly-box.la-3x{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.la-square-loader,.la-square-loader>div{position:relative;box-sizing:border-box}.la-square-loader{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-loader.la-dark{color:#333}.la-square-loader>div{display:inline-block;float:none;border:2px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.la-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}.la-square-loader.la-sm{width:16px;height:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{width:64px;height:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{width:96px;height:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.la-square-spin,.la-square-spin>div{position:relative;box-sizing:border-box}.la-square-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-spin.la-dark{color:#333}.la-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:100%;height:100%;border-radius:0;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin}.la-square-spin.la-sm{width:16px;height:16px}.la-square-spin.la-2x{width:64px;height:64px}.la-square-spin.la-3x{width:96px;height:96px}@-webkit-keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.la-timer,.la-timer>div{position:relative;box-sizing:border-box}.la-timer{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-timer.la-dark{color:#333}.la-timer>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%}.la-timer>div:after,.la-timer>div:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;-webkit-transform-origin:1px 1px 0;transform-origin:1px 1px 0;-webkit-animation:1.25s linear -625ms infinite timer-loader;animation:1.25s linear -625ms infinite timer-loader}.la-timer>div:before{height:12px}.la-timer>div:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm{width:16px;height:16px}.la-timer.la-sm>div{width:16px;height:16px;border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;-webkit-transform-origin:.5px .5px 0;transform-origin:.5px .5px 0}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x{width:64px;height:64px}.la-timer.la-2x>div{width:64px;height:64px;border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;-webkit-transform-origin:2px 2px 0;transform-origin:2px 2px 0}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x{width:96px;height:96px}.la-timer.la-3x>div{width:96px;height:96px;border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;-webkit-transform-origin:3px 3px 0;transform-origin:3px 3px 0}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{position:relative;box-sizing:border-box}.la-triangle-skew-spin{display:block;font-size:0;color:#fff;width:32px;height:16px}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{display:inline-block;float:none;border:0 solid currentColor;width:0;height:0;background:0 0;border:solid;border-width:0 16px 16px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin}.la-triangle-skew-spin.la-sm{width:16px;height:8px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{width:64px;height:32px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{width:96px;height:48px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.black-overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999!important}.black-overlay>div{top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);z-index:99999!important}"]
                },] },
    ];
    /** @nocollapse */
    NgxSpinnerComponent.ctorParameters = function () { return [
        { type: NgxSpinnerService }
    ]; };
    NgxSpinnerComponent.propDecorators = {
        bdColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerModule = /** @class */ (function () {
    function NgxSpinnerModule() {
    }
    NgxSpinnerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [NgxSpinnerComponent],
                    exports: [NgxSpinnerComponent]
                },] },
    ];
    return NgxSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1zcGlubmVyL2xpYi9uZ3gtc3Bpbm5lci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtc3Bpbm5lci9saWIvbmd4LXNwaW5uZXIuZW51bS50cyIsIm5nOi8vbmd4LXNwaW5uZXIvbGliL25neC1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNwaW5uZXIvbGliL25neC1zcGlubmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFNwaW5uZXIgb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBzcGlubmVyT2JzZXJ2YWJsZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5neFNwaW5uZXJTZXJ2aWNlLlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8qKlxuICAgKiBUbyBzaG93IHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dCh0cnVlKTtcbiAgfVxuICAvKipcbiAgICogVG8gaGlkZSBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQoZmFsc2UpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTE9BREVSUyA9IHtcbiAgICAnYmFsbC04Yml0cyc6IDE2LFxuICAgICdiYWxsLWF0b20nOiA0LFxuICAgICdiYWxsLWJlYXQnOiAzLFxuICAgICdiYWxsLWNpcmN1cyc6IDUsXG4gICAgJ2JhbGwtY2xpbWJpbmctZG90JzogNCxcbiAgICAnYmFsbC1jbGlwLXJvdGF0ZSc6IDEsXG4gICAgJ2JhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUnOiAyLFxuICAgICdiYWxsLWNsaXAtcm90YXRlLXB1bHNlJzogMixcbiAgICAnYmFsbC1lbGFzdGljLWRvdHMnOiA1LFxuICAgICdiYWxsLWZhbGwnOiAzLFxuICAgICdiYWxsLWZ1c3Npb24nOiA0LFxuICAgICdiYWxsLWdyaWQtYmVhdCc6IDksXG4gICAgJ2JhbGwtZ3JpZC1wdWxzZSc6IDksXG4gICAgJ2JhbGwtbmV3dG9uLWNyYWRsZSc6IDQsXG4gICAgJ2JhbGwtcHVsc2UnOiAzLFxuICAgICdiYWxsLXB1bHNlLXJpc2UnOiA1LFxuICAgICdiYWxsLXB1bHNlLXN5bmMnOiAzLFxuICAgICdiYWxsLXJvdGF0ZSc6IDEsXG4gICAgJ2JhbGwtcnVubmluZy1kb3RzJzogNSxcbiAgICAnYmFsbC1zY2FsZSc6IDEsXG4gICAgJ2JhbGwtc2NhbGUtbXVsdGlwbGUnOiAzLFxuICAgICdiYWxsLXNjYWxlLXB1bHNlJzogMixcbiAgICAnYmFsbC1zY2FsZS1yaXBwbGUnOiAxLFxuICAgICdiYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSc6IDMsXG4gICAgJ2JhbGwtc3Bpbic6IDgsXG4gICAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UnOiA4LFxuICAgICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUnOiA4LFxuICAgICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcnOiA4LFxuICAgICdiYWxsLXNwaW4tZmFkZSc6IDgsXG4gICAgJ2JhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nJzogOCxcbiAgICAnYmFsbC1zcGluLXJvdGF0ZSc6IDIsXG4gICAgJ2JhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluJzogOCxcbiAgICAnYmFsbC1zcXVhcmUtc3Bpbic6IDgsXG4gICAgJ2JhbGwtdHJpYW5nbGUtcGF0aCc6IDMsXG4gICAgJ2JhbGwtemlnLXphZyc6IDIsXG4gICAgJ2JhbGwtemlnLXphZy1kZWZsZWN0JzogMixcbiAgICAnY29nJzogMSxcbiAgICAnY3ViZS10cmFuc2l0aW9uJzogMixcbiAgICAnZmlyZSc6IDMsXG4gICAgJ2xpbmUtc2NhbGUnOiA1LFxuICAgICdsaW5lLXNjYWxlLXBhcnR5JzogNSxcbiAgICAnbGluZS1zY2FsZS1wdWxzZS1vdXQnOiA1LFxuICAgICdsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCc6IDUsXG4gICAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZSc6IDgsXG4gICAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyc6IDgsXG4gICAgJ2xpbmUtc3Bpbi1mYWRlJzogOCxcbiAgICAnbGluZS1zcGluLWZhZGUtcm90YXRpbmcnOiA4LFxuICAgICdwYWNtYW4nOiA2LFxuICAgICdzcXVhcmUtamVsbHktYm94JzogMixcbiAgICAnc3F1YXJlLWxvYWRlcic6IDEsXG4gICAgJ3NxdWFyZS1zcGluJzogMSxcbiAgICAndGltZXInOiAxLFxuICAgICd0cmlhbmdsZS1za2V3LXNwaW4nOiAxXG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJy4vbmd4LXNwaW5uZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExPQURFUlMgfSBmcm9tICcuL25neC1zcGlubmVyLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJsYWNrLW92ZXJsYXlcIiAqbmdJZj1cInNob3dTcGlubmVyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmRDb2xvcn1cIj5cbiAgICA8ZGl2IFtjbGFzc109XCJzcGlubmVyQ2xhc3NcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaSBvZiBkaXZBcnJheVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibG9hZGluZy10ZXh0XCIgKm5nSWY9XCJzaG93U3Bpbm5lclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIExvYWQgQXdlc29tZSB2MS4xLjAgKGh0dHA6Ly9naXRodWIuZGFuaWVsY2FyZG9zby5uZXQvbG9hZC1hd2Vzb21lLylcbiAqIENvcHlyaWdodCAyMDE1IERhbmllbCBDYXJkb3NvIDxARGFuaWVsQ2FyZG9zbz5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICovLmxhLWJhbGwtOGJpdHMsLmxhLWJhbGwtOGJpdHM+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC04Yml0c3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0ubGEtYmFsbC04Yml0cy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtOGJpdHM+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6NHB4O2hlaWdodDo0cHg7Ym9yZGVyLXJhZGl1czowO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSwxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMCUsMTAwJSk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC04Yml0czthbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC04Yml0c30ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOTM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uOTM3NXM7dG9wOi0xMDAlO2xlZnQ6MH0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzO3RvcDotMTAwJTtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44MTI1czthbmltYXRpb24tZGVsYXk6LS44MTI1czt0b3A6LTY2LjY2NjY2NjY2NjclO2xlZnQ6NjYuNjY2NjY2NjY2NyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXM7dG9wOi0zMy4zMzMzMzMzMzMzJTtsZWZ0OjEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjY4NzVzO2FuaW1hdGlvbi1kZWxheTotLjY4NzVzO3RvcDowO2xlZnQ6MTAwJX0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzO3RvcDozMy4zMzMzMzMzMzMzJTtsZWZ0OjEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg3KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjU2MjVzO2FuaW1hdGlvbi1kZWxheTotLjU2MjVzO3RvcDo2Ni42NjY2NjY2NjY3JTtsZWZ0OjY2LjY2NjY2NjY2NjclfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoOCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41czt0b3A6MTAwJTtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS40Mzc1czthbmltYXRpb24tZGVsYXk6LS40Mzc1czt0b3A6MTAwJTtsZWZ0OjB9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXM7dG9wOjEwMCU7bGVmdDotMzMuMzMzMzMzMzMzMyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zMTI1czthbmltYXRpb24tZGVsYXk6LS4zMTI1czt0b3A6NjYuNjY2NjY2NjY2NyU7bGVmdDotNjYuNjY2NjY2NjY2NyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzO3RvcDozMy4zMzMzMzMzMzMzJTtsZWZ0Oi0xMDAlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMTMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTg3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTg3NXM7dG9wOjA7bGVmdDotMTAwJX0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDE0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1czt0b3A6LTMzLjMzMzMzMzMzMzMlO2xlZnQ6LTEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4wNjI1czthbmltYXRpb24tZGVsYXk6LS4wNjI1czt0b3A6LTY2LjY2NjY2NjY2NjclO2xlZnQ6LTY2LjY2NjY2NjY2NjclfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMTYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowczt0b3A6LTEwMCU7bGVmdDotMzMuMzMzMzMzMzMzMyV9LmxhLWJhbGwtOGJpdHMubGEtc217d2lkdGg6NnB4O2hlaWdodDo2cHh9LmxhLWJhbGwtOGJpdHMubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MnB4fS5sYS1iYWxsLThiaXRzLmxhLTJ4e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9LmxhLWJhbGwtOGJpdHMubGEtMng+ZGl2e3dpZHRoOjhweDtoZWlnaHQ6OHB4fS5sYS1iYWxsLThiaXRzLmxhLTN4e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtOGJpdHMubGEtM3g+ZGl2e3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtOGJpdHN7MCUsNTAle29wYWNpdHk6MX01MSV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJhbGwtOGJpdHN7MCUsNTAle29wYWNpdHk6MX01MSV7b3BhY2l0eTowfX0ubGEtYmFsbC1hdG9tLC5sYS1iYWxsLWF0b20+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1hdG9te2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWF0b20ubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWF0b20+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgxKXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3otaW5kZXg6MTt3aWR0aDo2MCU7aGVpZ2h0OjYwJTtiYWNrZ3JvdW5kOiNhYWE7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTstd2Via2l0LWFuaW1hdGlvbjo0LjVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWF0b20tc2hyaW5rO2FuaW1hdGlvbjo0LjVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWF0b20tc2hyaW5rfS5sYS1iYWxsLWF0b20+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7ei1pbmRleDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDowIDA7LXdlYmtpdC1hbmltYXRpb246MS41cyBzdGVwcygyLGVuZCkgaW5maW5pdGUgYmFsbC1hdG9tLXppbmRleDthbmltYXRpb246MS41cyBzdGVwcygyLGVuZCkgaW5maW5pdGUgYmFsbC1hdG9tLXppbmRleH0ubGEtYmFsbC1hdG9tPmRpdjpub3QoOm50aC1jaGlsZCgxKSk6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotNXB4O2NvbnRlbnQ6XCJcIjtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5Oi43NTstd2Via2l0LWFuaW1hdGlvbjoxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1wb3NpdGlvbiwxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1zaXplO2FuaW1hdGlvbjoxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1wb3NpdGlvbiwxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1zaXplfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNzVzO2FuaW1hdGlvbi1kZWxheTouNzVzfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgyKTpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHMsLTEuMTI1czthbmltYXRpb24tZGVsYXk6MHMsLTEuMTI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMjVzO2FuaW1hdGlvbi1kZWxheTotLjI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoMyk6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xcywtLjc1czthbmltYXRpb24tZGVsYXk6LTFzLC0uNzVzfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjQwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI0MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjI1czthbmltYXRpb24tZGVsYXk6LjI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoNCk6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXMsLTEyNW1zO2FuaW1hdGlvbi1kZWxheTotLjVzLC0xMjVtc30ubGEtYmFsbC1hdG9tLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtYXRvbS5sYS1zbT5kaXY6bm90KDpudGgtY2hpbGQoMSkpOmJlZm9yZXt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1hdG9tLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtYXRvbS5sYS0yeD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOmJlZm9yZXt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi10b3A6LTEwcHg7bWFyZ2luLWxlZnQ6LTEwcHh9LmxhLWJhbGwtYXRvbS5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLWF0b20ubGEtM3g+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKTpiZWZvcmV7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20tcG9zaXRpb257NTAle3RvcDoxMDAlO2xlZnQ6MTAwJX19QGtleWZyYW1lcyBiYWxsLWF0b20tcG9zaXRpb257NTAle3RvcDoxMDAlO2xlZnQ6MTAwJX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtYXRvbS1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSwuNSk7dHJhbnNmb3JtOnNjYWxlKC41LC41KX19QGtleWZyYW1lcyBiYWxsLWF0b20tc2l6ZXs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUsLjUpO3RyYW5zZm9ybTpzY2FsZSguNSwuNSl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20temluZGV4ezUwJXt6LWluZGV4OjEwfX1Aa2V5ZnJhbWVzIGJhbGwtYXRvbS16aW5kZXh7NTAle3otaW5kZXg6MTB9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20tc2hyaW5rezUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSguOCwuOCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC44LC44KX19QGtleWZyYW1lcyBiYWxsLWF0b20tc2hyaW5rezUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSguOCwuOCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC44LC44KX19LmxhLWJhbGwtYmVhdCwubGEtYmFsbC1iZWF0PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtYmVhdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NTRweDtoZWlnaHQ6MThweH0ubGEtYmFsbC1iZWF0LmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1iZWF0PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOi43cyBsaW5lYXIgLS4xNXMgaW5maW5pdGUgYmFsbC1iZWF0O2FuaW1hdGlvbjouN3MgbGluZWFyIC0uMTVzIGluZmluaXRlIGJhbGwtYmVhdH0ubGEtYmFsbC1iZWF0PmRpdjpudGgtY2hpbGQoMm4tMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1iZWF0LmxhLXNte3dpZHRoOjI2cHg7aGVpZ2h0OjhweH0ubGEtYmFsbC1iZWF0LmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MnB4fS5sYS1iYWxsLWJlYXQubGEtMnh7d2lkdGg6MTA4cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtYmVhdC5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW46OHB4fS5sYS1iYWxsLWJlYXQubGEtM3h7d2lkdGg6MTYycHg7aGVpZ2h0OjU0cHh9LmxhLWJhbGwtYmVhdC5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46MTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1iZWF0ezUwJXtvcGFjaXR5Oi4yOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnNjYWxlKC43NSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtYmVhdHs1MCV7b3BhY2l0eTouMjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNzUpO3RyYW5zZm9ybTpzY2FsZSguNzUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtY2lyY3VzLC5sYS1iYWxsLWNpcmN1cz5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNpcmN1c3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1jaXJjdXMubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNpcmN1cz5kaXZ7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotMTAwJTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czoxMDAlO29wYWNpdHk6LjU7LXdlYmtpdC1hbmltYXRpb246Mi41cyBjdWJpYy1iZXppZXIoLjI1LDAsLjc1LDEpIGluZmluaXRlIGJhbGwtY2lyY3VzLXBvc2l0aW9uLDIuNXMgY3ViaWMtYmV6aWVyKC4yNSwwLC43NSwxKSBpbmZpbml0ZSBiYWxsLWNpcmN1cy1zaXplO2FuaW1hdGlvbjoyLjVzIGN1YmljLWJlemllciguMjUsMCwuNzUsMSkgaW5maW5pdGUgYmFsbC1jaXJjdXMtcG9zaXRpb24sMi41cyBjdWJpYy1iZXppZXIoLjI1LDAsLjc1LDEpIGluZmluaXRlIGJhbGwtY2lyY3VzLXNpemV9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHMsLS41czthbmltYXRpb24tZGVsYXk6MHMsLS41c30ubGEtYmFsbC1jaXJjdXM+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzLC0xczthbmltYXRpb24tZGVsYXk6LS41cywtMXN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzLC0xLjVzO2FuaW1hdGlvbi1kZWxheTotMXMsLTEuNXN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXMsLTJzO2FuaW1hdGlvbi1kZWxheTotMS41cywtMnN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzLC0yLjVzO2FuaW1hdGlvbi1kZWxheTotMnMsLTIuNXN9LmxhLWJhbGwtY2lyY3VzLmxhLXNtLC5sYS1iYWxsLWNpcmN1cy5sYS1zbT5kaXZ7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2lyY3VzLmxhLTJ4LC5sYS1iYWxsLWNpcmN1cy5sYS0yeD5kaXZ7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jaXJjdXMubGEtM3gsLmxhLWJhbGwtY2lyY3VzLmxhLTN4PmRpdnt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNpcmN1cy1wb3NpdGlvbns1MCV7bGVmdDoxMDAlfX1Aa2V5ZnJhbWVzIGJhbGwtY2lyY3VzLXBvc2l0aW9uezUwJXtsZWZ0OjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNpcmN1cy1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMywuMyk7dHJhbnNmb3JtOnNjYWxlKC4zLC4zKX19QGtleWZyYW1lcyBiYWxsLWNpcmN1cy1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMywuMyk7dHJhbnNmb3JtOnNjYWxlKC4zLC4zKX19LmxhLWJhbGwtY2xpbWJpbmctZG90LC5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNsaW1iaW5nLWRvdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NDJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jbGltYmluZy1kb3QubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3J9LmxhLWJhbGwtY2xpbWJpbmctZG90PmRpdjpudGgtY2hpbGQoMSl7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjMyJTtsZWZ0OjE4JTt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207LXdlYmtpdC1hbmltYXRpb246LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtY2xpbWJpbmctZG90LWp1bXA7YW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6MTRweDtoZWlnaHQ6MnB4O2JvcmRlci1yYWRpdXM6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLDApOy13ZWJraXQtYW5pbWF0aW9uOjEuOHMgbGluZWFyIGluZmluaXRlIGJhbGwtY2xpbWJpbmctZG90LXN0ZXBzO2FuaW1hdGlvbjoxLjhzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaW1iaW5nLWRvdC1zdGVwc30ubGEtYmFsbC1jbGltYmluZy1kb3Q+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKTpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOm50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjZzO2FuaW1hdGlvbi1kZWxheTotLjZzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOm50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNtPmRpdjpudGgtY2hpbGQoMSl7d2lkdGg6NnB4O2hlaWdodDo2cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNtPmRpdjpub3QoOm50aC1jaGlsZCgxKSl7d2lkdGg6NnB4O2hlaWdodDoxcHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTJ4e3dpZHRoOjg0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTJ4PmRpdjpudGgtY2hpbGQoMSl7d2lkdGg6MjhweDtoZWlnaHQ6MjhweH0ubGEtYmFsbC1jbGltYmluZy1kb3QubGEtMng+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKXt3aWR0aDoyOHB4O2hlaWdodDo0cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTN4e3dpZHRoOjEyNnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLWNsaW1iaW5nLWRvdC5sYS0zeD5kaXY6bnRoLWNoaWxkKDEpe3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTN4PmRpdjpub3QoOm50aC1jaGlsZCgxKSl7d2lkdGg6NDJweDtoZWlnaHQ6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuNyk7dHJhbnNmb3JtOnNjYWxlKDEsLjcpfTIwJSw4MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43LDEuMik7dHJhbnNmb3JtOnNjYWxlKC43LDEuMil9NDAlLDQ2JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtib3R0b206MTI1JX19QGtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuNyk7dHJhbnNmb3JtOnNjYWxlKDEsLjcpfTIwJSw4MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43LDEuMik7dHJhbnNmb3JtOnNjYWxlKC43LDEuMil9NDAlLDQ2JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtib3R0b206MTI1JX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpbWJpbmctZG90LXN0ZXBzezAle3RvcDowO3JpZ2h0OjA7b3BhY2l0eTowfTUwJXtvcGFjaXR5OjF9MTAwJXt0b3A6MTAwJTtyaWdodDoxMDAlO29wYWNpdHk6MH19QGtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1zdGVwc3swJXt0b3A6MDtyaWdodDowO29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTEwMCV7dG9wOjEwMCU7cmlnaHQ6MTAwJTtvcGFjaXR5OjB9fS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLC5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JvcmRlcjoycHggc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUtcm90YXRlO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLXJvdGF0ZX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZT5kaXY6Zmlyc3QtY2hpbGR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnR9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGU+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNXM7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2e2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2OmZpcnN0LWNoaWxke3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXZ7Ym9yZGVyLXdpZHRoOjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXY6bGFzdC1jaGlsZHt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2e2JvcmRlci13aWR0aDo2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2OmZpcnN0LWNoaWxke3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBiYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSwubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2U+ZGl2OmZpcnN0LWNoaWxke3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoycHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGV9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2U+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDstd2Via2l0LWFuaW1hdGlvbjoxcyBjdWJpYy1iZXppZXIoLjA5LC41NywuNDksLjkpIGluZmluaXRlIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utc2NhbGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1zY2FsZX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLXNtPmRpdjpmaXJzdC1jaGlsZHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtc20+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS0yeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6NHB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLTJ4PmRpdjpsYXN0LWNoaWxke3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS0zeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6OTZweDtoZWlnaHQ6OTZweDtib3JkZXItd2lkdGg6NnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLTN4PmRpdjpsYXN0LWNoaWxke3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utc2NhbGV7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4zOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC4xNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC4xNSl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1zY2FsZXswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSl9MzAle29wYWNpdHk6LjM7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoLjE1KTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoLjE1KX19LmxhLWJhbGwtY2xpcC1yb3RhdGUsLmxhLWJhbGwtY2xpcC1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1jbGlwLXJvdGF0ZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtY2xpcC1yb3RhdGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjouNzVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlO2FuaW1hdGlvbjouNzVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlfS5sYS1iYWxsLWNsaXAtcm90YXRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjFweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweDtib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNsaXAtcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1lbGFzdGljLWRvdHMsLmxhLWJhbGwtZWxhc3RpYy1kb3RzPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtZWxhc3RpYy1kb3Rze2Rpc3BsYXk6YmxvY2s7Y29sb3I6I2ZmZjt3aWR0aDoxMjBweDtoZWlnaHQ6MTBweDtmb250LXNpemU6MDt0ZXh0LWFsaWduOmNlbnRlcn0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWVsYXN0aWMtZG90cz5kaXZ7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZWxhc3RpYy1kb3RzLWFuaW07YW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZWxhc3RpYy1kb3RzLWFuaW19LmxhLWJhbGwtZWxhc3RpYy1kb3RzLmxhLXNte3dpZHRoOjYwcHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1iYWxsLWVsYXN0aWMtZG90cy5sYS0yeHt3aWR0aDoyNDBweDtoZWlnaHQ6MjBweH0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtZWxhc3RpYy1kb3RzLmxhLTN4e3dpZHRoOjM2MHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLWVsYXN0aWMtZG90cy5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1lbGFzdGljLWRvdHMtYW5pbXswJSwxMDAle21hcmdpbjowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7bWFyZ2luOjAgNSU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY1KTt0cmFuc2Zvcm06c2NhbGUoLjY1KX19QGtleWZyYW1lcyBiYWxsLWVsYXN0aWMtZG90cy1hbmltezAlLDEwMCV7bWFyZ2luOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXttYXJnaW46MCA1JTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjUpO3RyYW5zZm9ybTpzY2FsZSguNjUpfX0ubGEtYmFsbC1mYWxsLC5sYS1iYWxsLWZhbGw+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1mYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo1NHB4O2hlaWdodDoxOHB4fS5sYS1iYWxsLWZhbGwubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWZhbGw+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOjRweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtZmFsbDthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1mYWxsfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjJzO2FuaW1hdGlvbi1kZWxheTotLjJzfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjFzO2FuaW1hdGlvbi1kZWxheTotLjFzfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtZmFsbC5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtZmFsbC5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjJweH0ubGEtYmFsbC1mYWxsLmxhLTJ4e3dpZHRoOjEwOHB4O2hlaWdodDozNnB4fS5sYS1iYWxsLWZhbGwubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1mYWxsLmxhLTN4e3dpZHRoOjE2MnB4O2hlaWdodDo1NHB4fS5sYS1iYWxsLWZhbGwubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZmFsbHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTQ1JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTE0NSUpfTEwJSw5MCV7b3BhY2l0eTouNX0yMCUsODAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTQ1JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTQ1JSl9fUBrZXlmcmFtZXMgYmFsbC1mYWxsezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNDUlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTQ1JSl9MTAlLDkwJXtvcGFjaXR5Oi41fTIwJSw4MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxNDUlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxNDUlKX19LmxhLWJhbGwtZnVzc2lvbiwubGEtYmFsbC1mdXNzaW9uPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtZnVzc2lvbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtZnVzc2lvbi5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtZnVzc2lvbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZnVzc2lvbi1iYWxsMTthbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC1mdXNzaW9uLWJhbGwxfS5sYS1iYWxsLWZ1c3Npb24+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MDtsZWZ0OjUwJTt6LWluZGV4OjF9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDo1MCU7bGVmdDoxMDAlO3otaW5kZXg6Mjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsMjthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDJ9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDMpe3RvcDoxMDAlO2xlZnQ6NTAlO3otaW5kZXg6MTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsMzthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDN9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDQpe3RvcDo1MCU7bGVmdDowO3otaW5kZXg6Mjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsNDthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDR9LmxhLWJhbGwtZnVzc2lvbi5sYS1zbXt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1mdXNzaW9uLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweH0ubGEtYmFsbC1mdXNzaW9uLmxhLTJ4e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtZnVzc2lvbi5sYS0yeD5kaXYsLmxhLWJhbGwtZnVzc2lvbi5sYS0zeHt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fS5sYS1iYWxsLWZ1c3Npb24ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsMXswJXtvcGFjaXR5Oi4zNX01MCV7dG9wOi0xMDAlO2xlZnQ6MjAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6NTAlO2xlZnQ6MTAwJTt6LWluZGV4OjI7b3BhY2l0eTouMzV9fUBrZXlmcmFtZXMgYmFsbC1mdXNzaW9uLWJhbGwxezAle29wYWNpdHk6LjM1fTUwJXt0b3A6LTEwMCU7bGVmdDoyMDAlO29wYWNpdHk6MX0xMDAle3RvcDo1MCU7bGVmdDoxMDAlO3otaW5kZXg6MjtvcGFjaXR5Oi4zNX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsMnswJXtvcGFjaXR5Oi4zNX01MCV7dG9wOjIwMCU7bGVmdDoyMDAlO29wYWNpdHk6MX0xMDAle3RvcDoxMDAlO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDJ7MCV7b3BhY2l0eTouMzV9NTAle3RvcDoyMDAlO2xlZnQ6MjAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6MTAwJTtsZWZ0OjUwJTt6LWluZGV4OjE7b3BhY2l0eTouMzV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDN7MCV7b3BhY2l0eTouMzV9NTAle3RvcDoyMDAlO2xlZnQ6LTEwMCU7b3BhY2l0eToxfTEwMCV7dG9wOjUwJTtsZWZ0OjA7ei1pbmRleDoyO29wYWNpdHk6LjM1fX1Aa2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsM3swJXtvcGFjaXR5Oi4zNX01MCV7dG9wOjIwMCU7bGVmdDotMTAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6NTAlO2xlZnQ6MDt6LWluZGV4OjI7b3BhY2l0eTouMzV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDR7MCV7b3BhY2l0eTouMzV9NTAle3RvcDotMTAwJTtsZWZ0Oi0xMDAlO29wYWNpdHk6MX0xMDAle3RvcDowO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDR7MCV7b3BhY2l0eTouMzV9NTAle3RvcDotMTAwJTtsZWZ0Oi0xMDAlO29wYWNpdHk6MX0xMDAle3RvcDowO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19LmxhLWJhbGwtZ3JpZC1iZWF0LC5sYS1iYWxsLWdyaWQtYmVhdD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWdyaWQtYmVhdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzZweDtoZWlnaHQ6MzZweH0ubGEtYmFsbC1ncmlkLWJlYXQubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luOjJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtYmVhdDthbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtYmVhdDstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wM3M7YW5pbWF0aW9uLWRlbGF5Oi4wM3N9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4wMnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMDJzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wOXM7YW5pbWF0aW9uLWRlbGF5Oi4wOXN9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4wNnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMDZzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjlzO2FuaW1hdGlvbi1kZWxheTotLjY5c30ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDFzO2FuaW1hdGlvbi1kZWxheTotLjQxc30ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjZzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjZzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wNHM7YW5pbWF0aW9uLWRlbGF5Oi4wNHN9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoNil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljg0czthbmltYXRpb24tZHVyYXRpb246Ljg0czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDdzO2FuaW1hdGlvbi1kZWxheTouMDdzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7YW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNjZzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDgpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi45M3M7YW5pbWF0aW9uLWR1cmF0aW9uOi45M3M7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNzZzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDkpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMjRzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjI0czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc2czthbmltYXRpb24tZGVsYXk6LS43NnN9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLXNte3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MXB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0yeHt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46NHB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0zeHt3aWR0aDoxMDhweDtoZWlnaHQ6MTA4cHh9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLTN4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbjo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZ3JpZC1iZWF0ezAlLDEwMCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWdyaWQtYmVhdHswJSwxMDAle29wYWNpdHk6MX01MCV7b3BhY2l0eTouMzV9fS5sYS1iYWxsLWdyaWQtcHVsc2UsLmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWdyaWQtcHVsc2V7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luOjJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtcHVsc2U7YW5pbWF0aW9uLW5hbWU6YmFsbC1ncmlkLXB1bHNlOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wM3M7YW5pbWF0aW9uLWRlbGF5Oi4wM3N9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMDJzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjAyczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDlzO2FuaW1hdGlvbi1kZWxheTouMDlzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjA2czthbmltYXRpb24tZHVyYXRpb246MS4wNnM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42OXM7YW5pbWF0aW9uLWRlbGF5Oi0uNjlzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDFzO2FuaW1hdGlvbi1kZWxheTotLjQxc30ubGEtYmFsbC1ncmlkLXB1bHNlPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS42czthbmltYXRpb24tZHVyYXRpb246MS42czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDRzO2FuaW1hdGlvbi1kZWxheTouMDRzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg2KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouODRzO2FuaW1hdGlvbi1kdXJhdGlvbjouODRzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wN3M7YW5pbWF0aW9uLWRlbGF5Oi4wN3N9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7YW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNjZzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg4KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouOTNzO2FuaW1hdGlvbi1kdXJhdGlvbjouOTNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzZzO2FuaW1hdGlvbi1kZWxheTotLjc2c30ubGEtYmFsbC1ncmlkLXB1bHNlPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yNHM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMjRzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzZzO2FuaW1hdGlvbi1kZWxheTotLjc2c30ubGEtYmFsbC1ncmlkLXB1bHNlLmxhLXNte3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjFweH0ubGEtYmFsbC1ncmlkLXB1bHNlLmxhLTJ4e3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46NHB4fS5sYS1iYWxsLWdyaWQtcHVsc2UubGEtM3h7d2lkdGg6MTA4cHg7aGVpZ2h0OjEwOHB4fS5sYS1iYWxsLWdyaWQtcHVsc2UubGEtM3g+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luOjZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1ncmlkLXB1bHNlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouMzU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQ1KTt0cmFuc2Zvcm06c2NhbGUoLjQ1KX19QGtleWZyYW1lcyBiYWxsLWdyaWQtcHVsc2V7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNDUpO3RyYW5zZm9ybTpzY2FsZSguNDUpfX0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLC5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1uZXd0b24tY3JhZGxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo0MHB4O2hlaWdodDoxMHB4fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2OmZpcnN0LWNoaWxkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgZWFzZS1vdXQgaW5maW5pdGUgYmFsbC1uZXd0b24tY3JhZGxlLWxlZnQ7YW5pbWF0aW9uOjFzIGVhc2Utb3V0IGluZmluaXRlIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLW91dCBpbmZpbml0ZSBiYWxsLW5ld3Rvbi1jcmFkbGUtcmlnaHQ7YW5pbWF0aW9uOjFzIGVhc2Utb3V0IGluZmluaXRlIGJhbGwtbmV3dG9uLWNyYWRsZS1yaWdodH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLTJ4e3dpZHRoOjgwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtbmV3dG9uLWNyYWRsZS5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLTN4e3dpZHRoOjEyMHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGUubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0ezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1Aa2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0ezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1uZXd0b24tY3JhZGxlLXJpZ2h0ezEwMCUsNTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufX1Aa2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1yaWdodHsxMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn19LmxhLWJhbGwtcHVsc2UtcmlzZSwubGEtYmFsbC1wdWxzZS1yaXNlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2UtcmlzZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NzBweDtoZWlnaHQ6MTRweH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1wdWxzZS1yaXNlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjoycHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMTUsLjM2LC45LC42KSBpbmZpbml0ZSBiYWxsLXB1bHNlLXJpc2UtZXZlbjthbmltYXRpb246MXMgY3ViaWMtYmV6aWVyKC4xNSwuMzYsLjksLjYpIGluZmluaXRlIGJhbGwtcHVsc2UtcmlzZS1ldmVufS5sYS1iYWxsLXB1bHNlLXJpc2U+ZGl2Om50aC1jaGlsZCgybi0xKXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtcHVsc2UtcmlzZS1vZGQ7YW5pbWF0aW9uLW5hbWU6YmFsbC1wdWxzZS1yaXNlLW9kZH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLXNte3dpZHRoOjM0cHg7aGVpZ2h0OjZweH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MXB4fS5sYS1iYWxsLXB1bHNlLXJpc2UubGEtMnh7d2lkdGg6MTQwcHg7aGVpZ2h0OjI4cHh9LmxhLWJhbGwtcHVsc2UtcmlzZS5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW46NHB4fS5sYS1iYWxsLXB1bHNlLXJpc2UubGEtM3h7d2lkdGg6MjEwcHg7aGVpZ2h0OjQycHh9LmxhLWJhbGwtcHVsc2UtcmlzZS5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXB1bHNlLXJpc2UtZXZlbnswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMyk7dHJhbnNmb3JtOnNjYWxlKC4zKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXB1bHNlLXJpc2UtZXZlbnswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMyk7dHJhbnNmb3JtOnNjYWxlKC4zKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcHVsc2UtcmlzZS1vZGR7MCV7b3BhY2l0eTouMzU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAwJSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSl9MTAwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKC43NSl9fUBrZXlmcmFtZXMgYmFsbC1wdWxzZS1yaXNlLW9kZHswJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMDAlKX0xMDAle29wYWNpdHk6LjM1Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjc1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoLjc1KX19LmxhLWJhbGwtcHVsc2Utc3luYywubGEtYmFsbC1wdWxzZS1zeW5jPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2Utc3luY3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NTRweDtoZWlnaHQ6MThweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1wdWxzZS1zeW5jPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXB1bHNlLXN5bmM7YW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXB1bHNlLXN5bmN9LmxhLWJhbGwtcHVsc2Utc3luYz5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTRzO2FuaW1hdGlvbi1kZWxheTotLjE0c30ubGEtYmFsbC1wdWxzZS1zeW5jPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4wN3M7YW5pbWF0aW9uLWRlbGF5Oi0uMDdzfS5sYS1iYWxsLXB1bHNlLXN5bmM+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtcHVsc2Utc3luYy5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtcHVsc2Utc3luYy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjJweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLTJ4e3dpZHRoOjEwOHB4O2hlaWdodDozNnB4fS5sYS1iYWxsLXB1bHNlLXN5bmMubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLTN4e3dpZHRoOjE2MnB4O2hlaWdodDo1NHB4fS5sYS1iYWxsLXB1bHNlLXN5bmMubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcHVsc2Utc3luY3szMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19QGtleWZyYW1lcyBiYWxsLXB1bHNlLXN5bmN7MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9fS5sYS1iYWxsLXB1bHNlLC5sYS1iYWxsLXB1bHNlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2V7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjU0cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtcHVsc2UubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXB1bHNlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtcHVsc2U7YW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtcHVsc2V9LmxhLWJhbGwtcHVsc2U+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjJzO2FuaW1hdGlvbi1kZWxheTotLjJzfS5sYS1iYWxsLXB1bHNlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xczthbmltYXRpb24tZGVsYXk6LS4xc30ubGEtYmFsbC1wdWxzZT5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30ubGEtYmFsbC1wdWxzZS5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtcHVsc2UubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbjoycHh9LmxhLWJhbGwtcHVsc2UubGEtMnh7d2lkdGg6MTA4cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtcHVsc2UubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1wdWxzZS5sYS0zeHt3aWR0aDoxNjJweDtoZWlnaHQ6NTRweH0ubGEtYmFsbC1wdWxzZS5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46MTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1wdWxzZXswJSwxMDAlLDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4xOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4wMSk7dHJhbnNmb3JtOnNjYWxlKC4wMSl9fUBrZXlmcmFtZXMgYmFsbC1wdWxzZXswJSwxMDAlLDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4xOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4wMSk7dHJhbnNmb3JtOnNjYWxlKC4wMSl9fS5sYS1iYWxsLXJvdGF0ZSwubGEtYmFsbC1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1yb3RhdGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHh9LmxhLWJhbGwtcm90YXRlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1yb3RhdGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguNywtLjEzLC4yMiwuODYpIGluZmluaXRlIGJhbGwtcm90YXRlLWFuaW1hdGlvbjthbmltYXRpb246MXMgY3ViaWMtYmV6aWVyKC43LC0uMTMsLjIyLC44NikgaW5maW5pdGUgYmFsbC1yb3RhdGUtYW5pbWF0aW9ufS5sYS1iYWxsLXJvdGF0ZT5kaXY6YWZ0ZXIsLmxhLWJhbGwtcm90YXRlPmRpdjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdDttYXJnaW46aW5oZXJpdDtjb250ZW50OlwiXCI7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czppbmhlcml0O29wYWNpdHk6Ljh9LmxhLWJhbGwtcm90YXRlPmRpdjpiZWZvcmV7dG9wOjA7bGVmdDotMTUwJX0ubGEtYmFsbC1yb3RhdGU+ZGl2OmFmdGVye3RvcDowO2xlZnQ6MTUwJX0ubGEtYmFsbC1yb3RhdGUubGEtc20sLmxhLWJhbGwtcm90YXRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1yb3RhdGUubGEtMngsLmxhLWJhbGwtcm90YXRlLmxhLTJ4PmRpdnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4fS5sYS1iYWxsLXJvdGF0ZS5sYS0zeCwubGEtYmFsbC1yb3RhdGUubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcm90YXRlLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGJhbGwtcm90YXRlLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1ydW5uaW5nLWRvdHMsLmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcnVubmluZy1kb3Rze2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbi1sZWZ0Oi0yNXB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgYmFsbC1ydW5uaW5nLWRvdHMtYW5pbWF0ZTthbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGJhbGwtcnVubmluZy1kb3RzLWFuaW1hdGV9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNHM7YW5pbWF0aW9uLWRlbGF5Oi0uNHN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44czthbmltYXRpb24tZGVsYXk6LS44c30ubGEtYmFsbC1ydW5uaW5nLWRvdHM+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNnM7YW5pbWF0aW9uLWRlbGF5Oi0xLjZzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yczthbmltYXRpb24tZGVsYXk6LTJzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yLjRzO2FuaW1hdGlvbi1kZWxheTotMi40c30ubGEtYmFsbC1ydW5uaW5nLWRvdHM+ZGl2Om50aC1jaGlsZCg4KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMi44czthbmltYXRpb24tZGVsYXk6LTIuOHN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTMuMnM7YW5pbWF0aW9uLWRlbGF5Oi0zLjJzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDEwKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMy42czthbmltYXRpb24tZGVsYXk6LTMuNnN9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLXNte3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLWxlZnQ6LTEycHh9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLTJ4e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLTJ4PmRpdnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi1sZWZ0Oi01MHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS0zeHt3aWR0aDozMHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tbGVmdDotNzVweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1ydW5uaW5nLWRvdHMtYW5pbWF0ZXswJSwxMDAle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDUwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoNTAwJSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApfTg1JXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyNSUpIHRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyNSUpIHRyYW5zbGF0ZVgoMCl9OTAle3dpZHRoOjIwMCU7aGVpZ2h0Ojc1JX05NSV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVYKDUwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVYKDUwMCUpfX1Aa2V5ZnJhbWVzIGJhbGwtcnVubmluZy1kb3RzLWFuaW1hdGV7MCUsMTAwJXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCg1MDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDUwMCUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKX04NSV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjUlKSB0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjUlKSB0cmFuc2xhdGVYKDApfTkwJXt3aWR0aDoyMDAlO2hlaWdodDo3NSV9OTUle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWCg1MDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWCg1MDAlKX19LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGUsLmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6MTAwJTtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc2NhbGUtbXVsdGlwbGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNjYWxlLW11bHRpcGxlfS5sYS1iYWxsLXNjYWxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjJzO2FuaW1hdGlvbi1kZWxheTouMnN9LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNHM7YW5pbWF0aW9uLWRlbGF5Oi40c30ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1zbSwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1zbT5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0yeCwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0yeD5kaXZ7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0zeCwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zY2FsZS1tdWx0aXBsZXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUle29wYWNpdHk6Ljc1fTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNjYWxlLW11bHRpcGxlezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NSV7b3BhY2l0eTouNzV9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ubGEtYmFsbC1zY2FsZS1wdWxzZSwubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxlLXB1bHNle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNjYWxlLXB1bHNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Ym9yZGVyLXJhZGl1czoxMDAlO29wYWNpdHk6LjU7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zY2FsZS1wdWxzZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zY2FsZS1wdWxzZX0ubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXY6bGFzdC1jaGlsZHstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS1zbSwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS1zbT5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0yeCwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0yeD5kaXZ7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0zeCwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zY2FsZS1wdWxzZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc2NhbGUtcHVsc2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLC5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjEuMjVzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGU7YW5pbWF0aW9uOjEuMjVzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGV9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4yNXM7YW5pbWF0aW9uLWRlbGF5Oi4yNXN9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjVzO2FuaW1hdGlvbi1kZWxheTouNXN9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLXNtPmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTN4PmRpdnt3aWR0aDo5NnB4O2hlaWdodDo5NnB4O2JvcmRlci13aWR0aDo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9OTUle29wYWNpdHk6MH19QGtleWZyYW1lcyBiYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZXswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjEpO3RyYW5zZm9ybTpzY2FsZSguMSl9NzAle29wYWNpdHk6LjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTk1JXtvcGFjaXR5OjB9fS5sYS1iYWxsLXNjYWxlLXJpcHBsZSwubGEtYmFsbC1zY2FsZS1yaXBwbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zY2FsZS1yaXBwbGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZS1yaXBwbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGV9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLXNtPmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTN4PmRpdnt3aWR0aDo5NnB4O2hlaWdodDo5NnB4O2JvcmRlci13aWR0aDo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7b3BhY2l0eTowfX0ubGEtYmFsbC1zY2FsZSwubGEtYmFsbC1zY2FsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNjYWxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc2NhbGU7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc2NhbGV9LmxhLWJhbGwtc2NhbGUubGEtc20sLmxhLWJhbGwtc2NhbGUubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUubGEtMngsLmxhLWJhbGwtc2NhbGUubGEtMng+ZGl2e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUubGEtM3gsLmxhLWJhbGwtc2NhbGUubGEtM3g+ZGl2e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0xMDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYmFsbC1zY2FsZXswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZywubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjo2cyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZzthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDMpe3RvcDo1MCU7bGVmdDo5NSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg2KXt0b3A6ODEuODE5ODA0Njk2NiU7bGVmdDoxOC4xODAxOTQ5MjQ4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUsLmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZTthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZX0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDMpe3RvcDo1MCU7bGVmdDo5NSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg2KXt0b3A6ODEuODE5ODA0Njk2NiU7bGVmdDoxOC4xODAxOTQ5MjQ4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjI1Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjI1Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UsLmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1sZWZ0Oi00cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2U7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2V9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NzVzO2FuaW1hdGlvbi1kZWxheTotLjg3NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0yMCV7b3BhY2l0eToxfTgwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2V7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTIwJXtvcGFjaXR5OjF9ODAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZywubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7LXdlYmtpdC1hbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZX0ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmcubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlO2FuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWZhZGV9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMil7dG9wOjE4LjE4MDE5NDg0NjYlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMjVzO2FuaW1hdGlvbi1kZWxheTotMS4yNXN9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMyl7dG9wOjUwJTtsZWZ0Ojk1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4zNzVzO2FuaW1hdGlvbi1kZWxheTotMS4zNzVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjVzO2FuaW1hdGlvbi1kZWxheTotMS41c30ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg1KXt0b3A6OTQuOTk5OTk5OTk2NiU7bGVmdDo1MC4wMDAwMDAwMDA1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo4MS44MTk4MDQ2OTY2JTtsZWZ0OjE4LjE4MDE5NDkyNDglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjc1czthbmltYXRpb24tZGVsYXk6LTEuNzVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MTguMTc5NDY0OTc0JTtsZWZ0OjE4LjE4MDM3MDA1MTglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yczthbmltYXRpb24tZGVsYXk6LTJzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTJ4PmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O21hcmdpbi10b3A6LThweDttYXJnaW4tbGVmdDotOHB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZS1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGUtcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1zcGluLWZhZGUsLmxhLWJhbGwtc3Bpbi1mYWRlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3Bpbi1mYWRle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNwaW4tZmFkZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O21hcmdpbi10b3A6LTRweDttYXJnaW4tbGVmdDotNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWZhZGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZX0ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMTI1czthbmltYXRpb24tZGVsYXk6LTEuMTI1c30ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1iYWxsLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNzVzO2FuaW1hdGlvbi1kZWxheTotMS43NXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS44NzVzO2FuaW1hdGlvbi1kZWxheTotMS44NzVzfS5sYS1iYWxsLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zcGluLWZhZGUubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLTN4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc3Bpbi1mYWRlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouMjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGV7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX19LmxhLWJhbGwtc3Bpbi1yb3RhdGUsLmxhLWJhbGwtc3Bpbi1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLXJvdGF0ZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLXJvdGF0ZTthbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1yb3RhdGV9LmxhLWJhbGwtc3Bpbi1yb3RhdGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNwaW4tcm90YXRlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDo2MCU7aGVpZ2h0OjYwJTtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcGluLWJvdW5jZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcGluLWJvdW5jZX0ubGEtYmFsbC1zcGluLXJvdGF0ZT5kaXY6bGFzdC1jaGlsZHt0b3A6YXV0bztib3R0b206MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtYmFsbC1zcGluLXJvdGF0ZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLXNwaW4tcm90YXRlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1yb3RhdGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBiYWxsLXNwaW4tcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLWJvdW5jZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1ib3VuY2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3BpbiwubGEtYmFsbC1zcGluPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3BpbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zcGluPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O21hcmdpbi10b3A6LTRweDttYXJnaW4tbGVmdDotNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNwaW47YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbn0ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDoxOC4xODAxOTQ4NDY2JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjI1czthbmltYXRpb24tZGVsYXk6LTEuMjVzfS5sYS1iYWxsLXNwaW4+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjVzO2FuaW1hdGlvbi1kZWxheTotMS41c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoNSl7dG9wOjk0Ljk5OTk5OTk5NjYlO2xlZnQ6NTAuMDAwMDAwMDAwNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNjI1czthbmltYXRpb24tZGVsYXk6LTEuNjI1c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNzVzO2FuaW1hdGlvbi1kZWxheTotMS43NXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoOCl7dG9wOjE4LjE3OTQ2NDk3NCU7bGVmdDoxOC4xODAzNzAwNTE4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMnM7YW5pbWF0aW9uLWRlbGF5Oi0yc30ubGEtYmFsbC1zcGluLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWJhbGwtc3Bpbi5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXNwaW4ubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luLXRvcDotMTJweDttYXJnaW4tbGVmdDotMTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0yMCV7b3BhY2l0eToxfTgwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGJhbGwtc3BpbnswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MjAle29wYWNpdHk6MX04MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLC5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MjZweDtoZWlnaHQ6MjZweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O21hcmdpbi10b3A6LTZweDttYXJnaW4tbGVmdDotNnB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbjthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW59LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDowO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzVzO2FuaW1hdGlvbi1kZWxheTotLjc1c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCgzKXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoNCl7dG9wOjUwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCg1KXt0b3A6MTAwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoNil7dG9wOjEwMCU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDoxMDAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCg4KXt0b3A6NTAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLmxhLXNte3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweDttYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWxlZnQ6LTNweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtMnh7d2lkdGg6NTJweDtoZWlnaHQ6NTJweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtMng+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luLXRvcDotMTJweDttYXJnaW4tbGVmdDotMTJweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtM3h7d2lkdGg6NzhweDtoZWlnaHQ6NzhweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWFyZ2luLXRvcDotMThweDttYXJnaW4tbGVmdDotMThweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW57MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9NzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbnswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ubGEtYmFsbC1zcXVhcmUtc3BpbiwubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNxdWFyZS1zcGlue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDoyNnB4O2hlaWdodDoyNnB4fS5sYS1iYWxsLXNxdWFyZS1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O21hcmdpbi10b3A6LTZweDttYXJnaW4tbGVmdDotNnB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1zcGluO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1zcGlufS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3F1YXJlLXNwaW4+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MDtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXY6bnRoLWNoaWxkKDMpe3RvcDowO2xlZnQ6MTAwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4zNzVzO2FuaW1hdGlvbi1kZWxheTotMS4zNzVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoNCl7dG9wOjUwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoNSl7dG9wOjEwMCU7bGVmdDoxMDAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LmxhLWJhbGwtc3F1YXJlLXNwaW4+ZGl2Om50aC1jaGlsZCg2KXt0b3A6MTAwJTtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDoxMDAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS44NzVzO2FuaW1hdGlvbi1kZWxheTotMS44NzVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoOCl7dG9wOjUwJTtsZWZ0OjA7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtc217d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0ubGEtYmFsbC1zcXVhcmUtc3Bpbi5sYS1zbT5kaXZ7d2lkdGg6NnB4O2hlaWdodDo2cHg7bWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0Oi0zcHh9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtMnh7d2lkdGg6NTJweDtoZWlnaHQ6NTJweH0ubGEtYmFsbC1zcXVhcmUtc3Bpbi5sYS0yeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5sYS1iYWxsLXNxdWFyZS1zcGluLmxhLTN4e3dpZHRoOjc4cHg7aGVpZ2h0Ojc4cHh9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWFyZ2luLXRvcDotMThweDttYXJnaW4tbGVmdDotMThweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcXVhcmUtc3BpbnswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc3F1YXJlLXNwaW57MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9NzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtdHJpYW5nbGUtcGF0aCwubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aD5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtb25lfS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGg+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoycyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10d287YW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXR3b30ubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZX0ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpfX1Aa2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9fUBrZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9fUBrZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpfX0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QsLmxhLWJhbGwtemlnLXphZy1kZWZsZWN0PmRpdntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtemlnLXphZy1kZWZsZWN0e2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtemlnLXphZy1kZWZsZWN0PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi01cHg7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1iYWxsLXppZy16YWctZGVmbGVjdD5kaXY6Zmlyc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZGVmbGVjdDthbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZGVmbGVjdH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3Q+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZGVmbGVjdDthbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZGVmbGVjdH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXppZy1kZWZsZWN0ezE3JSw4NCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsLTE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwtMTYwJSl9MzQlLDY3JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoODAlLC0xNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwtMTYwJSl9MTAwJSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfX1Aa2V5ZnJhbWVzIGJhbGwtemlnLWRlZmxlY3R7MTclLDg0JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwtMTYwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtODAlLC0xNjAlKX0zNCUsNjcley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsLTE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoODAlLC0xNjAlKX0xMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXphZy1kZWZsZWN0ezE3JSw4NCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwxNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwxNjAlKX0zNCUsNjcley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtODAlLDE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwxNjAlKX0xMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9fUBrZXlmcmFtZXMgYmFsbC16YWctZGVmbGVjdHsxNyUsODQley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsMTYwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsMTYwJSl9MzQlLDY3JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwxNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsMTYwJSl9MTAwJSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfX0ubGEtYmFsbC16aWctemFnLC5sYS1iYWxsLXppZy16YWc+ZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC16aWctemFne2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXppZy16YWcubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXppZy16YWc+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW4tdG9wOi01cHg7bWFyZ2luLWxlZnQ6LTVweDtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtemlnLXphZz5kaXY6Zmlyc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXppZy1lZmZlY3Q7YW5pbWF0aW9uOi43cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZWZmZWN0fS5sYS1iYWxsLXppZy16YWc+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXphZy1lZmZlY3Q7YW5pbWF0aW9uOi43cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZWZmZWN0fS5sYS1iYWxsLXppZy16YWcubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC16aWctemFnLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC16aWctemFnLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtemlnLXphZy5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4fS5sYS1iYWxsLXppZy16YWcubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC16aWctemFnLmxhLTN4PmRpdnt3aWR0aDozMHB4O2hlaWdodDozMHB4O21hcmdpbi10b3A6LTE1cHg7bWFyZ2luLWxlZnQ6LTE1cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtemlnLWVmZmVjdHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKX0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC03NSUsLTE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwtMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsLTE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNzUlLC0xNTAlKX19QGtleWZyYW1lcyBiYWxsLXppZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLC0xNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC03NSUsLTE1MCUpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNzUlLC0xNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDc1JSwtMTUwJSl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXphZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLDE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwxNTAlKX19QGtleWZyYW1lcyBiYWxsLXphZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLDE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwxNTAlKX19LmxhLWNvZywubGEtY29nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWNvZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzFweDtoZWlnaHQ6MzFweH0ubGEtY29nLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtY29nPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JvcmRlcjoycHggZGFzaGVkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjRzIGxpbmVhciBpbmZpbml0ZSBjb2ctcm90YXRlO2FuaW1hdGlvbjo0cyBsaW5lYXIgaW5maW5pdGUgY29nLXJvdGF0ZX0ubGEtY29nPmRpdjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjb250ZW50OlwiXCI7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1jb2cubGEtc217d2lkdGg6MTVweDtoZWlnaHQ6MTVweH0ubGEtY29nLmxhLXNtPmRpdiwubGEtY29nLmxhLXNtPmRpdjphZnRlcntib3JkZXItd2lkdGg6MXB4fS5sYS1jb2cubGEtMnh7d2lkdGg6NjFweDtoZWlnaHQ6NjFweH0ubGEtY29nLmxhLTJ4PmRpdiwubGEtY29nLmxhLTJ4PmRpdjphZnRlcntib3JkZXItd2lkdGg6NHB4fS5sYS1jb2cubGEtM3h7d2lkdGg6OTFweDtoZWlnaHQ6OTFweH0ubGEtY29nLmxhLTN4PmRpdiwubGEtY29nLmxhLTN4PmRpdjphZnRlcntib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBjb2ctcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGNvZy1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5sYS1jdWJlLXRyYW5zaXRpb24sLmxhLWN1YmUtdHJhbnNpdGlvbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1jdWJlLXRyYW5zaXRpb257ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWN1YmUtdHJhbnNpdGlvbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXRvcDotN3B4O21hcmdpbi1sZWZ0Oi03cHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY3ViZS10cmFuc2l0aW9uO2FuaW1hdGlvbjoxLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGN1YmUtdHJhbnNpdGlvbn0ubGEtY3ViZS10cmFuc2l0aW9uPmRpdjpsYXN0LWNoaWxkey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOHM7YW5pbWF0aW9uLWRlbGF5Oi0uOHN9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtc20+ZGl2e3dpZHRoOjZweDtoZWlnaHQ6NnB4O21hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDotM3B4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtY3ViZS10cmFuc2l0aW9uLmxhLTJ4PmRpdnt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O21hcmdpbi10b3A6LTE0cHg7bWFyZ2luLWxlZnQ6LTE0cHh9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtM3g+ZGl2e3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWFyZ2luLXRvcDotMjFweDttYXJnaW4tbGVmdDotMjFweH1ALXdlYmtpdC1rZXlmcmFtZXMgY3ViZS10cmFuc2l0aW9uezI1JXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpIHJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpzY2FsZSguNSkgcm90YXRlKC05MGRlZyl9NTAle3RvcDoxMDAlO2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgtMTgwZGVnKX03NSV7dG9wOjEwMCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyk7dHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyl9MTAwJXt0b3A6MDtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTM2MGRlZyl9fUBrZXlmcmFtZXMgY3ViZS10cmFuc2l0aW9uezI1JXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpIHJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpzY2FsZSguNSkgcm90YXRlKC05MGRlZyl9NTAle3RvcDoxMDAlO2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgtMTgwZGVnKX03NSV7dG9wOjEwMCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyk7dHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyl9MTAwJXt0b3A6MDtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTM2MGRlZyl9fS5sYS1maXJlLC5sYS1maXJlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWZpcmV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWZpcmUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1maXJlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxLjVzIGxpbmVhciBpbmZpbml0ZSBmaXJlLWRpYW1vbmRzO2FuaW1hdGlvbjoxLjVzIGxpbmVhciBpbmZpbml0ZSBmaXJlLWRpYW1vbmRzfS5sYS1maXJlPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NXM7YW5pbWF0aW9uLWRlbGF5Oi0uODVzfS5sYS1maXJlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODVzO2FuaW1hdGlvbi1kZWxheTotMS44NXN9LmxhLWZpcmU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMi44NXM7YW5pbWF0aW9uLWRlbGF5Oi0yLjg1c30ubGEtZmlyZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1maXJlLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweH0ubGEtZmlyZS5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1maXJlLmxhLTJ4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fS5sYS1maXJlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWZpcmUubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGZpcmUtZGlhbW9uZHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg3NSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg3NSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtODcuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtODcuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIxMi41JSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMTIuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKX19QGtleWZyYW1lcyBmaXJlLWRpYW1vbmRzezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTg3LjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTg3LjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMTIuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjEyLjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCl9fS5sYS1saW5lLXNjYWxlLXBhcnR5LC5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc2NhbGUtcGFydHl7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjQwcHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDo0cHg7aGVpZ2h0OjMycHg7bWFyZ2luOjAgMnB4O2JvcmRlci1yYWRpdXM6MDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmxpbmUtc2NhbGUtcGFydHk7YW5pbWF0aW9uLW5hbWU6bGluZS1zY2FsZS1wYXJ0eTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7YW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yM3M7YW5pbWF0aW9uLWRlbGF5Oi0uMjNzfS5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjYyczthbmltYXRpb24tZHVyYXRpb246LjYyczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjMyczthbmltYXRpb24tZGVsYXk6LS4zMnN9LmxhLWxpbmUtc2NhbGUtcGFydHk+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNDNzO2FuaW1hdGlvbi1kdXJhdGlvbjouNDNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDRzO2FuaW1hdGlvbi1kZWxheTotLjQ0c30ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24tZHVyYXRpb246LjhzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzFzO2FuaW1hdGlvbi1kZWxheTotLjMxc30ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNHM7YW5pbWF0aW9uLWRlbGF5Oi0uMjRzfS5sYS1saW5lLXNjYWxlLXBhcnR5LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MTZweDttYXJnaW46MCAxcHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtMnh7d2lkdGg6ODBweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0zeHt3aWR0aDoxMjBweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0zeD5kaXZ7d2lkdGg6MTJweDtoZWlnaHQ6OTZweDttYXJnaW46MCA2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGUtcGFydHl7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC4zKTt0cmFuc2Zvcm06c2NhbGVZKC4zKX19QGtleWZyYW1lcyBsaW5lLXNjYWxlLXBhcnR5ezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSguMyk7dHJhbnNmb3JtOnNjYWxlWSguMyl9fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCwubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWR7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjQwcHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjRweDtoZWlnaHQ6MzJweDttYXJnaW46MCAycHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOi45cyBjdWJpYy1iZXppZXIoLjExLC40OSwuMzgsLjc4KSBpbmZpbml0ZSBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZDthbmltYXRpb246LjlzIGN1YmljLWJlemllciguMTEsLjQ5LC4zOCwuNzgpIGluZmluaXRlIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoMiksLmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNjVzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNHM7YW5pbWF0aW9uLWRlbGF5Oi0uNHN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLXNtPmRpdnt3aWR0aDoycHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjAgMXB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZC5sYS0yeHt3aWR0aDo4MHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZC5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQubGEtM3h7d2lkdGg6MTIwcHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLTN4PmRpdnt3aWR0aDoxMnB4O2hlaWdodDo5NnB4O21hcmdpbjowIDZweH1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWR7MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjMpO3RyYW5zZm9ybTpzY2FsZXkoLjMpfX1Aa2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkezAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoMSk7dHJhbnNmb3JtOnNjYWxleSgxKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KC4zKTt0cmFuc2Zvcm06c2NhbGV5KC4zKX19LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NDBweDtoZWlnaHQ6MzJweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6NHB4O2hlaWdodDozMnB4O21hcmdpbjowIDJweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246LjlzIGN1YmljLWJlemllciguODUsLjI1LC4zNywuODUpIGluZmluaXRlIGxpbmUtc2NhbGUtcHVsc2Utb3V0O2FuaW1hdGlvbjouOXMgY3ViaWMtYmV6aWVyKC44NSwuMjUsLjM3LC44NSkgaW5maW5pdGUgbGluZS1zY2FsZS1wdWxzZS1vdXR9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0PmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS45czthbmltYXRpb24tZGVsYXk6LS45c30ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCgyKSwubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjdzO2FuaW1hdGlvbi1kZWxheTotLjdzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLXNtPmRpdnt3aWR0aDoycHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjAgMXB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC5sYS0yeHt3aWR0aDo4MHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQubGEtM3h7d2lkdGg6MTIwcHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLTN4PmRpdnt3aWR0aDoxMnB4O2hlaWdodDo5NnB4O21hcmdpbjowIDZweH1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXR7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoMSk7dHJhbnNmb3JtOnNjYWxleSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KC4zKTt0cmFuc2Zvcm06c2NhbGV5KC4zKX19QGtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjMpO3RyYW5zZm9ybTpzY2FsZXkoLjMpfX0ubGEtbGluZS1zY2FsZSwubGEtbGluZS1zY2FsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1saW5lLXNjYWxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo0MHB4O2hlaWdodDozMnB4fS5sYS1saW5lLXNjYWxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zY2FsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6NHB4O2hlaWdodDozMnB4O21hcmdpbjowIDJweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MS4ycyBpbmZpbml0ZSBsaW5lLXNjYWxlO2FuaW1hdGlvbjoxLjJzIGluZmluaXRlIGxpbmUtc2NhbGV9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtbGluZS1zY2FsZT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfS5sYS1saW5lLXNjYWxlLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MTZweDttYXJnaW46MCAxcHh9LmxhLWxpbmUtc2NhbGUubGEtMnh7d2lkdGg6ODBweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zY2FsZS5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS5sYS0zeHt3aWR0aDoxMjBweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zY2FsZS5sYS0zeD5kaXZ7d2lkdGg6MTJweDtoZWlnaHQ6OTZweDttYXJnaW46MCA2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGV7MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC40KTt0cmFuc2Zvcm06c2NhbGVZKC40KX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9fUBrZXlmcmFtZXMgbGluZS1zY2FsZXswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoLjQpO3RyYW5zZm9ybTpzY2FsZVkoLjQpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX19LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZywubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjo2cyBsaW5lYXIgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MnB4O2hlaWdodDoxMHB4O21hcmdpbjotNXB4IDJweCAycHggLTFweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDEpe3RvcDoxNSU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NzVzO2FuaW1hdGlvbi1kZWxheTotLjg3NXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDIpe3RvcDoyNS4yNTEyNjI2NTg1JTtsZWZ0Ojc0Ljc0ODczNzM0MTUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo3NC43NDg3MzczNDE1JTtsZWZ0Ojc0Ljc0ODczNzM0MTUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg1KXt0b3A6ODQuOTk5OTk5OTk3NCU7bGVmdDo1MC4wMDAwMDAwMDA0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5ODA2MTg5JTtsZWZ0OjE1LjAwMDAwMzk4MzQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoOCl7dG9wOjI1LjI1MDY5NDk3OTglO2xlZnQ6MjUuMjUxMzk4OTI5MiU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1zbT5kaXZ7d2lkdGg6MXB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0OjB9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtM3g+ZGl2e3dpZHRoOjZweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0zcHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKX19QGtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yfTEwMCV7b3BhY2l0eToxfX0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLC5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZTthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MjUuMjUxMjYyNjU4NSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzVzO2FuaW1hdGlvbi1kZWxheTotLjc1c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoMyl7dG9wOjUwJTtsZWZ0Ojg1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoNSl7dG9wOjg0Ljk5OTk5OTk5NzQlO2xlZnQ6NTAuMDAwMDAwMDAwNCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg2KXt0b3A6NzQuNzQ4NzM2OTg2MiU7bGVmdDoyNS4yNTEyNjI3MTkzJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoyNS4yNTA2OTQ5Nzk4JTtsZWZ0OjI1LjI1MTM5ODkyOTIlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtc20+ZGl2e3dpZHRoOjFweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDowfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTJ4PmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjIwcHg7bWFyZ2luLXRvcDotMTBweDttYXJnaW4tbGVmdDotMnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlezUwJXtvcGFjaXR5Oi4yfTEwMCV7b3BhY2l0eToxfX0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcsLmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5ne2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4Oy13ZWJraXQtYW5pbWF0aW9uOjZzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGU7YW5pbWF0aW9uOjZzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tZmFkZS1yb3RhdGluZ30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMil7dG9wOjI1LjI1MTI2MjY1ODUlO2xlZnQ6NzQuNzQ4NzM3MzQxNSU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMzc1czthbmltYXRpb24tZGVsYXk6LTEuMzc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1saW5lLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDUpe3RvcDo4NC45OTk5OTk5OTc0JTtsZWZ0OjUwLjAwMDAwMDAwMDQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1saW5lLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MjUuMjUwNjk0OTc5OCU7bGVmdDoyNS4yNTEzOTg5MjkyJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLXNtPmRpdnt3aWR0aDoxcHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6MH0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zcGluLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fS5sYS1saW5lLXNwaW4tZmFkZSwubGEtbGluZS1zcGluLWZhZGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zcGluLWZhZGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zcGluLWZhZGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1mYWRlO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tZmFkZX0ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWxpbmUtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoMil7dG9wOjI1LjI1MTI2MjY1ODUlO2xlZnQ6NzQuNzQ4NzM3MzQxNSU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMzc1czthbmltYXRpb24tZGVsYXk6LTEuMzc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1saW5lLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo4NC45OTk5OTk5OTc0JTtsZWZ0OjUwLjAwMDAwMDAwMDQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1saW5lLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MjUuMjUwNjk0OTc5OCU7bGVmdDoyNS4yNTEzOTg5MjkyJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLXNtPmRpdnt3aWR0aDoxcHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6MH0ubGEtbGluZS1zcGluLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWZhZGUubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tZmFkZXs1MCV7b3BhY2l0eTouMn0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBsaW5lLXNwaW4tZmFkZXs1MCV7b3BhY2l0eTouMn0xMDAle29wYWNpdHk6MX19LmxhLXBhY21hbiwubGEtcGFjbWFuPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLXBhY21hbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtcGFjbWFuLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtcGFjbWFuPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcn0ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDIpe3dpZHRoOjA7aGVpZ2h0OjA7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxNnB4O2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246LjVzIGluZmluaXRlIHBhY21hbi1yb3RhdGUtaGFsZi11cDthbmltYXRpb246LjVzIGluZmluaXRlIHBhY21hbi1yb3RhdGUtaGFsZi11cH0ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoMil7bWFyZ2luLXRvcDotMzJweDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnBhY21hbi1yb3RhdGUtaGFsZi1kb3duO2FuaW1hdGlvbi1uYW1lOnBhY21hbi1yb3RhdGUtaGFsZi1kb3dufS5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCg2KXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MjAwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBwYWNtYW4tYmFsbHM7YW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBwYWNtYW4tYmFsbHN9LmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjQ0czthbmltYXRpb24tZGVsYXk6LTEuNDRzfS5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS45NHM7YW5pbWF0aW9uLWRlbGF5Oi0xLjk0c30ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTIuNDRzO2FuaW1hdGlvbi1kZWxheTotMi40NHN9LmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yLjk0czthbmltYXRpb24tZGVsYXk6LTIuOTRzfS5sYS1wYWNtYW4ubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtcGFjbWFuLmxhLXNtPmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDo4cHh9LmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDIpe21hcmdpbi10b3A6LTE2cHh9LmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDMpLC5sYS1wYWNtYW4ubGEtc20+ZGl2Om50aC1jaGlsZCg0KSwubGEtcGFjbWFuLmxhLXNtPmRpdjpudGgtY2hpbGQoNSksLmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDYpe3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1wYWNtYW4ubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtcGFjbWFuLmxhLTJ4PmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS0yeD5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDozMnB4fS5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOi02NHB4fS5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuLmxhLTJ4PmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbi5sYS0yeD5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCg2KXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1wYWNtYW4ubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtcGFjbWFuLmxhLTN4PmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS0zeD5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDo0OHB4fS5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOi05NnB4fS5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuLmxhLTN4PmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbi5sYS0zeD5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCg2KXt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fUAtd2Via2l0LWtleWZyYW1lcyBwYWNtYW4tcm90YXRlLWhhbGYtdXB7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBwYWNtYW4tcm90YXRlLWhhbGYtdXB7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHBhY21hbi1yb3RhdGUtaGFsZi1kb3duezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUBrZXlmcmFtZXMgcGFjbWFuLXJvdGF0ZS1oYWxmLWRvd257MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIHBhY21hbi1iYWxsc3swJXtsZWZ0OjIwMCU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9NSV7b3BhY2l0eTouNX02NiV7b3BhY2l0eToxfTY3JXtvcGFjaXR5OjB9MTAwJXtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX19QGtleWZyYW1lcyBwYWNtYW4tYmFsbHN7MCV7bGVmdDoyMDAlO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfTUle29wYWNpdHk6LjV9NjYle29wYWNpdHk6MX02NyV7b3BhY2l0eTowfTEwMCV7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9fS5sYS1zcXVhcmUtamVsbHktYm94LC5sYS1zcXVhcmUtamVsbHktYm94PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLXNxdWFyZS1qZWxseS1ib3h7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLXNxdWFyZS1qZWxseS1ib3gubGEtZGFya3tjb2xvcjojMzMzfS5sYS1zcXVhcmUtamVsbHktYm94PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcn0ubGEtc3F1YXJlLWplbGx5LWJveD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1zcXVhcmUtamVsbHktYm94PmRpdjpudGgtY2hpbGQoMil7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCV9LmxhLXNxdWFyZS1qZWxseS1ib3g+ZGl2Om50aC1jaGlsZCgxKXt0b3A6LTI1JTt6LWluZGV4OjE7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czoxMCU7LXdlYmtpdC1hbmltYXRpb246LjZzIGxpbmVhciAtLjFzIGluZmluaXRlIHNxdWFyZS1qZWxseS1ib3gtYW5pbWF0ZTthbmltYXRpb246LjZzIGxpbmVhciAtLjFzIGluZmluaXRlIHNxdWFyZS1qZWxseS1ib3gtYW5pbWF0ZX0ubGEtc3F1YXJlLWplbGx5LWJveD5kaXY6bnRoLWNoaWxkKDIpe2JvdHRvbTotOSU7aGVpZ2h0OjEwJTtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTouMjstd2Via2l0LWFuaW1hdGlvbjouNnMgbGluZWFyIC0uMXMgaW5maW5pdGUgc3F1YXJlLWplbGx5LWJveC1zaGFkb3c7YW5pbWF0aW9uOi42cyBsaW5lYXIgLS4xcyBpbmZpbml0ZSBzcXVhcmUtamVsbHktYm94LXNoYWRvd30ubGEtc3F1YXJlLWplbGx5LWJveC5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1zcXVhcmUtamVsbHktYm94LmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXNxdWFyZS1qZWxseS1ib3gubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlezE3JXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMCV9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyl9NTAle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgxLC45KSByb3RhdGUoNDVkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyl9fUBrZXlmcmFtZXMgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlezE3JXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMCV9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyl9NTAle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgxLC45KSByb3RhdGUoNDVkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LXNoYWRvd3s1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKX19QGtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LXNoYWRvd3s1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKX19LmxhLXNxdWFyZS1sb2FkZXIsLmxhLXNxdWFyZS1sb2FkZXI+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtc3F1YXJlLWxvYWRlcntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtc3F1YXJlLWxvYWRlci5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLXNxdWFyZS1sb2FkZXI+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcjthbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcn0ubGEtc3F1YXJlLWxvYWRlcj5kaXY6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3A7Y29udGVudDpcIlwiO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yOy13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4gaW5maW5pdGUgc3F1YXJlLWxvYWRlci1pbm5lcjthbmltYXRpb246MnMgZWFzZS1pbiBpbmZpbml0ZSBzcXVhcmUtbG9hZGVyLWlubmVyfS5sYS1zcXVhcmUtbG9hZGVyLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLXNxdWFyZS1sb2FkZXIubGEtc20+ZGl2e2JvcmRlci13aWR0aDoxcHh9LmxhLXNxdWFyZS1sb2FkZXIubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtc3F1YXJlLWxvYWRlci5sYS0yeD5kaXZ7Ym9yZGVyLXdpZHRoOjRweH0ubGEtc3F1YXJlLWxvYWRlci5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1zcXVhcmUtbG9hZGVyLmxhLTN4PmRpdntib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1sb2FkZXItaW5uZXJ7MCUsMTAwJSwyNSV7aGVpZ2h0OjB9NTAlLDc1JXtoZWlnaHQ6MTAwJX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyLWlubmVyezAlLDEwMCUsMjUle2hlaWdodDowfTUwJSw3NSV7aGVpZ2h0OjEwMCV9fS5sYS1zcXVhcmUtc3BpbiwubGEtc3F1YXJlLXNwaW4+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtc3F1YXJlLXNwaW57ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLXNxdWFyZS1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtc3F1YXJlLXNwaW4+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgc3F1YXJlLXNwaW47YW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgc3F1YXJlLXNwaW59LmxhLXNxdWFyZS1zcGluLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLXNxdWFyZS1zcGluLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXNxdWFyZS1zcGluLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCl9MjUley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgzNjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3F1YXJlLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19LmxhLXRpbWVyLC5sYS10aW1lcj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS10aW1lcntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtdGltZXIubGEtZGFya3tjb2xvcjojMzMzfS5sYS10aW1lcj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JhY2tncm91bmQ6MCAwO2JvcmRlci1yYWRpdXM6MTAwJX0ubGEtdGltZXI+ZGl2OmFmdGVyLC5sYS10aW1lcj5kaXY6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNHB4O2xlZnQ6MTRweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjJweDttYXJnaW4tdG9wOi0xcHg7bWFyZ2luLWxlZnQ6LTFweDtjb250ZW50OlwiXCI7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjFweCAxcHggMDt0cmFuc2Zvcm0tb3JpZ2luOjFweCAxcHggMDstd2Via2l0LWFuaW1hdGlvbjoxLjI1cyBsaW5lYXIgLTYyNW1zIGluZmluaXRlIHRpbWVyLWxvYWRlcjthbmltYXRpb246MS4yNXMgbGluZWFyIC02MjVtcyBpbmZpbml0ZSB0aW1lci1sb2FkZXJ9LmxhLXRpbWVyPmRpdjpiZWZvcmV7aGVpZ2h0OjEycHh9LmxhLXRpbWVyPmRpdjphZnRlcntoZWlnaHQ6OHB4Oy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjE1czthbmltYXRpb24tZHVyYXRpb246MTVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi03LjVzO2FuaW1hdGlvbi1kZWxheTotNy41c30ubGEtdGltZXIubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtdGltZXIubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjFweH0ubGEtdGltZXIubGEtc20+ZGl2OmFmdGVyLC5sYS10aW1lci5sYS1zbT5kaXY6YmVmb3Jle3RvcDo3cHg7bGVmdDo3cHg7d2lkdGg6MXB4O21hcmdpbi10b3A6LS41cHg7bWFyZ2luLWxlZnQ6LS41cHg7Ym9yZGVyLXJhZGl1czoxcHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOi41cHggLjVweCAwO3RyYW5zZm9ybS1vcmlnaW46LjVweCAuNXB4IDB9LmxhLXRpbWVyLmxhLXNtPmRpdjpiZWZvcmV7aGVpZ2h0OjZweH0ubGEtdGltZXIubGEtc20+ZGl2OmFmdGVye2hlaWdodDo0cHh9LmxhLXRpbWVyLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdjphZnRlciwubGEtdGltZXIubGEtMng+ZGl2OmJlZm9yZXt0b3A6MjhweDtsZWZ0OjI4cHg7d2lkdGg6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4O2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoycHggMnB4IDA7dHJhbnNmb3JtLW9yaWdpbjoycHggMnB4IDB9LmxhLXRpbWVyLmxhLTJ4PmRpdjpiZWZvcmV7aGVpZ2h0OjI0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdjphZnRlcntoZWlnaHQ6MTZweH0ubGEtdGltZXIubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtdGltZXIubGEtM3g+ZGl2e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHg7Ym9yZGVyLXdpZHRoOjZweH0ubGEtdGltZXIubGEtM3g+ZGl2OmFmdGVyLC5sYS10aW1lci5sYS0zeD5kaXY6YmVmb3Jle3RvcDo0MnB4O2xlZnQ6NDJweDt3aWR0aDo2cHg7bWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0Oi0zcHg7Ym9yZGVyLXJhZGl1czo2cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjNweCAzcHggMDt0cmFuc2Zvcm0tb3JpZ2luOjNweCAzcHggMH0ubGEtdGltZXIubGEtM3g+ZGl2OmJlZm9yZXtoZWlnaHQ6MzZweH0ubGEtdGltZXIubGEtM3g+ZGl2OmFmdGVye2hlaWdodDoyNHB4fUAtd2Via2l0LWtleWZyYW1lcyB0aW1lci1sb2FkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgdGltZXItbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtdHJpYW5nbGUtc2tldy1zcGluLC5sYS10cmlhbmdsZS1za2V3LXNwaW4+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtdHJpYW5nbGUtc2tldy1zcGlue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDoxNnB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtZGFya3tjb2xvcjojMzMzfS5sYS10cmlhbmdsZS1za2V3LXNwaW4+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjA7aGVpZ2h0OjA7YmFja2dyb3VuZDowIDA7Ym9yZGVyOnNvbGlkO2JvcmRlci13aWR0aDowIDE2cHggMTZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb246M3MgY3ViaWMtYmV6aWVyKC4wOSwuNTcsLjQ5LC45KSBpbmZpbml0ZSB0cmlhbmdsZS1za2V3LXNwaW47YW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgdHJpYW5nbGUtc2tldy1zcGlufS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6OHB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtc20+ZGl2e2JvcmRlci13aWR0aDowIDhweCA4cHh9LmxhLXRyaWFuZ2xlLXNrZXctc3Bpbi5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDozMnB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtMng+ZGl2e2JvcmRlci13aWR0aDowIDMycHggMzJweH0ubGEtdHJpYW5nbGUtc2tldy1zcGluLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0OjQ4cHh9LmxhLXRyaWFuZ2xlLXNrZXctc3Bpbi5sYS0zeD5kaXZ7Ym9yZGVyLXdpZHRoOjAgNDhweCA0OHB4fUAtd2Via2l0LWtleWZyYW1lcyB0cmlhbmdsZS1za2V3LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19QGtleWZyYW1lcyB0cmlhbmdsZS1za2V3LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19LmJsYWNrLW92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDo5OTk5OSFpbXBvcnRhbnR9LmJsYWNrLW92ZXJsYXk+ZGl2e3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5sb2FkaW5nLXRleHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjYwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTYwJSk7ei1pbmRleDo5OTk5OSFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVG8gc2V0IGJhY2tkcm9wIGNvbG9yKCdyZ2JhKDUxLDUxLDUxLDAuOCknKVxuICAgKiBPbmx5IHN1cHBvcnRzIFJHQkEgY29sb3IgZm9ybWF0XG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBiZENvbG9yID0gJ3JnYmEoNTEsNTEsNTEsMC44KSc7XG4gIC8qKlxuICAgKiBUbyBzZXQgc3Bpbm5lciBzaXplXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaXplID0gJyc7XG4gIC8qKlxuICAgKiBUbyBzZXQgc3Bpbm5lciBjb2xvcignI2ZmZicpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb2xvciA9ICcjZmZmJztcbiAgLyoqXG4gICAqIFRvIHNldCB0eXBlIG9mIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRvIHNldCBsb2FkaW5nIHRleHQoZmFsc2UpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsb2FkaW5nVGV4dCA9IGZhbHNlO1xuICAvKipcbiAgICogQ2xhc3MgZm9yIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIHNwaW5uZXJDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogRmxhZyB0byBzaG93L2hpZGUgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YXJpYWJsZSBmb3Igc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgc3Bpbm5lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogQXJyYXkgZm9yIHNwaW5uZXIgZGl2c1xuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgZGl2QXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGRpdlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgZGl2Q291bnQgPSAwO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyQ29tcG9uZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyU2VydmljZTogTmd4U3Bpbm5lclNlcnZpY2UpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNwaW5uZXJPYnNlcnZhYmxlLnN1YnNjcmliZShmbGFnID0+IHtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmbGFnO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiBtZXRob2RcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICB9XG4gIC8qKlxuICAgKiBPbiBjaGFuZ2VzIGV2ZW50IGZvciBpbnB1dCB2YXJpYWJsZXNcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCB0eXBlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLnR5cGU7XG4gICAgY29uc3Qgc2l6ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5zaXplO1xuXG4gICAgaWYgKHR5cGVDaGFuZ2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSB0eXBlQ2hhbmdlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpemVDaGFuZ2UpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2l6ZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHNpemVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBzaXplQ2hhbmdlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHNpemVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemVDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBUbyBnZXQgY2xhc3MgZm9yIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIGdldENsYXNzKHR5cGUgPSAnYmFsbC1zY2FsZS1tdWx0aXBsZScsIHNpemUgPSAnbGFyZ2UnKTogc3RyaW5nIHtcbiAgICB0aGlzLmRpdkNvdW50ID0gTE9BREVSU1t0eXBlXTtcbiAgICB0aGlzLmRpdkFycmF5ID0gQXJyYXkodGhpcy5kaXZDb3VudCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IGkpO1xuICAgIGxldCBzaXplQ2xhc3MgPSAnJztcbiAgICBzd2l0Y2ggKHNpemUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBzaXplQ2xhc3MgPSAnbGEtc20nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHNpemVDbGFzcyA9ICdsYS0yeCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBzaXplQ2xhc3MgPSAnbGEtM3gnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gJ2xhLScgKyB0eXBlICsgJyAnICsgc2l6ZUNsYXNzO1xuICB9XG4gIC8qKlxuICAgKiBBZnRlciBpbnB1dCB2YXJpYWJsZXMgY2huYWdlIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBvbklucHV0Q2hhbmdlKCkge1xuICAgIHRoaXMuc3Bpbm5lckNsYXNzID0gdGhpcy5nZXRDbGFzcyh0aGlzLnR5cGUsIHRoaXMuc2l6ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFNwaW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4U3Bpbm5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztJQWlCRTs7Ozs7O2lDQUwyQixJQUFJLE9BQU8sRUFBVztLQUtoQzs7Ozs7Ozs7Ozs7O0lBTWpCLGdDQUFJOzs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7Ozs7OztJQU1ELGdDQUFJOzs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFMRDs7Ozs7Ozs7QUNBQSxJQUFhLE9BQU8sR0FBRztJQUNuQixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLDJCQUEyQixFQUFFLENBQUM7SUFDOUIsd0JBQXdCLEVBQUUsQ0FBQztJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsWUFBWSxFQUFFLENBQUM7SUFDZixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixZQUFZLEVBQUUsQ0FBQztJQUNmLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsV0FBVyxFQUFFLENBQUM7SUFDZCxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQixFQUFFLENBQUM7SUFDN0IsbUNBQW1DLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLGtCQUFrQixFQUFFLENBQUM7SUFDckIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixjQUFjLEVBQUUsQ0FBQztJQUNqQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLEtBQUssRUFBRSxDQUFDO0lBQ1IsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixNQUFNLEVBQUUsQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDO0lBQ2Ysa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixtQ0FBbUMsRUFBRSxDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixRQUFRLEVBQUUsQ0FBQztJQUNYLGtCQUFrQixFQUFFLENBQUM7SUFDckIsZUFBZSxFQUFFLENBQUM7SUFDbEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0NBQzFCLENBQUM7Ozs7OztBQ3RERjs7Ozs7O0lBdUZFLDZCQUFvQixjQUFpQztRQUFyRCxpQkFJQztRQUptQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7Ozs7Ozt1QkE1RGxDLG9CQUFvQjs7Ozs7O29CQU12QixFQUFFOzs7Ozs7cUJBTUQsTUFBTTs7Ozs7OzJCQVlBLEtBQUs7Ozs7OzsyQkFZZCxLQUFLOzs7Ozs7d0JBWU8sRUFBRTs7Ozs7O3dCQU1qQixDQUFDO1FBT1YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3RSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7O0lBTUQsc0NBQVE7Ozs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7Ozs7Ozs7Ozs7O0lBTUQseUNBQVc7Ozs7Ozs7SUFBWCxVQUFZLE9BQXNCOztRQUNoQyxJQUFNLFVBQVUsR0FBaUIsT0FBTyxTQUFNOztRQUM5QyxJQUFNLFVBQVUsR0FBaUIsT0FBTyxTQUFNO1FBRTlDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxPQUFPLFVBQVUsQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDMUcsSUFBSSxVQUFVLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxPQUFPLFVBQVUsQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDMUcsSUFBSSxVQUFVLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtLQUNGOzs7Ozs7Ozs7Ozs7OztJQU1ELHNDQUFROzs7Ozs7OztJQUFSLFVBQVMsSUFBNEIsRUFBRSxJQUFjO1FBQTVDLHFCQUFBLEVBQUEsNEJBQTRCO1FBQUUscUJBQUEsRUFBQSxjQUFjO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7O1FBQzlELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxPQUFPO2dCQUNWLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7S0FDdkM7Ozs7Ozs7Ozs7OztJQU1ELDJDQUFhOzs7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6RDs7Ozs7Ozs7Ozs7O0lBTUQseUNBQVc7Ozs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3hDOztnQkFqS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsOFRBT0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsdXczR0FJMGwzRyxDQUFDO2lCQUNybTNHOzs7O2dCQW5CUSxpQkFBaUI7OzswQkEwQnZCLEtBQUs7dUJBTUwsS0FBSzt3QkFNTCxLQUFLO3VCQU1MLEtBQUs7OEJBTUwsS0FBSzs7OEJBbkRSOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7OzJCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/distinctUntilChanged.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\">\n\n\n        <ngx-spinner [visible]=\"showSpinner1\"></ngx-spinner>\n\n\n    <form [formGroup]=\"helpdeskForm\">\n        <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n        <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.address\"></itx-helpdesk-create-header>\n        <div class=\"form-group\" *ngIf=\"showAddressChoice\">\n            <div class=\"toggle-wrapper\">\n                <div class=\"button\">\n                    <input type=\"radio\" name=\"address_choice\" id=\"address_choice_yes\" checked value=\"true\" [formControl]=\"isPro\">\n                    <label for=\"address_choice_yes\">{{ translation.createRequest.address.form.pro }}</label>\n                </div>\n                <div class=\"button\">\n                    <input type=\"radio\" name=\"address_choice\" id=\"address_choice_no\" checked value=\"false\" [formControl]=\"isPro\">\n                    <label for=\"address_choice_no\">{{ translation.createRequest.address.form.perso }}</label>\n                </div>\n                <div class=\"clearer\"></div>\n            </div>\n        </div>\n        <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"date\" [title]=\"translation.createRequest.address.form.from.label\" [dateDesc] = \"translation.createRequest.address.form.from.description\"></itx-helpdesk-create-date>\n        <div class=\"form-group\" ngClass=\"{{ address.invalid && (address.touched || address.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.address.form.address.label }} <span class=\"description\">{{ translation.createRequest.address.form.address.description }}</span> <span class=\"error\" *ngIf=\"address.invalid && (address.touched || address.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" name=\"address\" [formControl]=\"address\" placeholder=\"{{ translation.createRequest.address.form.address.placeholder }}\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ city.invalid && (city.touched || city.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.address.form.city.label }} <span class=\"description\">{{ translation.createRequest.address.form.city.description }}</span><span class=\"error\" *ngIf=\"city.invalid && (city.touched || city.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" name=\"city\" [formControl]=\"city\" placeholder=\"{{ translation.createRequest.address.form.city.placeholder }}\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{ translation.createRequest.address.form.state.label }} <span>({{ translation.createRequest.general.optional }})</span><span class=\"description\">{{ translation.createRequest.address.form.state.description }}</span></label>\n            <input type=\"text\" name=\"state\" [formControl]=\"state\" placeholder=\"{{ translation.createRequest.address.form.state.placeholder }}\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ zip.invalid && (zip.touched || zip.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.address.form.zip.label }} <span class=\"description\">{{ translation.createRequest.address.form.zip.description }}</span><span class=\"error\" *ngIf=\"zip.invalid && (zip.touched || zip.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" name=\"zip\" [formControl]=\"zip\" placeholder=\"{{ translation.createRequest.address.form.zip.placeholder }}\">\n        </div>\n        <itx-helpdesk-create-select [refVal]=\"'Code'\" [parent]=\"helpdeskForm\" [control]=\"country\" [title]=\"translation.createRequest.address.form.country.label\" [list]=\"countryList\" [selectDesc]=\"translation.createRequest.address.form.country.description\"></itx-helpdesk-create-select>\n        <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\" [title]=\"translation.createRequest.address.form.attachment.label\" [fileType]=\"translation.createRequest.address.form.attachment.description\"></itx-helpdesk-create-upload>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.block-helpdesk-create .form-group .toggle-wrapper {\n  width: 100%;\n  border: 1px solid #DADADA;\n  border-radius: 8vh; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button {\n    border: 0;\n    width: 50%;\n    text-align: center;\n    display: block;\n    float: left;\n    padding: 0;\n    margin: 0; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input {\n      display: none; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input:checked + label {\n        color: white;\n        background-color: #093152; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button label {\n      width: 100%;\n      height: 8vh;\n      line-height: 8vh;\n      text-align: center;\n      color: #DADADA;\n      margin: 0;\n      background-color: white;\n      border-radius: 8vh; }\n\n.block-helpdesk-create .block_ui[_nghost-c9] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px solid white;\n  border-radius: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtYWRyZXNzZXMvaGVscGRlc2stY3JlYXRlLWFkcmVzc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDNUZHO0VBR1ksWUFBVztFQUNYLDBCRHlCUTtFQ3hCUixtQkFOTSxFQWlDVDs7QUFoQ1Q7SUFPZ0IsVUFBUztJQUNULFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLFlBQVc7SUFDWCxXQUFVO0lBQ1YsVUFBUyxFQWtCWjs7QUEvQmI7TUFlb0IsY0FBYSxFQUtoQjs7QUFwQmpCO1FBaUJ3QixhRGJYO1FDY1csMEJEQUEsRUNDSDs7QUFuQnJCO01Bc0JvQixZQUFXO01BQ1gsWUF4QkY7TUF5QkUsaUJBekJGO01BMEJFLG1CQUFrQjtNQUNsQixlREdBO01DRkEsVUFBUztNQUNULHdCRHhCUDtNQ3lCTyxtQkE5QkYsRUErQkQ7O0FBOUJqQjtFQW1DUSxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtYWRyZXNzZXMvaGVscGRlc2stY3JlYXRlLWFkcmVzc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCIgICAgQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuICAgIEBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuICAgICR0b2dnbGVIZWlnaHQ6IDh2aDtcbiAgICAuYmxvY2staGVscGRlc2stY3JlYXRlIHtcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgLnRvZ2dsZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXR4LWxhYmVsLWRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2NrX3VpW19uZ2hvc3QtYzldIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICB9XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HelpdeskCreateAdressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateAdressesComponent", function() { return HelpdeskCreateAdressesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/references/countries.service */ "./src/app/modules/core/services/references/countries.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _shared_services_button_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/button.service */ "./src/app/modules/shared/services/button.service.ts");













var HelpdeskCreateAdressesComponent = /** @class */ (function () {
    function HelpdeskCreateAdressesComponent(fb, userService, popupService, createRequestService, router, countriesService, langService, route, button) {
        var _this = this;
        this.fb = fb;
        this.userService = userService;
        this.popupService = popupService;
        this.createRequestService = createRequestService;
        this.router = router;
        this.countriesService = countriesService;
        this.langService = langService;
        this.route = route;
        this.button = button;
        this.showAddressChoice = true;
        this.errorMsgTop = false;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isPro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('true');
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.careof = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.pobox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("false", [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_10__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_11__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            StartDate: this.date,
            IsProfessionalAddress: this.isPro,
            CareOf: this.careof,
            Address: this.address,
            POBox: this.pobox,
            City: this.city,
            State: this.state,
            ZIP: this.zip,
            Country: this.country,
            Files: this.file
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
        this.combineParamsAndUser = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.countriesService.countries$, this.userService.userInfos$, this.route.params);
        this.combineParamsAndUser.subscribe(function (_a) {
            var countriesList = _a[0], userInfos = _a[1], params = _a[2];
            _this.typeAdresse = params['typeAdresse'];
            _this.countryList = countriesList;
            _this.userInfos = userInfos;
            if (_this.typeAdresse !== undefined) {
                _this.patchForm();
            }
            _this.hideSpinner();
            _this.button.changeMessage(false);
        });
    }
    HelpdeskCreateAdressesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSpinner(); }, 25);
        this.countriesService.getCountries().subscribe();
        this.userService.getUserInfos().subscribe();
        this.date.setValue(new Date());
        this.button.changeMessage(true);
    };
    HelpdeskCreateAdressesComponent.prototype.showSpinner = function () {
        this.showSpinner1 = true;
    };
    HelpdeskCreateAdressesComponent.prototype.hideSpinner = function () {
        this.showSpinner1 = false;
    };
    HelpdeskCreateAdressesComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskCreateAdressesComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateAdressesComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreateAdressesComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateAdressesComponent.prototype.patchForm = function () {
        var data = this.userInfos.ProfessionalContactInfo.Address;
        this.isPro.setValue(true);
        if (this.typeAdresse === 'perso') {
            data = this.userInfos.PersonalContactInfo.Address;
            this.isPro.setValue(false);
        }
        if (data === null) {
            return;
        }
        // this.isPro.disable();
        this.showAddressChoice = false;
        var currentCountry = this.countryList.find(function (country) { return country.Name === data.Country.Name; });
        if (currentCountry !== undefined) {
            this.country.setValue(currentCountry);
        }
        this.helpdeskForm.patchValue({
            CareOf: data.CareOf,
            Address: data.Address,
            POBox: data.POBox,
            City: data.City,
            State: data.State,
            ZIP: data.ZIP
        });
    };
    HelpdeskCreateAdressesComponent.prototype.sendRequest = function () {
        var _this = this;
        var newAddress = this.helpdeskForm.value;
        var code = this.country.value.Code ? this.country.value.Code : this.country.value;
        var currentCountry = this.countryList.find(function (country) { return country.Code == code; });
        newAddress.Country = currentCountry;
        this.createRequestService.requestInProgress(true);
        this.userService.changeAddress(newAddress, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('ERROR', err);
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.address.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreateAdressesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-adresses',
            template: __webpack_require__(/*! ./helpdesk-create-adresses.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-adresses.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_6__["CreateRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_8__["LangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_button_service__WEBPACK_IMPORTED_MODULE_12__["ButtonService"]])
    ], HelpdeskCreateAdressesComponent);
    return HelpdeskCreateAdressesComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\">\n    <form [formGroup]=\"helpdeskForm\" [ngSwitch]=\"bankChoice.value\">\n        <ng-container *ngSwitchCase=\"'add'\">\n          <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n            <span>{{ translation.createRequest.general.errorGlobal }}</span>\n          </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'delete'\">\n          <div class=\"form-error\" *ngIf=\"errorMsgTopDel\">\n            <span>{{ translation.createRequest.general.errorGlobal }}</span>\n          </div>\n        </ng-container>\n        <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.bank\"></itx-helpdesk-create-header>\n        <div class=\"form-group\">\n            <div class=\"toggle-wrapper\">\n                <div class=\"button\">\n                    <input type=\"radio\" name=\"bank_choice\" id=\"bank_choice_add\" checked value=\"add\" [formControl]=\"bankChoice\">\n                    <label for=\"bank_choice_add\">{{ translation.createRequest.bank.form.add.label }}</label>\n                </div>\n                <div class=\"button\">\n                    <input type=\"radio\" name=\"bank_choice\" id=\"bank_choice_del\" checked value=\"delete\" [formControl]=\"bankChoice\">\n                    <label for=\"bank_choice_del\">{{ translation.createRequest.bank.form.remove.label }}</label>\n                </div>\n                <div class=\"clearer\"></div>\n            </div>\n        </div>\n        <div class=\"formDelete\" *ngSwitchCase=\"'delete'\">\n            <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"bankAccountID\" [title]=\"translation.createRequest.bank.form.selectAccount.label\" [list]=\"bankAccounts\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ reason.invalid && (reason.touched || reason.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.bank.form.reason.label }} <span class=\"error\" *ngIf=\"reason.invalid && (reason.touched || reason.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"reason\" [formControl]=\"reason\" placeholder=\"{{ translation.createRequest.bank.form.reason.placeholder }}\" autocomplete=\"off\">\n            </div>\n        </div>\n        <div class=\"formAdd\" *ngSwitchCase=\"'add'\">\n            <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"date\" [title]=\"translation.createRequest.bank.form.from.label\"></itx-helpdesk-create-date>\n            <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"bankAccountTypesControl\" [title]=\"translation.createRequest.bank.form.type.label\" [list]=\"bankAccountTypes\"></itx-helpdesk-create-select>\n            <ng-container *ngIf=\"bankAccountTypesControl.value !== '1' && bankAccountTypesControl.touched\">\n              <div class=\"form-group\" ngClass=\"{{ routingNumber.invalid && (routingNumber.touched || routingNumber.dirty) ? 'error' : '' }}\">\n                  <label for=\"\">{{ translation.createRequest.bank.form.routingNumber.label }} <span class=\"error\" *ngIf=\"routingNumber.invalid && (routingNumber.touched || routingNumber.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                  <input type=\"text\" name=\"routingNumber\" [formControl]=\"routingNumber\" placeholder=\"{{ translation.createRequest.bank.form.routingNumber.placeholder }}\" autocomplete=\"off\">\n              </div>\n              <div class=\"form-group\" ngClass=\"{{ accountNumber.invalid && (accountNumber.touched || accountNumber.dirty) ? 'error' : '' }}\">\n                  <label for=\"\">{{ translation.createRequest.bank.form.accountNumber.label }} <span class=\"error\" *ngIf=\"accountNumber.invalid && (accountNumber.touched || accountNumber.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                  <input type=\"text\" name=\"accountNumber\" [formControl]=\"accountNumber\" placeholder=\"{{ translation.createRequest.bank.form.accountNumber.placeholder }}\" autocomplete=\"off\">\n              </div>\n            </ng-container>\n            <div class=\"form-group\" ngClass=\"{{ bankName.invalid && (bankName.touched || bankName.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.bank.form.bankName.label }}  <span class=\"error\" *ngIf=\"bankName.invalid && (bankName.touched || bankName.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"bankName\" [formControl]=\"bankName\" placeholder=\"{{ translation.createRequest.bank.form.bankName.placeholder }}\">\n            </div>\n            <itx-helpdesk-create-select [refVal]=\"'Code'\" [parent]=\"helpdeskForm\" [control]=\"country\" [title]=\"translation.createRequest.bank.form.country.label\" [list]=\"countryList\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ bic.invalid && (bic.touched || bic.dirty) ? 'error' : '' }}\">\n              <label for=\"\">{{ translation.createRequest.bank.form.bic.label }}\n                <span class=\"error\" *ngIf=\"bic.invalid && (bic.touched || bic.dirty)\">\n                  <span *ngIf=\"bic.errors['required']\">{{ translation.createRequest.general.errorRequired }}</span>\n                  <span *ngIf=\"bic.errors['invalid']\">{{ translation.createRequest.general.errorFormat }}</span>\n                </span>\n              </label>\n              <input type=\"text\" name=\"bic\" [formControl]=\"bic\" placeholder=\"{{ translation.createRequest.bank.form.bic.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div *ngIf=\"bankAccountTypesControl.value === '1'\" class=\"form-group\" ngClass=\"{{ iban.invalid && (iban.touched || iban.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.bank.form.iban.label }}\n                  <span class=\"error\" *ngIf=\"iban.invalid && (iban.touched || iban.dirty)\">\n                    <span *ngIf=\"iban.errors && iban.errors['required']\">{{ translation.createRequest.general.errorRequired }}</span>\n                    <span *ngIf=\"iban.errors && iban.errors['invalid']\">{{ translation.createRequest.general.errorFormat }}</span>\n                  </span>\n                </label>\n                <input type=\"text\" name=\"iban\" itxIban [formControl]=\"iban\" placeholder=\"{{ translation.createRequest.bank.form.iban.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ beneficiary.invalid && (beneficiary.touched || beneficiary.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.bank.form.beneficiary.label }} <span class=\"error\" *ngIf=\"beneficiary.invalid && (beneficiary.touched || beneficiary.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"beneficiary\" [formControl]=\"beneficiary\" placeholder=\"{{ translation.createRequest.bank.form.beneficiary.placeholder }}\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">{{ translation.createRequest.bank.form.comment.label }}</label>\n                <input type=\"text\" name=\"comment\" [formControl]=\"comment\" placeholder=\"{{ translation.createRequest.bank.form.comment.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <itx-helpdesk-create-select [refVal]=\"'Code'\" [parent]=\"helpdeskForm\" [control]=\"currency\" [title]=\"translation.createRequest.bank.form.currency.label\" [list]=\"currencyList\"></itx-helpdesk-create-select>\n            <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\" [title]=\"translation.createRequest.bank.form.attachment.label\" [fileType]=\"translation.createRequest.bank.form.attachment.description\"></itx-helpdesk-create-upload>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.block-helpdesk-create .form-group .toggle-wrapper {\n  width: 100%;\n  border: 1px solid #DADADA;\n  border-radius: 8vh; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button {\n    border: 0;\n    width: 50%;\n    text-align: center;\n    display: block;\n    float: left;\n    padding: 0;\n    margin: 0; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input {\n      display: none; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input:checked + label {\n        color: white;\n        background-color: #093152; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button label {\n      width: 100%;\n      height: 8vh;\n      line-height: 8vh;\n      text-align: center;\n      color: #DADADA;\n      margin: 0;\n      background-color: white;\n      border-radius: 8vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtYmFuay9oZWxwZGVzay1jcmVhdGUtYmFuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RkE7RUFDSSxvQkFBeUI7RUFDekIsMEZBQW1GLEVBQ3RGOztBQzFGRDtFQUlZLFlBQVc7RUFDWCwwQkRzQlk7RUNyQlosbUJBUk0sRUF1Q1Q7O0FBckNUO0lBU2dCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxZQUFXO0lBQ1gsV0FBVTtJQUNWLFVBQVMsRUFxQlo7O0FBcENiO01Ba0JvQixjQUFhLEVBTWhCOztBQXhCakI7UUFxQndCLGFEbkJQO1FDb0JPLDBCRE5JLEVDT1A7O0FBdkJyQjtNQTJCb0IsWUFBVztNQUNYLFlBOUJGO01BK0JFLGlCQS9CRjtNQWdDRSxtQkFBa0I7TUFDbEIsZURKSTtNQ0tKLFVBQVM7TUFDVCx3QkQvQkg7TUNnQ0csbUJBcENGLEVBcUNEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtYmFuay9oZWxwZGVzay1jcmVhdGUtYmFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbiR0b2dnbGVIZWlnaHQ6IDh2aDtcblxuLmJsb2NrLWhlbHBkZXNrLWNyZWF0ZSB7XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIC50b2dnbGUtd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpdHgtdGV4dC1saWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b2dnbGVIZWlnaHQ7XG5cbiAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HelpdeskCreateBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateBankComponent", function() { return HelpdeskCreateBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/references/currencies.service */ "./src/app/modules/core/services/references/currencies.service.ts");
/* harmony import */ var _core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/references/countries.service */ "./src/app/modules/core/services/references/countries.service.ts");
/* harmony import */ var _core_services_references_priority_levels_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/references/priority-levels.service */ "./src/app/modules/core/services/references/priority-levels.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_bic_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/shared/directives/bic-validator.directive */ "./src/app/modules/shared/directives/bic-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_iban_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/modules/shared/directives/iban-validator.directive */ "./src/app/modules/shared/directives/iban-validator.directive.ts");
/* harmony import */ var _app_modules_core_services_references_bank_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/modules/core/services/references/bank-account.service */ "./src/app/modules/core/services/references/bank-account.service.ts");
















var HelpdeskCreateBankComponent = /** @class */ (function () {
    function HelpdeskCreateBankComponent(fb, priorityLevelsService, createRequestService, popupService, userService, currenciesService, countriesService, router, route, langService, bankAccountTypesService) {
        var _this = this;
        this.fb = fb;
        this.priorityLevelsService = priorityLevelsService;
        this.createRequestService = createRequestService;
        this.popupService = popupService;
        this.userService = userService;
        this.currenciesService = currenciesService;
        this.countriesService = countriesService;
        this.router = router;
        this.route = route;
        this.langService = langService;
        this.bankAccountTypesService = bankAccountTypesService;
        this.errorMsgTop = false;
        this.errorMsgTopDel = false;
        this.bankAccounts = [];
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.bankChoice = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('add', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.bankAccountID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.reason = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.bankName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.bankAccountTypesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.routingNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.accountNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.bic = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_app_modules_shared_directives_bic_validator_directive__WEBPACK_IMPORTED_MODULE_13__["BicValidatorDirective"].validate]);
        this.iban = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_app_modules_shared_directives_iban_validator_directive__WEBPACK_IMPORTED_MODULE_14__["IbanValidatorDirective"].validate]);
        this.beneficiary = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_11__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_12__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            StartDate: this.date,
            BankName: this.bankName,
            BankType: 0,
            RoutingNumber: this.routingNumber,
            AccountNumber: this.accountNumber,
            Country: this.country,
            BIC: this.bic,
            IBAN: this.iban,
            Beneficiary: this.beneficiary,
            Currency: this.currency,
            Comment: this.comment,
            File: this.file
        });
        // Listen to Account type control changes in order to implement conditionnal validators on BIC control
        this.bankAccountTypesControl.valueChanges.subscribe(function (value) {
            if (value === '1') { // IBA
                _this.bic.setValidators(_app_modules_shared_directives_bic_validator_directive__WEBPACK_IMPORTED_MODULE_13__["BicValidatorDirective"].validate);
                _this.iban.setValidators(_app_modules_shared_directives_iban_validator_directive__WEBPACK_IMPORTED_MODULE_14__["IbanValidatorDirective"].validate);
                _this.accountNumber.setValidators([]);
            }
            else {
                _this.bic.setValidators([]);
                _this.iban.setValidators([]);
                _this.accountNumber.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            }
            _this.accountNumber.updateValueAndValidity();
            _this.bic.updateValueAndValidity();
            _this.iban.updateValueAndValidity();
        });
        this.bankAccountTypesSub = this.bankAccountTypesService.getBankAccountTypes().subscribe(function (res) {
            _this.bankAccountTypes = res;
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.helpdeskFormDelete = this.fb.group({
            BankAccountID: this.bankAccountID,
            Reason: this.reason
        });
        this.helpdeskFormDelete.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.bankIdToDel = params['id'];
                _this.bankChoice.setValue('delete');
                _this.bankAccountID.setValue(_this.bankIdToDel);
            }
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            var currentForm = null;
            if (_this.bankChoice.value === 'add') {
                currentForm = _this.helpdeskForm;
            }
            else if (_this.bankChoice.value === 'delete') {
                currentForm = _this.helpdeskFormDelete;
            }
            if (currentForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.errorMsgTopDel = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(currentForm);
                window.scrollTo(0, 0);
            }
        });
        this.currenciesSub = this.currenciesService.currencies$.subscribe(function (list) {
            _this.currencyList = list;
        });
        this.priorityLvlSub = this.priorityLevelsService.priorityLevels$.subscribe(function (res) {
            _this.priorityLevels = res;
        });
        this.countriesSub = this.countriesService.countries$.subscribe(function (countries) {
            _this.countryList = countries;
        });
        this.userInfoSub = this.userService.userInfos$.subscribe(function (userInfos) {
            _this.userInfos = userInfos;
            _this.getBankAccountsList();
        });
    }
    HelpdeskCreateBankComponent.prototype.ngOnInit = function () {
        this.priorityLevelsService.getPriorityLevels();
        this.currenciesService.getCurrencies().subscribe();
        this.countriesService.getCountries().subscribe();
        this.userService.getUserInfos().subscribe();
    };
    HelpdeskCreateBankComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
        this.countriesSub.unsubscribe();
        this.currenciesSub.unsubscribe();
        this.priorityLvlSub.unsubscribe();
        this.userInfoSub.unsubscribe();
        this.bankAccountTypesSub.unsubscribe();
    };
    HelpdeskCreateBankComponent.prototype.getBankAccountsList = function () {
        var _this = this;
        this.userInfos.BankAccounts.forEach(function (bankAccount) {
            var temp;
            if (bankAccount.BankType.Name.toLowerCase() === 'bankaccount') {
                temp = {
                    'ID': bankAccount.ID,
                    'Name': bankAccount.BankName + ', ' + bankAccount.AccountNumber + ' - ' + bankAccount.Currency
                };
            }
            else {
                temp = {
                    'ID': bankAccount.ID,
                    'Name': bankAccount.BankName + ', ' + bankAccount.IBAN + ' - ' + bankAccount.Currency
                };
            }
            _this.bankAccounts.push(temp);
        });
    };
    HelpdeskCreateBankComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateBankComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
        else if (this.helpdeskFormDelete.valid) {
            this.errorMsgTopDel = false;
        }
    };
    HelpdeskCreateBankComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateBankComponent.prototype.sendRequest = function () {
        var _this = this;
        var newBank = this.helpdeskForm.value;
        var currentCountry = this.countryList.find(function (country) { return country.Code === newBank.Country; });
        newBank.Country = currentCountry;
        this.createRequestService.requestInProgress(true);
        if (this.bankChoice.value === 'add') {
            newBank.BankType = this.bankAccountTypes.find(function (e) { return e.ID === parseInt(_this.bankAccountTypesControl.value, 10); });
            this.userService.addBankAccount(newBank, this.attachments).subscribe(function (res) {
                _this.createRequestService.requestInProgress(false);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log('ERROR', err);
                _this.createRequestService.requestInProgress(false);
                var popupOptions = {
                    title: _this.translation.createRequest.bank.popInErr.titleAdd,
                    text: err.Description,
                    bgState: false,
                    arrow: false,
                    timer: 4000,
                    position: {
                        bottom: '14vh'
                    }
                };
                _this.popupService.setPopupState(true, popupOptions);
            });
        }
        else if (this.bankChoice.value === 'delete') {
            this.userService.deleteBankAccount(this.bankAccountID.value, this.reason.value).subscribe(function (res) {
                _this.createRequestService.requestInProgress(false);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log('ERROR', err);
                _this.createRequestService.requestInProgress(false);
                var popupOptions = {
                    title: _this.translation.createRequest.bank.popInErr.titleRemove,
                    text: err.Description,
                    bgState: false,
                    arrow: false,
                    timer: 4000,
                    position: {
                        bottom: '14vh'
                    }
                };
                _this.popupService.setPopupState(true, popupOptions);
            });
        }
    };
    HelpdeskCreateBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-bank',
            template: __webpack_require__(/*! ./helpdesk-create-bank.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-bank.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_references_priority_levels_service__WEBPACK_IMPORTED_MODULE_8__["PriorityLevelsService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_9__["CreateRequestService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_6__["CurrenciesService"],
            _core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_10__["LangService"],
            _app_modules_core_services_references_bank_account_service__WEBPACK_IMPORTED_MODULE_15__["BankAccountService"]])
    ], HelpdeskCreateBankComponent);
    return HelpdeskCreateBankComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\" [ngSwitch]=\"childChoice.value\">\n        <ngx-spinner [visible]=\"showSpinner1\"></ngx-spinner>\n    <ng-container *ngSwitchCase=\"'add'\">\n      <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n        <span>{{ translation.createRequest.general.errorGlobal }}</span>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'delete'\">\n      <div class=\"form-error\" *ngIf=\"errorMsgTopDel\">\n        <span>{{ translation.createRequest.general.errorGlobal }}</span>\n      </div>\n    </ng-container>\n    <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.childrens\"></itx-helpdesk-create-header>\n    <div class=\"form-group\">\n        <div class=\"toggle-wrapper\">\n            <div class=\"button\">\n                <input type=\"radio\" name=\"child_choice\" id=\"child_choice_add\" checked value=\"add\" [formControl]=\"childChoice\">\n                <label for=\"child_choice_add\">{{ translation.createRequest.childrens.form.add }}</label>\n            </div>\n            <div class=\"button\">\n                <input type=\"radio\" name=\"child_choice\" id=\"child_choice_del\" checked value=\"delete\" [formControl]=\"childChoice\">\n                <label for=\"child_choice_del\">{{ translation.createRequest.childrens.form.remove }}</label>\n            </div>\n            <div class=\"clearer\"></div>\n        </div>\n    </div>\n    <form [formGroup]=\"helpdeskFormDelete\">\n        <div class=\"rmChild\" *ngSwitchCase=\"'delete'\">\n            <itx-helpdesk-create-select [parent]=\"helpdeskFormDelete\" [control]=\"childrenID\" [title]=\"translation.createRequest.childrens.form.selectChildren\" [list]=\"childrenList\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ reason.invalid && (reason.touched || reason.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.childrens.form.reason.label }} <span class=\"description\">{{ translation.createRequest.childrens.form.reason.description }}</span><span class=\"error\" *ngIf=\"reason.invalid && (reason.touched || reason.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"reason\" [formControl]=\"reason\" placeholder=\"{{ translation.createRequest.childrens.form.reason.placeholder }}\" autocomplete=\"off\">\n            </div>\n        </div>\n    </form>\n    <form [formGroup]=\"helpdeskForm\">\n        <div class=\"addChild\" *ngSwitchCase=\"'add'\">\n            <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"gender\" [title]=\"translation.createRequest.childrens.form.gender.label\" [selectDesc]=\"translation.createRequest.contact.form.gender.description\" [list]=\"genderList\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ firstname.invalid && (firstname.touched || firstname.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.childrens.form.firstName.label }} <span class=\"description\">{{ translation.createRequest.childrens.form.firstName.description }}</span><span class=\"error\" *ngIf=\"firstname.invalid && (firstname.touched || firstname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"firstname\" [formControl]=\"firstname\" placeholder=\"{{ translation.createRequest.childrens.form.firstName.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ lastname.invalid && (lastname.touched || lastname.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.childrens.form.lastName.label }} <span class=\"description\">{{ translation.createRequest.childrens.form.lastName.description }}</span> <span class=\"error\" *ngIf=\"lastname.invalid && (lastname.touched || lastname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"lastname\" [formControl]=\"lastname\" placeholder=\"{{ translation.createRequest.childrens.form.lastName.placeholder }}\" autocomplete=\"off\"><span class=\"description\">{{ translation.createRequest.childrens.form.lastName.description }}</span>\n            </div>\n            <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"birthdate\" [title]=\"translation.createRequest.childrens.form.birthdate.label\" [dateDesc]=\"translation.createRequest.childrens.form.birthdate.description\"></itx-helpdesk-create-date>\n            <itx-helpdesk-create-select [refVal]=\"'Code'\" [parent]=\"helpdeskForm\" [control]=\"nationality\" [title]=\"translation.createRequest.childrens.form.nationality.label\" [selectDesc]=\"translation.createRequest.childrens.form.nationality.description\" [list]=\"countryList\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ passportNumber.invalid && (passportNumber.touched || passportNumber.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.childrens.form.passportNumber.label }} <span class=\"description\">{{ translation.createRequest.childrens.form.passportNumber.description }}</span><span class=\"error\" *ngIf=\"passportNumber.invalid && (passportNumber.touched || passportNumber.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"passportNumber\" [formControl]=\"passportNumber\" placeholder=\"{{ translation.createRequest.childrens.form.passportNumber.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"passportExpDate\" [title]=\"translation.createRequest.childrens.form.expirationDate.label \"[dateDesc]=\"translation.createRequest.childrens.form.expirationDate.description\" ></itx-helpdesk-create-date>\n            <div class=\"form-group\">\n              <label for=\"\">{{ translation.createRequest.childrens.form.isExpatriate.label }} <span class=\"description\">{{ translation.createRequest.childrens.form.isExpatriate.description }}</span></label>\n                <div class=\"toggle-wrapper\">\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"child_isExpatriate\" id=\"child_isExpatriate_yes\" checked value=\"yes\" [formControl]=\"isExpatriate\">\n                      <label for=\"child_isExpatriate_yes\">{{ translation.createRequest.childrens.form.yes }}</label>\n                  </div>\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"child_isExpatriate\" id=\"child_isExpatriate_no\" checked value=\"no\" [formControl]=\"isExpatriate\">\n                      <label for=\"child_isExpatriate_no\">{{ translation.createRequest.childrens.form.no}}</label>\n                  </div>\n                  <div class=\"clearer\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">{{ translation.createRequest.childrens.form.isDependant.label }}<span class=\"description\">{{ translation.createRequest.childrens.form.isDependant.description }}</span></label>\n              <div class=\"toggle-wrapper\">\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"child_isDependant\" id=\"child_isDependant_yes\" checked value=\"yes\" [formControl]=\"isDependant\">\n                      <label for=\"child_isDependant_yes\">{{ translation.createRequest.childrens.form.yes }}</label>\n                  </div>\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"child_isDependant\" id=\"child_isDependant_no\" checked value=\"no\" [formControl]=\"isDependant\">\n                      <label for=\"child_isDependant_no\">{{ translation.createRequest.childrens.form.no }}</label>\n                  </div>\n                  <div class=\"clearer\"></div>\n              </div>\n            </div>\n            <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\" [title]=\"translation.createRequest.childrens.form.attachment.label\" [fileType]=\"translation.createRequest.childrens.form.attachment.description\"></itx-helpdesk-create-upload>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.block-helpdesk-create .myspinner .black-overlay {\n  position: fixed !important;\n  margin-top: 120px !important;\n  margin-left: 25% !important; }\n\n.block-helpdesk-create .form-group .toggle-wrapper {\n  width: 100%;\n  border: 1px solid #DADADA;\n  border-radius: 8vh; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button {\n    border: 0;\n    width: 50%;\n    text-align: center;\n    display: block;\n    float: left;\n    padding: 0;\n    margin: 0; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input {\n      display: none; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button input:checked + label {\n        color: white;\n        background-color: #093152; }\n\n.block-helpdesk-create .form-group .toggle-wrapper .button label {\n      width: 100%;\n      height: 8vh;\n      line-height: 8vh;\n      text-align: center;\n      color: #DADADA;\n      margin: 0;\n      background-color: white;\n      border-radius: 8vh; }\n\n.block-helpdesk-create .block_ui[_nghost-c9] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  border: 1px solid white;\n  border-radius: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtY2hpbGRyZW4vaGVscGRlc2stY3JlYXRlLWNoaWxkcmVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDNUZEO0VBRVEsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUM1Qiw0QkFBMkIsRUFDOUI7O0FBTEw7RUFRWSxZQUFXO0VBQ1gsMEJEb0JZO0VDbkJaLG1CQVhNLEVBc0NUOztBQXJDVDtJQVlnQixVQUFTO0lBQ1QsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsWUFBVztJQUNYLFdBQVU7SUFDVixVQUFTLEVBa0JaOztBQXBDYjtNQW9Cb0IsY0FBYSxFQUtoQjs7QUF6QmpCO1FBc0J3QixhRGxCUDtRQ21CTywwQkRMSSxFQ01QOztBQXhCckI7TUEyQm9CLFlBQVc7TUFDWCxZQTdCRjtNQThCRSxpQkE5QkY7TUErQkUsbUJBQWtCO01BQ2xCLGVERkk7TUNHSixVQUFTO01BQ1Qsd0JEN0JIO01DOEJHLG1CQW5DRixFQW9DRDs7QUFuQ2pCO0VBd0NRLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsV0FBVTtFQUNWLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS1jaGlsZHJlbi9oZWxwZGVzay1jcmVhdGUtY2hpbGRyZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT0xPUlNcbi8vXG4kaXR4LXByaW1hcnk6ICM2OGIxZWE7XG4kaXR4LXByaW1hcnktbGlnaHQ6ICM2RUJCRjc7XG4kaXR4LXByaW1hcnktZGFyazogIzRDODFBQTtcbiRpdHgtcHJpbWFyeS1kYXJrZXI6ICMyRjUxNkE7XG5cbiRpdHgtd2hpdGU6IHdoaXRlO1xuXG4kaXR4LWxpZ2h0OiAjQjFEM0VEO1xuXG4kaXR4LXRleHQ6ICM0RjVGNkE7XG4kaXR4LWRpc2FibGVkOiAjQkRCRUJFO1xuXG4kaXR4LWFsZXJ0OiAjRTIxQTRGO1xuXG4vL1xuJGl0eC1ncmFkaWVudC1hOiAjM0NBREUzO1xuJGl0eC1ncmFkaWVudC1iOiAjNzNENkYxO1xuXG4kaXR4LWxhYmVsLWJsdWU6ICM1NUMwRUE7XG4kaXR4LWxhYmVsLWRhcmtibHVlOiAjMDkzMTUyO1xuJGl0eC1sYWJlbC1yZWQ6ICNERjI2NTY7XG4kaXR4LWxhYmVsLWxpZ2h0cmVkOiAjZTc1YzgwO1xuJGl0eC1sYWJlbC1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LWljb25zLWJsdWU6ICMwOTQwNkU7XG4vLyAkaXR4LWljb25zLWdyZXk6ICNDRUQ2REM7XG4kaXR4LWljb25zLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtdGV4dC1kYXJrZXI6ICMyRDJEMkQ7XG4kaXR4LXRleHQtZGFyazogIzk2OTY5NjtcbiRpdHgtdGV4dC1saWdodDogI0RBREFEQTtcbiRpdHgtdGV4dC1saWdodGVyOiAjRkZGRkZGO1xuXG5cbi8vIEZPTlRTXG5cbiRpdHgtb3BlblNhbnNMaWdodDogJ09wZW5TYW5zLUxpZ2h0JztcbiRpdHgtb3BlblNhbnNSZWd1bGFyOiAnT3BlblNhbnMtUmVndWxhcic7XG4kaXR4LW9wZW5TYW5zU2VtaUJvbGQ6ICdPcGVuU2Fucy1TZW1pYm9sZCc7XG4kaXR4LW9wZW5TYW5zQm9sZDogJ09wZW5TYW5zLUJvbGQnO1xuJGl0eC1pY29uczogJ2l0eC1pY29ucyc7XG5cbiRpdHgtcG9wcGluc0xpZ2h0OiAncG9wcGluc2xpZ2h0JztcbiRpdHgtcG9wcGluc01lZGl1bTogJ3BvcHBpbnNtZWRpdW0nO1xuJGl0eC1wb3BwaW5zUmVndWxhcjogJ3BvcHBpbnNyZWd1bGFyJztcbiRpdHgtcG9wcGluc1NlbWlCb2xkOiAncG9wcGluc3NlbWlib2xkJztcblxuLy8gRk9OVCBTSVpFXG5cbiRpdHgtZm9udEJpZ2dlcjogNDhweDtcbiRpdHgtZm9udEJpZzogMzJweDtcbiRpdHgtZm9udE1lZGl1bTogMjRweDtcbiRpdHgtZm9udFN0YW5kYXJkOiAxNnB4O1xuJGl0eC1mb250U21hbGw6IDE0cHg7XG4kaXR4LWZvbnRFeHRyYVNtYWxsOiAxMnB4O1xuXG5cbi8vIFRSQU5TSVRJT05cbiRpdHgtdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcblxuLy8gQ1NTIFBST1BFUlRZXG5cbi8vIExheW91dFxuJGl0eC1kZWZhdWx0LWd1dHRlcjogMjBweDtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDI6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiAyO1xuJGl0eC1kZWZhdWx0LWd1dHRlci14NDogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDQ7XG5cbi8vIEhlaWdodFxuJGl0eC1zbWFsbC1oZWlnaHQ6IDMycHg7XG4kaXR4LW1lZGl1bS1oZWlnaHQ6IDQwcHg7XG4kaXR4LWJpZy1oZWlnaHQ6IDQ1cHg7XG5cbi8vIEJvcmRlciByYWRpdXNcbiRpdHgtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kc2NyZWVuLW1kOiAxMjAwcHg7XG4kc2NyZWVuLXhzOiA3NjdweDtcblxuJGRlc2t0b3A6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDgwcHgpXCI7XG4kdGFibGV0LWxhbmRzY2FwZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweClcIjtcbiR0YWJsZXQtcG9ydHJhaXQ6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweClcIjtcbiRtb2JpbGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweClcIjtcblxuLy8gcGFkZGluZyBtYXJnaW5cbiRpdHgtZGVmYXVsdC1wYWRkaW5nOiA3dmg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1tZDogNDBweDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLXNtOiAzMHB4O1xuXG4vLyBHcmFkaWVudCBiYWNrZ3JvdW5kXG4uaXR4LWJhY2tncm91bmQtYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDgsNTksMTAyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDgsNTksMTAyLDAuOSkgMCUsIHJnYmEoOSw2NywxMTQsMC45KSAxMDAlKTtcbn1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvX3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuJHRvZ2dsZUhlaWdodDogOHZoO1xuLmJsb2NrLWhlbHBkZXNrLWNyZWF0ZSB7XG4gICAgLm15c3Bpbm5lciAuYmxhY2stb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgLnRvZ2dsZS13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGl0eC10ZXh0LWxpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICY6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC10ZXh0LWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja191aVtfbmdob3N0LWM5XSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HelpdeskCreateChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateChildrenComponent", function() { return HelpdeskCreateChildrenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/references/genders.service */ "./src/app/modules/core/services/references/genders.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _app_modules_core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/core/services/references/countries.service */ "./src/app/modules/core/services/references/countries.service.ts");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_button_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/button.service */ "./src/app/modules/shared/services/button.service.ts");















var HelpdeskCreateChildrenComponent = /** @class */ (function () {
    function HelpdeskCreateChildrenComponent(fb, userService, createRequestService, gendersService, popupService, router, route, langService, countriesService, spinner, button) {
        var _this = this;
        this.fb = fb;
        this.userService = userService;
        this.createRequestService = createRequestService;
        this.gendersService = gendersService;
        this.popupService = popupService;
        this.router = router;
        this.route = route;
        this.langService = langService;
        this.countriesService = countriesService;
        this.spinner = spinner;
        this.button = button;
        this.disableBtn = false;
        this.childrenList = [];
        this.errorMsgTop = false;
        this.errorMsgTopDel = false;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.childChoice = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('add', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.childrenID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.reason = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.birthdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.nationality = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isExpatriate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('no', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isDependant = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('no', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passportNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []);
        this.passportExpDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("false", [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_9__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_10__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            Gender: this.gender,
            FirstName: this.firstname,
            LastName: this.lastname,
            Nationality: this.nationality,
            IsDependant: this.isDependant,
            IsExpatriate: this.isExpatriate,
            Birthdate: this.birthdate,
            PassportNo: this.passportNumber,
            ExpirationDate: this.passportExpDate,
            Files: this.file
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.helpdeskFormDelete = this.fb.group({
            ChildID: this.childrenID,
            Reason: this.reason
        });
        this.helpdeskFormDelete.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.countriesService.getCountries().subscribe(function (res) {
            _this.countryList = res;
        });
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.childrenIdToDel = params['id'];
                _this.childChoice.setValue('delete');
                _this.childrenID.setValue(_this.childrenIdToDel);
            }
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            var currentForm = null;
            if (_this.childChoice.value === 'add') {
                currentForm = _this.helpdeskForm;
            }
            else if (_this.childChoice.value === 'delete') {
                currentForm = _this.helpdeskFormDelete;
            }
            _this.setUserCategoryValidators();
            if (currentForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.errorMsgTopDel = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(currentForm);
                window.scrollTo(0, 0);
            }
        });
        this.gendersService.genders$.subscribe(function (res) {
            _this.genderList = res;
        });
        this.userService.userInfos$.subscribe(function (userInfos) {
            _this.getChildrenList(userInfos);
            _this.hideSpinner();
            _this.button.changeMessage(false);
        });
    }
    HelpdeskCreateChildrenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSpinner(); }, 25);
        this.gendersService.getGenders();
        this.userService.getUserInfos().subscribe();
        this.button.changeMessage(true);
    };
    HelpdeskCreateChildrenComponent.prototype.showSpinner = function () {
        this.showSpinner1 = true;
    };
    HelpdeskCreateChildrenComponent.prototype.hideSpinner = function () {
        this.showSpinner1 = false;
    };
    HelpdeskCreateChildrenComponent.prototype.ngAfterContentChecked = function () {
        this.makeFieldMandatory(this.passportNumber, this.passportExpDate);
        this.makeFieldMandatory(this.passportExpDate, this.passportNumber);
    };
    HelpdeskCreateChildrenComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskCreateChildrenComponent.prototype.setUserCategoryValidators = function () {
        var PassportNo = this.helpdeskForm.get('PassportNo').value;
        var ExpirationDate = this.helpdeskForm.get('ExpirationDate').value;
        var dataxx = this.helpdeskForm.get('Files').value;
        if ((PassportNo != null || ExpirationDate != null) && dataxx == "false") {
            this.helpdeskForm.patchValue({ Files: null });
        }
        if ((PassportNo == null || PassportNo == "") && (ExpirationDate == null || ExpirationDate == "")) {
            this.helpdeskForm.patchValue({ Files: "false" });
        }
    };
    HelpdeskCreateChildrenComponent.prototype.buttonclick = function () {
        this.helpdeskForm.get('ExpirationDate').setValue('');
    };
    HelpdeskCreateChildrenComponent.prototype.buttonclick1 = function () {
        this.helpdeskForm.get('PassportNo').setValue('');
    };
    HelpdeskCreateChildrenComponent.prototype.getChildrenList = function (userInfos) {
        var _this = this;
        this.childrenList = [];
        userInfos.Children.forEach(function (children) {
            var temp = {
                ID: children.ID,
                Name: children.FirstName + ' ' + children.LastName
            };
            _this.childrenList.push(temp);
        });
    };
    HelpdeskCreateChildrenComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateChildrenComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
        else if (this.helpdeskFormDelete.valid) {
            this.errorMsgTopDel = false;
        }
    };
    HelpdeskCreateChildrenComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateChildrenComponent.prototype.makeFieldMandatory = function (control1, control2) {
        control1.valueChanges.pipe(Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                control2.clearValidators();
            }
            control2.updateValueAndValidity();
        });
        control2.valueChanges.pipe(Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control1.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                control1.clearValidators();
            }
            control1.updateValueAndValidity();
        });
    };
    HelpdeskCreateChildrenComponent.prototype.sendRequest = function () {
        var _this = this;
        this.createRequestService.requestInProgress(true);
        if (this.childChoice.value === 'add') {
            var isExpatriate = this.isExpatriate.value === 'yes' ? true : false;
            var isDependant = this.isDependant.value === 'yes' ? true : false;
            var currentNationality = this.countryList.find(function (country) { return country.Code === _this.nationality.value; });
            var newChild = {
                Gender: this.genderList.filter(function (res) { return res.ID == _this.gender.value; })[0],
                FirstName: this.firstname.value,
                LastName: this.lastname.value,
                Birthdate: this.birthdate.value,
                Nationality: currentNationality,
                IsExpatriate: isExpatriate,
                IsDependant: isDependant,
                Passport: {
                    PassportNo: this.passportNumber.value,
                    ExpirationDate: this.passportExpDate.value
                }
            };
            this.userService.addChild(newChild, this.attachments).subscribe(function (res) {
                _this.createRequestService.requestInProgress(false);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log('ERROR', err);
                _this.createRequestService.requestInProgress(false);
                var popupOptions = {
                    title: _this.translation.createRequest.childrens.popInErr.titleAdd,
                    text: err.Description,
                    bgState: false,
                    arrow: false,
                    timer: 4000,
                    position: {
                        bottom: '14vh'
                    }
                };
                _this.popupService.setPopupState(true, popupOptions);
            });
        }
        else if (this.childChoice.value === 'delete') {
            this.userService.deleteChild(this.childrenID.value, this.reason.value).subscribe(function (res) {
                _this.createRequestService.requestInProgress(false);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log('ERROR', err);
                _this.createRequestService.requestInProgress(false);
                var popupOptions = {
                    title: _this.translation.createRequest.childrens.popInErr.titleRemove,
                    text: err.Description,
                    bgState: false,
                    arrow: false,
                    timer: 4000,
                    position: {
                        bottom: '14vh'
                    }
                };
                _this.popupService.setPopupState(true, popupOptions);
            });
        }
    };
    HelpdeskCreateChildrenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-children',
            template: __webpack_require__(/*! ./helpdesk-create-children.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-children.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_5__["CreateRequestService"],
            _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_4__["GendersService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_6__["PopupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_8__["LangService"],
            _app_modules_core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_11__["CountriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"],
            _shared_services_button_service__WEBPACK_IMPORTED_MODULE_14__["ButtonService"]])
    ], HelpdeskCreateChildrenComponent);
    return HelpdeskCreateChildrenComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form [formGroup]=\"helpdeskForm\">\n\n            \n        <div class=\"block-helpdesk-create\">\n                <ngx-spinner [visible]=\"showSpinner1\">\n                    </ngx-spinner>\n            <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n              <span>{{ translation.createRequest.general.errorGlobal }}</span>\n            </div>\n            <div class=\"form-error\" *ngIf=\"isFormNoModified\">\n                <span>{{ translation.createRequest.general.errorFormNoModifed }}</span>\n            </div>\n            <div class=\"head-card\">\n                <h3><span class=\"itx-icon-icon_profil left\"></span>{{ translation.createRequest.contact.form.personalTitle }}</h3>\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ emailPers.invalid && (emailPers.touched || emailPers.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.email.label }}<span class=\"description\">{{ translation.createRequest.contact.form.email.description }}</span>\n                  <span class=\"error\" *ngIf=\"emailPers.value === '' && (emailPers.touched || emailPers.dirty)\">{{ translation.createRequest.general.errorRequired }}</span>\n                  <span class=\"error\" *ngIf=\"emailPers.value !== '' && emailPers.invalid  && (emailPers.touched || emailPers.dirty)\">{{ translation.createRequest.general.errorFormat }}</span>\n                </label>\n                <input type=\"text\" [formControl]=\"emailPers\" name=\"emailPers\" placeholder=\"{{ translation.createRequest.contact.form.email.placeholder }}\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ phonePers.invalid && (phonePers.touched || phonePers.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.phone.label }} <span class=\"description\">{{ translation.createRequest.contact.form.phone.description }}</span> <span class=\"error\" *ngIf=\"phonePers.invalid && (phonePers.touched || phonePers.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"phonePers\" id=\"\" [formControl]=\"phonePers\" placeholder=\"{{ translation.createRequest.contact.form.phone.placeholder }}\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ mobilePers.invalid && (mobilePers.touched || mobilePers.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.mobile.label }}<span class=\"description\">{{ translation.createRequest.contact.form.mobile.description }}</span> <span class=\"error\" *ngIf=\"mobilePers.invalid && (mobilePers.touched || mobilePers.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"mobilePers\" id=\"\" [formControl]=\"mobilePers\" placeholder=\"{{ translation.createRequest.contact.form.mobile.placeholder }}\">\n            </div>\n        </div>\n\n        <div class=\"block-helpdesk-create\">\n                <ngx-spinner [visible]=\"showSpinner1\">\n                    </ngx-spinner>\n            <div class=\"head-card\">\n                <h3><span class=\"itx-icon-icon_profil left\"></span>{{ translation.createRequest.contact.form.professionalTitle }}</h3>\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ emailPro.invalid && (emailPro.touched || emailPro.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.email.label }}<span class=\"description\">{{ translation.createRequest.contact.form.email.description }}</span>\n                  <span class=\"error\" *ngIf=\"emailPro.value === '' && (emailPro.touched || emailPro.dirty)\">{{ translation.createRequest.general.errorRequired }}</span>\n                  <span class=\"error\" *ngIf=\"emailPro.value !== '' && emailPro.invalid && (emailPro.touched || emailPro.dirty)\">{{ translation.createRequest.general.errorFormat }}</span>\n                </label>\n                <input type=\"text\" [formControl]=\"emailPro\" name=\"emailPro\" placeholder=\"{{ translation.createRequest.contact.form.email.placeholder }}\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ phonePro.invalid && (phonePro.touched || phonePro.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.phone.label }} <span class=\"description\">{{ translation.createRequest.contact.form.phone.description }}</span><span class=\"error\" *ngIf=\"phonePro.invalid && (phonePro.touched || phonePro.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"phonePro\" id=\"\" [formControl]=\"phonePro\" placeholder=\"{{ translation.createRequest.contact.form.phone.placeholder }}\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ mobilePro.invalid && (mobilePro.touched || mobilePro.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.mobile.label }} <span class=\"description\">{{ translation.createRequest.contact.form.mobile.description }}</span><span class=\"error\" *ngIf=\"mobilePro.invalid && (mobilePro.touched || mobilePro.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"mobilePro\" id=\"\" [formControl]=\"mobilePro\" placeholder=\"{{ translation.createRequest.contact.form.mobile.placeholder }}\">\n            </div>\n        </div>\n\n        <div class=\"block-helpdesk-create\">\n                <ngx-spinner [visible]=\"showSpinner1\">\n                    </ngx-spinner>\n            <div class=\"head-card\">\n                <h3><span class=\"itx-icon-icon_profil left\"></span>{{ translation.createRequest.contact.form.emergencyTitle }}</h3>\n            </div>\n            <itx-helpdesk-create-select [parent]=\"helpdeskForm\" *ngIf=\"showGender\"  [control]=\"genderEmer\" [title]=\"translation.createRequest.contact.form.gender.label\" [list]=\"genderList\" [selectDesc]=\"translation.createRequest.contact.form.gender.description\"></itx-helpdesk-create-select>\n            <itx-helpdesk-create-select [parent]=\"helpdeskForm\" *ngIf=\"showRelationship\" [control]=\"relationships\" [title]=\"translation.createRequest.contact.form.relationship.label\" [selectDesc]=\"translation.createRequest.contact.form.relationship.description\" [list]=\"relationshipsList\"></itx-helpdesk-create-select>\n            <div class=\"form-group\" ngClass=\"{{ firstname.invalid && (firstname.touched || firstname.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.firstName.label }} <span class=\"description\">{{ translation.createRequest.contact.form.firstName.description }}</span><span class=\"error\" *ngIf=\"firstname.invalid && (firstname.touched || firstname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"firstname\" id=\"\" [formControl]=\"firstname\" placeholder=\"{{ translation.createRequest.contact.form.firstName.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ lastname.invalid && (lastname.touched || lastname.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.lastName.label }}<span class=\"description\">{{ translation.createRequest.contact.form.lastName.description }}</span><span class=\"error\" *ngIf=\"lastname.invalid && (lastname.touched || lastname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"lastname\" id=\"\" [formControl]=\"lastname\" placeholder=\"{{ translation.createRequest.contact.form.lastName.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ emailEmer.invalid && (emailEmer.touched || emailEmer.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.email.label }}<span class=\"description\">{{ translation.createRequest.contact.form.email.description }}</span>\n                  <span class=\"error\" *ngIf=\"emailEmer.value === '' && (emailEmer.errors ? (emailEmer.errors.required ? true : false ) : false)&& (emailEmer.touched || emailEmer.dirty)\">{{ translation.createRequest.general.errorRequired }}</span>\n                  <span class=\"error\" *ngIf=\"emailEmer.value !== '' && emailEmer.invalid && (emailEmer.touched || emailEmer.dirty)\">{{ translation.createRequest.general.errorFormat }}</span>\n                </label>\n                <input type=\"text\" name=\"emailEmer\" id=\"\" [formControl]=\"emailEmer\" placeholder=\"{{ translation.createRequest.contact.form.email.placeholder }}\" autocomplete=\"off\">\n            </div>\n            <div class=\"form-group\" ngClass=\"{{ phoneEmer.invalid && (phoneEmer.touched || phoneEmer.dirty) ? 'error' : '' }}\">\n                <label for=\"\">{{ translation.createRequest.contact.form.phoneEmergency.label }} <span class=\"description\">{{ translation.createRequest.contact.form.phoneEmergency.description }}</span><span class=\"error\" *ngIf=\"phoneEmer.invalid && (phoneEmer.touched || phoneEmer.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n                <input type=\"text\" name=\"phoneEmer\" id=\"\" [formControl]=\"phoneEmer\" placeholder=\"{{ translation.createRequest.contact.form.phoneEmergency.placeholder }}\" autocomplete=\"off\">\n            </div>\n        </div>\n    </form>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n.block-helpdesk-create .head-card h3 {\n  padding: 1.16666667vh 0 2.33333333vh 0; }\n\n.block-helpdesk-create .block_ui[_nghost-c9] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid white;\n  border-radius: 12px;\n  z-index: 99 !important; }\n\n.block-helpdesk-create .itx-bottom-bar[_ngcontent-c5] {\n  z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtY29udGFjdC9oZWxwZGVzay1jcmVhdGUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RkE7RUFDSSxvQkFBeUI7RUFDekIsMEZBQW1GLEVBQ3RGOztBQzdGRDtFQUNJLG9CQUF1QztFQUN2QyxxQkFBd0M7RUFDeEMsNEJBQXVDO0VBQ3ZDLDJCQUFzQyxFQUN6Qzs7QUFFRDtFQUdZLHVDQUE4RCxFQUNqRTs7QUFKVDtFQU9RLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1Asd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFDekI7O0FBbEJMO0VBcUJRLGNBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVscGRlc2stY3JlYXRlL2NvbXBvbmVudHMvaGVscGRlc2stY3JlYXRlLWNvbnRhY3QvaGVscGRlc2stY3JlYXRlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT0xPUlNcbi8vXG4kaXR4LXByaW1hcnk6ICM2OGIxZWE7XG4kaXR4LXByaW1hcnktbGlnaHQ6ICM2RUJCRjc7XG4kaXR4LXByaW1hcnktZGFyazogIzRDODFBQTtcbiRpdHgtcHJpbWFyeS1kYXJrZXI6ICMyRjUxNkE7XG5cbiRpdHgtd2hpdGU6IHdoaXRlO1xuXG4kaXR4LWxpZ2h0OiAjQjFEM0VEO1xuXG4kaXR4LXRleHQ6ICM0RjVGNkE7XG4kaXR4LWRpc2FibGVkOiAjQkRCRUJFO1xuXG4kaXR4LWFsZXJ0OiAjRTIxQTRGO1xuXG4vL1xuJGl0eC1ncmFkaWVudC1hOiAjM0NBREUzO1xuJGl0eC1ncmFkaWVudC1iOiAjNzNENkYxO1xuXG4kaXR4LWxhYmVsLWJsdWU6ICM1NUMwRUE7XG4kaXR4LWxhYmVsLWRhcmtibHVlOiAjMDkzMTUyO1xuJGl0eC1sYWJlbC1yZWQ6ICNERjI2NTY7XG4kaXR4LWxhYmVsLWxpZ2h0cmVkOiAjZTc1YzgwO1xuJGl0eC1sYWJlbC1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LWljb25zLWJsdWU6ICMwOTQwNkU7XG4vLyAkaXR4LWljb25zLWdyZXk6ICNDRUQ2REM7XG4kaXR4LWljb25zLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtdGV4dC1kYXJrZXI6ICMyRDJEMkQ7XG4kaXR4LXRleHQtZGFyazogIzk2OTY5NjtcbiRpdHgtdGV4dC1saWdodDogI0RBREFEQTtcbiRpdHgtdGV4dC1saWdodGVyOiAjRkZGRkZGO1xuXG5cbi8vIEZPTlRTXG5cbiRpdHgtb3BlblNhbnNMaWdodDogJ09wZW5TYW5zLUxpZ2h0JztcbiRpdHgtb3BlblNhbnNSZWd1bGFyOiAnT3BlblNhbnMtUmVndWxhcic7XG4kaXR4LW9wZW5TYW5zU2VtaUJvbGQ6ICdPcGVuU2Fucy1TZW1pYm9sZCc7XG4kaXR4LW9wZW5TYW5zQm9sZDogJ09wZW5TYW5zLUJvbGQnO1xuJGl0eC1pY29uczogJ2l0eC1pY29ucyc7XG5cbiRpdHgtcG9wcGluc0xpZ2h0OiAncG9wcGluc2xpZ2h0JztcbiRpdHgtcG9wcGluc01lZGl1bTogJ3BvcHBpbnNtZWRpdW0nO1xuJGl0eC1wb3BwaW5zUmVndWxhcjogJ3BvcHBpbnNyZWd1bGFyJztcbiRpdHgtcG9wcGluc1NlbWlCb2xkOiAncG9wcGluc3NlbWlib2xkJztcblxuLy8gRk9OVCBTSVpFXG5cbiRpdHgtZm9udEJpZ2dlcjogNDhweDtcbiRpdHgtZm9udEJpZzogMzJweDtcbiRpdHgtZm9udE1lZGl1bTogMjRweDtcbiRpdHgtZm9udFN0YW5kYXJkOiAxNnB4O1xuJGl0eC1mb250U21hbGw6IDE0cHg7XG4kaXR4LWZvbnRFeHRyYVNtYWxsOiAxMnB4O1xuXG5cbi8vIFRSQU5TSVRJT05cbiRpdHgtdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcblxuLy8gQ1NTIFBST1BFUlRZXG5cbi8vIExheW91dFxuJGl0eC1kZWZhdWx0LWd1dHRlcjogMjBweDtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDI6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiAyO1xuJGl0eC1kZWZhdWx0LWd1dHRlci14NDogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDQ7XG5cbi8vIEhlaWdodFxuJGl0eC1zbWFsbC1oZWlnaHQ6IDMycHg7XG4kaXR4LW1lZGl1bS1oZWlnaHQ6IDQwcHg7XG4kaXR4LWJpZy1oZWlnaHQ6IDQ1cHg7XG5cbi8vIEJvcmRlciByYWRpdXNcbiRpdHgtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kc2NyZWVuLW1kOiAxMjAwcHg7XG4kc2NyZWVuLXhzOiA3NjdweDtcblxuJGRlc2t0b3A6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDgwcHgpXCI7XG4kdGFibGV0LWxhbmRzY2FwZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweClcIjtcbiR0YWJsZXQtcG9ydHJhaXQ6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweClcIjtcbiRtb2JpbGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweClcIjtcblxuLy8gcGFkZGluZyBtYXJnaW5cbiRpdHgtZGVmYXVsdC1wYWRkaW5nOiA3dmg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1tZDogNDBweDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLXNtOiAzMHB4O1xuXG4vLyBHcmFkaWVudCBiYWNrZ3JvdW5kXG4uaXR4LWJhY2tncm91bmQtYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDgsNTksMTAyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDgsNTksMTAyLDAuOSkgMCUsIHJnYmEoOSw2NywxMTQsMC45KSAxMDAlKTtcbn1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvX3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuLml0eC1oZWxwZGVzay1jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDEuNTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAyO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICBwYWRkaW5nLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbn1cblxuLmJsb2NrLWhlbHBkZXNrLWNyZWF0ZSB7XG4gICAgLmhlYWQtY2FyZCB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNiAwICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMyAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja191aVtfbmdob3N0LWM5XSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0eC1ib3R0b20tYmFyW19uZ2NvbnRlbnQtYzVdICB7XG4gICAgICAgIHotaW5kZXg6MTAwMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HelpdeskCreateContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateContactComponent", function() { return HelpdeskCreateContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/utils */ "./src/app/modules/shared/utils.ts");
/* harmony import */ var _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/references/genders.service */ "./src/app/modules/core/services/references/genders.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_modules_core_services_references_relationships_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/core/services/references/relationships.service */ "./src/app/modules/core/services/references/relationships.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_button_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/button.service */ "./src/app/modules/shared/services/button.service.ts");















var HelpdeskCreateContactComponent = /** @class */ (function () {
    function HelpdeskCreateContactComponent(fb, gendersService, popupService, userService, createRequestService, router, langService, relationshipsService, spinner, button) {
        var _this = this;
        this.fb = fb;
        this.gendersService = gendersService;
        this.popupService = popupService;
        this.userService = userService;
        this.createRequestService = createRequestService;
        this.router = router;
        this.langService = langService;
        this.relationshipsService = relationshipsService;
        this.spinner = spinner;
        this.button = button;
        this.disableBtn = false;
        this.errorMsgTop = false;
        this.isFormNoModified = false;
        this.showGender = true;
        this.showRelationship = true;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.emailPers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [_shared_utils__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].bind(this.emailPers)]);
        this.phonePers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.mobilePers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.emailPro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [_shared_utils__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].bind(this.emailPro)]);
        this.phonePro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.mobilePro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.genderEmer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.relationships = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.emailEmer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []);
        this.phoneEmer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.helpdeskForm = this.fb.group({
            EmailAddressPersonalContactInfo: this.emailPers,
            PhoneNumberPersonalContactInfo: this.phonePers,
            MobileNumberPersonalContactInfo: this.mobilePers,
            EmailAddressProfessionalContactInfo: this.emailPro,
            PhoneNumberProfessionalContactInfo: this.phonePro,
            MobileNumberProfessionalContactInfo: this.mobilePro,
            FirstNameEmergencyContact: this.firstname,
            GenderEmergencyContact: this.genderEmer,
            RelationshipEmergencyContact: this.relationships,
            LastNameEmergencyContact: this.lastname,
            EmailAddressEmergencyContact: this.emailEmer,
            PhoneNumberEmergencyContact: this.phoneEmer
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
        this.combinedObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])(this.gendersService.genders$, this.relationshipsService.getRelationships(), this.userService.userInfos$);
        this.combinedObs.subscribe(function (_a) {
            var genders = _a[0], relationships = _a[1], userInfos = _a[2];
            _this.genderList = genders;
            _this.relationshipsList = relationships;
            _this.userInfos = userInfos;
            _this.updateFormVal();
            _this.hideSpinner();
            _this.button.changeMessage(false);
        });
    }
    HelpdeskCreateContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSpinner(); }, 25);
        this.gendersService.getGenders();
        this.userService.getUserInfos().subscribe();
        this.makeFieldOptional(this.mobilePers, this.phonePers);
        this.makeFieldOptional(this.mobilePro, this.phonePro);
        this.emailEmer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.emailEmer.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
            }
            else {
                _this.emailEmer.clearValidators();
            }
            _this.emailEmer.updateValueAndValidity();
        });
        this.button.changeMessage(true);
    };
    HelpdeskCreateContactComponent.prototype.showSpinner = function () {
        this.showSpinner1 = true;
    };
    HelpdeskCreateContactComponent.prototype.hideSpinner = function () {
        this.showSpinner1 = false;
    };
    HelpdeskCreateContactComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskCreateContactComponent.prototype.validSelect = function (c) {
        var invalid = c.value === 0 || c.value === 'none' ? true : false;
        return invalid ? { 'invalid': { value: c.value } } : null;
    };
    HelpdeskCreateContactComponent.prototype.makeFieldOptional = function (control1, control2) {
        control1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control2.clearValidators();
            }
            else {
                control2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            control2.updateValueAndValidity();
        });
        control2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control1.clearValidators();
            }
            else {
                control1.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            control1.updateValueAndValidity();
        });
    };
    HelpdeskCreateContactComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreateContactComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateContactComponent.prototype.updateFormVal = function () {
        var _this = this;
        this.userInfos.EmergencyContact.Gender = this.genderList.filter(function (item) {
            if (_this.userInfos.EmergencyContact.Gender) {
                return item.ID === _this.userInfos.EmergencyContact.Gender.ID;
            }
            return false;
        })[0];
        this.userInfos.EmergencyContact.Relationship = this.relationshipsList.filter(function (item) {
            if (_this.userInfos.EmergencyContact.Relationship) {
                return item.ID === _this.userInfos.EmergencyContact.Relationship.ID;
            }
            return false;
        })[0];
        var genderEmergencyContact = this.userInfos.EmergencyContact.Gender ? this.userInfos.EmergencyContact.Gender.ID : 0;
        var relationshipEmergencyContact = this.userInfos.EmergencyContact.Relationship ? this.userInfos.EmergencyContact.Relationship.ID : 0;
        this.helpdeskForm.patchValue({
            EmailAddressPersonalContactInfo: this.userInfos.PersonalContactInfo.EmailAddress,
            PhoneNumberPersonalContactInfo: this.userInfos.PersonalContactInfo.PhoneNumber,
            MobileNumberPersonalContactInfo: this.userInfos.PersonalContactInfo.MobileNumber,
            EmailAddressProfessionalContactInfo: this.userInfos.ProfessionalContactInfo.EmailAddress,
            PhoneNumberProfessionalContactInfo: this.userInfos.ProfessionalContactInfo.PhoneNumber,
            MobileNumberProfessionalContactInfo: this.userInfos.ProfessionalContactInfo.MobileNumber,
            GenderEmergencyContact: genderEmergencyContact,
            RelationshipEmergencyContact: relationshipEmergencyContact,
            FirstNameEmergencyContact: this.userInfos.EmergencyContact.FirstName,
            LastNameEmergencyContact: this.userInfos.EmergencyContact.LastName,
            EmailAddressEmergencyContact: this.userInfos.EmergencyContact.EmailAddress,
            PhoneNumberEmergencyContact: this.userInfos.EmergencyContact.PhoneNumber
        });
    };
    HelpdeskCreateContactComponent.prototype.catch = function (e) { console.error(e); };
    HelpdeskCreateContactComponent.prototype.constructObj = function (isFullObjectNeeded) {
        var _this = this;
        var defaultObj = {
            PersonalContactInfo: {
                EmailAddress: this.helpdeskForm.value.EmailAddressPersonalContactInfo,
                PhoneNumber: this.helpdeskForm.value.PhoneNumberPersonalContactInfo,
                MobileNumber: this.helpdeskForm.value.MobileNumberPersonalContactInfo
            },
            ProfessionalContactInfo: {
                EmailAddress: this.helpdeskForm.value.EmailAddressProfessionalContactInfo,
                PhoneNumber: this.helpdeskForm.value.PhoneNumberProfessionalContactInfo,
                MobileNumber: this.helpdeskForm.value.MobileNumberProfessionalContactInfo
            },
            EmergencyContact: {
                Gender: this.genderList.filter(function (el) { return el.ID == _this.helpdeskForm.value.GenderEmergencyContact; })[0],
                Relationship: this.relationshipsList.filter(function (el) { return el.ID == _this.helpdeskForm.value.RelationshipEmergencyContact; })[0],
                FirstName: this.helpdeskForm.value.FirstNameEmergencyContact,
                LastName: this.helpdeskForm.value.LastNameEmergencyContact,
                EmailAddress: this.helpdeskForm.value.EmailAddressEmergencyContact,
                PhoneNumber: this.helpdeskForm.value.PhoneNumberEmergencyContact
            }
        };
        var defFullObj = JSON.parse(JSON.stringify(defaultObj));
        for (var key in defaultObj) {
            if (defaultObj.hasOwnProperty(key)) {
                var cat = defaultObj[key];
                for (var scndKey in cat) {
                    if (cat.hasOwnProperty(scndKey)) {
                        var property = cat[scndKey];
                        if (scndKey === 'Gender' || scndKey === 'Relationship') {
                            var currentObject = this.userInfos[key][scndKey] ? this.userInfos[key][scndKey].ID : 0;
                            if (this.helpdeskForm.value[scndKey + key] === currentObject) {
                                delete defaultObj[key][scndKey];
                            }
                        }
                        else {
                            if (this.helpdeskForm.value[scndKey + key] === this.userInfos[key][scndKey]) {
                                delete defaultObj[key][scndKey];
                            }
                        }
                    }
                }
            }
        }
        // If full Object is not needed then assign defaultObj to defFullObj which has only changed values.
        if (!isFullObjectNeeded)
            defFullObj = defaultObj;
        // Returns object that only tracks changes and (full Obj, if isFullObjectNeeded is true )
        return [defaultObj, defFullObj];
    };
    HelpdeskCreateContactComponent.prototype.sendRequest = function () {
        var _this = this;
        var _a = this.constructObj(true), contactInfosTrack = _a[0], contactInfos = _a[1];
        var isFormModified = false;
        for (var key in contactInfosTrack) {
            if (Object.keys(contactInfosTrack[key]).length > 0) {
                isFormModified = true;
                break;
            }
        }
        if (isFormModified === false) {
            this.isFormNoModified = true;
            window.scrollTo(0, 0);
            return;
        }
        this.createRequestService.requestInProgress(true);
        this.userService.changeContact(contactInfos).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.contact.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreateContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-contact',
            template: __webpack_require__(/*! ./helpdesk-create-contact.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-contact.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_5__["GendersService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__["CreateRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__["LangService"],
            _app_modules_core_services_references_relationships_service__WEBPACK_IMPORTED_MODULE_11__["RelationshipsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"],
            _shared_services_button_service__WEBPACK_IMPORTED_MODULE_14__["ButtonService"]])
    ], HelpdeskCreateContactComponent);
    return HelpdeskCreateContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create-date\" [formGroup]=\"parent\">\n    <div class=\"form-group\" ngClass=\"{{ control.invalid && (control.touched || control.dirty) ? 'error' : '' }}\">\n        <input type=\"date\" placeholder=\"ex: 2018-03-23\" [ngModel] =\"currentVal | date:'yyyy-MM-dd'\"  (change)=\"onChange($event.target.value)\" [formControl]=\"control\">\n        <div class=\"content-wrapper\">\n          <label for=\"\">{{ title }} <span class=\"description\">{{ dateDesc }}</span><span class=\"error\" *ngIf=\"control.invalid && (control.touched || control.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n          <p>--.--.----</p>\n        </div>\n        <span class=\"itx-icon-arrow\"></span>\n        <div class=\"clearer\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create-date .form-group {\n  position: relative; }\n\n.itx-helpdesk-create-date .form-group.error {\n    border-bottom: 1px solid #e75c80; }\n\n.itx-helpdesk-create-date .form-group.error label {\n      color: #DF2656; }\n\n.itx-helpdesk-create-date .form-group.error input {\n      border: 0 !important;\n      box-shadow: none !important; }\n\n.itx-helpdesk-create-date .form-group label .description {\n    font-size: 0.8em;\n    color: #a7a7a7;\n    font-family: \"poppinslight\";\n    margin-left: 1.75vh; }\n\n.itx-helpdesk-create-date .form-group input[type=text] {\n    color: black; }\n\n.itx-helpdesk-create-date .form-group input[type=date] {\n    z-index: 90;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    height: 60px;\n    line-height: 70px;\n    min-width: 100%;\n    min-height: 100%;\n    opacity: 1;\n    border-radius: 0;\n    background: transparent;\n    -webkit-appearance: none;\n    cursor: pointer; }\n\n.itx-helpdesk-create-date .form-group input[type=date]::-webkit-clear-button, .itx-helpdesk-create-date .form-group input[type=date]::-webkit-inner-spin-button {\n      opacity: 0;\n      display: none; }\n\n.itx-helpdesk-create-date .form-group input[type=date]::-webkit-datetime-edit-year-field, .itx-helpdesk-create-date .form-group input[type=date]::-webkit-datetime-edit-month-field, .itx-helpdesk-create-date .form-group input[type=date]::-webkit-datetime-edit-day-field {\n      background: transparent; }\n\n.itx-helpdesk-create-date .form-group input[type=date]::-webkit-datetime-edit {\n      display: block;\n      min-width: 100%;\n      pointer-events: none;\n      position: absolute; }\n\n.itx-helpdesk-create-date .form-group input[type=date]::-webkit-calendar-picker-indicator {\n      margin: auto;\n      width: 100%;\n      height: 100%;\n      min-width: 100%;\n      min-height: 100%;\n      opacity: 0;\n      cursor: pointer; }\n\n.itx-helpdesk-create-date .form-group .content-wrapper {\n    width: 90%;\n    float: left; }\n\n.itx-helpdesk-create-date .form-group .content-wrapper p {\n      font-family: \"poppinslight\";\n      font-size: 1em;\n      opacity: 0;\n      margin: 0;\n      pointer-events: none; }\n\n.itx-helpdesk-create-date .form-group span.itx-icon-arrow {\n    position: absolute;\n    font-size: 1.2em;\n    color: #303030;\n    float: right;\n    width: 10%;\n    text-align: right;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    height: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtZGF0ZS9oZWxwZGVzay1jcmVhdGUtZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RkE7RUFDSSxvQkFBeUI7RUFDekIsMEZBQW1GLEVBQ3RGOztBQzVGRDtFQUdRLG1CQUFrQixFQXVHckI7O0FBMUdMO0lBTVksaUNEY2dCLEVDTG5COztBQWZUO01BU2dCLGVEVU8sRUNUVjs7QUFWYjtNQVlnQixxQkFBb0I7TUFDcEIsNEJBQTJCLEVBQzlCOztBQWRiO0lBbUJjLGlCQUFnQjtJQUNoQixlQUFtRDtJQUNuRCw0QkRvQm1CO0lDbkJuQixvQkFBcUMsRUFDdEM7O0FBdkJiO0lBMkJZLGFBQVksRUFDZjs7QUE1QlQ7SUFnQ1ksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sVUFBUztJQUNULFFBQU87SUFDUCxTQUFRO0lBQ1IsYUFBWTtJQUNaLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVixpQkFBZ0I7SUFDaEIsd0JBQXVCO0lBQ3ZCLHlCQUF3QjtJQUN4QixnQkFBZSxFQStCbEI7O0FBL0VUO01BcURjLFdBQVU7TUFDVixjQUFhLEVBQ2Q7O0FBdkRiO01BNERjLHdCQUF1QixFQUN4Qjs7QUE3RGI7TUFnRWMsZUFBYztNQUNkLGdCQUFlO01BQ2YscUJBQW9CO01BQ3BCLG1CQUFrQixFQUNuQjs7QUFwRWI7TUF1RWdCLGFBQVk7TUFDWixZQUFXO01BQ1gsYUFBWTtNQUNaLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLFdBQVU7TUFDVixnQkFBZSxFQUNsQjs7QUE5RWI7SUFrRlksV0FBVTtJQUNWLFlBQVcsRUFTZDs7QUE1RlQ7TUFzRmdCLDRCRDdDaUI7TUM4Q2pCLGVBQWM7TUFDZCxXQUFVO01BQ1YsVUFBUztNQUNULHFCQUFvQixFQUN2Qjs7QUEzRmI7SUErRlksbUJBQWtCO0lBQ2xCLGlCQUFnQjtJQUNoQixlQUFrRDtJQUNsRCxhQUFZO0lBQ1osV0FBVTtJQUNWLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osT0FBTTtJQUNOLFVBQVM7SUFDVCxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS1kYXRlL2hlbHBkZXNrLWNyZWF0ZS1kYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL192YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLml0eC1oZWxwZGVzay1jcmVhdGUtZGF0ZSB7XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkaXR4LWxhYmVsLWxpZ2h0cmVkO1xuXG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkaXR4LXRleHQtbGlnaHQsICRhbW91bnQ6IDIwKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRpdHgtcG9wcGluc0xpZ2h0O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xuICAgICAgICAgICAgei1pbmRleDogOTA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1jbGVhci1idXR0b24sXG4gICAgICAgICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQsXG4gICAgICAgICAgICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQsXG4gICAgICAgICAgICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLml0eC1pY29uLWFycm93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGl0eC10ZXh0LWRhcmssICRhbW91bnQ6IDQwKTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogM3ZoO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HelpdeskCreateDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateDateComponent", function() { return HelpdeskCreateDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_references_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");




var HelpdeskCreateDateComponent = /** @class */ (function () {
    function HelpdeskCreateDateComponent(langService) {
        this.langService = langService;
        this.translation = this.langService.lang;
        this.currentVal = '--.--.----';
    }
    HelpdeskCreateDateComponent.prototype.ngOnChanges = function () {
        this.onChange(this.control.value);
    };
    HelpdeskCreateDateComponent.prototype.onChange = function (value) {
        this.currentVal = value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], HelpdeskCreateDateComponent.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], HelpdeskCreateDateComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateDateComponent.prototype, "dateDesc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateDateComponent.prototype, "title", void 0);
    HelpdeskCreateDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-date',
            template: __webpack_require__(/*! ./helpdesk-create-date.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-date.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_references_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"]])
    ], HelpdeskCreateDateComponent);
    return HelpdeskCreateDateComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!userInfos?.Superior.InformationPending && userInfos\" class=\"block-card-alert\">\n    <h3><span class=\"itx-icon-icon_alert\"></span>{{ translation.createRequest.expense.textSuperiorValidation.partOne }} M. {{ userInfos?.Superior.LastName }} {{ userInfos?.Superior.FirstName }}. {{ translation.createRequest.expense.textSuperiorValidation.partTwo }}</h3>\n    <button class=\"btn red full\" routerLink=\"/create-requests/superior\">{{ translation.createRequest.expense.textSuperiorValidation.btnChangeSuperior }}</button>\n</div>\n<div *ngIf=\"userInfos?.Superior.InformationPending\" class=\"block-card-alert\">\n    <h3><span class=\"itx-icon-icon_alert\"></span>{{ translation.createRequest.expense.textSuperiorPending }}</h3>\n</div>\n<div class=\"block-helpdesk-create itx-expense-create\">\n    <form [formGroup]=\"helpdeskForm\" #mainForm>\n        <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n        <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"expenseDate\" [title]=\"translation.createRequest.expense.form.date.label\"></itx-helpdesk-create-date>\n        <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"expenseCategory\" [title]=\"translation.createRequest.expense.form.category.label\" [list]=\"expenseCategories\"></itx-helpdesk-create-select>\n        <!--<itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"expenseEvent\" [title]=\"'Type d\\'évènement'\" [list]=\"expenseEvents\"></itx-helpdesk-create-select>-->\n        <div class=\"form-group\" ngClass=\"{{ price.invalid && (price.touched || price.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.expense.form.price.label }} <span class=\"error\" *ngIf=\"price.invalid && (price.touched || price.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"number\" name=\"price\" [formControl]=\"price\" placeholder=\"{{ translation.createRequest.expense.form.price.placeholder }}\">\n        </div>\n        <itx-helpdesk-create-select [icon]=\"'icon_frais'\" [parent]=\"helpdeskForm\" [control]=\"currency\" [title]=\"translation.createRequest.expense.form.currency.label\" [list]=\"currencies\" [refVal]=\"'Code'\"></itx-helpdesk-create-select>\n        <itx-helpdesk-create-select [icon]=\"'icon_frais'\" [parent]=\"helpdeskForm\" [control]=\"paymentMethod\" [title]=\"translation.createRequest.expense.form.paymentMethod.label\" [list]=\"paymentMethods\"></itx-helpdesk-create-select>\n        <itx-helpdesk-create-select *ngIf=\"bankAccounts.length > 0\" [icon]=\"'icon_frais'\" [parent]=\"helpdeskForm\" [control]=\"expenseBankID\" [title]=\"translation.createRequest.expense.form.bankAccount.label\" [list]=\"bankAccounts\"></itx-helpdesk-create-select>\n        <div class=\"form-group\">\n            <label for=\"\">{{ translation.createRequest.expense.form.comment.label }} <span>({{ translation.createRequest.general.optional }})</span></label>\n            <input type=\"text\" name=\"comment\" [formControl]=\"comment\" placeholder=\"{{ translation.createRequest.expense.form.comment.placeholder }}\">\n        </div>\n        <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\" [title]=\"translation.createRequest.expense.form.attachment.label\" [fileType]=\"translation.createRequest.expense.form.attachment.description\"></itx-helpdesk-create-upload>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-expense-create .form-group .toggle-wrapper {\n  width: 100%;\n  border: 1px solid #DADADA;\n  border-radius: 8vh; }\n\n.itx-expense-create .form-group .toggle-wrapper button {\n    border: 0;\n    width: 50%;\n    text-align: center;\n    display: block;\n    float: left;\n    padding: 0;\n    margin: 0; }\n\n.itx-expense-create .form-group .toggle-wrapper button input {\n      display: none; }\n\n.itx-expense-create .form-group .toggle-wrapper button input:checked + label {\n        color: white;\n        background-color: #093152; }\n\n.itx-expense-create .form-group .toggle-wrapper button label {\n      width: 100%;\n      height: 8vh;\n      line-height: 8vh;\n      text-align: center;\n      color: #DADADA;\n      margin: 0;\n      background-color: white;\n      border-radius: 8vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtZXhwZW5zZS9oZWxwZGVzay1jcmVhdGUtZXhwZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RkE7RUFDSSxvQkFBeUI7RUFDekIsMEZBQW1GLEVBQ3RGOztBQzFGRDtFQUdZLFlBQVc7RUFDWCwwQkR1Qlk7RUN0QlosbUJBUE0sRUFzQ1Q7O0FBcENUO0lBUWdCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxZQUFXO0lBQ1gsV0FBVTtJQUNWLFVBQVMsRUFxQlo7O0FBbkNiO01BaUJvQixjQUFhLEVBTWhCOztBQXZCakI7UUFvQndCLGFEbEJQO1FDbUJPLDBCRExJLEVDTVA7O0FBdEJyQjtNQTBCb0IsWUFBVztNQUNYLFlBN0JGO01BOEJFLGlCQTlCRjtNQStCRSxtQkFBa0I7TUFDbEIsZURISTtNQ0lKLFVBQVM7TUFDVCx3QkQ5Qkg7TUMrQkcsbUJBbkNGLEVBb0NEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtZXhwZW5zZS9oZWxwZGVzay1jcmVhdGUtZXhwZW5zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbiR0b2dnbGVIZWlnaHQ6IDh2aDtcblxuLml0eC1leHBlbnNlLWNyZWF0ZSB7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAudG9nZ2xlLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9nZ2xlSGVpZ2h0O1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtbGFiZWwtZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HelpdeskCreateExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateExpenseComponent", function() { return HelpdeskCreateExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_references_expense_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/references/expense-categories.service */ "./src/app/modules/core/services/references/expense-categories.service.ts");
/* harmony import */ var _core_services_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/expense.service */ "./src/app/modules/core/services/expense.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/references/currencies.service */ "./src/app/modules/core/services/references/currencies.service.ts");
/* harmony import */ var _core_services_references_payment_methods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/references/payment-methods.service */ "./src/app/modules/core/services/references/payment-methods.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");














var HelpdeskCreateExpenseComponent = /** @class */ (function () {
    function HelpdeskCreateExpenseComponent(fb, expenseCategoriesService, expenseService, currenciesService, paymentMethodsService, popupService, createRequestService, router, userService, langService) {
        var _this = this;
        this.fb = fb;
        this.expenseCategoriesService = expenseCategoriesService;
        this.expenseService = expenseService;
        this.currenciesService = currenciesService;
        this.paymentMethodsService = paymentMethodsService;
        this.popupService = popupService;
        this.createRequestService = createRequestService;
        this.router = router;
        this.userService = userService;
        this.langService = langService;
        this.errorMsgTop = false;
        this.bankAccounts = [];
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.expenseDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.expenseCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.expenseEvent = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0);
        this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.getCurrency(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.paymentMethod = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.expenseBankID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_12__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_13__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            Date: this.expenseDate,
            Category: this.expenseCategory,
            Event: this.expenseEvent,
            Price: this.price,
            Currency: this.currency,
            PaymentMethod: this.paymentMethod,
            BankAccountID: this.expenseBankID,
            Comment: this.comment,
            Files: this.file
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
        this.expenseCatSub = this.expenseCategoriesService.expenseCategories$.subscribe(function (res) {
            _this.expenseCategories = res;
        });
        this.expenseEventsSub = this.expenseService.expenseEvents$.subscribe(function (events) {
            _this.expenseEvents = events;
        });
        this.currenciesSub = this.currenciesService.currencies$.subscribe(function (currencies) {
            _this.currencies = currencies;
            // const noCurrency = {Code: 'none', Name: 'None'};
            // this.currencies.unshift(noCurrency);
        });
        this.paymentsSub = this.paymentMethodsService.paymentMethods$.subscribe(function (paymentMethods) {
            _this.paymentMethods = paymentMethods;
        });
        this.userInfoSub = this.userService.userInfos$.subscribe(function (userInfos) {
            _this.userInfos = userInfos;
            _this.getBankAccountsList();
        });
    }
    HelpdeskCreateExpenseComponent.prototype.ngOnInit = function () {
        this.expenseCategoriesService.getExpenseCategories().subscribe();
        this.expenseService.getExpenseEvents().subscribe();
        this.currenciesService.getCurrencies().subscribe();
        this.paymentMethodsService.getPaymentMethods().subscribe();
        this.userService.getUserInfos(true).subscribe();
    };
    HelpdeskCreateExpenseComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
        this.expenseCatSub.unsubscribe();
        this.expenseEventsSub.unsubscribe();
        this.currenciesSub.unsubscribe();
        this.paymentsSub.unsubscribe();
        this.userInfoSub.unsubscribe();
    };
    HelpdeskCreateExpenseComponent.prototype.validSelect = function (c) {
        var invalid = c.value === 0 || c.value === 'none' ? true : false;
        return invalid ? { 'invalidPayment': { value: c.value } } : null;
    };
    HelpdeskCreateExpenseComponent.prototype.getBankAccountsList = function () {
        var _this = this;
        this.userInfos.BankAccounts.forEach(function (bankAccount) {
            var temp = {
                'ID': bankAccount.ID,
                'Name': bankAccount.BankName + ', ' + bankAccount.IBAN + ' - ' + bankAccount.Currency
            };
            _this.bankAccounts.push(temp);
        });
    };
    HelpdeskCreateExpenseComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateExpenseComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreateExpenseComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateExpenseComponent.prototype.sendRequest = function () {
        var _this = this;
        var newExpense = this.helpdeskForm.value;
        newExpense.Price = Math.ceil(newExpense.Price);
        this.saveCurrency(newExpense.Currency);
        this.createRequestService.requestInProgress(true);
        this.expenseService.addExpenseRequest(newExpense, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('ERROR', err);
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.expense.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreateExpenseComponent.prototype.saveCurrency = function (currency) {
        localStorage.setItem('lastCurrency', currency);
    };
    HelpdeskCreateExpenseComponent.prototype.getCurrency = function () {
        var currency = localStorage.getItem('lastCurrency');
        if (currency) {
            return currency;
        }
        else {
            return 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HelpdeskCreateExpenseComponent.prototype, "mainForm", void 0);
    HelpdeskCreateExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-expense',
            template: __webpack_require__(/*! ./helpdesk-create-expense.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-expense.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_references_expense_categories_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseCategoriesService"],
            _core_services_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"],
            _core_services_references_currencies_service__WEBPACK_IMPORTED_MODULE_7__["CurrenciesService"],
            _core_services_references_payment_methods_service__WEBPACK_IMPORTED_MODULE_8__["PaymentMethodsService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_9__["PopupService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_10__["CreateRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_11__["LangService"]])
    ], HelpdeskCreateExpenseComponent);
    return HelpdeskCreateExpenseComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create-header\">\n    <div class=\"form-group\">\n        <div class=\"content-wrapper\">\n            <label for=\"\">{{ translation.createRequest.general.requestType }}</label>\n            <p>{{ type }}</p>\n        </div>\n        <!--<span class=\"itx-icon-arrow\"></span>-->\n        <div class=\"clearer\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create-header .form-group {\n  position: relative; }\n\n.itx-helpdesk-create-header .form-group .content-wrapper {\n    width: 90%;\n    float: left; }\n\n.itx-helpdesk-create-header .form-group .content-wrapper p {\n      font-family: \"poppinslight\";\n      font-size: 1em;\n      color: #2D2D2D;\n      margin: 0; }\n\n.itx-helpdesk-create-header .form-group span.itx-icon-arrow {\n    position: absolute;\n    font-size: 1.2em;\n    color: #969696;\n    float: right;\n    width: 10%;\n    text-align: right;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    height: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtaGVhZGVyL2hlbHBkZXNrLWNyZWF0ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFHSSxtQkFBa0IsRUEyQm5COztBQTlCSDtJQU1NLFdBQVU7SUFDVixZQUFXLEVBUVo7O0FBZkw7TUFVUSw0QkQrQnlCO01DOUJ6QixlQUFjO01BQ2QsZURlaUI7TUNkakIsVUFBUyxFQUNWOztBQWRQO0lBa0JNLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsZURRaUI7SUNQakIsYUFBWTtJQUNaLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLE9BQU07SUFDTixVQUFTO0lBQ1QsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtaGVhZGVyL2hlbHBkZXNrLWNyZWF0ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT0xPUlNcbi8vXG4kaXR4LXByaW1hcnk6ICM2OGIxZWE7XG4kaXR4LXByaW1hcnktbGlnaHQ6ICM2RUJCRjc7XG4kaXR4LXByaW1hcnktZGFyazogIzRDODFBQTtcbiRpdHgtcHJpbWFyeS1kYXJrZXI6ICMyRjUxNkE7XG5cbiRpdHgtd2hpdGU6IHdoaXRlO1xuXG4kaXR4LWxpZ2h0OiAjQjFEM0VEO1xuXG4kaXR4LXRleHQ6ICM0RjVGNkE7XG4kaXR4LWRpc2FibGVkOiAjQkRCRUJFO1xuXG4kaXR4LWFsZXJ0OiAjRTIxQTRGO1xuXG4vL1xuJGl0eC1ncmFkaWVudC1hOiAjM0NBREUzO1xuJGl0eC1ncmFkaWVudC1iOiAjNzNENkYxO1xuXG4kaXR4LWxhYmVsLWJsdWU6ICM1NUMwRUE7XG4kaXR4LWxhYmVsLWRhcmtibHVlOiAjMDkzMTUyO1xuJGl0eC1sYWJlbC1yZWQ6ICNERjI2NTY7XG4kaXR4LWxhYmVsLWxpZ2h0cmVkOiAjZTc1YzgwO1xuJGl0eC1sYWJlbC1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LWljb25zLWJsdWU6ICMwOTQwNkU7XG4vLyAkaXR4LWljb25zLWdyZXk6ICNDRUQ2REM7XG4kaXR4LWljb25zLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtdGV4dC1kYXJrZXI6ICMyRDJEMkQ7XG4kaXR4LXRleHQtZGFyazogIzk2OTY5NjtcbiRpdHgtdGV4dC1saWdodDogI0RBREFEQTtcbiRpdHgtdGV4dC1saWdodGVyOiAjRkZGRkZGO1xuXG5cbi8vIEZPTlRTXG5cbiRpdHgtb3BlblNhbnNMaWdodDogJ09wZW5TYW5zLUxpZ2h0JztcbiRpdHgtb3BlblNhbnNSZWd1bGFyOiAnT3BlblNhbnMtUmVndWxhcic7XG4kaXR4LW9wZW5TYW5zU2VtaUJvbGQ6ICdPcGVuU2Fucy1TZW1pYm9sZCc7XG4kaXR4LW9wZW5TYW5zQm9sZDogJ09wZW5TYW5zLUJvbGQnO1xuJGl0eC1pY29uczogJ2l0eC1pY29ucyc7XG5cbiRpdHgtcG9wcGluc0xpZ2h0OiAncG9wcGluc2xpZ2h0JztcbiRpdHgtcG9wcGluc01lZGl1bTogJ3BvcHBpbnNtZWRpdW0nO1xuJGl0eC1wb3BwaW5zUmVndWxhcjogJ3BvcHBpbnNyZWd1bGFyJztcbiRpdHgtcG9wcGluc1NlbWlCb2xkOiAncG9wcGluc3NlbWlib2xkJztcblxuLy8gRk9OVCBTSVpFXG5cbiRpdHgtZm9udEJpZ2dlcjogNDhweDtcbiRpdHgtZm9udEJpZzogMzJweDtcbiRpdHgtZm9udE1lZGl1bTogMjRweDtcbiRpdHgtZm9udFN0YW5kYXJkOiAxNnB4O1xuJGl0eC1mb250U21hbGw6IDE0cHg7XG4kaXR4LWZvbnRFeHRyYVNtYWxsOiAxMnB4O1xuXG5cbi8vIFRSQU5TSVRJT05cbiRpdHgtdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcblxuLy8gQ1NTIFBST1BFUlRZXG5cbi8vIExheW91dFxuJGl0eC1kZWZhdWx0LWd1dHRlcjogMjBweDtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDI6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiAyO1xuJGl0eC1kZWZhdWx0LWd1dHRlci14NDogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDQ7XG5cbi8vIEhlaWdodFxuJGl0eC1zbWFsbC1oZWlnaHQ6IDMycHg7XG4kaXR4LW1lZGl1bS1oZWlnaHQ6IDQwcHg7XG4kaXR4LWJpZy1oZWlnaHQ6IDQ1cHg7XG5cbi8vIEJvcmRlciByYWRpdXNcbiRpdHgtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kc2NyZWVuLW1kOiAxMjAwcHg7XG4kc2NyZWVuLXhzOiA3NjdweDtcblxuJGRlc2t0b3A6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDgwcHgpXCI7XG4kdGFibGV0LWxhbmRzY2FwZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweClcIjtcbiR0YWJsZXQtcG9ydHJhaXQ6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweClcIjtcbiRtb2JpbGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweClcIjtcblxuLy8gcGFkZGluZyBtYXJnaW5cbiRpdHgtZGVmYXVsdC1wYWRkaW5nOiA3dmg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1tZDogNDBweDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLXNtOiAzMHB4O1xuXG4vLyBHcmFkaWVudCBiYWNrZ3JvdW5kXG4uaXR4LWJhY2tncm91bmQtYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDgsNTksMTAyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDgsNTksMTAyLDAuOSkgMCUsIHJnYmEoOSw2NywxMTQsMC45KSAxMDAlKTtcbn1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvX3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uaXR4LWhlbHBkZXNrLWNyZWF0ZS1oZWFkZXIge1xuXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNMaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAkaXR4LXRleHQtZGFya2VyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3Bhbi5pdHgtaWNvbi1hcnJvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgY29sb3I6ICRpdHgtdGV4dC1kYXJrO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAzdmg7XG4gICAgfVxuXG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HelpdeskCreateHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateHeaderComponent", function() { return HelpdeskCreateHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");



var HelpdeskCreateHeaderComponent = /** @class */ (function () {
    function HelpdeskCreateHeaderComponent(langService) {
        this.langService = langService;
        this.translation = this.langService.lang;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateHeaderComponent.prototype, "type", void 0);
    HelpdeskCreateHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-header',
            template: __webpack_require__(/*! ./helpdesk-create-header.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-header.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"]])
    ], HelpdeskCreateHeaderComponent);
    return HelpdeskCreateHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\">\n    <form [formGroup]=\"helpdeskForm\" #mainForm>\n        <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n        <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.other\"></itx-helpdesk-create-header>\n        <div class=\"form-group\" ngClass=\"{{ title.invalid && (title.touched || title.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.other.form.title.label }}<span class=\"description\">{{ translation.createRequest.other.form.title.description}}</span> <span class=\"error\" *ngIf=\"title.invalid && (title.touched || title.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" [formControl]=\"title\" placeholder=\"{{ translation.createRequest.other.form.title.placeholder }}\" autocomplete=\"off\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ desc.invalid && (desc.touched || desc.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.other.form.desc.label }}<span class=\"description\">{{ translation.createRequest.other.form.desc.description}}</span>  <span class=\"error\" *ngIf=\"desc.invalid && (desc.touched || desc.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <textarea name=\"\" id=\"\" [formControl]=\"desc\" placeholder=\"{{ translation.createRequest.other.form.desc.placeholder }}\"></textarea>\n        </div>\n        <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"priorityID\" [title]=\"translation.createRequest.other.form.priority.label\" [list]=\"priorityLevels\" [selectDesc]=\"translation.createRequest.other.form.priority.description\" ></itx-helpdesk-create-select>\n        <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskForm\" [control]=\"file\" [title]=\"translation.createRequest.other.form.attachment.label\" [fileType]=\"translation.createRequest.other.form.attachment.description\"></itx-helpdesk-create-upload>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtb3RoZXIvaGVscGRlc2stY3JlYXRlLW90aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDNUZEO0VBQ0ksb0JBQXVDO0VBQ3ZDLHFCQUF3QztFQUN4Qyw0QkFBdUM7RUFDdkMsMkJBQXNDLEVBQ3pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtb3RoZXIvaGVscGRlc2stY3JlYXRlLW90aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL192YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLml0eC1oZWxwZGVzay1jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDEuNTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAyO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICBwYWRkaW5nLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HelpdeskCreateOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateOtherComponent", function() { return HelpdeskCreateOtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _core_services_references_priority_levels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/references/priority-levels.service */ "./src/app/modules/core/services/references/priority-levels.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_helpdesk_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/helpdesk.service */ "./src/app/modules/core/services/helpdesk.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");










var HelpdeskCreateOtherComponent = /** @class */ (function () {
    function HelpdeskCreateOtherComponent(fb, priorityLevelsService, createRequestService, helpdesk, popupService, router, langService) {
        var _this = this;
        this.fb = fb;
        this.priorityLevelsService = priorityLevelsService;
        this.createRequestService = createRequestService;
        this.helpdesk = helpdesk;
        this.popupService = popupService;
        this.router = router;
        this.langService = langService;
        this.errorMsgTop = false;
        this.descPlaceholder = '';
        this.translation = this.langService.lang;
        // Detect <= IE11
        if (!document['documentMode']) {
            this.descPlaceholder = this.translation.createRequest.other.form.descPlaceholder;
        }
        this.showPopup = true;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.priorityID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_4__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            title: this.title,
            desc: this.desc,
            priorityID: this.priorityID,
            file: this.file,
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.priorityLevelSubscription = this.priorityLevelsService.priorityLevels$.subscribe(function (res) {
            _this.priorityLevels = res;
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
    }
    HelpdeskCreateOtherComponent.prototype.ngOnInit = function () {
        this.priorityLevelsService.getPriorityLevels();
    };
    HelpdeskCreateOtherComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
        this.priorityLevelSubscription.unsubscribe();
    };
    HelpdeskCreateOtherComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateOtherComponent.prototype.validSelect = function (c) {
        var invalid = c.value === 0 || c.value === 'none' ? true : false;
        return invalid ? { 'invalid': { value: c.value } } : null;
    };
    HelpdeskCreateOtherComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateOtherComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreateOtherComponent.prototype.sendRequest = function () {
        var _this = this;
        var body = {
            PriorityLevelID: this.priorityID.value,
            Title: this.title.value,
            Description: this.desc.value
        };
        this.createRequestService.requestInProgress(true);
        this.helpdesk.addHelpdeskRequest(body, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('ERROR', err);
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.other.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HelpdeskCreateOtherComponent.prototype, "mainForm", void 0);
    HelpdeskCreateOtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-other',
            template: __webpack_require__(/*! ./helpdesk-create-other.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-other.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_references_priority_levels_service__WEBPACK_IMPORTED_MODULE_5__["PriorityLevelsService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_6__["CreateRequestService"],
            _core_services_helpdesk_service__WEBPACK_IMPORTED_MODULE_8__["HelpdeskService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__["LangService"]])
    ], HelpdeskCreateOtherComponent);
    return HelpdeskCreateOtherComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\">\n    <ngx-spinner [visible]=\"showSpinner1\"></ngx-spinner>\n  <form [formGroup]=\"helpdeskForm\">\n    <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n      <span>{{ translation.createRequest.general.errorGlobal }}</span>\n    </div>\n    <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.passport\"></itx-helpdesk-create-header>\n    <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"personID\"\n      [title]=\"translation.createRequest.passport.form.selectPassport\" [list]=\"passportsList\">\n    </itx-helpdesk-create-select>\n    <div class=\"form-group\"\n      ngClass=\"{{ passportNumber.invalid && (passportNumber.touched || passportNumber.dirty) ? 'error' : '' }}\">\n      <label for=\"\">{{ translation.createRequest.passport.form.passportNumber.label }} <span class=\"description\">{{ translation.createRequest.passport.form.passportNumber.description}}</span><span class=\"error\"\n          *ngIf=\"passportNumber.invalid && (passportNumber.touched || passportNumber.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n      <input type=\"text\" name=\"passportNumber\" [formControl]=\"passportNumber\"\n        placeholder=\"{{ translation.createRequest.passport.form.passportNumber.placeholder }}\" autocomplete=\"off\">\n    </div>\n    <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"passportExpDate\"\n      [title]=\"translation.createRequest.passport.form.expirationDate.label\" [dateDesc]=\"translation.createRequest.passport.form.expirationDate.description\"></itx-helpdesk-create-date>\n    <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\"  [parent]=\"helpdeskForm\" [control]=\"file\"\n      [title]=\"translation.createRequest.passport.form.attachment.label\"\n      [fileType]=\"translation.createRequest.passport.form.attachment.description\"></itx-helpdesk-create-upload>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n.block_ui[_nghost-c9] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  border: 1px solid white;\n  border-radius: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtcGFzc3BvcnQvaGVscGRlc2stY3JlYXRlLXBhc3Nwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDN0ZEO0VBQ0ksb0JBQXVDO0VBQ3ZDLHFCQUF3QztFQUN4Qyw0QkFBdUM7RUFDdkMsMkJBQXNDLEVBQ3pDOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU87RUFDUCxXQUFVO0VBQ1Ysd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVscGRlc2stY3JlYXRlL2NvbXBvbmVudHMvaGVscGRlc2stY3JlYXRlLXBhc3Nwb3J0L2hlbHBkZXNrLWNyZWF0ZS1wYXNzcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG4uaXR4LWhlbHBkZXNrLWNyZWF0ZSB7XG4gICAgcGFkZGluZy10b3A6ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMS41O1xuICAgIHBhZGRpbmctYm90dG9tOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDI7XG4gICAgcGFkZGluZy1yaWdodDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xuICAgIHBhZGRpbmctbGVmdDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzO1xufVxuXG4uYmxvY2tfdWlbX25naG9zdC1jOV0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HelpdeskCreatePassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreatePassportComponent", function() { return HelpdeskCreatePassportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_button_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/button.service */ "./src/app/modules/shared/services/button.service.ts");












var HelpdeskCreatePassportComponent = /** @class */ (function () {
    function HelpdeskCreatePassportComponent(fb, createRequestService, popupService, userService, router, route, langService, spinner, button) {
        var _this = this;
        this.fb = fb;
        this.createRequestService = createRequestService;
        this.popupService = popupService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.langService = langService;
        this.spinner = spinner;
        this.button = button;
        this.disableBtn = false;
        this.passportsList = [];
        this.passportsListSelect = [];
        this.errorMsgTop = false;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.personID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validSelect]);
        this.passportNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passportExpDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_8__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            PersonID: this.personID,
            PassportNo: this.passportNumber,
            ExpirationDate: this.passportExpDate,
            Files: this.file
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.personIdToUpdate = params['id'];
                _this.personID.setValue(_this.personIdToUpdate);
            }
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
        this.userService.userInfos$.subscribe(function (userInfos) {
            _this.userInfos = userInfos;
            _this.getPassports();
            _this.hideSpinner();
            _this.button.changeMessage(false);
        });
    }
    HelpdeskCreatePassportComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSpinner(); }, 25);
        this.userService.getUserInfos().subscribe();
        this.button.changeMessage(true);
    };
    HelpdeskCreatePassportComponent.prototype.showSpinner = function () {
        this.showSpinner1 = true;
    };
    HelpdeskCreatePassportComponent.prototype.hideSpinner = function () {
        this.showSpinner1 = false;
    };
    HelpdeskCreatePassportComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskCreatePassportComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreatePassportComponent.prototype.checkForDuplicatePassports = function (passportsList, passport) {
        return passportsList.filter(function (passportItem) { return passportItem['ID'] === passport['ID']; }).length > 0 ? false : true;
    };
    HelpdeskCreatePassportComponent.prototype.getPassports = function () {
        var _this = this;
        this.passportsList = [];
        // Childrens passports
        this.userInfos.Children.forEach(function (children) {
            var childrenPassport = {
                Passport: children.Passport,
                ID: children.ID,
                Name: children.LastName + ' ' + children.FirstName + ' - ' + children.Passport.PassportNo
            };
            if (_this.checkForDuplicatePassports(_this.passportsList, childrenPassport)) {
                _this.passportsList.push(childrenPassport);
            }
        });
        // Partner passport
        if (this.userInfos.Partner != null) {
            var partnerPassport = {
                Passport: this.userInfos.Partner.Passport,
                ID: this.userInfos.Partner.ID,
                Name: this.userInfos.Partner.LastName + ' ' + this.userInfos.Partner.FirstName + ' - ' + this.userInfos.Partner.Passport.PassportNo
            };
            if (this.checkForDuplicatePassports(this.passportsList, partnerPassport)) {
                this.passportsList.push(partnerPassport);
            }
        }
        // Personal passport
        // If ID = 0, the selectbox detected invalid value !
        var personalPassport = {
            Passport: this.userInfos.Passport,
            ID: -1,
            Name: this.userInfos.LastName + ' ' + this.userInfos.FirstName + ' - ' + this.userInfos.Passport.PassportNo
        };
        this.passportsList.push(personalPassport);
    };
    HelpdeskCreatePassportComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreatePassportComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreatePassportComponent.prototype.validSelect = function (c) {
        var invalid = c.value === 0 || c.value === 'none' ? true : false;
        return invalid ? { 'invalid': { value: c.value } } : null;
    };
    HelpdeskCreatePassportComponent.prototype.sendRequest = function () {
        var _this = this;
        var changePassport = {
            PassportNo: this.passportNumber.value,
            ExpirationDate: this.passportExpDate.value
        };
        this.createRequestService.requestInProgress(true);
        // Hack: PersonalID -1 to 0
        var personalID = parseInt(this.personID.value);
        if (personalID === -1) {
            personalID = 0;
        }
        this.userService.changePassport(changePassport, personalID, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.passport.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreatePassportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-passport',
            template: __webpack_require__(/*! ./helpdesk-create-passport.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-passport.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_4__["CreateRequestService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _shared_services_button_service__WEBPACK_IMPORTED_MODULE_11__["ButtonService"]])
    ], HelpdeskCreatePassportComponent);
    return HelpdeskCreatePassportComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create-select\" [formGroup]=\"parent\">\n    <div class=\"form-group\" ngClass=\"{{ control.invalid && (control.touched || control.dirty) ? 'error' : '' }}\">\n        <select *ngIf=\"_list && _list.length > 0\" (change)=\"onChange($event.target.value)\" name=\"\" id=\"\" [formControl]=\"control\">\n            <option [ngValue]=\"undefined\" hidden>{{ translation.createRequest.general.selectPlaceholder }}</option>\n            <option *ngFor=\"let el of _list; let i = index\" [value]=\"el[refVal]\">{{ el.Text || el.Name }}</option>\n        </select>\n        <div class=\"content-wrapper\">\n            <label for=\"\">{{ title }} \n                    <span class=\"description\">{{ selectDesc }}</span>\n                    <span class=\"error\" *ngIf=\"control.invalid && (control.touched || control.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <p><span class=\"itx-icon-{{ icon }}\"></span>{{ currentVal }}</p>\n        </div>\n        <span class=\"itx-icon-arrow\"></span>\n        <div class=\"clearer\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create-select .form-group {\n  position: relative; }\n\n.itx-helpdesk-create-select .form-group.error {\n    border-bottom: 1px solid #e75c80; }\n\n.itx-helpdesk-create-select .form-group.error label {\n      color: #DF2656; }\n\n.itx-helpdesk-create-select .form-group.error input {\n      border: 0 !important;\n      box-shadow: none !important; }\n\n.itx-helpdesk-create-select .form-group select {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer; }\n\n.itx-helpdesk-create-select .form-group .content-wrapper {\n    width: 90%;\n    float: left; }\n\n.itx-helpdesk-create-select .form-group .content-wrapper p {\n      font-family: \"poppinslight\";\n      font-size: 1em;\n      color: #303030;\n      opacity: 0.8;\n      margin: 0; }\n\n.itx-helpdesk-create-select .form-group .content-wrapper p span[class^=itx-icon-] {\n        font-size: 1.6em;\n        margin-right: 5px;\n        vertical-align: sub;\n        color: #b3bfc8; }\n\n.itx-helpdesk-create-select .form-group span.itx-icon-arrow {\n    position: absolute;\n    font-size: 1.2em;\n    color: #303030;\n    float: right;\n    width: 10%;\n    text-align: right;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    height: 3vh; }\n\n.itx-helpdesk-create-select .form-group label .description {\n    font-size: 0.8em;\n    color: #a7a7a7;\n    font-family: \"poppinslight\";\n    margin-left: 1.75vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtc2VsZWN0L2hlbHBkZXNrLWNyZWF0ZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFHUSxtQkFBa0IsRUFzRXJCOztBQXpFTDtJQU1ZLGlDRGNnQixFQ0xuQjs7QUFmVDtNQVNnQixlRFVPLEVDVFY7O0FBVmI7TUFZZ0IscUJBQW9CO01BQ3BCLDRCQUEyQixFQUM5Qjs7QUFkYjtJQWtCWSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixVQUFTO0lBQ1QsUUFBTztJQUNQLFNBQVE7SUFDUixhQUFZO0lBQ1osWUFBVztJQUNYLGFBQVk7SUFDWixXQUFVO0lBQ1YsZ0JBQWUsRUFDbEI7O0FBN0JUO0lBZ0NZLFdBQVU7SUFDVixZQUFXLEVBZ0JkOztBQWpEVDtNQW9DZ0IsNEJES2lCO01DSmpCLGVBQWM7TUFDZCxlQUFrRDtNQUNsRCxhQUFZO01BQ1osVUFBUyxFQVFaOztBQWhEYjtRQTJDb0IsaUJBQWdCO1FBQ2hCLGtCQUFxQztRQUNyQyxvQkFBbUI7UUFDbkIsZURyQkksRUNzQlA7O0FBL0NqQjtJQW9EWSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGVBQWtEO0lBQ2xELGFBQVk7SUFDWixXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixPQUFNO0lBQ04sVUFBUztJQUNULFlBQVcsRUFDZDs7QUE5RFQ7SUFrRWMsaUJBQWdCO0lBQ2hCLGVBQW1EO0lBQ25ELDRCRDNCbUI7SUM0Qm5CLG9CQUFxQyxFQUN0QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVscGRlc2stY3JlYXRlL2NvbXBvbmVudHMvaGVscGRlc2stY3JlYXRlLXNlbGVjdC9oZWxwZGVzay1jcmVhdGUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL192YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLml0eC1oZWxwZGVzay1jcmVhdGUtc2VsZWN0IHtcblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRpdHgtbGFiZWwtbGlnaHRyZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGl0eC1sYWJlbC1yZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRpdHgtcG9wcGluc0xpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkaXR4LXRleHQtZGFyaywgJGFtb3VudDogNDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICBzcGFuW2NsYXNzXj1pdHgtaWNvbi1dIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpdHgtaWNvbnMtZ3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLml0eC1pY29uLWFycm93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGl0eC10ZXh0LWRhcmssICRhbW91bnQ6IDQwKTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogM3ZoO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkY29sb3I6ICRpdHgtdGV4dC1saWdodCwgJGFtb3VudDogMjApO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgfVxuICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HelpdeskCreateSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateSelectComponent", function() { return HelpdeskCreateSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/cloneDeep */ "./node_modules/lodash-es/cloneDeep.js");
/* harmony import */ var _services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");





var HelpdeskCreateSelectComponent = /** @class */ (function () {
    function HelpdeskCreateSelectComponent(langService) {
        this.langService = langService;
        this.icon = 'icon_priority';
        this.refVal = 'ID';
        this.currentVal = "None";
        this.translation = this.langService.lang;
    }
    Object.defineProperty(HelpdeskCreateSelectComponent.prototype, "list", {
        set: function (list) {
            if (list) {
                this._list = list;
                /* setTimeout(() => {
                  this.control.setValue(this._list[0][this.refVal]);
                  this.currentVal = this.getControlValue(this._list[0][this.refVal]);
                }, 0); */
            }
        },
        enumerable: true,
        configurable: true
    });
    HelpdeskCreateSelectComponent.prototype.ngOnChanges = function () {
        if (this._list) {
            this.onChange(this.control.value);
        }
    };
    HelpdeskCreateSelectComponent.prototype.onChange = function (value) {
        this.currentVal = this.getControlValue(value);
    };
    HelpdeskCreateSelectComponent.prototype.getControlValue = function (value) {
        var _this = this;
        var newVal = '';
        var queryValue = value;
        if (value != null && value !== undefined && value[this.refVal]) {
            newVal = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_3__["default"])(this._list).find(function (el) { return el[_this.refVal] === value[_this.refVal]; });
        }
        else {
            if (Number(value)) {
                queryValue = Number(value);
            }
            newVal = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_3__["default"])(this._list).find(function (el) { return el[_this.refVal] === queryValue; });
        }
        if (newVal) {
            return newVal.Text || newVal.Name;
        }
        else {
            return 'None';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], HelpdeskCreateSelectComponent.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], HelpdeskCreateSelectComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateSelectComponent.prototype, "selectDesc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateSelectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateSelectComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('list'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HelpdeskCreateSelectComponent.prototype, "list", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateSelectComponent.prototype, "refVal", void 0);
    HelpdeskCreateSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-select',
            template: __webpack_require__(/*! ./helpdesk-create-select.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-select.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]])
    ], HelpdeskCreateSelectComponent);
    return HelpdeskCreateSelectComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create itx-helpdesk-create-expense\">\n\n\n    <ngx-spinner [visible]=\"showSpinner1\"></ngx-spinner>\n      <div *ngIf=\"maritalStatus.value == 1\">\n        <div class=\"form-error\" *ngIf=\"errorMsgTop\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n      </div>\n      <div *ngIf=\"maritalStatus.value == 2 || maritalStatus.value == 3 || maritalStatus.value == 4\">\n        <div class=\"form-error\" *ngIf=\"errorMsgTopFull\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n      </div>\n      <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.status\"></itx-helpdesk-create-header>\n      <form [formGroup]=\"helpdeskForm\">\n        <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"maritalStatus\" [title]=\"translation.createRequest.status.form.maritalStatus.label\" [list]=\"maritalStatusList\" [selectDesc]=\"translation.createRequest.status.form.maritalStatus.description\"></itx-helpdesk-create-select>\n        <itx-helpdesk-create-date [parent]=\"helpdeskForm\" [control]=\"changeDate\" [title]=\"translation.createRequest.status.form.changeDate.label\" [dateDesc]=\"translation.createRequest.status.form.changeDate.description\"></itx-helpdesk-create-date>\n      </form>\n      <form class=\"partner-wrapper\" [formGroup]=\"helpdeskFormFull\">\n        <ng-container *ngIf=\"maritalStatus.value == 2 || maritalStatus.value == 3 || maritalStatus.value == 4\">\n          <div class=\"head-card\">\n              <h3><span class=\"itx-icon-icon_profil left\"></span>{{ translation.createRequest.status.form.partnerInfo.label }}</h3>\n          </div>\n          <itx-helpdesk-create-select [parent]=\"helpdeskFormFull\" [control]=\"gender\" [title]=\"translation.createRequest.status.form.gender.label\" [list]=\"genderList\" [selectDesc]=\"translation.createRequest.status.form.gender.description\" ></itx-helpdesk-create-select>\n          <div class=\"form-group\" ngClass=\"{{ firstname.invalid && (firstname.touched || firstname.dirty) ? 'error' : '' }}\">\n              <label for=\"\">{{ translation.createRequest.status.form.firstName.label }} <span class=\"description\">{{ translation.createRequest.status.form.firstName.description}} </span><span class=\"error\" *ngIf=\"firstname.invalid && (firstname.touched || firstname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n              <input type=\"text\" name=\"firstname\" [formControl]=\"firstname\" placeholder=\"{{ translation.createRequest.status.form.firstName.placeholder }}\" autocomplete=\"off\">\n          </div>\n          <div class=\"form-group\" ngClass=\"{{ lastname.invalid && (lastname.touched || lastname.dirty) ? 'error' : '' }}\">\n              <label for=\"\">{{ translation.createRequest.status.form.lastName.label}} <span class=\"description\">{{ translation.createRequest.status.form.lastName.description}}</span><span class=\"error\" *ngIf=\"lastname.invalid && (lastname.touched || lastname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n              <input type=\"text\" name=\"lastname\" [formControl]=\"lastname\" placeholder=\"{{ translation.createRequest.status.form.lastName.placeholder }}\" autocomplete=\"off\">\n          </div>\n          <itx-helpdesk-create-date [parent]=\"helpdeskFormFull\" [control]=\"birthdate\" [title]=\"translation.createRequest.status.form.birthdate.label\" [dateDesc]=\"translation.createRequest.status.form.birthdate.description\"></itx-helpdesk-create-date>\n          <itx-helpdesk-create-select [parent]=\"helpdeskFormFull\" [control]=\"nationality\" [title]=\"translation.createRequest.status.form.nationality.label\" [refVal]=\"'Code'\" [list]=\"countriesList\" [selectDesc]=\"translation.createRequest.status.form.nationality.description\"></itx-helpdesk-create-select>\n          <div class=\"form-group\" ngClass=\"{{ isExpatriate.invalid && (isExpatriate.touched || isExpatriate.dirty) ? 'error' : '' }}\">\n              <label for=\"\">{{ translation.createRequest.status.form.isExpatriate.label }} <span class=\"description\">{{ translation.createRequest.status.form.isExpatriate.description}}</span><span class=\"error\" *ngIf=\"isExpatriate.invalid && (isExpatriate.touched || isExpatriate.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n              <div class=\"toggle-wrapper\">\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"isExpatriate\" id=\"isExpatriate_01\" value=\"yes\" [formControl]=\"isExpatriate\">\n                      <label for=\"isExpatriate_01\">{{ translation.createRequest.status.form.yes }}</label>\n                  </div>\n                  <div class=\"button\">\n                      <input type=\"radio\" name=\"isExpatriate\" id=\"isExpatriate_02\" value=\"no\" [formControl]=\"isExpatriate\">\n                      <label for=\"isExpatriate_02\">{{ translation.createRequest.status.form.no }}</label>\n                  </div>\n                  <div class=\"clearer\"></div>\n              </div>\n          </div>\n          <div class=\"form-group\" ngClass=\"{{ passportNumber.invalid && (passportNumber.touched || passportNumber.dirty) ? 'error' : '' }}\">\n              <label for=\"\">{{ translation.createRequest.status.form.passportNumber.label }}<span class=\"description\">{{ translation.createRequest.status.form.passportNumber.description}}</span> <span class=\"error\" *ngIf=\"passportNumber.invalid && (passportNumber.touched || passportNumber.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n              <input type=\"text\" name=\"passportNumber\" [formControl]=\"passportNumber\" placeholder=\"{{ translation.createRequest.status.form.passportNumber.placeholder }}\" autocomplete=\"off\">\n          </div>\n          <itx-helpdesk-create-date [parent]=\"helpdeskFormFull\" [control]=\"expirationDate\" [title]=\"translation.createRequest.status.form.expirationDate.label\" [dateDesc]=\"translation.createRequest.status.form.expirationDate.description\"></itx-helpdesk-create-date>\n        </ng-container>\n        <ng-container *ngIf=\"maritalStatus.value == 2 || maritalStatus.value == 3 || maritalStatus.value == 4 || maritalStatus.value == 5 || maritalStatus.value == 7\">\n            <itx-helpdesk-create-upload (filesChange)=\"getFilesToUpload($event)\" [parent]=\"helpdeskFormFull\" [control]=\"file\" [title]=\"translation.createRequest.status.form.attachment.label\" [fileType]=\"translation.createRequest.status.form.attachment.description\"></itx-helpdesk-create-upload>\n        </ng-container>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create-expense .block_ui[_nghost-c9] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  border: 1px solid white;\n  border-radius: 12px; }\n\n.itx-helpdesk-create-expense .head-card h3 {\n  padding: 1.16666667vh 0 2.33333333vh 0; }\n\n.itx-helpdesk-create-expense .form-group .toggle-wrapper {\n  width: 100%;\n  border: 1px solid #DADADA;\n  border-radius: 8vh; }\n\n.itx-helpdesk-create-expense .form-group .toggle-wrapper .button {\n    border: 0;\n    width: 50%;\n    text-align: center;\n    display: block;\n    float: left;\n    padding: 0;\n    margin: 0; }\n\n.itx-helpdesk-create-expense .form-group .toggle-wrapper .button input {\n      display: none; }\n\n.itx-helpdesk-create-expense .form-group .toggle-wrapper .button input:checked + label {\n        color: white;\n        background-color: #093152; }\n\n.itx-helpdesk-create-expense .form-group .toggle-wrapper .button label {\n      width: 100%;\n      height: 8vh;\n      line-height: 8vh;\n      text-align: center;\n      color: #DADADA;\n      margin: 0;\n      background-color: white;\n      border-radius: 8vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtc3RhdHVzL2hlbHBkZXNrLWNyZWF0ZS1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFFUSxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQWJMO0VBZ0JZLHVDQUE4RCxFQUNqRTs7QUFqQlQ7RUFxQlksWUFBVztFQUNYLDBCRE9ZO0VDTlosbUJBeEJNLEVBbURUOztBQWxEVDtJQXlCZ0IsVUFBUztJQUNULFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLFlBQVc7SUFDWCxXQUFVO0lBQ1YsVUFBUyxFQWtCWjs7QUFqRGI7TUFpQ29CLGNBQWEsRUFLaEI7O0FBdENqQjtRQW1Dd0IsYUQvQlA7UUNnQ08sMEJEbEJJLEVDbUJQOztBQXJDckI7TUF3Q29CLFlBQVc7TUFDWCxZQTFDRjtNQTJDRSxpQkEzQ0Y7TUE0Q0UsbUJBQWtCO01BQ2xCLGVEZkk7TUNnQkosVUFBUztNQUNULHdCRDFDSDtNQzJDRyxtQkFoREYsRUFpREQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS1zdGF0dXMvaGVscGRlc2stY3JlYXRlLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG4kdG9nZ2xlSGVpZ2h0OiA4dmg7XG4uaXR4LWhlbHBkZXNrLWNyZWF0ZS1leHBlbnNlIHtcbiAgICAuYmxvY2tfdWlbX25naG9zdC1jOV0ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAuaGVhZC1jYXJkIHtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgcGFkZGluZzogJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyA2IDAgJGl0eC1kZWZhdWx0LXBhZGRpbmcgLyAzIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAudG9nZ2xlLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgJjpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaXR4LXdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC1sYWJlbC1kYXJrYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0b2dnbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkdG9nZ2xlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaXR4LXRleHQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGl0eC13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvZ2dsZUhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HelpdeskCreateStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateStatusComponent", function() { return HelpdeskCreateStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_references_marital_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/references/marital-status.service */ "./src/app/modules/core/services/references/marital-status.service.ts");
/* harmony import */ var _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/references/genders.service */ "./src/app/modules/core/services/references/genders.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/shared/directives/file-size-validator.directive */ "./src/app/modules/shared/directives/file-size-validator.directive.ts");
/* harmony import */ var _app_modules_core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/core/services/references/countries.service */ "./src/app/modules/core/services/references/countries.service.ts");
/* harmony import */ var _shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/file-validator.directive */ "./src/app/modules/shared/directives/file-validator.directive.ts");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_button_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/button.service */ "./src/app/modules/shared/services/button.service.ts");


















var HelpdeskCreateStatusComponent = /** @class */ (function () {
    function HelpdeskCreateStatusComponent(fb, maritalStatusService, gendersService, userService, createRequestService, popupService, router, langService, route, countriesService, spinner, button) {
        var _this = this;
        this.fb = fb;
        this.maritalStatusService = maritalStatusService;
        this.gendersService = gendersService;
        this.userService = userService;
        this.createRequestService = createRequestService;
        this.popupService = popupService;
        this.router = router;
        this.langService = langService;
        this.route = route;
        this.countriesService = countriesService;
        this.spinner = spinner;
        this.button = button;
        this.disableBtn = false;
        this.errorMsgTop = false;
        this.errorMsgTopFull = false;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.maritalStatus = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.changeDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.birthdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.nationality = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isExpatriate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('yes', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passportNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []);
        this.expirationDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []);
        this.file = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_shared_directives_file_validator_directive__WEBPACK_IMPORTED_MODULE_14__["FileValidator"].validate, _app_modules_shared_directives_file_size_validator_directive__WEBPACK_IMPORTED_MODULE_12__["FileSizeValidator"].validate]);
        this.helpdeskForm = this.fb.group({
            Date: this.changeDate,
            File: this.file
        });
        this.helpdeskFormFull = this.fb.group({
            Nationality: this.nationality,
            IsExpatriate: this.isExpatriate,
            Gender: this.gender,
            FirstName: this.firstname,
            LastName: this.lastname,
            Birthdate: this.birthdate,
            PassportNo: this.passportNumber,
            ExpirationDate: this.expirationDate,
            File: this.file
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.helpdeskFormFull.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.countriesService.getCountries().subscribe(function (res) {
            _this.countriesList = res;
        });
        this.maritalStatusChangesSub = this.maritalStatus.valueChanges.subscribe(function (val) {
            _this.onMaritalStatusChange(val);
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            _this.helpdeskForm.updateValueAndValidity();
            _this.helpdeskFormFull.updateValueAndValidity();
            var currentFormValid = _this.helpdeskForm.valid;
            if ((_this.maritalStatus.value == '2' || _this.maritalStatus.value == '3' || _this.maritalStatus.value == '4') && _this.helpdeskFormFull.invalid) {
                currentFormValid = false;
            }
            _this.setUserCategoryValidators();
            console.log('currentFormValid:', currentFormValid);
            if (currentFormValid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                if (_this.maritalStatus.value == '2' || _this.maritalStatus.value == '3' || _this.maritalStatus.value == '4') {
                    _this.errorMsgTopFull = true;
                    _this.markAllDirty(_this.helpdeskFormFull);
                }
                window.scrollTo(0, 0);
            }
        });
        this.combineParamsAndMaritalStatus = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["combineLatest"])(this.gendersService.genders$, this.maritalStatusService.maritalStatus$, this.userService.userInfos$, this.route.params);
        this.combineParamsAndMaritalStatus.subscribe(function (_a) {
            var genderList = _a[0], maritalStatusList = _a[1], userInfos = _a[2], params = _a[3];
            _this.maritalStatusList = maritalStatusList;
            _this.genderList = genderList;
            _this.userInfos = userInfos;
            if (_this.userInfos.MaritalStatus) {
                _this.maritalStatus.setValue(_this.userInfos.MaritalStatus.ID);
            }
            _this.patchForm();
            _this.hideSpinner();
            _this.button.changeMessage(false);
        });
    }
    HelpdeskCreateStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSpinner(); }, 25);
        this.maritalStatusService.getMaritalStatus();
        this.gendersService.getGenders();
        this.userService.getUserInfos().subscribe();
        this.onMaritalStatusChange(false);
        this.button.changeMessage(true);
    };
    HelpdeskCreateStatusComponent.prototype.showSpinner = function () {
        this.showSpinner1 = true;
    };
    HelpdeskCreateStatusComponent.prototype.hideSpinner = function () {
        this.showSpinner1 = false;
    };
    HelpdeskCreateStatusComponent.prototype.ngAfterContentChecked = function () {
        this.makeFieldMandatory(this.passportNumber, this.expirationDate);
        this.makeFieldMandatory(this.expirationDate, this.passportNumber);
    };
    HelpdeskCreateStatusComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
        this.maritalStatusChangesSub.unsubscribe();
    };
    HelpdeskCreateStatusComponent.prototype.setUserCategoryValidators = function () {
        var PassportNo = this.helpdeskFormFull.get('PassportNo').value;
        var ExpirationDate = this.helpdeskFormFull.get('ExpirationDate').value;
        var dataxx = JSON.parse(JSON.stringify(this.helpdeskFormFull.get('File').value));
        if ((PassportNo.length > 0 || ExpirationDate.length > 0) && (dataxx == "false" || dataxx == null)) {
            this.helpdeskFormFull.patchValue({ File: null });
        }
        if (this.isEmpty(PassportNo) && this.isEmpty(ExpirationDate)) {
            this.helpdeskFormFull.patchValue({ File: "false" });
        }
    };
    HelpdeskCreateStatusComponent.prototype.isEmpty = function (value) {
        return (value == null || value.length === 0);
    };
    HelpdeskCreateStatusComponent.prototype.onMaritalStatusChange = function (val) {
        // this.file.reset();
        if (!val) {
            val = this.maritalStatus.value;
        }
        if (val == '2' || val == '3' || val == '4') {
            this.validSelect(this.nationality);
            this.validSelect(this.gender);
            this.firstname.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.lastname.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.birthdate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        this.changeDate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        //this.file.setValidators([]);
        //this.file.setErrors(null);
        this.helpdeskForm.updateValueAndValidity();
        this.helpdeskFormFull.updateValueAndValidity();
    };
    HelpdeskCreateStatusComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateStatusComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
        if (this.helpdeskFormFull.valid) {
            this.errorMsgTopFull = false;
        }
    };
    HelpdeskCreateStatusComponent.prototype.makeFieldMandatory = function (control1, control2) {
        control1.valueChanges.pipe(Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                control2.clearValidators();
            }
            control2.updateValueAndValidity();
        });
        control2.valueChanges.pipe(Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data && data.length > 0) {
                control1.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                control1.clearValidators();
            }
            control1.updateValueAndValidity();
        });
    };
    HelpdeskCreateStatusComponent.prototype.sendRequest = function () {
        var _this = this;
        var maritalStatus = this.maritalStatusList[this.maritalStatus.value - 1];
        var partnerInfo = null;
        this.createRequestService.requestInProgress(true);
        maritalStatus.Date = this.changeDate.value;
        if (this.maritalStatus.value == '2' || this.maritalStatus.value == '3' || this.maritalStatus.value == '4') {
            var code_1 = this.nationality.value.Code ? this.nationality.value.Code : this.nationality.value;
            var currentNationality = this.countriesList.find(function (country) { return country.Code == code_1; });
            partnerInfo = {
                Nationality: currentNationality,
                IsExpatriate: this.isExpatriate.value === 'yes' ? true : false,
                Gender: this.genderList.filter(function (el) { return el.ID == _this.gender.value; })[0],
                FirstName: this.firstname.value,
                LastName: this.lastname.value,
                Birthdate: this.birthdate.value,
                Passport: {
                    PassportNo: this.passportNumber.value,
                    ExpirationDate: this.expirationDate.value
                }
            };
        }
        this.userService.changeMaritalStatus(maritalStatus, partnerInfo, this.attachments).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('ERROR', err);
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.status.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreateStatusComponent.prototype.patchForm = function () {
        if (this.userInfos.Partner !== null) {
            this.helpdeskFormFull.patchValue({
                EmailAddress: this.userInfos.Partner.EmailAdress,
                PhoneNumber: this.userInfos.Partner.PhoneNumber,
                Nationality: this.userInfos.Partner.Nationality ? this.userInfos.Partner.Nationality : null,
                IsExpatriate: this.userInfos.Partner.IsExpatriate ? 'yes' : 'no',
                Gender: this.userInfos.Partner.Gender.ID,
                FirstName: this.userInfos.Partner.FirstName,
                LastName: this.userInfos.Partner.LastName,
                Birthdate: moment__WEBPACK_IMPORTED_MODULE_4__(this.userInfos.Partner.Birthdate).format('YYYY-MM-DD'),
                PassportNo: this.userInfos.Partner.Passport.PassportNo,
                ExpirationDate: this.userInfos.Partner.Passport.ExpirationDate ? moment__WEBPACK_IMPORTED_MODULE_4__(this.userInfos.Partner.Passport.ExpirationDate).format('YYYY-MM-DD') : null
            });
        }
    };
    HelpdeskCreateStatusComponent.prototype.validSelect = function (c) {
        var invalid = c.value === 0 || c.value === 'none' ? true : false;
        return invalid ? { 'invalid': { value: c.value } } : null;
    };
    HelpdeskCreateStatusComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-status',
            template: __webpack_require__(/*! ./helpdesk-create-status.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-status.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_references_marital_status_service__WEBPACK_IMPORTED_MODULE_5__["MaritalStatusService"],
            _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_6__["GendersService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_8__["CreateRequestService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_9__["PopupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_modules_core_services_references_countries_service__WEBPACK_IMPORTED_MODULE_13__["CountriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerService"],
            _shared_services_button_service__WEBPACK_IMPORTED_MODULE_17__["ButtonService"]])
    ], HelpdeskCreateStatusComponent);
    return HelpdeskCreateStatusComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-helpdesk-create\">\n    <form [formGroup]=\"helpdeskForm\">\n        <div class=\"form-error\" *ngIf=\"helpdeskForm.invalid && (helpdeskForm.touched || helpdeskForm.dirty)\">\n          <span>{{ translation.createRequest.general.errorGlobal }}</span>\n        </div>\n        <itx-helpdesk-create-header [type]=\"translation.createRequest.menu.superior\"></itx-helpdesk-create-header>\n        <itx-helpdesk-create-select [parent]=\"helpdeskForm\" [control]=\"gender\" [title]=\"translation.createRequest.superior.form.gender.label\" [list]=\"genderList\"></itx-helpdesk-create-select>\n        <div class=\"form-group\" ngClass=\"{{ firstname.invalid && (firstname.touched || firstname.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.superior.form.firstName.label }}  <span class=\"error\" *ngIf=\"firstname.invalid && (firstname.touched || firstname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" [formControl]=\"firstname\" autocomplete=\"off\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ lastname.invalid && (lastname.touched || lastname.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.superior.form.lastName.label }}  <span class=\"error\" *ngIf=\"lastname.invalid && (lastname.touched || lastname.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" [formControl]=\"lastname\" autocomplete=\"off\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ email.invalid && (email.touched || email.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.superior.form.email.label }}\n              <span class=\"error\" *ngIf=\"email.value === '' && (email.touched || email.dirty)\">{{ translation.createRequest.general.errorRequired }}</span>\n              <span class=\"error\" *ngIf=\"email.value !== '' && email.invalid && (email.touched || email.dirty)\">{{ translation.createRequest.general.errorFormat }}</span>\n            </label>\n            <input type=\"text\" [formControl]=\"email\" autocomplete=\"off\">\n        </div>\n        <div class=\"form-group\" ngClass=\"{{ phone.invalid && (phone.touched || phone.dirty) ? 'error' : '' }}\">\n            <label for=\"\">{{ translation.createRequest.superior.form.phone.label }}  <span class=\"error\" *ngIf=\"phone.invalid && (phone.touched || phone.dirty)\">{{ translation.createRequest.general.errorRequired }}</span></label>\n            <input type=\"text\" [formControl]=\"phone\" autocomplete=\"off\">\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtc3VwZXJpb3IvaGVscGRlc2stY3JlYXRlLXN1cGVyaW9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGQTtFQUNJLG9CQUF5QjtFQUN6QiwwRkFBbUYsRUFDdEY7O0FDNUZEO0VBQ0ksb0JBQXVDO0VBQ3ZDLHFCQUF3QztFQUN4Qyw0QkFBdUM7RUFDdkMsMkJBQXNDLEVBQ3pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtc3VwZXJpb3IvaGVscGRlc2stY3JlYXRlLXN1cGVyaW9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4vL1xuJGl0eC1wcmltYXJ5OiAjNjhiMWVhO1xuJGl0eC1wcmltYXJ5LWxpZ2h0OiAjNkVCQkY3O1xuJGl0eC1wcmltYXJ5LWRhcms6ICM0QzgxQUE7XG4kaXR4LXByaW1hcnktZGFya2VyOiAjMkY1MTZBO1xuXG4kaXR4LXdoaXRlOiB3aGl0ZTtcblxuJGl0eC1saWdodDogI0IxRDNFRDtcblxuJGl0eC10ZXh0OiAjNEY1RjZBO1xuJGl0eC1kaXNhYmxlZDogI0JEQkVCRTtcblxuJGl0eC1hbGVydDogI0UyMUE0RjtcblxuLy9cbiRpdHgtZ3JhZGllbnQtYTogIzNDQURFMztcbiRpdHgtZ3JhZGllbnQtYjogIzczRDZGMTtcblxuJGl0eC1sYWJlbC1ibHVlOiAjNTVDMEVBO1xuJGl0eC1sYWJlbC1kYXJrYmx1ZTogIzA5MzE1MjtcbiRpdHgtbGFiZWwtcmVkOiAjREYyNjU2O1xuJGl0eC1sYWJlbC1saWdodHJlZDogI2U3NWM4MDtcbiRpdHgtbGFiZWwtZ3JleTogI2IzYmZjODtcblxuJGl0eC1pY29ucy1ibHVlOiAjMDk0MDZFO1xuLy8gJGl0eC1pY29ucy1ncmV5OiAjQ0VENkRDO1xuJGl0eC1pY29ucy1ncmV5OiAjYjNiZmM4O1xuXG4kaXR4LXRleHQtZGFya2VyOiAjMkQyRDJEO1xuJGl0eC10ZXh0LWRhcms6ICM5Njk2OTY7XG4kaXR4LXRleHQtbGlnaHQ6ICNEQURBREE7XG4kaXR4LXRleHQtbGlnaHRlcjogI0ZGRkZGRjtcblxuXG4vLyBGT05UU1xuXG4kaXR4LW9wZW5TYW5zTGlnaHQ6ICdPcGVuU2Fucy1MaWdodCc7XG4kaXR4LW9wZW5TYW5zUmVndWxhcjogJ09wZW5TYW5zLVJlZ3VsYXInO1xuJGl0eC1vcGVuU2Fuc1NlbWlCb2xkOiAnT3BlblNhbnMtU2VtaWJvbGQnO1xuJGl0eC1vcGVuU2Fuc0JvbGQ6ICdPcGVuU2Fucy1Cb2xkJztcbiRpdHgtaWNvbnM6ICdpdHgtaWNvbnMnO1xuXG4kaXR4LXBvcHBpbnNMaWdodDogJ3BvcHBpbnNsaWdodCc7XG4kaXR4LXBvcHBpbnNNZWRpdW06ICdwb3BwaW5zbWVkaXVtJztcbiRpdHgtcG9wcGluc1JlZ3VsYXI6ICdwb3BwaW5zcmVndWxhcic7XG4kaXR4LXBvcHBpbnNTZW1pQm9sZDogJ3BvcHBpbnNzZW1pYm9sZCc7XG5cbi8vIEZPTlQgU0laRVxuXG4kaXR4LWZvbnRCaWdnZXI6IDQ4cHg7XG4kaXR4LWZvbnRCaWc6IDMycHg7XG4kaXR4LWZvbnRNZWRpdW06IDI0cHg7XG4kaXR4LWZvbnRTdGFuZGFyZDogMTZweDtcbiRpdHgtZm9udFNtYWxsOiAxNHB4O1xuJGl0eC1mb250RXh0cmFTbWFsbDogMTJweDtcblxuXG4vLyBUUkFOU0lUSU9OXG4kaXR4LXRyYW5zaXRpb24tdGltZTogNDAwbXM7XG5cbi8vIENTUyBQUk9QRVJUWVxuXG4vLyBMYXlvdXRcbiRpdHgtZGVmYXVsdC1ndXR0ZXI6IDIwcHg7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXgyOiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogMjtcbiRpdHgtZGVmYXVsdC1ndXR0ZXIteDQ6ICRpdHgtZGVmYXVsdC1ndXR0ZXIgKiA0O1xuXG4vLyBIZWlnaHRcbiRpdHgtc21hbGwtaGVpZ2h0OiAzMnB4O1xuJGl0eC1tZWRpdW0taGVpZ2h0OiA0MHB4O1xuJGl0eC1iaWctaGVpZ2h0OiA0NXB4O1xuXG4vLyBCb3JkZXIgcmFkaXVzXG4kaXR4LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWVkaWEgUXVlcmllc1xuJHNjcmVlbi1tZDogMTIwMHB4O1xuJHNjcmVlbi14czogNzY3cHg7XG5cbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQ4MHB4KVwiO1xuJHRhYmxldC1sYW5kc2NhcGU6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpXCI7XG4kdGFibGV0LXBvcnRyYWl0OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpXCI7XG4kbW9iaWxlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpXCI7XG5cbi8vIHBhZGRpbmcgbWFyZ2luXG4kaXR4LWRlZmF1bHQtcGFkZGluZzogN3ZoO1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctbWQ6IDQwcHg7XG4kaXR4LWRlZmF1bHQtcGFkZGluZy1zbTogMzBweDtcblxuLy8gR3JhZGllbnQgYmFja2dyb3VuZFxuLml0eC1iYWNrZ3JvdW5kLWJsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig4LDU5LDEwMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg4LDU5LDEwMiwwLjkpIDAlLCByZ2JhKDksNjcsMTE0LDAuOSkgMTAwJSk7XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL192YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLml0eC1oZWxwZGVzay1jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAkaXR4LWRlZmF1bHQtcGFkZGluZyAqIDEuNTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAyO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbiAgICBwYWRkaW5nLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HelpdeskCreateSuperiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateSuperiorComponent", function() { return HelpdeskCreateSuperiorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/utils */ "./src/app/modules/shared/utils.ts");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/references/genders.service */ "./src/app/modules/core/services/references/genders.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _core_services_superior_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/superior.service */ "./src/app/modules/core/services/superior.service.ts");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");










var HelpdeskCreateSuperiorComponent = /** @class */ (function () {
    function HelpdeskCreateSuperiorComponent(fb, createRequestService, superiorService, popupService, router, genderService, langService) {
        var _this = this;
        this.fb = fb;
        this.createRequestService = createRequestService;
        this.superiorService = superiorService;
        this.popupService = popupService;
        this.router = router;
        this.genderService = genderService;
        this.langService = langService;
        this.errorMsgTop = false;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [_shared_utils__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].bind(this.email)]);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.helpdeskForm = this.fb.group({
            gender: this.gender,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
        });
        this.helpdeskForm.statusChanges.subscribe(function (status) {
            _this.showMsg();
        });
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (_this.helpdeskForm.valid) {
                var checkRequestMsg = localStorage.getItem('checkRequestMsg');
                if (!res.popup || checkRequestMsg === '1') {
                    _this.sendRequest();
                }
            }
            else {
                _this.errorMsgTop = true;
                _this.popupService.setPopupState(false);
                _this.markAllDirty(_this.helpdeskForm);
                window.scrollTo(0, 0);
            }
        });
        this.genderService.genders$.subscribe(function (genderList) {
            _this.genderList = genderList;
        });
    }
    HelpdeskCreateSuperiorComponent.prototype.ngOnInit = function () {
        this.genderService.getGenders();
    };
    HelpdeskCreateSuperiorComponent.prototype.ngOnDestroy = function () {
        this.sendRequestSubscription.unsubscribe();
    };
    HelpdeskCreateSuperiorComponent.prototype.getFilesToUpload = function (files) {
        this.attachments = files;
    };
    HelpdeskCreateSuperiorComponent.prototype.showMsg = function () {
        if (this.helpdeskForm.valid) {
            this.errorMsgTop = false;
        }
    };
    HelpdeskCreateSuperiorComponent.prototype.getGenderById = function (id) {
        for (var i = this.genderList.length - 1; i >= 0; i--) {
            if (this.genderList[i].ID == id) {
                return this.genderList[i];
            }
        }
    };
    HelpdeskCreateSuperiorComponent.prototype.markAllDirty = function (control) {
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
    HelpdeskCreateSuperiorComponent.prototype.sendRequest = function () {
        var _this = this;
        var body = {
            Gender: this.getGenderById(this.gender.value),
            FirstName: this.firstname.value,
            LastName: this.lastname.value,
            EmailAddress: this.email.value,
            PhoneNumber: this.phone.value
        };
        this.createRequestService.requestInProgress(true);
        this.superiorService.superiorRequest(body).subscribe(function (res) {
            _this.createRequestService.requestInProgress(false);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('ERROR', err);
            _this.createRequestService.requestInProgress(false);
            var popupOptions = {
                title: _this.translation.createRequest.superior.popInErr.title,
                text: err.Description,
                bgState: false,
                arrow: false,
                timer: 4000,
                position: {
                    bottom: '14vh'
                }
            };
            _this.popupService.setPopupState(true, popupOptions);
        });
    };
    HelpdeskCreateSuperiorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-superior',
            template: __webpack_require__(/*! ./helpdesk-create-superior.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create-superior.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_5__["CreateRequestService"],
            _core_services_superior_service__WEBPACK_IMPORTED_MODULE_8__["SuperiorService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_references_genders_service__WEBPACK_IMPORTED_MODULE_6__["GendersService"],
            _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_9__["LangService"]])
    ], HelpdeskCreateSuperiorComponent);
    return HelpdeskCreateSuperiorComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create-upload\" ngClass=\"{{ customClass }}\" [formGroup]=\"parent\">\n  <div class=\"form-group\" ngClass=\"{{ (control.invalid && (control.touched || control.dirty)) ? 'error' : '' }}\">\n    <label>{{ title || translation.createRequest.general.attachment.label }}<!--\n          --><span class=\"format\">{{ fileType || translation.createRequest.general.attachment.description }}</span> <!--\n          --><span class=\"error\" *ngIf=\"(control.invalid && (control.touched || control.dirty)) && control.errors['required']\">{{ translation.createRequest.general.errorRequired }}</span> <!--\n          --><span class=\"error\" *ngIf=\"control.invalid && control.errors['oversizeFile'] && !control.errors['oversizeGlobalFiles']\">{{ translation.createRequest.general.errorFileSize }}</span> <!--\n          --><span class=\"error\" *ngIf=\"control.invalid && control.errors['oversizeGlobalFiles']\">{{ translation.createRequest.general.errorGlobalFileSize }}</span>\n    </label>\n    <div class=\"content-wrapper\">\n      <ul>\n        <ng-container *ngFor=\"let file of filesToUpload\">\n          <li [ngClass]=\"[file.typeImage ? 'img' : 'file']\" [class.error]=\"control.invalid && file.oversize === true\" [@fileState]>\n            <div class=\"overlay\"></div>\n            <ng-container [ngSwitch]=\"file.typeImage\">\n              <itx-img-preview *ngSwitchCase=\"true\" [img]=\"file\" [customClass]=\"customClass\"></itx-img-preview>\n              <p *ngSwitchCase=\"false\">{{ file.type ? file.type : file.name }}</p>\n            </ng-container>\n            <span (click)=\"removeFile(file)\" class=\"delete itx-icon-icon_close\"></span>\n          </li>\n        </ng-container>\n        <li [@fileState] [hidden]=\"!multiple && filesToUpload.length > 0\" class=\"placeholder\"><div class=\"btn-input\"><input #fileInput type=\"file\" id=\"fileinput\" [multiple]=\"multiple ? 'multiple' : ''\"/><span class=\"itx-icon-photo\"></span></div></li>\n      </ul>\n      <div class=\"clearer\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create-upload.uploadPic .form-group label {\n  font-size: 1em; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul {\n  height: 18vh;\n  margin: 3.5vh 0;\n  position: relative; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li {\n    border-radius: 50%;\n    margin: auto;\n    display: block;\n    width: 18vh;\n    float: none;\n    background-color: white;\n    box-shadow: inset 0 2px 20px rgba(47, 81, 106, 0.1);\n    padding: 0;\n    overflow: inherit;\n    position: absolute;\n    left: 0;\n    right: 0; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li[hidden] {\n      display: none; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li .itx-img-preview-wrapper {\n      border-radius: 50%;\n      overflow: hidden; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li .btn-input {\n      position: relative;\n      box-shadow: none;\n      width: 100%;\n      height: 100%; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li .btn-input span[class^=itx-icon] {\n        top: 37%; }\n\n.itx-helpdesk-create-upload.uploadPic .form-group .content-wrapper ul li .delete {\n      font-size: 2em;\n      top: 3px;\n      right: 3px; }\n\n.itx-helpdesk-create-upload .form-group {\n  position: relative; }\n\n.itx-helpdesk-create-upload .form-group label .format {\n    font-size: 0.8em;\n    color: #a7a7a7;\n    font-family: \"poppinslight\";\n    margin-left: 1.75vh; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li {\n      position: relative;\n      height: 18vh;\n      text-align: center;\n      width: 33%;\n      padding: 1vh;\n      overflow: hidden;\n      float: left; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li .overlay {\n        position: absolute;\n        display: none;\n        z-index: 10;\n        top: 1vh;\n        left: 1vh;\n        width: calc(100% - 2vh);\n        height: calc(100% - 2vh);\n        background-color: rgba(223, 38, 86, 0.3); }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li .btn-input {\n        padding: 0;\n        display: block;\n        width: 85%;\n        height: 90%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        box-shadow: 0 0 7px 0 rgba(218, 218, 218, 0.6); }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li .btn-input img {\n          width: 100%; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li .btn-input span[class^=itx-icon] {\n          color: #b3bfc8;\n          font-size: 2em;\n          position: absolute;\n          left: 0;\n          right: 0;\n          margin: auto;\n          top: 30%;\n          pointer-events: none; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li .delete {\n        position: absolute;\n        border-radius: 50%;\n        right: 1px;\n        top: 1px;\n        color: #DF2656;\n        font-size: 1.2em;\n        background-color: white; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li.placeholder input[type=\"file\"] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        opacity: 0;\n        height: 100%;\n        width: 100%; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li.file p {\n        font-size: 0.7em;\n        line-height: 16vh;\n        word-wrap: break-word;\n        overflow: hidden;\n        border: 1px solid rgba(150, 150, 150, 0.25);\n        text-align: center;\n        max-width: 100%;\n        height: 100%;\n        color: #303030;\n        font-family: \"poppinslight\"; }\n\n.itx-helpdesk-create-upload .form-group .content-wrapper ul li.error .overlay {\n        display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUtdXBsb2FkL2hlbHBkZXNrLWNyZWF0ZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFLUSxlQUFjLEVBQ2Y7O0FBTlA7RUFTVSxhQUFZO0VBQ1osZ0JBQWtDO0VBQ2xDLG1CQUFrQixFQXlDbkI7O0FBcERUO0lBY1ksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixlQUFjO0lBQ2QsWUFBVztJQUNYLFlBQVc7SUFDWCx3QkRmSztJQ2dCTCxvREFBc0Y7SUFDdEYsV0FBVTtJQUNWLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsUUFBTztJQUNQLFNBQVEsRUEwQlQ7O0FBbkRYO01BNEJjLGNBQWEsRUFDZDs7QUE3QmI7TUFnQ2MsbUJBQWtCO01BQ2xCLGlCQUFnQixFQUNqQjs7QUFsQ2I7TUFxQ2MsbUJBQWtCO01BQ2xCLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsYUFBWSxFQUtiOztBQTdDYjtRQTJDZ0IsU0FBUSxFQUNUOztBQTVDZjtNQStDYyxlQUFjO01BQ2QsU0FBUTtNQUNSLFdBQVUsRUFDWDs7QUFsRGI7RUEwREksbUJBQWtCLEVBcUhuQjs7QUEvS0g7SUE4RFEsaUJBQWdCO0lBQ2hCLGVBQW1EO0lBQ25ELDRCRHZCeUI7SUN3QnpCLG9CQUFxQyxFQUN0Qzs7QUFsRVA7SUF1RVEsaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVixVQUFTLEVBbUdWOztBQTVLUDtNQTRFVSxtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixZQUFXLEVBeUZaOztBQTNLVDtRQXFGWSxtQkFBa0I7UUFDbEIsY0FBYTtRQUNiLFlBQVc7UUFDWCxTQUFRO1FBQ1IsVUFBUztRQUNULHdCQUF1QjtRQUN2Qix5QkFBd0I7UUFDeEIseUNEekVXLEVDMEVaOztBQTdGWDtRQWdHWSxXQUFVO1FBQ1YsZUFBYztRQUNkLFdBQVU7UUFDVixZQUFXO1FBQ1gsbUJBQWtCO1FBQ2xCLE9BQU07UUFDTixVQUFTO1FBQ1QsUUFBTztRQUNQLFNBQVE7UUFDUixhQUFZO1FBQ1osK0NBQTBELEVBZ0IzRDs7QUExSFg7VUE2R2MsWUFBVyxFQUNaOztBQTlHYjtVQWlIYyxlRHhGVTtVQ3lGVixlQUFjO1VBQ2QsbUJBQWtCO1VBQ2xCLFFBQU87VUFDUCxTQUFRO1VBQ1IsYUFBWTtVQUNaLFNBQVE7VUFDUixxQkFBb0IsRUFDckI7O0FBekhiO1FBNkhZLG1CQUFrQjtRQUNsQixtQkFBa0I7UUFDbEIsV0FBVTtRQUNWLFNBQVE7UUFDUixlRDlHVztRQytHWCxpQkFBZ0I7UUFDaEIsd0JBQXVCLEVBQ3hCOztBQXBJWDtRQXdJYyxtQkFBa0I7UUFDbEIsT0FBTTtRQUNOLFFBQU87UUFDUCxlQUFjO1FBQ2QsV0FBVTtRQUNWLGFBQVk7UUFDWixZQUFXLEVBQ1o7O0FBL0liO1FBd0pjLGlCQUFnQjtRQUNoQixrQkFBaUI7UUFDakIsc0JBQXFCO1FBQ3JCLGlCQUFnQjtRQUNoQiw0Q0FBc0Q7UUFDdEQsbUJBQWtCO1FBQ2xCLGdCQUFlO1FBQ2YsYUFBWTtRQUNaLGVBQWtEO1FBQ2xELDRCRHhIbUIsRUN5SHBCOztBQWxLYjtRQXVLYyxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS11cGxvYWQvaGVscGRlc2stY3JlYXRlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi5pdHgtaGVscGRlc2stY3JlYXRlLXVwbG9hZCB7XG5cbiAgJi51cGxvYWRQaWMge1xuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB9XG4gICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgdWwge1xuICAgICAgICAgIGhlaWdodDogMTh2aDtcbiAgICAgICAgICBtYXJnaW46ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gMiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDE4dmg7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpdHgtd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAyMHB4IHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGl0eC1wcmltYXJ5LWRhcmtlciwgJGFtb3VudDogMC45KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcblxuICAgICAgICAgICAgJltoaWRkZW5dIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0eC1pbWctcHJldmlldy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWlucHV0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgIHNwYW5bY2xhc3NePWl0eC1pY29uXSB7XG4gICAgICAgICAgICAgICAgdG9wOiAzNyU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGxhYmVsIHtcbiAgICAgIC5mb3JtYXQge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGl0eC10ZXh0LWxpZ2h0LCAkYW1vdW50OiAyMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkaXR4LXBvcHBpbnNMaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRpdHgtZGVmYXVsdC1wYWRkaW5nIC8gNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxOHZoO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgIHBhZGRpbmc6IDF2aDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgdG9wOiAxdmg7XG4gICAgICAgICAgICBsZWZ0OiAxdmg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnZoKTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnZoKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGl0eC1sYWJlbC1yZWQsIDAuMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0bi1pbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgN3B4IDAgdHJhbnNwYXJlbnRpemUoJGl0eC10ZXh0LWxpZ2h0LCAwLjQpO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbltjbGFzc149aXR4LWljb25dIHtcbiAgICAgICAgICAgICAgY29sb3I6ICRpdHgtaWNvbnMtZ3JleTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICRpdHgtbGFiZWwtcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5pbWcge1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5maWxlIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZ2aDtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudGl6ZSgkaXR4LXRleHQtZGFyaywgMC43NSk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkaXR4LXRleHQtZGFyaywgJGFtb3VudDogNDApO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGl0eC1wb3BwaW5zTGlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5lcnJvciB7XG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HelpdeskCreateUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateUploadComponent", function() { return HelpdeskCreateUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");





var HelpdeskCreateUploadComponent = /** @class */ (function () {
    function HelpdeskCreateUploadComponent(langService) {
        this.langService = langService;
        this.filesToUpload = [];
        this.filesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChanges$ = null;
        this.translation = this.langService.lang;
        this.multiple = true;
    }
    HelpdeskCreateUploadComponent.prototype.onFileInputChange = function (event) {
        for (var i = 0; i < event.target.files.length; i++) {
            var file = event.target.files[i];
            file.id = Math.round(Math.random() * 1000000);
            file.typeImage = false;
            if (file.type.startsWith('image/') === true) {
                file.typeImage = true;
            }
            file.oversize = false;
            if (!this.multiple) {
                this.filesToUpload = [];
            }
            this.filesToUpload.push(file);
        }
        this.updateFileList();
    };
    HelpdeskCreateUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueChanges$ = this.control.valueChanges.subscribe(function () {
            _this.updateView();
            if (_this.control.errors !== null && _this.control.errors['oversizeFileId']) {
                for (var i = 0; i < _this.filesToUpload.length; i++) {
                    if (_this.control.errors['oversizeFileId'].indexOf(_this.filesToUpload[i].id) !== -1) {
                        _this.filesToUpload[i].oversize = true;
                    }
                }
            }
        });
    };
    HelpdeskCreateUploadComponent.prototype.ngOnDestroy = function () {
        this.valueChanges$.unsubscribe();
    };
    HelpdeskCreateUploadComponent.prototype.updateFileList = function () {
        this.fileInput.nativeElement.value = null;
        this.control.patchValue(this.filesToUpload);
        this.filesChange.emit(this.filesToUpload);
    };
    HelpdeskCreateUploadComponent.prototype.updateView = function () {
        if (this.control.value === null && this.filesToUpload.length > 0) {
            this.filesToUpload = [];
            this.control.updateValueAndValidity();
        }
    };
    HelpdeskCreateUploadComponent.prototype.removeFile = function (file) {
        for (var i = 0; i < this.filesToUpload.length; i++) {
            if (this.filesToUpload[i].id === file.id) {
                this.filesToUpload.splice(i, 1);
            }
        }
        this.updateFileList();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], HelpdeskCreateUploadComponent.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])
    ], HelpdeskCreateUploadComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateUploadComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HelpdeskCreateUploadComponent.prototype, "fileType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HelpdeskCreateUploadComponent.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HelpdeskCreateUploadComponent.prototype, "customClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HelpdeskCreateUploadComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HelpdeskCreateUploadComponent.prototype, "filesChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HelpdeskCreateUploadComponent.prototype, "onFileInputChange", null);
    HelpdeskCreateUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create-upload',
            template: __webpack_require__(/*! ./helpdesk-create-upload.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fileState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 100ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./helpdesk-create-upload.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]])
    ], HelpdeskCreateUploadComponent);
    return HelpdeskCreateUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create\">\n    <div class=\"block-helpdesk-create\">\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvY29tcG9uZW50cy9oZWxwZGVzay1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMscUJBQXdDO0VBQ3hDLDRCQUF1QztFQUN2QywyQkFBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi5pdHgtaGVscGRlc2stY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAxLjU7XG4gICAgcGFkZGluZy1ib3R0b206ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG4gICAgcGFkZGluZy1sZWZ0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/components/helpdesk-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HelpdeskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateComponent", function() { return HelpdeskCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpdeskCreateComponent = /** @class */ (function () {
    function HelpdeskCreateComponent() {
    }
    HelpdeskCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create',
            template: __webpack_require__(/*! ./helpdesk-create.component.html */ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create.component.scss */ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.scss")]
        })
    ], HelpdeskCreateComponent);
    return HelpdeskCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/helpdesk-create-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/helpdesk-create-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: HelpdeskCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateRoutingModule", function() { return HelpdeskCreateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_helpdesk_create_helpdesk_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/helpdesk-create/helpdesk-create.page */ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.ts");
/* harmony import */ var _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helpdesk-create-adresses/helpdesk-create-adresses.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.ts");
/* harmony import */ var _components_helpdesk_create_expense_helpdesk_create_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/helpdesk-create-expense/helpdesk-create-expense.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.ts");
/* harmony import */ var _components_helpdesk_create_contact_helpdesk_create_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/helpdesk-create-contact/helpdesk-create-contact.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.ts");
/* harmony import */ var _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/helpdesk-create-children/helpdesk-create-children.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.ts");
/* harmony import */ var _components_helpdesk_create_other_helpdesk_create_other_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-create-other/helpdesk-create-other.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.ts");
/* harmony import */ var _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-create-bank/helpdesk-create-bank.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.ts");
/* harmony import */ var _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/helpdesk-create-passport/helpdesk-create-passport.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.ts");
/* harmony import */ var _components_helpdesk_create_status_helpdesk_create_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/helpdesk-create-status/helpdesk-create-status.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.ts");
/* harmony import */ var _components_helpdesk_create_superior_helpdesk_create_superior_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/helpdesk-create-superior/helpdesk-create-superior.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.ts");
/* harmony import */ var _shared_components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/bottom-bar/bottom-bar.component */ "./src/app/modules/shared/components/bottom-bar/bottom-bar.component.ts");














var routes = [
    {
        path: '',
        component: _pages_helpdesk_create_helpdesk_create_page__WEBPACK_IMPORTED_MODULE_3__["HelpdeskCreatePage"],
        children: [
            {
                path: 'adresses',
                component: _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskCreateAdressesComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'adresses/:typeAdresse',
                component: _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskCreateAdressesComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'expense',
                component: _components_helpdesk_create_expense_helpdesk_create_expense_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskCreateExpenseComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'contact',
                component: _components_helpdesk_create_contact_helpdesk_create_contact_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskCreateContactComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'children',
                component: _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskCreateChildrenComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'children/:id',
                component: _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskCreateChildrenComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'status',
                component: _components_helpdesk_create_status_helpdesk_create_status_component__WEBPACK_IMPORTED_MODULE_11__["HelpdeskCreateStatusComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'bank',
                component: _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateBankComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'bank/:id',
                component: _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateBankComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'passport',
                component: _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskCreatePassportComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'passport/:id',
                component: _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskCreatePassportComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'other',
                component: _components_helpdesk_create_other_helpdesk_create_other_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskCreateOtherComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            },
            {
                path: 'superior',
                component: _components_helpdesk_create_superior_helpdesk_create_superior_component__WEBPACK_IMPORTED_MODULE_12__["HelpdeskCreateSuperiorComponent"],
                data: {
                    title: 'createRequest.general.title'
                }
            }
        ]
    }
];
var HelpdeskCreateRoutingModule = /** @class */ (function () {
    function HelpdeskCreateRoutingModule() {
    }
    HelpdeskCreateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_shared_components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_13__["BottomBarComponent"]]
        })
    ], HelpdeskCreateRoutingModule);
    return HelpdeskCreateRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/helpdesk-create.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/helpdesk-create.module.ts ***!
  \*******************************************************************/
/*! exports provided: HelpdeskCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreateModule", function() { return HelpdeskCreateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _helpdesk_create_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpdesk-create-routing.module */ "./src/app/modules/helpdesk-create/helpdesk-create-routing.module.ts");
/* harmony import */ var _pages_helpdesk_create_helpdesk_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/helpdesk-create/helpdesk-create.page */ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.ts");
/* harmony import */ var _components_helpdesk_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-create.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create.component.ts");
/* harmony import */ var _components_helpdesk_create_header_helpdesk_create_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/helpdesk-create-header/helpdesk-create-header.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-header/helpdesk-create-header.component.ts");
/* harmony import */ var _components_helpdesk_create_upload_helpdesk_create_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/helpdesk-create-upload/helpdesk-create-upload.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-upload/helpdesk-create-upload.component.ts");
/* harmony import */ var _components_helpdesk_create_select_helpdesk_create_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/helpdesk-create-select/helpdesk-create-select.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-select/helpdesk-create-select.component.ts");
/* harmony import */ var _components_helpdesk_create_date_helpdesk_create_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/helpdesk-create-date/helpdesk-create-date.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-date/helpdesk-create-date.component.ts");
/* harmony import */ var _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/helpdesk-create-adresses/helpdesk-create-adresses.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-adresses/helpdesk-create-adresses.component.ts");
/* harmony import */ var _components_helpdesk_create_expense_helpdesk_create_expense_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/helpdesk-create-expense/helpdesk-create-expense.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-expense/helpdesk-create-expense.component.ts");
/* harmony import */ var _components_helpdesk_create_contact_helpdesk_create_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/helpdesk-create-contact/helpdesk-create-contact.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-contact/helpdesk-create-contact.component.ts");
/* harmony import */ var _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/helpdesk-create-children/helpdesk-create-children.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-children/helpdesk-create-children.component.ts");
/* harmony import */ var _components_helpdesk_create_other_helpdesk_create_other_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/helpdesk-create-other/helpdesk-create-other.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-other/helpdesk-create-other.component.ts");
/* harmony import */ var _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/helpdesk-create-bank/helpdesk-create-bank.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-bank/helpdesk-create-bank.component.ts");
/* harmony import */ var _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/helpdesk-create-passport/helpdesk-create-passport.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-passport/helpdesk-create-passport.component.ts");
/* harmony import */ var _components_helpdesk_create_status_helpdesk_create_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/helpdesk-create-status/helpdesk-create-status.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-status/helpdesk-create-status.component.ts");
/* harmony import */ var _components_helpdesk_create_superior_helpdesk_create_superior_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/helpdesk-create-superior/helpdesk-create-superior.component */ "./src/app/modules/helpdesk-create/components/helpdesk-create-superior/helpdesk-create-superior.component.ts");
/* harmony import */ var _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @hardpool/ngx-spinner */ "./node_modules/@hardpool/ngx-spinner/fesm5/hardpool-ngx-spinner.js");























//import { NgxSpinnerModule } from "ngx-spinner";

var HelpdeskCreateModule = /** @class */ (function () {
    function HelpdeskCreateModule() {
    }
    HelpdeskCreateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_helpdesk_create_helpdesk_create_page__WEBPACK_IMPORTED_MODULE_8__["HelpdeskCreatePage"],
                _components_helpdesk_create_header_helpdesk_create_header_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskCreateHeaderComponent"],
                _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_14__["HelpdeskCreateAdressesComponent"],
                _components_helpdesk_create_other_helpdesk_create_other_component__WEBPACK_IMPORTED_MODULE_18__["HelpdeskCreateOtherComponent"],
                _components_helpdesk_create_upload_helpdesk_create_upload_component__WEBPACK_IMPORTED_MODULE_11__["HelpdeskCreateUploadComponent"],
                _components_helpdesk_create_select_helpdesk_create_select_component__WEBPACK_IMPORTED_MODULE_12__["HelpdeskCreateSelectComponent"],
                _components_helpdesk_create_date_helpdesk_create_date_component__WEBPACK_IMPORTED_MODULE_13__["HelpdeskCreateDateComponent"],
                _components_helpdesk_create_contact_helpdesk_create_contact_component__WEBPACK_IMPORTED_MODULE_16__["HelpdeskCreateContactComponent"],
                _components_helpdesk_create_expense_helpdesk_create_expense_component__WEBPACK_IMPORTED_MODULE_15__["HelpdeskCreateExpenseComponent"],
                _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_17__["HelpdeskCreateChildrenComponent"],
                _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_19__["HelpdeskCreateBankComponent"],
                _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_20__["HelpdeskCreatePassportComponent"],
                _components_helpdesk_create_status_helpdesk_create_status_component__WEBPACK_IMPORTED_MODULE_21__["HelpdeskCreateStatusComponent"],
                _components_helpdesk_create_superior_helpdesk_create_superior_component__WEBPACK_IMPORTED_MODULE_22__["HelpdeskCreateSuperiorComponent"],
                _components_helpdesk_create_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _helpdesk_create_routing_module__WEBPACK_IMPORTED_MODULE_7__["HelpdeskCreateRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                //NgxSpinnerModule,
                _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"].config({
                    placement: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["SPINNER_PLACEMENT"].block_ui,
                    animation: _hardpool_ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["SPINNER_ANIMATIONS"].rotating_dots,
                    size: "6rem",
                    color: "#4C81AA",
                    bgColor: "rgba(255,255,255,0.8)"
                })
            ],
            exports: [
                _pages_helpdesk_create_helpdesk_create_page__WEBPACK_IMPORTED_MODULE_8__["HelpdeskCreatePage"],
                _components_helpdesk_create_header_helpdesk_create_header_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskCreateHeaderComponent"],
                _components_helpdesk_create_adresses_helpdesk_create_adresses_component__WEBPACK_IMPORTED_MODULE_14__["HelpdeskCreateAdressesComponent"],
                _components_helpdesk_create_other_helpdesk_create_other_component__WEBPACK_IMPORTED_MODULE_18__["HelpdeskCreateOtherComponent"],
                _components_helpdesk_create_upload_helpdesk_create_upload_component__WEBPACK_IMPORTED_MODULE_11__["HelpdeskCreateUploadComponent"],
                _components_helpdesk_create_select_helpdesk_create_select_component__WEBPACK_IMPORTED_MODULE_12__["HelpdeskCreateSelectComponent"],
                _components_helpdesk_create_date_helpdesk_create_date_component__WEBPACK_IMPORTED_MODULE_13__["HelpdeskCreateDateComponent"],
                _components_helpdesk_create_contact_helpdesk_create_contact_component__WEBPACK_IMPORTED_MODULE_16__["HelpdeskCreateContactComponent"],
                _components_helpdesk_create_expense_helpdesk_create_expense_component__WEBPACK_IMPORTED_MODULE_15__["HelpdeskCreateExpenseComponent"],
                _components_helpdesk_create_children_helpdesk_create_children_component__WEBPACK_IMPORTED_MODULE_17__["HelpdeskCreateChildrenComponent"],
                _components_helpdesk_create_bank_helpdesk_create_bank_component__WEBPACK_IMPORTED_MODULE_19__["HelpdeskCreateBankComponent"],
                _components_helpdesk_create_passport_helpdesk_create_passport_component__WEBPACK_IMPORTED_MODULE_20__["HelpdeskCreatePassportComponent"],
                _components_helpdesk_create_status_helpdesk_create_status_component__WEBPACK_IMPORTED_MODULE_21__["HelpdeskCreateStatusComponent"],
                _components_helpdesk_create_superior_helpdesk_create_superior_component__WEBPACK_IMPORTED_MODULE_22__["HelpdeskCreateSuperiorComponent"],
                _components_helpdesk_create_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateComponent"]
            ], schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], HelpdeskCreateModule);
    return HelpdeskCreateModule;
}());



/***/ }),

/***/ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itx-helpdesk-create\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itx-background-blue {\n  background: #083b66;\n  background: linear-gradient(315deg, rgba(8, 59, 102, 0.9) 0%, rgba(9, 67, 114, 0.9) 100%); }\n\n.itx-helpdesk-create {\n  padding-top: 10.5vh;\n  padding-bottom: 14vh;\n  padding-right: 2.33333333vh;\n  padding-left: 2.33333333vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVtYW50cmEvRG9jdW1lbnRzL3ByYW1lc2gvY29ubnRlY3RlZC1hcHAvc3JjL2FwcC90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9jb2RlbWFudHJhL0RvY3VtZW50cy9wcmFtZXNoL2Nvbm50ZWN0ZWQtYXBwL3NyYy9hcHAvbW9kdWxlcy9oZWxwZGVzay1jcmVhdGUvcGFnZXMvaGVscGRlc2stY3JlYXRlL2hlbHBkZXNrLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZBO0VBQ0ksb0JBQXlCO0VBQ3pCLDBGQUFtRixFQUN0Rjs7QUM1RkQ7RUFDSSxvQkFBdUM7RUFDdkMscUJBQXdDO0VBQ3hDLDRCQUF1QztFQUN2QywyQkFBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlbHBkZXNrLWNyZWF0ZS9wYWdlcy9oZWxwZGVzay1jcmVhdGUvaGVscGRlc2stY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuLy9cbiRpdHgtcHJpbWFyeTogIzY4YjFlYTtcbiRpdHgtcHJpbWFyeS1saWdodDogIzZFQkJGNztcbiRpdHgtcHJpbWFyeS1kYXJrOiAjNEM4MUFBO1xuJGl0eC1wcmltYXJ5LWRhcmtlcjogIzJGNTE2QTtcblxuJGl0eC13aGl0ZTogd2hpdGU7XG5cbiRpdHgtbGlnaHQ6ICNCMUQzRUQ7XG5cbiRpdHgtdGV4dDogIzRGNUY2QTtcbiRpdHgtZGlzYWJsZWQ6ICNCREJFQkU7XG5cbiRpdHgtYWxlcnQ6ICNFMjFBNEY7XG5cbi8vXG4kaXR4LWdyYWRpZW50LWE6ICMzQ0FERTM7XG4kaXR4LWdyYWRpZW50LWI6ICM3M0Q2RjE7XG5cbiRpdHgtbGFiZWwtYmx1ZTogIzU1QzBFQTtcbiRpdHgtbGFiZWwtZGFya2JsdWU6ICMwOTMxNTI7XG4kaXR4LWxhYmVsLXJlZDogI0RGMjY1NjtcbiRpdHgtbGFiZWwtbGlnaHRyZWQ6ICNlNzVjODA7XG4kaXR4LWxhYmVsLWdyZXk6ICNiM2JmYzg7XG5cbiRpdHgtaWNvbnMtYmx1ZTogIzA5NDA2RTtcbi8vICRpdHgtaWNvbnMtZ3JleTogI0NFRDZEQztcbiRpdHgtaWNvbnMtZ3JleTogI2IzYmZjODtcblxuJGl0eC10ZXh0LWRhcmtlcjogIzJEMkQyRDtcbiRpdHgtdGV4dC1kYXJrOiAjOTY5Njk2O1xuJGl0eC10ZXh0LWxpZ2h0OiAjREFEQURBO1xuJGl0eC10ZXh0LWxpZ2h0ZXI6ICNGRkZGRkY7XG5cblxuLy8gRk9OVFNcblxuJGl0eC1vcGVuU2Fuc0xpZ2h0OiAnT3BlblNhbnMtTGlnaHQnO1xuJGl0eC1vcGVuU2Fuc1JlZ3VsYXI6ICdPcGVuU2Fucy1SZWd1bGFyJztcbiRpdHgtb3BlblNhbnNTZW1pQm9sZDogJ09wZW5TYW5zLVNlbWlib2xkJztcbiRpdHgtb3BlblNhbnNCb2xkOiAnT3BlblNhbnMtQm9sZCc7XG4kaXR4LWljb25zOiAnaXR4LWljb25zJztcblxuJGl0eC1wb3BwaW5zTGlnaHQ6ICdwb3BwaW5zbGlnaHQnO1xuJGl0eC1wb3BwaW5zTWVkaXVtOiAncG9wcGluc21lZGl1bSc7XG4kaXR4LXBvcHBpbnNSZWd1bGFyOiAncG9wcGluc3JlZ3VsYXInO1xuJGl0eC1wb3BwaW5zU2VtaUJvbGQ6ICdwb3BwaW5zc2VtaWJvbGQnO1xuXG4vLyBGT05UIFNJWkVcblxuJGl0eC1mb250QmlnZ2VyOiA0OHB4O1xuJGl0eC1mb250QmlnOiAzMnB4O1xuJGl0eC1mb250TWVkaXVtOiAyNHB4O1xuJGl0eC1mb250U3RhbmRhcmQ6IDE2cHg7XG4kaXR4LWZvbnRTbWFsbDogMTRweDtcbiRpdHgtZm9udEV4dHJhU21hbGw6IDEycHg7XG5cblxuLy8gVFJBTlNJVElPTlxuJGl0eC10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xuXG4vLyBDU1MgUFJPUEVSVFlcblxuLy8gTGF5b3V0XG4kaXR4LWRlZmF1bHQtZ3V0dGVyOiAyMHB4O1xuJGl0eC1kZWZhdWx0LWd1dHRlci14MjogJGl0eC1kZWZhdWx0LWd1dHRlciAqIDI7XG4kaXR4LWRlZmF1bHQtZ3V0dGVyLXg0OiAkaXR4LWRlZmF1bHQtZ3V0dGVyICogNDtcblxuLy8gSGVpZ2h0XG4kaXR4LXNtYWxsLWhlaWdodDogMzJweDtcbiRpdHgtbWVkaXVtLWhlaWdodDogNDBweDtcbiRpdHgtYmlnLWhlaWdodDogNDVweDtcblxuLy8gQm9yZGVyIHJhZGl1c1xuJGl0eC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRzY3JlZW4tbWQ6IDEyMDBweDtcbiRzY3JlZW4teHM6IDc2N3B4O1xuXG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0ODBweClcIjtcbiR0YWJsZXQtbGFuZHNjYXBlOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KVwiO1xuJHRhYmxldC1wb3J0cmFpdDogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KVwiO1xuJG1vYmlsZTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KVwiO1xuXG4vLyBwYWRkaW5nIG1hcmdpblxuJGl0eC1kZWZhdWx0LXBhZGRpbmc6IDd2aDtcbiRpdHgtZGVmYXVsdC1wYWRkaW5nLW1kOiA0MHB4O1xuJGl0eC1kZWZhdWx0LXBhZGRpbmctc206IDMwcHg7XG5cbi8vIEdyYWRpZW50IGJhY2tncm91bmRcbi5pdHgtYmFja2dyb3VuZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1OSwxMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoOCw1OSwxMDIsMC45KSAwJSwgcmdiYSg5LDY3LDExNCwwLjkpIDEwMCUpO1xufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi5pdHgtaGVscGRlc2stY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogJGl0eC1kZWZhdWx0LXBhZGRpbmcgKiAxLjU7XG4gICAgcGFkZGluZy1ib3R0b206ICRpdHgtZGVmYXVsdC1wYWRkaW5nICogMjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG4gICAgcGFkZGluZy1sZWZ0OiAkaXR4LWRlZmF1bHQtcGFkZGluZyAvIDM7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.ts ***!
  \***************************************************************************************/
/*! exports provided: HelpdeskCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskCreatePage", function() { return HelpdeskCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_create_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/services/create-request.service */ "./src/app/modules/core/services/create-request.service.ts");
/* harmony import */ var _core_services_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/popup.service */ "./src/app/modules/core/services/popup.service.ts");
/* harmony import */ var _services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/references/lang.service */ "./src/app/modules/core/services/references/lang.service.ts");





var HelpdeskCreatePage = /** @class */ (function () {
    function HelpdeskCreatePage(createRequestService, popupService, langService) {
        var _this = this;
        this.createRequestService = createRequestService;
        this.popupService = popupService;
        this.langService = langService;
        this.translation = this.langService.lang;
        this.showPopup = true;
        this.createRequestService.createRequest(true);
        this.sendRequestSubscription = this.createRequestService.sendRequest$.subscribe(function (res) {
            if (res.sendRequest && res.popup) {
                _this.popupService.setPopupState(true, {
                    closeOnTap: false,
                    title: _this.translation.createRequest.other.sendRequestPopup.title,
                    text: false,
                    btn: {
                        btnState: true,
                        btnLabel: _this.translation.createRequest.other.sendRequestPopup.yes,
                    },
                    btn2: {
                        btnState: true,
                        btnLabel: _this.translation.createRequest.other.sendRequestPopup.no,
                    },
                    position: {
                        bottom: '14vh'
                    },
                    bgState: true,
                    checkbox: {
                        checkboxState: true,
                        checkboxLabel: _this.translation.createRequest.other.sendRequestPopup.hideMessage
                    }
                });
            }
            else {
                _this.popupService.setPopupState(false);
            }
        });
        this.btnClickSubscription = this.popupService.btnClick$.subscribe(function (res) {
            if (res === 'btn2') {
                _this.popupService.setPopupState(false);
            }
            else {
                _this.createRequestService.sendRequest(true, false);
            }
        });
        this.popupService.checkboxState$.subscribe(function (res) {
            if (res) {
                localStorage.setItem('checkRequestMsg', '1');
            }
            else {
                localStorage.setItem('checkRequestMsg', '0');
            }
        });
    }
    HelpdeskCreatePage.prototype.ngOnDestroy = function () {
        this.createRequestService.createRequest(false);
        this.popupService.setPopupState(false);
        this.sendRequestSubscription.unsubscribe();
        this.btnClickSubscription.unsubscribe();
    };
    HelpdeskCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'itx-helpdesk-create',
            template: __webpack_require__(/*! ./helpdesk-create.page.html */ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.html"),
            styles: [__webpack_require__(/*! ./helpdesk-create.page.scss */ "./src/app/modules/helpdesk-create/pages/helpdesk-create/helpdesk-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_create_request_service__WEBPACK_IMPORTED_MODULE_2__["CreateRequestService"],
            _core_services_popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"],
            _services_references_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]])
    ], HelpdeskCreatePage);
    return HelpdeskCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=default~expense-edit-expense-edit-module~helpdesk-create-helpdesk-create-module~helpdesk-edit-helpde~5ee8e489.js.map