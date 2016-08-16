"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const document_list_component_1 = require('./document-list/document-list.component');
const document_reader_component_1 = require('./document-reader/document-reader.component');
const router_deprecated_1 = require('@angular/router-deprecated');
const nav_bar_component_1 = require('./nav-bar.component');
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../views/app.html',
        providers: [],
        directives: [
            document_list_component_1.DocumentListComponent,
            router_deprecated_1.ROUTER_DIRECTIVES,
            nav_bar_component_1.NavBarComponent
        ]
    }),
    router_deprecated_1.RouteConfig([
        {
            path: '/documents',
            name: 'DocumentList',
            component: document_list_component_1.DocumentListComponent,
            useAsDefault: true
        },
        {
            path: '/document/:id',
            name: 'DocumentReader',
            component: document_reader_component_1.DocumentReaderComponent
        }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
