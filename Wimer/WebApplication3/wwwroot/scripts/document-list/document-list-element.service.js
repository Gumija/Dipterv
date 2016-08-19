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
const document_list_element_1 = require('./document-list-element');
let DocumentListElementService = class DocumentListElementService {
    constructor() {
    }
    getDocumentListElements() {
        return documentListElementsPromise;
    }
};
DocumentListElementService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], DocumentListElementService);
exports.DocumentListElementService = DocumentListElementService;
var documentListElements = [
    new document_list_element_1.DocumentListElement(1, 'Simple text file', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new document_list_element_1.DocumentListElement(2, 'Paragraphs after image (HTML)', 'Here comes the sun to take the dragons to burn the cities.', ''),
    new document_list_element_1.DocumentListElement(3, 'Dragon Burning Cities Again', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new document_list_element_1.DocumentListElement(4, 'Empty image path 2.0', 'Here comes the sun to take the dragons to burn the cities.', ''),
    new document_list_element_1.DocumentListElement(5, 'Cities Burning Dragon', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new document_list_element_1.DocumentListElement(6, 'Burning Dragon Cities', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg')
];
var documentListElementsPromise = Promise.resolve(documentListElements);
//# sourceMappingURL=document-list-element.service.js.map