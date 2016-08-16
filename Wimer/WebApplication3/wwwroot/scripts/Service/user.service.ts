import {Injectable} from '@angular/core';
import {User} from '../Entity/user';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private heroesUrl = 'api/Users';  // URL to web api

    getUsers(): Observable<User[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        var list:User[] = [];
        for (var u in body) {
            var user = new User();
            user.id = body[u].Id;
            user.name = body[u].Name;
            list.push(user);
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