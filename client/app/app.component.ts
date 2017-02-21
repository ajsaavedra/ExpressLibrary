import { Component } from '@angular/core';
import { GoogleBooksServiceComponent } from './services/googlebooks.service';

@Component({
    selector: 'my-app',
    template:`
        <books-list></books-list>
    `,
    providers: [ GoogleBooksServiceComponent ]
})

export class AppComponent{}