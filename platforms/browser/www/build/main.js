webpackJsonp([0],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Locations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Locations = (function () {
    function Locations(http) {
        this.http = http;
        console.log('Hello Locations Provider');
    }
    Locations.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data/locations.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.data = _this.applyHaversine(data.locations);
                _this.data.sort(function (locationA, locationB) {
                    return locationA.distance - locationB.distance;
                });
                resolve(_this.data);
            });
        });
    };
    Locations.prototype.applyHaversine = function (locations) {
        var _this = this;
        var usersLocation = {
            lat: 40.713744,
            lng: -74.009056
        };
        locations.map(function (location) {
            var placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };
            location.distance = _this.getDistanceBetweenPoints(usersLocation, placeLocation, 'miles').toFixed(2);
        });
        return locations;
    };
    Locations.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    Locations.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    Locations = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Locations);
    return Locations;
}());
//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 268:
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
webpackEmptyAsyncContext.id = 268;

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot('HomePage');
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <!-- <ion-col >\n        <img style="border-radius: 50% !important; overflow: hidden;" src="https://directwastedisposal.com/wp-content/uploads/2017/11/bin_rental.png"/>\n      </ion-col> -->\n      <ion-col></ion-col>\n    </ion-row>\n    <div class="login-box">\n      <form (ngSubmit)="login()" #registerForm="ngForm">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item>\n                <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n            <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/login/login.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/register/register.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>Register</ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content class="login-content" padding>\n    <div class="login-box">\n      \n      <form (ngSubmit)="register()" #registerForm="ngForm">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item>\n                <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/register/register.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qr_qr__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(nav, auth) {
        this.nav = nav;
        this.auth = auth;
        this.username = '';
        this.email = '';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__qr_qr__["a" /* QRPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* Profile */];
        var info = this.auth.getUserInfo();
        this.username = info['name'];
        this.email = info['email'];
    }
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/home/home.html"*/'<ion-tabs style="color:#56CA96">\n  <ion-tab [root]="tab1Root" tabTitle="Map" tabIcon="navigate"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="List" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="QR" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_locations__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_google_maps__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(navCtrl, maps, platform, locations) {
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.platform = platform;
        this.locations = locations;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement);
            var locationsLoaded = _this.locations.load();
            Promise.all([
                mapLoaded,
                locationsLoaded
            ]).then(function (result) {
                var locations = result[1];
                for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
                    var location_1 = locations_1[_i];
                    _this.maps.addMarker(location_1.latitude, location_1.longitude);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('map'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('pleaseConnect'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ElementRef */])
    ], MapPage.prototype, "pleaseConnect", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Nearby Recycle Centers\n    </ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n<ion-content>\n \n  <div #pleaseConnect id="please-connect">\n    <p>Please connect to the Internet...</p>\n  </div>\n \n  <div #map id="map"></div>\n \n</ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/map/map.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__providers_locations__["a" /* Locations */]])
    ], MapPage);
    return MapPage;
}());
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMaps = (function () {
    function GoogleMaps(connectivityService) {
        this.connectivityService = connectivityService;
        this.mapInitialised = false;
        this.markers = [];
    }
    GoogleMaps.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMaps.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    _this.apiKey = 'AIzaSyBFyFBTGdn4UjKhAwgZNQ_4iEi2wbLEl1E';
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        console.log("this.apiKeythis.apiKeythis.apiKey");
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMaps.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Geolocation */].getCurrentPosition().then(function (position) {
                // UNCOMMENT FOR NORMAL USE
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //let latLng = new google.maps.LatLng(40.713744, -74.009056);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                resolve(true);
                google.maps.event.addListener(_this.map, 'click', function (event) {
                    _this.clearMarkers();
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    var distanceToYou = _this.getDistanceBetweenPoints(event.latLng, position, 'miles').toFixed(2);
                    _this.geocodeLatLng(event.latLng, geocoder, infowindow, distanceToYou);
                });
            });
        });
    };
    GoogleMaps.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMaps.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMaps.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            _this.disableMap();
        }, false);
    };
    GoogleMaps.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    };
    // Transfer latLng to specified Address 
    GoogleMaps.prototype.geocodeLatLng = function (latLng, geocoder, infowindow, distanceToYou) {
        var _this = this;
        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var marker = new google.maps.Marker({
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        map: _this.map
                    });
                    _this.markers.push(marker);
                    infowindow.setContent(results[1].formatted_address + '<p style="color: red;">' + distanceToYou + " miles from your location</p>");
                    infowindow.open(_this.map, marker);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Removes the markers from the map, but keeps them in the array.
    GoogleMaps.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    GoogleMaps.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
        this.markers = [];
    };
    //move this funciton from location.ts
    GoogleMaps.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat();
        var lon1 = start.lng();
        var lat2 = end.coords.latitude;
        var lon2 = end.coords.longitude;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log('distanceToYou ' + d);
        return d;
    };
    GoogleMaps.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    GoogleMaps = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__connectivity__["a" /* Connectivity */]])
    ], GoogleMaps);
    return GoogleMaps;
}());
//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connectivity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connectivity = (function () {
    function Connectivity(platform) {
        this.platform = platform;
        this.onDevice = this.platform.is('cordova');
    }
    Connectivity.prototype.isOnline = function () {
        if (this.onDevice && __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Network */].connection) {
            return __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Network */].connection !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    Connectivity.prototype.isOffline = function () {
        if (this.onDevice && __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Network */].connection) {
            return __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Network */].connection === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    Connectivity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], Connectivity);
    return Connectivity;
}());
//# sourceMappingURL=connectivity.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_locations__ = __webpack_require__(242);
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
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ListPage = (function () {
    function ListPage(navCtrl, locations) {
        this.navCtrl = navCtrl;
        this.locations = locations;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ListPage Page');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/list/list.html"*/'<ion-header>\n \n  <ion-navbar color="secondary">\n    <ion-title>List</ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n \n<ion-content>\n \n    <ion-list no-lines>\n        <ion-item *ngFor="let location of locations.data">\n            <ion-avatar item-left>\n                <ion-icon name="pin"></ion-icon>\n            </ion-avatar>\n            <h2>{{location.title}}</h2>\n            <p>{{location.distance}} miles</p>\n        </ion-item>\n    </ion-list>\n \n</ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/list/list.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_locations__["a" /* Locations */]])
    ], ListPage);
    return ListPage;
}());
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Profile = (function () {
    function Profile(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    Profile.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    Profile.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>POINTS</ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content class="login-content" padding>\n    <div class="login-box">\n      \n      <form (ngSubmit)="register()" #registerForm="ngForm">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n            <ion-header>\n                <ion-navbar>\n                    <ion-title>Basic Cards</ion-title>\n                </ion-navbar>\n            </ion-header>\n            \n            <ion-content class="cards-bg">\n            \n                <ion-card>\n  \n    <ion-card-content>\n      This is just your basic card with some text to boot. Like it?  Keep scrolling...\n    </ion-card-content>\n  \n  </ion-card>\n  \n  \n  </ion-content>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">REDEEM REWARDS</button>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/profile/profile.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Profile);
    return Profile;
}());
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner_ngx__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast_ngx__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(92);
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
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var QRPage = (function () {
    function QRPage(http, navCtrl, alertCtrl, modal, navParams, barcodeScanner, toast, dataService) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
        this.productFound1 = false;
        this.itemsArray = [];
        this.notes = [
            {
                title: "test"
            }
        ];
        this.myArray = [];
        this.dataService.getProducts().subscribe(function (response) {
            _this.products = response;
            console.log(_this.products);
        });
    }
    QRPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get("https://sw-testing.azurewebsites.net/api/items")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // this.data = this.applyHaversine(data.locations);
                _this.test = data[0].name;
                console.log("data1111:", _this.test);
                // this.data.sort((locationA, locationB) => {
                //   return locationA.distance - locationB.distance;
                // });
                resolve(_this.data);
            });
        });
    };
    QRPage.prototype.load = function () {
        console.log("dddddddddd");
    };
    QRPage.prototype.scan = function () {
        var _this = this;
        this.selectedProduct = {};
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.selectedProduct = _this.products.find(function (product) { return product.plu === barcodeData.text; });
            if (_this.selectedProduct !== undefined) {
                _this.productFound = true;
                console.log(_this.selectedProduct);
            }
            else {
                _this.selectedProduct = {};
                _this.productFound = false;
                _this.toast
                    .show("Product not found", "5000", "center")
                    .subscribe(function (toast) {
                    console.log(toast);
                });
            }
        }, function (err) {
            _this.toast.show(err, "5000", "center").subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    QRPage.prototype.changeItemName = function (currentName, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Change grocery item name:",
            message: 'current: "' + currentName + '"',
            inputs: [
                {
                    placeholder: "type in a new name"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel"
                },
                {
                    text: "Confirm",
                    handler: function (data) {
                        if (data[0].length === 0) {
                            _this.itemsArray[index] = currentName;
                        }
                        else {
                            _this.itemsArray[index] = data[0];
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    QRPage.prototype.addItem = function () {
        // let index = this.itemsArray.length;
        // this.changeItemName("New item", index);
        var _this = this;
        this.productFound1 = true;
        console.log("this tessss", this.test);
        var prompt = this.alertCtrl.create({
            title: "Add Item",
            message: "Enter the list of items",
            inputs: [
                {
                    name: this.test,
                    placeholder: "Item Name",
                    value: this.test
                },
                {
                    name: "quantity",
                    placeholder: "Quantity",
                    type: "number"
                },
                {
                    name: "units",
                    placeholder: "Grams, KG, Inches etc"
                },
                {
                    name: "price",
                    placeholder: "Price Name",
                    type: "number"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Save",
                    handler: function (data) {
                        _this.itemsArray.push({
                            name: _this.test,
                            quantity: data.quantity,
                            units: data.units,
                            price: data.price,
                            reward: 100
                        });
                        console.log(" this.itemsArray this.itemsArray this.itemsArray", _this.itemsArray);
                    }
                }
            ]
        });
        prompt.present();
    };
    QRPage.prototype.openModal = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModalData = {
            name: 'Paul Halliday',
            occupation: 'Developer'
        };
        var myModal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    QRPage.prototype.editNote = function (note) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Edit Note",
            inputs: [
                {
                    name: "title"
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Save",
                    handler: function (data) {
                        var index = _this.itemsArray.indexOf(note);
                        if (index > -1) {
                            _this.itemsArray[index] = data;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    QRPage.prototype.deleteNote = function (note) {
        var index = this.itemsArray.indexOf(note);
        if (index > -1) {
            this.itemsArray.splice(index, 1);
        }
    };
    QRPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: "page-qr",template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/qr/qr.html"*/'<ion-header>\n\n  <ion-navbar >\n    <ion-title>QR Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Scan the code here\n  <p>\n  </p>\n  <h1>\n    <button ion-button color="dark" full round (click)="scan()">Start Scan</button>\n  </h1>\n\n\n\n  <ion-card *ngIf="productFound">\n    <ion-card-header>\n      <!-- <h2>Price: $ {{selectedProduct.price}}</h2> -->\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>{{selectedProduct.plu}}</li>\n        <li>{{selectedProduct.name}}</li>\n        <li>{{selectedProduct.desc}}</li>\n      </ul>\n    </ion-card-content>\n\n<!-- \n    <ion-list *ngFor="let item of itemsArray">\n      <ion-item (click)="changeItemName(item, i)" style="margin-left:20px;">Plastic: {{ item.name }}</ion-item>\n      <ion-item (click)="changeItemName(item, i)" style="margin-left:20px;">Total Items: {{ item.quantity }}</ion-item>\n      <ion-item (click)="changeItemName(item, i)" style="margin-left:20px;">Reward: {{ item.price }}</ion-item>\n    </ion-list>\n\n -->\n\n    <ion-list>\n\n      <ion-item-sliding *ngFor="let note of itemsArray">\n\n        <ion-item>\n          {{ note.name }}\n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button icon-only (click)="editNote(note)" light>\n            <ion-icon name="paper"></ion-icon>\n          </button>\n          <button ion-button icon-only (click)="deleteNote(note)" danger>\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n    <!-- <button ion-button (click)="openModal()">Open Modal</button> -->\n    <button ion-button round (click)="addItem()" style="width: 100%; padding: 26px; text-align:right;">Add Item</button>\n\n\n    <!-- <ion-buttons end>\n        <button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n      </ion-buttons> -->\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/qr/qr.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast_ngx__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataServiceProvider */]])
    ], QRPage);
    return QRPage;
}());
//# sourceMappingURL=qr.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceProvider = (function () {
    function DataServiceProvider(http) {
        this.http = http;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getProducts = function () {
        return this.http.get('assets/data/products.json')
            .map(function (response) { return response.json(); });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(633);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_qr_qr__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_page_modal_page__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_locations__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_google_maps__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_connectivity__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner_ngx__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast_ngx__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar_ngx__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen_ngx__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_data_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_7__pages_qr_qr__["a" /* QRPage */], __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* Profile */], __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_8__pages_modal_page_modal_page__["a" /* ModalPage */], __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }), __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_7__pages_qr_qr__["a" /* QRPage */], __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* Profile */], __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_locations__["a" /* Locations */],
                __WEBPACK_IMPORTED_MODULE_12__providers_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_13__providers_connectivity__["a" /* Connectivity */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast_ngx__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_data_service__["a" /* DataServiceProvider */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        // rootPage = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    ModalPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        console.log(data);
    };
    ModalPage.prototype.closeModal = function () {
        var data = {
            name: 'John Doe',
            occupation: 'Milkman'
        };
        this.view.dismiss(data);
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-modal-page',template:/*ion-inline-start:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/modal-page/modal-page.html"*/'<!--\n  Generated template for the ModalPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>ModalPage</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closeModal()">Close</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n  </ion-content>'/*ion-inline-end:"/home/jgulle/Documents/Hackaton/ionic2-google-maps-nearby/src/pages/modal-page/modal-page.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());
//# sourceMappingURL=modal-page.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth-service.js.map

/***/ })

},[539]);
//# sourceMappingURL=main.js.map