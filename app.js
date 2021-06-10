// Imports
//####################################
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;


// Adding folders to project
//####################################
app.use(express.static('public/css'));
app.use(express.static('public/img'));
app.use(express.static('public/js'));


// Setting up handlebars
//####################################
app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main',
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs'
}));


// Routes
//####################################
app.get('/', (req, res) => {
    res.render('landingpage', {
        data: "This is a message from app.js."
    });
});


// Custom 404 page
//####################################
app.use(function(req, res) {
    res.render('404-page');
});


// Starting server on port
//####################################
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});