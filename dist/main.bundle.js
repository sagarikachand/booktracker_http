webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form #addBookForm=\"ngForm\" (ngSubmit)=\"saveBook(addBookForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add New Book</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" name=\"title\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" name=\"author\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" name=\"publicationYear\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBookComponent = (function () {
    function AddBookComponent(dataService) {
        this.dataService = dataService;
    }
    AddBookComponent.prototype.ngOnInit = function () { };
    AddBookComponent.prototype.saveBook = function (formValues) {
        var newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        this.dataService.addBook(newBook)
            .subscribe(function (data) { console.log(data); console.log("this was add book"); }, function (err) { return console.log(err); });
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/add-book/add-book.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_service__["a" /* DataService */]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-reader/add-reader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form #addReaderForm=\"ngForm\" (ngSubmit)=\"saveReader(addReaderForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add Reader</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" name=\"name\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" name=\"weeklyReadingGoal\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" name=\"totalMinutesRead\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-reader/add-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddReaderComponent = (function () {
    function AddReaderComponent(dataService) {
        this.dataService = dataService;
    }
    AddReaderComponent.prototype.ngOnInit = function () { };
    AddReaderComponent.prototype.saveReader = function (formValues) {
        var newReader = formValues;
        newReader.readerID = 0;
        this.dataService.addReader(newReader)
            .subscribe(function (data) {
            console.log(data);
            console.log(" this reader was added ");
        });
    };
    AddReaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-reader',
            template: __webpack_require__("../../../../../src/app/add-reader/add-reader.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_core_data_service__["a" /* DataService */]])
    ], AddReaderComponent);
    return AddReaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_add_reader_add_reader_component__ = __webpack_require__("../../../../../src/app/add-reader/add-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_edit_reader_edit_reader_component__ = __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_core_bookResolver_service__ = __webpack_require__("../../../../../src/app/core/bookResolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__["a" /* DashboardComponent */], resolve: { resolvedBooks: __WEBPACK_IMPORTED_MODULE_7_app_core_bookResolver_service__["a" /* BookResolverService */] } },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_2_app_add_book_add_book_component__["a" /* AddBookComponent */] },
    { path: 'addreader', component: __WEBPACK_IMPORTED_MODULE_3_app_add_reader_add_reader_component__["a" /* AddReaderComponent */] },
    { path: 'editreader/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_edit_reader_edit_reader_component__["a" /* EditReaderComponent */] },
    { path: 'editbook/:id', component: __WEBPACK_IMPORTED_MODULE_5_app_edit_book_edit_book_component__["a" /* EditBookComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Book Tracker</a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/addbook']\">Add Book<span class=\"sr-only\">(current)</span></a></li>\r\n                <li><a [routerLink]=\"['/addreader']\">Add Reader</a></li>\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_reader_add_reader_component__ = __webpack_require__("../../../../../src/app/add-reader/add-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_reader_edit_reader_component__ = __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__add_book_add_book_component__["a" /* AddBookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_reader_edit_reader_component__["a" /* EditReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_book_edit_book_component__["a" /* EditBookComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_reader_add_reader_component__["a" /* AddReaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/book-tracker-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTrackerErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_bookTrackerError__ = __webpack_require__("../../../../../src/app/models/bookTrackerError.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookTrackerErrorHandlerService = (function () {
    function BookTrackerErrorHandlerService() {
    }
    BookTrackerErrorHandlerService.prototype.handleError = function (error) {
        var customError = new __WEBPACK_IMPORTED_MODULE_1_app_models_bookTrackerError__["a" /* BookTrackerError */]();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    };
    BookTrackerErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BookTrackerErrorHandlerService);
    return BookTrackerErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/bookResolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookResolverService = (function () {
    function BookResolverService(dataService) {
        this.dataService = dataService;
    }
    //  Here we know that we will make call to get allBooks, So the return type of resolve will be Book[] or BookTrackerError
    // No need to subscribe here, Angular wil auto subscribe
    BookResolverService.prototype.resolve = function (route, state) {
        return this.dataService.getAllBooks()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(error); }));
    };
    BookResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_core_data_service__["a" /* DataService */]])
    ], BookResolverService);
    return BookResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/core/cache-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cachenterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_http_cache_service__ = __webpack_require__("../../../../../src/app/core/http-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Cachenterceptor = (function () {
    function Cachenterceptor(cacheService) {
        this.cacheService = cacheService;
    }
    Cachenterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //  If response is other than get , Then get a fresh copy
        if (req.method !== 'GET') {
            console.log(" invalidating cache " + req.method + req.url);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }
        //   get the cached response
        var cachedResponse = this.cacheService.get(req.url);
        // Check if you get something
        if (cachedResponse) {
            console.log(" returning cached response " + cachedResponse.url);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(cachedResponse);
        }
        return next.handle(req)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                console.log("adding to cache response " + req.url);
                _this.cacheService.put(req.url, event);
            }
        }));
    };
    Cachenterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_core_http_cache_service__["a" /* HttpCacheService */]])
    ], Cachenterceptor);
    return Cachenterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_tracker_error_handler_service__ = __webpack_require__("../../../../../src/app/core/book-tracker-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_core_bookResolver_service__ = __webpack_require__("../../../../../src/app/core/bookResolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_core_header_intercceptor__ = __webpack_require__("../../../../../src/app/core/header.intercceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_core_log_response_interceptor__ = __webpack_require__("../../../../../src/app/core/log-response.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_cache_service__ = __webpack_require__("../../../../../src/app/core/http-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_core_cache_interceptor__ = __webpack_require__("../../../../../src/app/core/cache-interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_4_app_core_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5__book_tracker_error_handler_service__["a" /* BookTrackerErrorHandlerService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_8_app_core_header_intercceptor__["a" /* HeaderInterceptorService */], multi: true },
                // Provide all interceptors one after the other in the same way. The modified request follows this sequence when executing interceptor next.handle() method 
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9_app_core_log_response_interceptor__["a" /* LogResponseInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11_app_core_cache_interceptor__["a" /* Cachenterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_6_app_core_bookResolver_service__["a" /* BookResolverService */],
                __WEBPACK_IMPORTED_MODULE_10__http_cache_service__["a" /* HttpCacheService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_bookTrackerError__ = __webpack_require__("../../../../../src/app/models/bookTrackerError.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.mostPopularBook = __WEBPACK_IMPORTED_MODULE_2_app_data__["a" /* allBooks */][0];
    }
    DataService.prototype.setMostPopularBook = function (popularBook) {
        this.mostPopularBook = popularBook;
    };
    DataService.prototype.getAllReaders = function () {
        return this.http.get('/api/readers');
    };
    DataService.prototype.getReaderById = function (id) {
        return this.http.get("api/readers/" + id);
    };
    DataService.prototype.getAllBooks = function () {
        var _this = this;
        console.log("getAllBooks called");
        return this.http.get('api/books')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return _this.handleError(error); }));
    };
    DataService.prototype.handleError = function (error) {
        var errorObj = new __WEBPACK_IMPORTED_MODULE_3_app_models_bookTrackerError__["a" /* BookTrackerError */]();
        errorObj.errorNumber = 100;
        errorObj.message = error.statusText;
        errorObj.friendlyMessage = "Error occured while fetching books record";
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(errorObj);
    };
    DataService.prototype.getBookById = function (id) {
        // Here the getHeaders variable is storing the header options
        var getHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            Accept: 'application/json',
            Authorization: 'my-token'
        });
        //  Http get can take a second parameter which is an object with several properties
        return this.http.get("api/books/" + id, {
            headers: getHeaders
        });
    };
    DataService.prototype.getOldBookById = function (id) {
        return this.http.get("api/books/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (b) { return ({
            bookTitle: b.title,
            year: b.publicationYear
        }); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (classicBook) {
            console.log("the original book retuned was ");
            console.log(classicBook);
        }));
    };
    DataService.prototype.addBook = function (newBook) {
        return this.http.post('api/books', newBook, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        });
    };
    DataService.prototype.updateBook = function (updatedBook) {
        return this.http.put("api/books/" + updatedBook.bookID, updatedBook);
    };
    DataService.prototype.deleteBook = function (bookId) {
        return this.http.delete("/api/books/" + bookId);
    };
    DataService.prototype.updateReader = function (updatedReader) {
        return this.http.put("api/readers/" + updatedReader.readerID, updatedReader);
    };
    DataService.prototype.addReader = function (newReader) {
        return this.http.post("api/readers", newReader);
    };
    DataService.prototype.deleteReader = function (readerId) {
        return this.http.delete("api/readers/" + readerId);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/core/header.intercceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderInterceptorService = (function () {
    function HeaderInterceptorService() {
    }
    HeaderInterceptorService.prototype.intercept = function (req, next) {
        console.log("AddbookInterceptor  " + req.url);
        //     Make a clone of original request and use overloads provided with req.clone();
        var transformReq = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'custom-token '
            }
        });
        //  Provide to interceptor next in the chain. See Log response interceptor to know how to configure multiple interceptors
        return next.handle(transformReq);
    };
    HeaderInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], HeaderInterceptorService);
    return HeaderInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/core/http-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpCacheService = (function () {
    function HttpCacheService() {
        this.requests = {};
    }
    HttpCacheService.prototype.put = function (url, response) {
        this.requests[url] = response;
    };
    HttpCacheService.prototype.get = function (url) {
        return this.requests[url];
    };
    HttpCacheService.prototype.invalidateUrl = function (url) {
        this.requests[url] = undefined;
    };
    HttpCacheService.prototype.invalidateCache = function () {
        this.requests = {};
    };
    HttpCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "../../../../../src/app/core/log-response.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])();
var LogResponseInterceptor = (function () {
    function LogResponseInterceptor() {
    }
    LogResponseInterceptor.prototype.intercept = function (req, next) {
        //      If I were planning to manipulate the HttpRequest, this is where I would make a copy of the request and start making changes to it.
        //  I'm only interested in manipulating the response here though. Do note that I can manipulate the request and response in the same interceptor. 
        //  I'm choosing to use two here for a couple of reasons. First I want to show you how to configure multiple interceptors, and second, 
        //  the functionality provided by each of them is very different, so I'd rather keep them separate from each other. 
        //  I'm not manipulating the request, so I can just pass the original request to the handle method. 
        //  I'm then going to use the RxJS tap operator to give me access to the response. I'll chain on a call to the pipe method, and pass it the operator
        console.log("logInterceptor  " + req.url);
        return next.handle(req)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].Response) {
                console.log("log body interceptor response");
                console.log(event.body);
            }
        }));
    };
    return LogResponseInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        var timeString = new Date().toLocaleTimeString();
        console.log(message + " (" + timeString + ")");
    };
    LoggerService.prototype.error = function (message) {
        console.error("ERROR: " + message);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">All Books</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n        <li *ngFor='let book of allBooks'>\r\n          <i>{{book.title}}</i>\r\n          <a [routerLink]=\"['/editbook', book.bookID]\">Edit</a>\r\n          <a (click)=\"deleteBook(book.bookID)\">Delete</a>\r\n        </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">All Readers</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n        <li *ngFor='let reader of allReaders'>\r\n          {{reader.name}}\r\n          <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\r\n          <a (click)=\"deleteReader(reader.readerID)\">Delete</a>\r\n        </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Most Popular Book</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <i>{{mostPopularBook.title}}</i> by {{mostPopularBook.author}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_bookTrackerError__ = __webpack_require__("../../../../../src/app/models/bookTrackerError.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(dataService, route, title) {
        this.dataService = dataService;
        this.route = route;
        this.title = title;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.dataService.getAllBooks()
        //   .subscribe(
        //      (data:Book[])=>this.allBooks=data,
        //      (err:BookTrackerError)=>console.log(err.friendlyMessage),
        //      (    )=>console.log("All books retrieved")
        //   );
        var _this = this;
        var resolvedData = this.route.snapshot.data['resolvedBooks'];
        if (resolvedData instanceof __WEBPACK_IMPORTED_MODULE_3_app_models_bookTrackerError__["a" /* BookTrackerError */]) {
            console.log(resolvedData.friendlyMessage);
        }
        else {
            this.allBooks = resolvedData;
        }
        this.dataService.getAllReaders()
            .subscribe(function (data) { return _this.allReaders = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.allReaders); });
        this.mostPopularBook = this.dataService.mostPopularBook;
        this.title.setTitle("Book Tracker " + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* VERSION */].full);
    };
    DashboardComponent.prototype.deleteBook = function (bookID) {
        var _this = this;
        this.dataService.deleteBook(bookID)
            .subscribe(function (data) {
            _this.allBooks = _this.allBooks.filter(function (book) { return book.bookID !== bookID; });
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.deleteReader = function (readerID) {
        var _this = this;
        this.dataService.deleteReader(readerID)
            .subscribe(function (data) {
            _this.allReaders = _this.allReaders.filter(function (reader) { return reader.readerID !== readerID; });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export allReaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allBooks; });
var allReaders = [
    { readerID: 1, name: 'Marie', weeklyReadingGoal: 400, totalMinutesRead: 5600 },
    { readerID: 2, name: 'Daniel', weeklyReadingGoal: 210, totalMinutesRead: 3000 },
    { readerID: 3, name: 'Lanier', weeklyReadingGoal: 140, totalMinutesRead: 600 }
];
var allBooks = [
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
    { bookID: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', publicationYear: 1926 },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
];


/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Book</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"selectedBook && selectedBook.title\" name=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" [(ngModel)]=\"selectedBook && selectedBook.author\" name=\"author\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" [(ngModel)]=\"selectedBook && selectedBook.publicationYear\" name=\"publicationYear\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"setMostPopular()\">Set As Most Popular</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBookComponent = (function () {
    function EditBookComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookID = parseInt(this.route.snapshot.params['id']);
        this.dataService.getBookById(bookID)
            .subscribe(function (data) { return _this.selectedBook = data; }, function (error) { return console.log(error); }, function () { return console.log(_this.selectedBook); });
        this.dataService.getOldBookById(bookID)
            .subscribe(function (data) { return console.log(data.bookTitle); });
    };
    EditBookComponent.prototype.setMostPopular = function () {
        this.dataService.setMostPopularBook(this.selectedBook);
    };
    EditBookComponent.prototype.saveChanges = function () {
        var _this = this;
        this.dataService.updateBook(this.selectedBook)
            .subscribe(function (data) { return console.log("The book  with id  " + _this.selectedBook.bookID + " is updated sucessfully"); }, function (err) { return console.log(err); });
    };
    EditBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-book',
            template: __webpack_require__("../../../../../src/app/edit-book/edit-book.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-reader/edit-reader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Reader</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" [(ngModel)]=\"selectedReader && selectedReader.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" [(ngModel)]=\"selectedReader && selectedReader.weeklyReadingGoal\" name=\"weeklyReaddingGoal\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" [(ngModel)]=\"selectedReader && selectedReader.totalMinutesRead\" name=\"totalMinutesRead\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\"  [(ngModel)]=\"selectedReader && currentBadge\"  >Current Badge</label>\r\n          <div class=\"col-lg-8\">\r\n            {{ currentBadge }}\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-reader/edit-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__ = __webpack_require__("../../../../../src/app/services/badge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditReaderComponent = (function () {
    function EditReaderComponent(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    EditReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var readerID = parseInt(this.route.snapshot.params['id']);
        this.dataService.getReaderById(readerID)
            .subscribe(function (data) { return _this.selectedReader = data; }, function (err) { return console.log(err); });
        this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
    };
    EditReaderComponent.prototype.saveChanges = function () {
        var _this = this;
        this.dataService.updateReader(this.selectedReader)
            .subscribe(function (data) { return console.log("The reader with reader id " + _this.selectedReader.readerID + " is updated successfully"); });
    };
    EditReaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-reader',
            template: __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.html"),
            styles: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]])
    ], EditReaderComponent);
    return EditReaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/bookTrackerError.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTrackerError; });
var BookTrackerError = (function () {
    function BookTrackerError() {
    }
    return BookTrackerError;
}());



/***/ }),

/***/ "../../../../../src/app/services/badge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeService = (function () {
    function BadgeService() {
    }
    BadgeService.prototype.getReaderBadge = function (minutesRead) {
        if (minutesRead > 5000) {
            return 'Book Worm';
        }
        else if (minutesRead > 2500) {
            return 'Page Turner';
        }
        else {
            return 'Getting Started';
        }
    };
    BadgeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BadgeService);
    return BadgeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map