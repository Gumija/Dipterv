import {Component} from '@angular/core';
import {NgForm} from '@angular/common';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'upload-component',
    templateUrl: '../views/upload.html',
    providers: [HTTP_PROVIDERS]
})
export class UploadComponent {
    public file: File;
    public url: string;
    headers: Headers;


    constructor(private http: Http) {
        console.log('file upload Initialized');
        //set the header as multipart        
        this.headers = new Headers();
        this.headers.set('Content-Type', 'multipart/form-data');
        this.url = 'http://localhost:8080/test';
    }

    //onChange file listener
    changeListener($event): void {
        this.postFile($event.target);
    }

    //send post file to server 
    postFile(inputValue: any): void {

        let formData: FormData = new FormData();
        let xhr: XMLHttpRequest = new XMLHttpRequest();

        for (let i = 0; i < inputValue.files.length; i++) {
            formData.append("uploads", inputValue.files[i], inputValue.files[i].name);
        }

        xhr.open('POST', 'api/Documents', true);
        xhr.send(formData);
        
    }
    
}