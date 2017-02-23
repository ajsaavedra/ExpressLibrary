var mysql = require('mysql');
var connection = require('../config/mysql');

var bookController = function (nav) {
    var createBook = function (req, res) {
        var id = req.body.id;
        var title = req.body.title;
        var author = req.body.author;
        var date = req.body.releaseDate;
        var genre = req.body.genre;
        var pages = req.body.pages;
        var rating = req.body.rating;
        var description = req.body.description;
        var poster_url = req.body.posterUrl;

        connection.query(
            'INSERT INTO books VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [id, title, author, date, genre, pages, rating, description, poster_url],
            function(err, rows) {
                if (!err) {
                    res.send(JSON.stringify(rows));
                } else {
                    res.send({"Error": "Could not create book"});
                }
            }
        );
    };

    var shelveBook = function(req, res) {
        // var user_id = req.body.userID;
        var book_id = req.body.bookID;
        connection.query(
            'INSERT INTO shelved_books(user_id, book_id) VALUES(?, ?)', [1, book_id],
            function(err, rows) {
                if (!err) {
                    res.send(rows);
                } else {
                    res.send({"Error": "Could not shelve book"});
                }
            }
        );
    };

    var getUserBooks = function(req, res) {
        connection.query(
            'SELECT * FROM books WHERE books.id IN (SELECT book_id FROM shelved_books WHERE user_id=?)', [1],
            function(err, rows) {
                if (!err) {
                    res.render('shelf', {
                        nav: nav,
                        books: rows
                    });
                } else {
                    res.send({"Error": "Could not get user books"});
                }
            }
        );
    };

    var renderBookById = function(req, res) {
        let id = req.params.id;
        connection.query(
            'SELECT * FROM books where id =?', [id],
            function(err, rows) {
                if (!err) {
                    res.render('book', {
                        nav: nav,
                        book: rows[0]
                    });
                } else {
                    res.send({"Error": "Could not get book"});
                }
            }
        );
    };

    var getBookById = function(req, res) {
        let id = req.params.id;
        connection.query(
            'SELECT * FROM books where id =?', [id],
            function(err, rows) {
                if (!err) {
                    res.send(JSON.stringify(rows[0]));
                } else {
                    res.send({"Error": "Could not get book"});
                }
            }
        );
    };

    return {
        createBook: createBook,
        shelveBook: shelveBook,
        getUserBooks: getUserBooks,
        renderBookById: renderBookById,
        getBookById: getBookById
    };
};

module.exports = bookController;
