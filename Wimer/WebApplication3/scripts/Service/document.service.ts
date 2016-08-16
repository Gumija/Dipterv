import {Injectable} from '@angular/core';
import {Document} from '../Entity/document';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DocumentService {
    constructor(private http: Http) { }

    private heroesUrl = 'api/Documents';  // URL to web api

    getDocuments(): Observable<Document[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        var list: Document[] = [];
        for (var i in body) {
            var doc = new Document();
            doc.id = body[i].Id;
            doc.title = body[i].Path;
            list.push(doc);
        }
        return list;
    }
    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}