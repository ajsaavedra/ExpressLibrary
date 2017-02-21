import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
     ],
    declarations: [
        AppComponent,
        BooksListComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}