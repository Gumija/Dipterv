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
const document_list_element_service_1 = require('./document-list-element.service');
const router_deprecated_1 = require('@angular/router-deprecated');
const common_1 = require('@angular/common');
let DocumentListComponent = class DocumentListComponent {
    constructor(documentListElementService, router) {
        this.documentListElementService = documentListElementService;
        this.router = router;
    }
    getDocuments() {
        this.documentListElementService.getDocumentListElements().then(documents => this.documentList = documents, error => this.errorMessage = error);
    }
    openDocument(id) {
        this.router.navigate(['DocumentReader', { id: id }]);
    }
    ngOnInit() {
        this.getDocuments();
    }
};
DocumentListComponent = __decorate([
    core_1.Component({
        //selector: 'document-list',
        providers: [document_list_element_service_1.DocumentListElementService],
        templateUrl: '../../views/document-list.html',
        styleUrls: ['../../styles/document-list.css'],
        directives: [common_1.NgIf, router_deprecated_1.RouterLink]
    }), 
    __metadata('design:paramtypes', [document_list_element_service_1.DocumentListElementService, router_deprecated_1.Router])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=document-list.component.js.map