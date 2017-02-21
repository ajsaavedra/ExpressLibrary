import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleBooksServiceComponent {
    API_KEY: string = YOUR_KEY_HERE;
    constructor(private http: Http) {}

    getBooksByTitle(title: string) {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' +
            title.replace(" ", "+") + '&key=' + this.API_KEY).map(res => res.json());
    }
}