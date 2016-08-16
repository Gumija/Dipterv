import {Component} from '@angular/core';
import {DocumentListComponent} from './document-list/document-list.component';
import {DocumentReaderComponent} from './document-reader/document-reader.component';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {NavBarComponent} from './nav-bar.component';


@Component({
    selector: 'my-app',
    templateUrl: '../views/app.html',
    providers: [],
    directives: [
        DocumentListComponent,
        ROUTER_DIRECTIVES,
        NavBarComponent
    ]    
})
@RouteConfig([
    {
        path: '/documents',
        name: 'DocumentList',
        component: DocumentListComponent,
        useAsDefault: true
    },
    {
        path: '/document/:id',
        name: 'DocumentReader',
        component: DocumentReaderComponent
    }
])
export class AppComponent { }