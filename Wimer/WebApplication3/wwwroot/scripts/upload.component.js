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
const http_1 = require('@angular/http');
const http_2 = require('@angular/http');
let UploadComponent = class UploadComponent {
    constructor(http) {
        this.http = http;
        console.log('file upload Initialized');
        //set the header as multipart        
        this.headers = new http_2.Headers();
        this.headers.set('Content-Type', 'multipart/form-data');
        this.url = 'http://localhost:8080/test';
    }
    //onChange file listener
    changeListener($event) {
        this.postFile($event.target);
    }
    //send post file to server 
    postFile(inputValue) {
        let formData = new FormData();
        let xhr = new XMLHttpRequest();
        for (let i = 0; i < inputValue.files.length; i++) {
            formData.append("uploads", inputValue.files[i], inputValue.files[i].name);
        }
        xhr.open('POST', 'api/Documents', true);
        xhr.send(formData);
    }
};
UploadComponent = __decorate([
    core_1.Component({
        selector: 'upload-component',
        templateUrl: '../views/upload.html',
        providers: [http_1.HTTP_PROVIDERS]
    }), 
    __metadata('design:paramtypes', [http_2.Http])
], UploadComponent);
exports.UploadComponent = UploadComponent;
