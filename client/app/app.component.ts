import { Component } from '@angular/core';
import { GoogleBooksServiceComponent } from './services/googlebooks.service';
import { LibraryServiceComponent } from './services/library.service';

@Component({
    selector: 'my-app',
    template:`
        <books-list></books-list>
    `,
    providers: [ GoogleBooksServiceComponent, LibraryServiceComponent ]
})

export class AppComponent{}