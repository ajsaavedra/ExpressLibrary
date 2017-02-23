import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Book } from '../books/book';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LibraryServiceComponent {
    API_URL: string = 'http://localhost:3000/api';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) {}

    checkBook(id: string) {
        return this.http.get(this.API_URL + '/library/books/' + id).map(res => res.text());
    }

    createBook(book: Book) {
        return this.http.post(this.API_URL + '/library/createBook', JSON.stringify(book), this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addBookToShelf(bookID: string) {
        return this.http.post(this.API_URL + '/shelf/add', { "bookID" : bookID }, this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}