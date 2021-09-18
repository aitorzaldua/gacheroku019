const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('mensaje cambiado a las 19:55');
 });

app.listen(process.env.PORT || 3002, () => {
    console.log('El server está arriba');
 });