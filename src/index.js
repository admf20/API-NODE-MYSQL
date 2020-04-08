const express = require('express');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//Routes
app.use(require('./routes/empleados'));

//Iniciando el servidor
app.listen(app.get('port'), function(require, respose){
    console.log("Corriendo el Servidor ", app.get('port')); 
}); 

