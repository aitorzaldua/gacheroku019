const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('mensaje Aitor 019');
 });

app.listen(process.env.PORT || 3002, () => {
    console.log('El server está arriba');
 });