const express = require('express');
const router = express.Router();
var colors = require('colors');

const mysqlConnection = require('../database');

router.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(''.red , err);
        }
    });
});

router.get('/user/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE Id_User=?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(''.red ,err);
        }
    });
});

router.post('/user', (req, res) => {
    const {Id_User, Usuario, Contrasena, Tipo} = req.body;
    mysqlConnection.query('INSERT INTO usuario (Id_User, Usuario, Contrasena, Tipo) VALUES (?,?,?,?)', [Id_User, Usuario, Contrasena, Tipo], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User insert'});
        }else{
            console.log(''.red , err);
        }
    });
});

router.put('/user/:id', (req, res) => {
    const {id} = req.params;
    const {Usuario, Contrasena, Tipo} = req.body;
    mysqlConnection.query('UPDATE usuario SET Usuario=?, Contrasena=?, Tipo=? WHERE Id_User=?', [Usuario, Contrasena, Tipo, id], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User update'});
        }else{
            console.log(''.red, err);
        }
    });
});

router.delete('/user/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM usuario WHERE Id_User=?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User delete'});
        }else{
            console.log(''.red , err);
        }
    });
});

module.exports = router;