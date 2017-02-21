const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bookRouter = require('./src/routes/bookRoutes');

app.use(express.static('public'));
app.use(express.static('client'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', bookRouter);
app.use('/about', bookRouter);
app.use('/shelf/', bookRouter);

app.listen(port, () => {
    console.log('Running server on port ' + port);
});
