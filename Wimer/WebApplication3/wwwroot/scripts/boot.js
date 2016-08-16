"use strict";
/// <reference path="../node_modules/@angular/common/index.d.ts" />
/// <reference path="../node_modules/@angular/compiler/index.d.ts" />
/// <reference path="../node_modules/@angular/core/index.d.ts" />
/// <reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts" />
/// <reference path="../node_modules/@angular/platform-browser/index.d.ts" />
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
const http_1 = require('@angular/http');
const router_deprecated_1 = require('@angular/router-deprecated');
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS
]);
