require('./config/config');

const express = require('express');
const moongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


//Configuracion global de rutas
app.use(require('./routes/index'));


moongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});