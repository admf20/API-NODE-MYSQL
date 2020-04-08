const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', function (require, response) {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
        if (!err) {
            response.json(rows);
            console.log(response.json);
        } else {
            console.log("el error es",err);
        }
    });
});

router.get('/:id', function (require, response) {
    const { id } = require.params;
    mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            response.json(rows);
        } else {
            console.log("el error es",err);
        }
    });
});

router.post('/', function (require, response) {
    const { id, name, salary } = require.body;
    console.log(require.body);
    const query = `
        CALL Empleado_A_(?, ?, ?);
    `;
   mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            response.json({ Status: 'Empleado Guardo' });
        }else {
            console.log('Los motivos del problema es ',err);
        }
   });
});

router.put('/:id', function(require, response) {
    const { name, salary } = require.body;
    const { id } = require.params;
    const query = ` CALL Empleado_A_(?, ?, ?)`;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            response.json( {Status: 'Empleado Actualizado'} );
        }else {
            console.log("el error es",err);
        }
    });
});

router.delete('/:id', function(require, response) {
    const { id } = require.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            response.json( { Status: 'Empleado Eliminado' } );
        }else{
            console.log("el error es",err);
        }
    });
});

module.exports = router;


