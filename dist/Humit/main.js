(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.abc{\n    background-image: url('bg_humit.png');\n    text-align:center ;\n    background-repeat: no-repeat ;\n    background-size: 100%\n}\n\n#ip2 {\n    border-radius: 23px;\n    border: 2px solid #677897;\n    padding: 20px;\n    width: 100%;\n    height: 10px;\n}\n\n#ip2::-webkit-input-placeholder {\n  font-family: Montserrat;\n  font-size: 14px\n\n}\n\n.cursorText{\n  text-align: left;\n  font-size:36px;\n  width:100%;\n  line-height: 1.42;\n  color:#ffffff;\n  font-family: 'Montserrat'\n}\n\n.btn.early{\n    float : left;\n    right: 15px;\n    margin-top:0px;\n    height:44px;\n    width:40%;\n    border-color: #483546;\n    font-family: Montserrat;\n    font-size: 16px\n\n}\n\n.getEarlyAccessBtnTwo{\n  font-family: Montserrat;\n  border-color: #483546;\n  width: 15% ;\n  background:linear-gradient(74deg , #f7618b 2%, #2a7aff 123%) ;\n  border-radius: 100px\n}\n\n.vinylTextFlexFirstText\n{\n  text-align:left ;\n  font-size:26px;\n  width:60%;\n  line-height: 1.42;\n  color:#ffffff;\n  font-family: 'Montserrat'\n}\n\n.vinylTextFlexSecondText{\n  padding-top:2% ;\n  font-size:12px;\n  width:65%;\n  line-height: 1.88;\n  color:#677897 ;\n  font-family: 'Montserrat';\n  text-align:left ;\n}\n\n.mobileTextFlexFirstText{\n\n  text-align:left ;\n  font-size:26px;\n  width:65%;\n  line-height: 1.42;\n  color:#ffffff;\n  font-family: 'Montserrat'\n}\n\n.mobileTextFlexSecondText{\n  padding-top:2% ;\n  font-size:12px;\n  width:65%;\n  line-height: 1.88;\n  color:#677897 ;\n  font-family: 'Montserrat';\n  text-align:left ;\n}\n\n.bioTextFlexFirstText{\n  text-align:left ;\n  font-size:26px;\n  width:75%;\n  line-height: 1.42;\n  color:#ffffff;\n  font-family: 'Montserrat'\n}\n\n.bioTextFlexSecondText{\n  padding-top:2% ;\n  font-size:12px;\n  width:57%;\n  line-height: 1.88;\n  color:#677897 ;\n  font-family: 'Montserrat';\n  text-align:left ;\n\n\n}\n\n.container.first\n{\n    margin-top: 5%\n}\n\n.container.second\n{\n    margin-top: 15%\n}\n\n.container.third\n{\n    margin-top: 10%\n}\n\n.container.fourth\n{\n    margin-top: 15%\n}\n\n.container.fifth\n{\n    margin-top: 10%\n}\n\n.container.sixth\n{\n    margin-top: 10%\n}\n\n.container.seventh\n{\n    margin-top : 5%\n}\n\n.container.eight\n{\n    padding-bottom:  5px\n}\n\n.img-fluid.signup\n{\nmax-width: 95%;\n}\n\n.img-fluid.mobile{\n    max-width: 60%;\n    margin-left : -35%\n}\n\n.img-fluid.starboy\n{\n    max-width: 100%;\n}\n\n.img-fluid.bio{\n    max-width: 90%;\n\n     margin-left: ;\n}\n\n.iconDiv{\n  width : 15%;\n  margin-right: 5%;\n}\n\n.img-fluid.bottomIconApple\n{\nmax-width: 50%;\nmargin-top: 5%\n}\n\n.img-fluid.bottomIconSoundCloud{\n  max-width : 40%\n\n}\n\n.img-fluid.peterCat{\n  margin-top: -23%;\n  margin-left: -35%;\n}\n\n.img-fluid.steveJobs\n{\nmax-width: 70%;\n}\n\n.img-fluid.vinyl\n{\n   margin-top: -20%;\n}\n\n.img-fluid.play\n{\nmax-width: 70%;\n}\n\n.img-fluid.footer{\n  margin-top: 15%;\n  max-width: 40%;\n}\n\n@media only screen and\n    (max-device-width : 425px)\n    {\n\n      .abc{\n        background-color: #132638;\n      }\n      .img-fluid.peterCat{\n        margin-top: 5%;\n        margin-left: -20%;\n      }\n\n\n      .cursorText{\n        font-size: 28px;\n      }\n\n      .img-fluid.starboy\n      {\n          max-width: 95%;\n      }\n\n      .container.second\n      {\n          margin-top: 25%\n      }\n\n      .img-fluid.vinyl\n      {\n         max-width: 85%;\n      }\n\n\n      .vinylTextFlex\n      {\n        align-items: center;\n      }\n\n      .vinylTextFlexFirstText{\n        text-align: center;\n        width : 75%\n      }\n\n      .vinylTextFlexSecondText{\n        text-align: center;\n        width : 80%;\n      }\n\n      .container.third{\n\n        margin-top: 20%\n\n      }\n\n      .img-fluid.mobile{\n        margin-left: 0%;\n      }\n\n\n      .mobileTextFlexFirstText{\n        text-align: center;\n        width: 75%\n\n      }\n\n      .mobileTextFlexSecondText{\n        text-align: center;\n        width:80%\n      }\n\n      .container.fourth{\n\n        margin-top: 20%\n\n      }\n\n      .bioTextFlex{\n        align-items: center;\n      }\n\n      .bioTextFlexFirstText{\n        text-align: center;\n        width: 75%;\n      }\n\n      .bioTextFlexSecondText{\n        text-align: center;\n        width: 80%;\n      }\n\n      .getEarlyAccessBtnTwo{\n        width : 40%\n      }\n\n      .container.seventh{\n        margin-top: 15%;\n      }\n\n      .img-fluid.footer{\n        max-width: 60%\n      }\n\n\n\n\n     }\n\n@media only screen and\n         (max-device-width : 375px)\n         {\n           .cursorText{\n             font-size: 24px;\n           }\n\n           .btn.early{\n             width: 60%\n           }\n\n\n         }\n\n.header-text\n{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,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OztNQUVEOztRQUVFLGVBQWU7O09BRWhCOztNQUVEO1FBQ0UsZ0JBQWdCO09BQ2pCOzs7TUFHRDtRQUNFLG1CQUFtQjtRQUNuQixVQUFVOztPQUVYOztNQUVEO1FBQ0UsbUJBQW1CO1FBQ25CLFNBQVM7T0FDVjs7TUFFRDs7UUFFRSxlQUFlOztPQUVoQjs7TUFFRDtRQUNFLG9CQUFvQjtPQUNyQjs7TUFFRDtRQUNFLG1CQUFtQjtRQUNuQixXQUFXO09BQ1o7O01BRUQ7UUFDRSxtQkFBbUI7UUFDbkIsV0FBVztPQUNaOztNQUVEO1FBQ0UsV0FBVztPQUNaOztNQUVEO1FBQ0UsZ0JBQWdCO09BQ2pCOztNQUVEO1FBQ0UsY0FBYztPQUNmOzs7OztNQUtEOztBQUdEOzs7V0FHTTthQUNFLGdCQUFnQjtZQUNqQjs7V0FFRDthQUNFLFVBQVU7WUFDWDs7O1VBR0Y7O0FBS1Y7OztDQUdDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hYmN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmdfaHVtaXQucG5nJyk7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXIgO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJVxufVxuXG4jaXAyIHtcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2Nzc4OTc7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cblxuI2lwMjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXNpemU6IDE0cHhcblxufVxuXG4uY3Vyc29yVGV4dHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOjM2cHg7XG4gIHdpZHRoOjEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBjb2xvcjojZmZmZmZmO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnXG59XG5cbi5idG4uZWFybHl7XG4gICAgZmxvYXQgOiBsZWZ0O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGhlaWdodDo0NHB4O1xuICAgIHdpZHRoOjQwJTtcbiAgICBib3JkZXItY29sb3I6ICM0ODM1NDY7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAxNnB4XG5cbn1cblxuLmdldEVhcmx5QWNjZXNzQnRuVHdve1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgYm9yZGVyLWNvbG9yOiAjNDgzNTQ2O1xuICB3aWR0aDogMTUlIDtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNzRkZWcgLCAjZjc2MThiIDIlLCAjMmE3YWZmIDEyMyUpIDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHhcbn1cblxuXG4udmlueWxUZXh0RmxleEZpcnN0VGV4dFxue1xuICB0ZXh0LWFsaWduOmxlZnQgO1xuICBmb250LXNpemU6MjZweDtcbiAgd2lkdGg6NjAlO1xuICBsaW5lLWhlaWdodDogMS40MjtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0J1xufVxuXG4udmlueWxUZXh0RmxleFNlY29uZFRleHR7XG4gIHBhZGRpbmctdG9wOjIlIDtcbiAgZm9udC1zaXplOjEycHg7XG4gIHdpZHRoOjY1JTtcbiAgbGluZS1oZWlnaHQ6IDEuODg7XG4gIGNvbG9yOiM2Nzc4OTcgO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICB0ZXh0LWFsaWduOmxlZnQgO1xufVxuXG5cbi5tb2JpbGVUZXh0RmxleEZpcnN0VGV4dHtcblxuICB0ZXh0LWFsaWduOmxlZnQgO1xuICBmb250LXNpemU6MjZweDtcbiAgd2lkdGg6NjUlO1xuICBsaW5lLWhlaWdodDogMS40MjtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0J1xufVxuXG4ubW9iaWxlVGV4dEZsZXhTZWNvbmRUZXh0e1xuICBwYWRkaW5nLXRvcDoyJSA7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICB3aWR0aDo2NSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjg4O1xuICBjb2xvcjojNjc3ODk3IDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgdGV4dC1hbGlnbjpsZWZ0IDtcbn1cblxuXG4uYmlvVGV4dEZsZXhGaXJzdFRleHR7XG4gIHRleHQtYWxpZ246bGVmdCA7XG4gIGZvbnQtc2l6ZToyNnB4O1xuICB3aWR0aDo3NSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBjb2xvcjojZmZmZmZmO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnXG59XG5cbi5iaW9UZXh0RmxleFNlY29uZFRleHR7XG4gIHBhZGRpbmctdG9wOjIlIDtcbiAgZm9udC1zaXplOjEycHg7XG4gIHdpZHRoOjU3JTtcbiAgbGluZS1oZWlnaHQ6IDEuODg7XG4gIGNvbG9yOiM2Nzc4OTcgO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICB0ZXh0LWFsaWduOmxlZnQgO1xuXG5cbn1cblxuXG5cblxuLmNvbnRhaW5lci5maXJzdFxue1xuICAgIG1hcmdpbi10b3A6IDUlXG59XG5cblxuLmNvbnRhaW5lci5zZWNvbmRcbntcbiAgICBtYXJnaW4tdG9wOiAxNSVcbn1cblxuXG4uY29udGFpbmVyLnRoaXJkXG57XG4gICAgbWFyZ2luLXRvcDogMTAlXG59XG5cbi5jb250YWluZXIuZm91cnRoXG57XG4gICAgbWFyZ2luLXRvcDogMTUlXG59XG5cbi5jb250YWluZXIuZmlmdGhcbntcbiAgICBtYXJnaW4tdG9wOiAxMCVcbn1cblxuLmNvbnRhaW5lci5zaXh0aFxue1xuICAgIG1hcmdpbi10b3A6IDEwJVxufVxuXG4uY29udGFpbmVyLnNldmVudGhcbntcbiAgICBtYXJnaW4tdG9wIDogNSVcbn1cblxuLmNvbnRhaW5lci5laWdodFxue1xuICAgIHBhZGRpbmctYm90dG9tOiAgNXB4XG59XG4uaW1nLWZsdWlkLnNpZ251cFxue1xubWF4LXdpZHRoOiA5NSU7XG59XG5cblxuXG5cblxuLmltZy1mbHVpZC5tb2JpbGV7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQgOiAtMzUlXG59XG5cbi5pbWctZmx1aWQuc3RhcmJveVxue1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmltZy1mbHVpZC5iaW97XG4gICAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgICAgbWFyZ2luLWxlZnQ6IDtcbn1cblxuLmljb25EaXZ7XG4gIHdpZHRoIDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uaW1nLWZsdWlkLmJvdHRvbUljb25BcHBsZVxue1xubWF4LXdpZHRoOiA1MCU7XG5tYXJnaW4tdG9wOiA1JVxufVxuLmltZy1mbHVpZC5ib3R0b21JY29uU291bmRDbG91ZHtcbiAgbWF4LXdpZHRoIDogNDAlXG5cbn1cblxuLmltZy1mbHVpZC5wZXRlckNhdHtcbiAgbWFyZ2luLXRvcDogLTIzJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNSU7XG59XG5cbi5pbWctZmx1aWQuc3RldmVKb2JzXG57XG5tYXgtd2lkdGg6IDcwJTtcbn1cblxuLmltZy1mbHVpZC52aW55bFxue1xuICAgbWFyZ2luLXRvcDogLTIwJTtcbn1cblxuLmltZy1mbHVpZC5wbGF5XG57XG5tYXgtd2lkdGg6IDcwJTtcbn1cblxuLmltZy1mbHVpZC5mb290ZXJ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kXG4gICAgKG1heC1kZXZpY2Utd2lkdGggOiA0MjVweClcbiAgICB7XG5cbiAgICAgIC5hYmN7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI2Mzg7XG4gICAgICB9XG4gICAgICAuaW1nLWZsdWlkLnBldGVyQ2F0e1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMCU7XG4gICAgICB9XG5cblxuICAgICAgLmN1cnNvclRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cblxuICAgICAgLmltZy1mbHVpZC5zdGFyYm95XG4gICAgICB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIuc2Vjb25kXG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjUlXG4gICAgICB9XG5cbiAgICAgIC5pbWctZmx1aWQudmlueWxcbiAgICAgIHtcbiAgICAgICAgIG1heC13aWR0aDogODUlO1xuICAgICAgfVxuXG5cbiAgICAgIC52aW55bFRleHRGbGV4XG4gICAgICB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC52aW55bFRleHRGbGV4Rmlyc3RUZXh0e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoIDogNzUlXG4gICAgICB9XG5cbiAgICAgIC52aW55bFRleHRGbGV4U2Vjb25kVGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aCA6IDgwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci50aGlyZHtcblxuICAgICAgICBtYXJnaW4tdG9wOiAyMCVcblxuICAgICAgfVxuXG4gICAgICAuaW1nLWZsdWlkLm1vYmlsZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgfVxuXG5cbiAgICAgIC5tb2JpbGVUZXh0RmxleEZpcnN0VGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzUlXG5cbiAgICAgIH1cblxuICAgICAgLm1vYmlsZVRleHRGbGV4U2Vjb25kVGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDo4MCVcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci5mb3VydGh7XG5cbiAgICAgICAgbWFyZ2luLXRvcDogMjAlXG5cbiAgICAgIH1cblxuICAgICAgLmJpb1RleHRGbGV4e1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuYmlvVGV4dEZsZXhGaXJzdFRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIH1cblxuICAgICAgLmJpb1RleHRGbGV4U2Vjb25kVGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuXG4gICAgICAuZ2V0RWFybHlBY2Nlc3NCdG5Ud297XG4gICAgICAgIHdpZHRoIDogNDAlXG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIuc2V2ZW50aHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgfVxuXG4gICAgICAuaW1nLWZsdWlkLmZvb3RlcntcbiAgICAgICAgbWF4LXdpZHRoOiA2MCVcbiAgICAgIH1cblxuXG5cblxuICAgICB9XG5cblxuICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kXG4gICAgICAgICAobWF4LWRldmljZS13aWR0aCA6IDM3NXB4KVxuICAgICAgICAge1xuICAgICAgICAgICAuY3Vyc29yVGV4dHtcbiAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAuYnRuLmVhcmx5e1xuICAgICAgICAgICAgIHdpZHRoOiA2MCVcbiAgICAgICAgICAgfVxuXG5cbiAgICAgICAgIH1cblxuXG5cblxuLmhlYWRlci10ZXh0XG57XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"abc\">\n\n  <div style=\"padding-top: 20px\" class=\"container\">\n    <div class=\"row\">\n      <div style=\"align-items: center\" class=\"d-flex flex-row col-sm-6\">\n        <div>\n          <img style=\"max-height: 100% ;max-width : 80%\" src=\"../assets/humit-icon.png\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- <nav style=\"justify-content: flex-end; padding-right: 0rem\" class=\"navbar navbar-expand-sm\">\n\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link py-0\" href=\"#\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link py-0\" href=\"#\">About us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link py-0\" href=\"#\">Preview</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link py-0\" href=\"#\">Video</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link py-0\" href=\"#\">Contact us</a>\n            </li>\n          </ul>\n\n        </nav> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container first\">\n    <div class=\"row\">\n      <div class=\"d-flex flex-column col-sm-6\">\n        <div class=\"cursorText\">\n        <p>\n          We’re trying to make music <br /> <b class = \"tw\"></b>\n            super addictive.\n\n        </p>\n        </div>\n\n        <div style=\"margin-top: 5%;\">\n          <div style=\" width:100%; \">\n            <!-- <input placeholder=\"Enter Email ID\" style=\"background:transparent !important; color:#ffffff \" type=\"text\" id=\"ip2\" /> -->\n          <a href =\"https://forms.gle/f4sT8yZabUYRjEEa7\"> <button style=\"background:linear-gradient(74deg , #f7618b 2%, #2a7aff 123%) ; border-radius: 100px\" type=\"button\"\n              class=\"btn early btn-primary\">Get early access</button> </a>\n\n\n          </div>\n\n        </div>\n\n        <div class = \"d-flex flex-row\" style=\" margin-top: 5% ; font-family: 'Montserrat' ; font-size: 10px ; color: #677897 ; font-style: italic ; width : 40%\">\n          <div style= \" margin-top: 4% ; width : 50%\">\n            powered by\n          </div>\n          <div class = \"d-flex flex-column\" style = \"width : 50% ;\">\n            <div>\n              <img  class=\"img-fluid\" src=\"../assets/spotify.png\">\n\n\n            </div>\n            <div class = \"d-flex flex-row\" style= \"padding-top : 10px;\">\n              <div style= \"margin-top : 5%; width : 50% \">\n                <img  class=\"img-fluid play\" src=\"../assets/play.png\">\n\n              </div>\n              <div style= \"width : 50% \">\n                <img  class=\"img-fluid steveJobs\" src=\"../assets/steveJobs.png\">\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n      </div>\n      <div class=\"d-flex flex-row col-sm-6\">\n        <div>\n          <img class=\"img-fluid peterCat\" src=\"../assets/peterCat.png\">\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"container fifth\">\n    <div class=\"d-flex flex-column row\">\n      <div style=\"text-align:center ;  font-size:26px; line-height: 1.42;color:#ffffff;font-family: 'Montserrat' ; margin-bottom: 15px\">\n        Introducing hums\n      </div>\n      <!-- <div style=\"text-align:center ;  font-size:12px; line-height: 1.88;color:#677897;font-family: 'Montserrat'\">\n        Video player like never before\n      </div> -->\n      <div>\n        <img src=\"../assets/memory.png\" class=\"img-fluid starboy\">\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"container second\">\n    <div class=\"row\">\n      <div class=\"d-flex flex-column col-sm-6 vinylTextFlex\">\n        <div class = \"vinylTextFlexFirstText\">\n          Discover conveniently.\n          Share convincingly.\n        </div>\n        <div class = \"vinylTextFlexSecondText\">\n          Gone are the days when you share music through YouTube links in the hope that your buddy heeds your reccomendations. Share hard-hitting moments from songs that your followers see on a feed they can conveniently sample through.\n\n        </div>\n\n      </div>\n      <div class=\"col-sm-6 order-first order-md-0\">\n        <div>\n          <img class=\"img-fluid vinyl\" src=\"../assets/vinyl.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"container third\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div>\n          <img class=\"img-fluid mobile\" src=\"../assets/feature.png\">\n        </div>\n\n\n      </div>\n      <div style=\"justify-content: center\" class=\"d-flex flex-column col-sm-6\">\n        <div style=\"align-items: center\" class = \"d-flex flex-column\">\n          <div class = \"mobileTextFlexFirstText\">\n            Combine music with memories.\n          </div>\n          <div class = \"mobileTextFlexSecondText\">\n            Life turns into a music video when you have your headphones on. Attach visual elements to your hums to truly capture what a song makes you feel.\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"container fourth\">\n    <div class=\"row\">\n      <div class=\"d-flex flex-column col-sm-6 bioTextFlex\">\n        <div class = \"bioTextFlexFirstText\">\n          Create a playlist out of anything you see.\n\n        </div>\n        <div class = \"bioTextFlexSecondText\">\n          Create playlists on the go out of your feed, user profiles of other humit users as well as the various communities you’re a part of. You’re never going to run out of fresh music.\n\n\n        </div>\n\n      </div>\n      <div class=\"col-sm-6 order-first order-md-0\">\n        <div>\n          <img class=\"img-fluid bio\" src=\"../assets/bio.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"container sixth\">\n    <div class=\"d-flex flex-column row\">\n      <div>\n        <button\n          type=\"button\" class=\"btn getEarlyAccessBtnTwo btn-primary\">Get early access</button>\n\n      </div>\n      <div style=\"text-align:center ;  font-size:26px; line-height: 1.42;color:#ffffff;font-family: 'Montserrat' \">\n        Download Now :)\n      </div>\n      <div style=\"text-align:center ;  font-size:12px; line-height: 1.88;color:#677897;font-family: 'Montserrat'\">\n        Sign up to recieve the download link in your mailbox\n      </div>\n      <div style=\"padding-top:5%\">\n        <img src=\"../assets/signup.png\" class=\"img-fluid signup\">\n\n\n      </div>\n      <div style=\"padding-top: 5%\">\n        <button style=\"font-size: 14px; font-family: Montserrat; border-radius: 100px ; border-color: plum; background-color: #132638\" type=\"button\" class=\"btn btn-primary\">Know\n          more</button>\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n  <div class=\"container seventh\">\n    <div style=\"border-top : solid 1px #3b5a78 ; border-bottom : solid 1px #3b5a78 ;\" class=\"row\">\n      <div class=\"col-sm-8\">\n      <div style = \"margin-top: 5% ; margin-bottom: 5% ; color : #677897 ; font-family: Montserrat ; text-align: left\"><p>\n\n        Music delivered byte-sized<br />\n\n        Sign up to join!\n\n      </div>\n\n      </div>\n      <div class=\"col-sm-4\">\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container eight\">\n\n    <img class = \"img-fluid footer\" src = \"../assets/footer.png\" />\n    <!-- <div style=\"justify-content: center ;  margin-top: 15%\" class = \"row\">\n      <div class = \"iconDiv\" >\n\n        <img class= \"img-fluid bottomIconApple\" src = \"../assets/apple.png\" />\n\n\n      </div>\n      <div class = \"iconDiv\" >\n\n        <img class= \"img-fluid bottomIconSoundCloud\" src = \"../assets/soundcloud.png\" />\n\n\n      </div>\n      <div  style = \"margin-top: 0.5% ;font-family: Montserrat; font-size: 18px;  color: #91a7b3\">\n\n      Coming Soon\n\n\n      </div>\n      <div>\n\n      </div>\n\n\n    </div> -->\n  </div>\n\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! t-writer.js */ "./node_modules/t-writer.js/dist/t-writer.js");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Humit';
    }
    AppComponent.prototype.ngOnInit = function () {
        var target = document.querySelector('.tw');
        var writer = new t_writer_js__WEBPACK_IMPORTED_MODULE_2___default.a(target, {
            loop: true,
            typeColor: 'white',
            typeSpeed: 100,
            deleteSpeed: 200,
            cursorColor: '#9592FF'
        });
        writer.type('discovery').rest(500).remove(9).type('sharing').rest(200).start();
    };
    AppComponent.prototype.gotoForm = function () {
        this.router.navigate(['https://forms.gle/f4sT8yZabUYRjEEa7']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karu/Humit-Web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map