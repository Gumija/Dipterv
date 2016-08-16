/// <reference path="../node_modules/@angular/common/index.d.ts" />
/// <reference path="../node_modules/@angular/compiler/index.d.ts" />
/// <reference path="../node_modules/@angular/core/index.d.ts" />
/// <reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts" />
/// <reference path="../node_modules/@angular/platform-browser/index.d.ts" />
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);