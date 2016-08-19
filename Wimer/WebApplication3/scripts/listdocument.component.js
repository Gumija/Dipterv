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
const document_service_1 = require('./Service/document.service');
let ListDocumentComponent = class ListDocumentComponent {
    constructor(documentService) {
        this.documentService = documentService;
    }
    updateList() {
        this.documentService.getDocuments().subscribe(documents => this.documents = documents, error => this.errorMessage = error);
    }
    getDocuments() {
        this.documentService.getDocuments().subscribe(documents => this.documents = documents, error => this.errorMessage = error);
    }
    ngOnInit() {
        this.getDocuments();
    }
};
ListDocumentComponent = __decorate([
    core_1.Component({
        selector: 'list-documents',
        providers: [document_service_1.DocumentService],
        templateUrl: '../views/listdocuments.html',
    }), 
    __metadata('design:paramtypes', [document_service_1.DocumentService])
], ListDocumentComponent);
exports.ListDocumentComponent = ListDocumentComponent;
//# sourceMappingURL=listdocument.component.js.map