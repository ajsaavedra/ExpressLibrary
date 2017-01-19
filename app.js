const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const navbarLinks = [
    {Link: '/', Text: 'Home'},
    {Link: '/about', Text: 'About'},
    {Link: 'shelf', Text: 'My Bookshelf'}
];

var bookRouter = express.Router();
var booksList = [
    { title: "The Sun Also Rises", author: 'Earnest Hemingway'},
    { title: "Sula", author: 'Toni Morrison'},
    { title: "Harry Potter", author: 'J. K. Rowling' }
];

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/')
    .get((req, res) => {
        res.render('index', {nav: navbarLinks});
    });

bookRouter.route('/about')
    .get((req, res) => {
        res.render('about', {nav: navbarLinks});
    });

bookRouter.route('/shelf')
    .get((req, res) => {
        res.render('shelf', {nav: navbarLinks, books: booksList});
    });

app.use('/', bookRouter);
app.use('/about', bookRouter);
app.use('/shelf', bookRouter);

app.listen(port, () => {
    console.log('Running server on port ' + port);
});

app.get('/', (req, res) => {
    res.render('index', {nav: navbarLinks});
});
