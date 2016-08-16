import {Component, OnInit} from '@angular/core';
import {DocumentListElementService} from './document-list-element.service';
import {DocumentListElement} from './document-list-element';
import { Router, RouterLink } from '@angular/router-deprecated';
import {NgIf} from '@angular/common';

@Component({
    //selector: 'document-list',
    providers: [DocumentListElementService],
    templateUrl: '../../views/document-list.html',
    styleUrls: ['../../styles/document-list.css'],
    directives: [NgIf, RouterLink]
})
export class DocumentListComponent implements OnInit {

    documentList: DocumentListElement[];
    errorMessage: string;


    constructor(
        private documentListElementService: DocumentListElementService,
        private router: Router
    ) { }

    getDocuments() {
        this.documentListElementService.getDocumentListElements().then(
            documents => this.documentList = documents,
            error => this.errorMessage = <any>error);
    }

    openDocument(id: string) {
        this.router.navigate(['DocumentReader', { id: id }]);
    }

    ngOnInit() {
        this.getDocuments();
    }
}