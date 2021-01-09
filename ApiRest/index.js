const express = require('express');
const app = express();
var colors = require('colors');

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(require('./src/routes/user'));

app.get('/', function(req, res){
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Punto de incicio GET'
    };
    res.send(respuesta);
});

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto'.bgBlue, app.get('port'));
});