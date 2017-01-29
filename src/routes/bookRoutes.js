const express = require('express');
const bookRouter = express.Router();
var booksList = [
    { id: 0, title: "The Sun Also Rises", author: 'Earnest Hemingway'},
    { id: 1, title: "Sula", author: 'Toni Morrison'},
    { id: 2, title: "Harry Potter", author: 'J. K. Rowling' }
];
const navbarLinks = [
    {Link: '/', Text: 'Home'},
    {Link: '/about', Text: 'About'},
    {Link: '/shelf', Text: 'My Bookshelf'}
];

bookRouter.route('/')
    .get((req, res) => {
        res.render('index', {nav: navbarLinks});
    });

bookRouter.route('/about')
    .get((req, res) => {
        res.render('about', {nav: navbarLinks});
    });

bookRouter.route('/shelf/')
    .get((req, res) => {
        res.render('shelf', {nav: navbarLinks, books: booksList});
    });

bookRouter.route('/shelf/:id')
    .get((req, res) => {
        let id = req.params.id;
        res.render('book', {nav: navbarLinks, book: booksList[id]});
    });

module.exports = bookRouter;