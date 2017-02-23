const express = require('express');
const bookRouter = express.Router();
const bodyParser = require('body-parser');
const navbarLinks = [
    {Link: '/', Text: 'Home'},
    {Link: '/about', Text: 'About'},
    {Link: '/shelf', Text: 'My Bookshelf'}
];
const bookController = require('../controllers/bookController')(navbarLinks);
bookRouter.use(bodyParser.json());

bookRouter.route('/')
    .get((req, res) => {
        res.render('index', {nav: navbarLinks});
    });

bookRouter.route('/about')
    .get((req, res) => {
        res.render('about', {nav: navbarLinks});
    });

bookRouter.route('/shelf/')
    .get(bookController.getUserBooks);

bookRouter.route('/shelf/:id')
    .get(bookController.renderBookById);

bookRouter.route('/api/shelf/add')
    .post(bookController.shelveBook);

bookRouter.route('/api/library/createBook')
    .post(bookController.createBook);

bookRouter.route('/api/library/books/:id')
    .get(bookController.getBookById);

module.exports = bookRouter;