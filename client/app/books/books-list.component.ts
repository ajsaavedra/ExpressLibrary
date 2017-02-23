import { Component } from '@angular/core';
import { GoogleBooksServiceComponent } from '../services/googlebooks.service';
import { LibraryServiceComponent } from '../services/library.service';
import { Book } from './book';

@Component({
    selector: 'books-list',
    templateUrl: './app/books/books-list.component.html',
    styles: [`
        .search {
            color: black;
            font-size: 20px;
        }
        tr {
            background-color: #F7F7F9;
        }
        button {
            font-size: 14px;
            padding: 5px;
        }
    `]
})

export class BooksListComponent {
    books: Book[] = [];
    searchItem: string;
    imageWidth: number = 150;
    imageMargin: number = 2;
    timeout = null;
    showDescription: boolean = false;

    constructor(private googleBooksService: GoogleBooksServiceComponent,
                private libraryService: LibraryServiceComponent) {}

    keystrokeListener() {
        if (this.timeout) { clearTimeout(this.timeout); }
        this.timeout = setTimeout(() => {
            this.books = [];
            if (this.searchItem.length > 0) {
                this.searchBook();
            }
        }, 500);
    }

    searchBook() {
        this.googleBooksService.getBooksByTitle(this.searchItem).subscribe(results => {
            for (let book of results.items) {
                try {
                    var bookData = book.volumeInfo;
                    var newBook = new Book(book.id, bookData.title, bookData.authors[0], bookData.publishedDate,
                                        bookData.categories[0], bookData.pageCount, bookData.averageRating, 
                                        bookData.description, bookData.imageLinks.thumbnail);
                    this.books.push(newBook);
                } catch (e) {
                    continue;
                }
            }
        })
    }

    toggleDescription() {
        this.showDescription = !this.showDescription;
    }

    createBook(event, book) {
        this.libraryService.checkBook(book.id).subscribe(lookup => {
            if (lookup === "") {
                this.libraryService.createBook(book).subscribe(create => {
                    this.addToShelf(event, book);
                });
            } else {
                this.addToShelf(event, book);
            }
        });
    }

    addToShelf(event, book) {
        this.libraryService.addBookToShelf(book.id).subscribe(shelve => {
        });
    }
}