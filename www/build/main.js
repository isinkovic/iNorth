webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Article1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Article1Page = /** @class */ (function () {
    function Article1Page(articleService) {
        this.articleService = articleService;
    }
    Article1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.articles = data;
        });
    };
    Article1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article1',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\article1\article1.html"*/'<!--\n  Generated template for the Article1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="status0"></div>\n    <img src="assets/imgs/picture1.jpg" class="pic1" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\article1\article1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__["a" /* ArticleService */]])
    ], Article1Page);
    return Article1Page;
}());

//# sourceMappingURL=article1.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Article2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Article2Page = /** @class */ (function () {
    function Article2Page(articleService) {
        this.articleService = articleService;
    }
    Article2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.articles = data;
        });
    };
    Article2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article2',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\article2\article2.html"*/'<!--\n  Generated template for the Article2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="status0"></div>\n    dvaaa\n</ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\article2\article2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__["a" /* ArticleService */]])
    ], Article2Page);
    return Article2Page;
}());

//# sourceMappingURL=article2.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Article4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Article4Page = /** @class */ (function () {
    function Article4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Article4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Article4Page');
    };
    Article4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article4',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\article4\article4.html"*/'<!--\n  Generated template for the Article4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="status0"></div>\n    44444\n</ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\article4\article4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Article4Page);
    return Article4Page;
}());

//# sourceMappingURL=article4.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Article5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Article5Page = /** @class */ (function () {
    function Article5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Article5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Article5Page');
    };
    Article5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article5',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\article5\article5.html"*/'<!--\n  Generated template for the Article5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="status0"></div>\n    5555\n</ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\article5\article5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Article5Page);
    return Article5Page;
}());

//# sourceMappingURL=article5.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Article3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Article3Page = /** @class */ (function () {
    function Article3Page(articleService) {
        this.articleService = articleService;
    }
    Article3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.articles = data;
        });
    };
    Article3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article3',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\article3\article3.html"*/'<!--\n  Generated template for the Article3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="status0"></div>\n    triii\n</ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\article3\article3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__["a" /* ArticleService */]])
    ], Article3Page);
    return Article3Page;
}());

//# sourceMappingURL=article3.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/advice1/advice1.module": [
		295,
		2
	],
	"../pages/advice2/advice2.module": [
		296,
		1
	],
	"../pages/advice3/advice3.module": [
		297,
		0
	],
	"../pages/article1/article1.module": [
		298,
		7
	],
	"../pages/article2/article2.module": [
		299,
		6
	],
	"../pages/article3/article3.module": [
		302,
		5
	],
	"../pages/article4/article4.module": [
		300,
		4
	],
	"../pages/article5/article5.module": [
		301,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lifestyle_lifestyle__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dogadaji_dogadaji__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vijesti_vijesti__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ponude_ponude__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__impressum_impressum__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__vijesti_vijesti__["a" /* VijestiPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__lifestyle_lifestyle__["a" /* LifestylePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__dogadaji_dogadaji__["a" /* DogadajiPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__ponude_ponude__["a" /* PonudePage */];
        this.impressumPage = __WEBPACK_IMPORTED_MODULE_5__impressum_impressum__["a" /* ImpressumPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top">\n\n  <ion-tab [root]="tab1Root" tabTitle="Vijesti" tabIcon="ios-paper" md="md-paper" id="tab-t0-0"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Lifestyle" tabIcon="ios-cafe" md="ios-cafe-outline" id="tab-t0-1"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Događaji" tabIcon="ios-calendar" md="md-calendar" id="tab-t0-2"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Ponude" tabIcon="ios-pricetag" md="md-pricetag" id="tab-t0-3"></ion-tab>\n\n</ion-tabs>\n\n<ion-header class="header header-md">\n\n  <ion-navbar class="toolbar toolbar-md">\n\n    <ion-title class="toolbar-title toolbar-title-md title title-md">iNorth</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only [navPush]="impressumPage">\n\n        <ion-icon name="ios-information-circle" md="ios-information-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_advice_service_advice_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifestylePage = /** @class */ (function () {
    function LifestylePage(adviceService) {
        this.adviceService = adviceService;
    }
    LifestylePage.prototype.ngOnInit = function () {
        var _this = this;
        this.adviceService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.advices = data;
        });
    };
    LifestylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\lifestyle\lifestyle.html"*/'<ion-header>\n  <ion-navbar>\n   \n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <div class="status1"></div>\n  <ion-list>\n    <ion-item *ngFor="let advice of advices">\n      <img src="{{advice.urlToImage1}}" [navPush]="advice1Page"/>\n      <img src="{{advice.urlToImage}}" class="article-pic2"/>\n      <div class="naslov-savjeta" [navPush]="advice2Page">{{advice.title2}}</div>\n      <div class="naslov-savjeta" [navPush]="advice3Page">{{advice.title3}}</div>\n      <div class="naslov-savjeta" [navPush]="advice4Page">{{advice.title4}}</div>\n      <div class="naslov-savjeta" [navPush]="advice5Page">{{advice.title5}}</div>\n      <div class="datum-savjeta">{{advice.publishedAt}}</div>\n      <div class="izvor-savjeta">IZVOR: <a href="http://studentski.hr/"><span style="color:#219653;"><b>{{advice.source}}</b></span></a></div>\n      <div class="naslov-savjeta1" [navPush]="advice1Page">{{advice.title1}}</div>\n    </ion-item>\n  </ion-list>\n </ion-content>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\lifestyle\lifestyle.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_advice_service_advice_service__["a" /* AdviceService */]])
    ], LifestylePage);
    return LifestylePage;
}());

//# sourceMappingURL=lifestyle.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ArticleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdviceService = /** @class */ (function () {
    function AdviceService(http) {
        this.http = http;
        this.configUrl = 'assets/advices.json';
    }
    AdviceService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    AdviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdviceService);
    return AdviceService;
}());

//# sourceMappingURL=advice-service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogadajiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DogadajiPage = /** @class */ (function () {
    function DogadajiPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DogadajiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\dogadaji\dogadaji.html"*/'<ion-header>\n  <ion-navbar>\n  \n  </ion-navbar>\n   \n</ion-header>\n\n<ion-content padding class="ion-content">\n  <div class="status2"></div>\n  <p class="odlomak">događaji</p>\n    \n </ion-content>'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\dogadaji\dogadaji.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DogadajiPage);
    return DogadajiPage;
}());

//# sourceMappingURL=dogadaji.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VijestiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_article1_article1__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_article2_article2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_article3_article3__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_article4_article4__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_article5_article5__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VijestiPage = /** @class */ (function () {
    function VijestiPage(articleService) {
        this.articleService = articleService;
        this.article1Page = __WEBPACK_IMPORTED_MODULE_2__pages_article1_article1__["a" /* Article1Page */];
        this.article2Page = __WEBPACK_IMPORTED_MODULE_3__pages_article2_article2__["a" /* Article2Page */];
        this.article3Page = __WEBPACK_IMPORTED_MODULE_4__pages_article3_article3__["a" /* Article3Page */];
        this.article4Page = __WEBPACK_IMPORTED_MODULE_5__pages_article4_article4__["a" /* Article4Page */];
        this.article5Page = __WEBPACK_IMPORTED_MODULE_6__pages_article5_article5__["a" /* Article5Page */];
    }
    VijestiPage.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.articles = data;
        });
    };
    VijestiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\vijesti\vijesti.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    \n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="status0"></div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let article of articles">\n\n      <img src="{{article.urlToImage1}}" [navPush]="article1Page"/>\n\n      <img src="{{article.urlToImage}}" class="article-pic2"/>\n\n      <div class="naslov-clanka" [navPush]="article2Page">{{article.title2}}</div>\n\n      <div class="naslov-clanka" [navPush]="article3Page">{{article.title3}}</div>\n\n      <div class="naslov-clanka" [navPush]="article4Page">{{article.title4}}</div>\n\n      <div class="naslov-clanka" [navPush]="article5Page">{{article.title5}}</div>\n\n      <div class="datum-clanka">{{article.publishedAt}}</div>\n\n      <div class="izvor-clanka">IZVOR: <a href="https://www.unin.hr/"><span style="color:#C22929;"><b>{{article.source}}</b></span></a></div>\n\n      <div class="naslov-clanka1" [navPush]="article1Page">{{article.title1}}</div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\vijesti\vijesti.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_article_service_article_service__["a" /* ArticleService */]])
    ], VijestiPage);
    return VijestiPage;
}());

//# sourceMappingURL=vijesti.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PonudePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_offer_service_offer_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PonudePage = /** @class */ (function () {
    function PonudePage(offerService) {
        this.offerService = offerService;
    }
    PonudePage.prototype.ngOnInit = function () {
        var _this = this;
        this.offerService.getConfig().subscribe(function (data) {
            console.log(data);
            _this.offers = data;
        });
    };
    PonudePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ponude',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\ponude\ponude.html"*/'<ion-header>\n  <ion-navbar>\n   \n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding class="ion-content">\n  <div class="status3"></div>\n  <ion-list>\n    <ion-item *ngFor="let offer of offers">\n      <div class="naslov-savjeta">{{offer.title}}</div><br>\n      <div class="datum-savjeta">{{offer.publishedAt}}</div>\n      <div class="izvor-savjeta">IZVOR: <a href="http://studentski.hr/"><span style="color:#6F369C;"><b>{{offer.source}}</b></span></a></div>\n    </ion-item>\n  </ion-list> \n </ion-content>'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\ponude\ponude.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_offer_service_offer_service__["a" /* OfferService */]])
    ], PonudePage);
    return PonudePage;
}());

//# sourceMappingURL=ponude.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfferService = /** @class */ (function () {
    function OfferService(http) {
        this.http = http;
        this.configUrl = 'assets/offers.json';
    }
    OfferService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    OfferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OfferService);
    return OfferService;
}());

//# sourceMappingURL=offer-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpressumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImpressumPage = /** @class */ (function () {
    function ImpressumPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ImpressumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-impressum',template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\pages\impressum\impressum.html"*/'<!--\n\n  Generated template for the ImpressumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="zaglavlje">\n\n\n\n  <ion-navbar class="navigacija">\n\n    <ion-title class="naslov">Impressum</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-img width="50" height="50" src="assets/imgs/logo.jpg" class="slika"></ion-img><br>\n\n   <p class="impresum">\n\n   <b>Naziv:</b> iNorth <br>\n\n   <b>Verzija:</b> 1.0 <br>\n\n   <b>Dizajn:</b> Iva Sinković <br>\n\n   <b>Kod:</b> Iva Sinković <br>\n\n</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\pages\impressum\impressum.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ImpressumPage);
    return ImpressumPage;
}());

//# sourceMappingURL=impressum.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lifestyle_lifestyle__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dogadaji_dogadaji__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vijesti_vijesti__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ponude_ponude__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_article1_article1__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_article2_article2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_article3_article3__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_article4_article4__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_article5_article5__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_impressum_impressum__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_article_service_article_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_advice_service_advice_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_offer_service_offer_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dogadaji_dogadaji__["a" /* DogadajiPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vijesti_vijesti__["a" /* VijestiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ponude_ponude__["a" /* PonudePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_impressum_impressum__["a" /* ImpressumPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_article1_article1__["a" /* Article1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_article2_article2__["a" /* Article2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_article3_article3__["a" /* Article3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_article4_article4__["a" /* Article4Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_article5_article5__["a" /* Article5Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/advice1/advice1.module#Advice1PageModule', name: 'Advice1Page', segment: 'advice1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advice2/advice2.module#Advice2PageModule', name: 'Advice2Page', segment: 'advice2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advice3/advice3.module#Advice3PageModule', name: 'Advice3Page', segment: 'advice3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article1/article1.module#Article1PageModule', name: 'Article1Page', segment: 'article1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article2/article2.module#Article2PageModule', name: 'Article2Page', segment: 'article2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article4/article4.module#Article4PageModule', name: 'Article4Page', segment: 'article4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article5/article5.module#Article5PageModule', name: 'Article5Page', segment: 'article5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article3/article3.module#Article3PageModule', name: 'Article3Page', segment: 'article3', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dogadaji_dogadaji__["a" /* DogadajiPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vijesti_vijesti__["a" /* VijestiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ponude_ponude__["a" /* PonudePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_impressum_impressum__["a" /* ImpressumPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_article1_article1__["a" /* Article1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_article2_article2__["a" /* Article2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_article3_article3__["a" /* Article3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_article4_article4__["a" /* Article4Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_article5_article5__["a" /* Article5Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_article_service_article_service__["a" /* ArticleService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_advice_service_advice_service__["a" /* AdviceService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_offer_service_offer_service__["a" /* OfferService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Iva\iNorth-tabs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Iva\iNorth-tabs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ArticleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.configUrl = 'assets/articles.json';
    }
    ArticleService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticleService);
    return ArticleService;
}());

//# sourceMappingURL=article-service.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map