export class Book {
    id: string;
    title: string;
    author: string;
    releaseDate: string;
    genre: string;
    pages: number;
    rating: number;
    description: string;
    posterUrl: string;

    constructor(id: string, title: string, author: string, releaseDate: string,
        genre: string, pages: number, rating: number,
        description: string, posterUrl: string) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.releaseDate = releaseDate;
            this.genre = genre;
            this.pages = pages;
            this.rating = rating;
            this.description = description;
            this.posterUrl = posterUrl;
    }
}