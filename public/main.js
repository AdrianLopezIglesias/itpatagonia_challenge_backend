(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\7. Proyectos\2. Desarrollos\angular-widget\weather-widget\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_weather_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather-widget.component */ "Usqo");



class AppComponent {
    constructor() {
        this.title = 'weather-widget';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "weather-widget");
    } }, directives: [_components_weather_widget_component__WEBPACK_IMPORTED_MODULE_1__["WeatherWidgetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Usqo":
/*!********************************************************!*\
  !*** ./src/app/components/weather-widget.component.ts ***!
  \********************************************************/
/*! exports provided: WeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetComponent", function() { return WeatherWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function WeatherWidgetComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const city_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", city_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", city_r1, " ");
} }
let url;
let env = "TO_HEROKU"; //SERVER_LOCAL, TO_HEROKU, FROM_HEROKU
if (env == "FROM_HEROKU") {
    url = window.location.href.replace("https://", "");
    url = url.replace("/", "");
    url = "wss://" + url;
}
if (env == "SERVER_LOCAL") {
    url = "ws://localhost:3500";
}
if (env == "TO_HEROKU") {
    url = "wss://damp-basin-32272.herokuapp.com/";
}
const subject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])({
    url: url,
    deserializer: data => data
});
class WeatherWidgetComponent {
    constructor() {
        this.weather = {
            name: 'Esperando datos del servidor',
            country: 'Esperando datos del servidor',
            timezone: 'Esperando datos del servidor',
            weather: [{ main: 'Esperando datos del servidor', icon: "assets/10d.png" }],
            main: {
                temp: 'Esperando datos del servidor',
                feels_like: 'Esperando datos del servidor',
                temp_min: 'Esperando datos del servidor',
                temp_max: 'Esperando datos del servidor',
                pressure: 'Esperando datos del servidor',
                humidity: 'Esperando datos del servidor',
            },
            visibility: 'Esperando datos del servidor',
            wind: {
                deg: 'Esperando datos del servidor',
                speed: 'Esperando datos del servidor'
            }
        };
        this.cities = [];
        this.static_cities = ['Buenos Aires F.D.', 'Santa Fe', 'San Miguel de Tucum??n', 'R??o Negro Province', 'C??rdoba', 'Berlin', 'Miami', 'New York'];
        this.current_city = 'Buenos Aires F.D.';
        this.started = 0;
    }
    ngOnInit() {
        subject.subscribe((data) => this.setWeather((data.data)), (err) => console.log(err), () => console.log('complete'));
        let message = { op: 'Start' };
        subject.next(message);
    }
    changeCurrentCity(city) {
        console.log("changeCurrentCity");
        this.current_city = city;
        let datax = this.cities.filter(x => {
            return x.name == this.current_city;
        });
        let data = datax[0];
        this.weather = {
            name: data.name,
            country: data.sys.country,
            timezone: data.timezone,
            weather: [{
                    main: data.weather[0].description,
                    icon: "assets/" + data.weather[0].icon + ".png"
                }],
            main: {
                temp: (data.main.temp) + '??',
                feels_like: (data.main.feels_like) + '??',
                temp_min: (data.main.temp_min) + '??',
                temp_max: (data.main.temp_max) + '??',
                pressure: data.main.pressure + " hPa",
                humidity: data.main.humidity + "%",
            },
            visibility: data.visibility + " km",
            wind: {
                deg: data.wind.deg + "??",
                speed: data.wind.speed + " kmh"
            }
        };
    }
    getTime(time) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isString"])(time)) {
            return time;
        }
        var d = new Date((new Date().getTime()) + time * 1000);
        return d.toUTCString();
    }
    setWeather(data) {
        data = (JSON.parse(data));
        console.log("???? ~ file: weather-widget.component.ts ~ line 109 ~ WeatherWidgetComponent ~ setWeather ~ data", data);
        this.cities = (data);
        if (this.started == 0) {
            this.changeCurrentCity('Buenos Aires F.D.');
            this.started = 1;
        }
    }
}
WeatherWidgetComponent.??fac = function WeatherWidgetComponent_Factory(t) { return new (t || WeatherWidgetComponent)(); };
WeatherWidgetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WeatherWidgetComponent, selectors: [["weather-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([])], decls: 66, vars: 14, consts: [[1, "container"], [1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container-fluid"], [3, "src"], [1, "table"], [3, "value"]], template: function WeatherWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WeatherWidgetComponent_Template_select_change_2_listener($event) { return ctx.changeCurrentCity($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, WeatherWidgetComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Hora actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Temperatura actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Sensaci\u00F3n t\u00E9rmica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Temperatura m\u00EDnima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Temperatura m\u00E1xima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Presi\u00F3n atmosf\u00E9rica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Humedad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Visibilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Viento (direcci\u00F3n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Viento (velocidad)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.static_cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.weather.weather[0].main, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "/", ctx.weather.weather[0].icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getTime(ctx.weather.timezone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.feels_like);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.temp_min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.temp_max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.pressure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.main.humidity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.wind.deg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.weather.wind.speed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WeatherWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'weather-widget',
                template: `
	<div class="container">
	
	<br/>
	<select (change)="changeCurrentCity($event.target.value)" class="form-control">
		<option *ngFor="let city of static_cities" [value]="city">
			{{city}}
		</option>
	</select>
	<br/>
	<div class="container-fluid">
	<p>{{weather.weather[0].main}} <img src="/{{weather.weather[0].icon}}"></p>
	<table class="table">
	<tbody>
	<tr>
	<td>Pa??s</td>
	<td>{{weather.country}}</td>
	</tr>
	<tr>
	<td>Hora actual</td>
	<td>{{getTime(weather.timezone)}}</td>
	</tr>
	<tr>
	<td>Temperatura actual</td>
	<td>{{weather.main.temp}}</td>
	</tr>
	<tr>
	<td>Sensaci??n t??rmica</td>
	<td>{{weather.main.feels_like}}</td>
	</tr>
	<tr>
	<td>Temperatura m??nima</td>
	<td>{{weather.main.temp_min}}</td>
	</tr>
	<tr>
	<td>Temperatura m??xima</td>
	<td>{{weather.main.temp_max}}</td>
	</tr>
	<tr>
	<td>Presi??n atmosf??rica</td>
	<td>{{weather.main.pressure}}</td>
	</tr>
	<tr>
	<td>Humedad</td>
	<td>{{weather.main.humidity}}</td>
	</tr>
	<tr>
	<td>Visibilidad</td>
	<td>{{weather.visibility}}</td>
	</tr>
	<tr>
	<td>Viento (direcci??n) </td>
	<td>{{weather.wind.deg}}</td>
	</tr>
	<tr>
	<td>Viento (velocidad)</td>
	<td>{{weather.wind.speed}}</td>
	</tr>
	</tbody>
	</table>
	</div>
	</div>
	`,
                providers: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/weather-widget.component */ "Usqo");






// import { WebsocketService } from './services/websocket.service';
// import { WeatherService } from './services/weather.service';
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__["WeatherWidgetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__["WeatherWidgetComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map