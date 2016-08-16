import {Component, OnInit} from '@angular/core';
import {DocumentService} from './Service/document.service';
import {Document} from './Entity/document';

@Component({
    selector: 'list-documents',
    providers: [DocumentService],
    templateUrl: '../views/listdocuments.html',
})
export class ListDocumentComponent implements OnInit {
    documents: Document[];
    errorMessage: string;


    constructor(private documentService: DocumentService) { }

    updateList() {
        this.documentService.getDocuments().subscribe(
            documents => this.documents = documents,
            error => this.errorMessage = <any>error);
    }

    getDocuments() {
        this.documentService.getDocuments().subscribe(
            documents => this.documents = documents,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getDocuments();
    }
}