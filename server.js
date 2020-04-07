const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales')
    //express hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home.hbs', { nombre: 'Darwin Xavier' });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', { nombre: 'Darwin Xavier' });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});