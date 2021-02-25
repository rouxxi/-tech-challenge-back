const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./Routes/route')

app.listen(PORT, () => {
    console.log(`Vous etes bien sur le port : ${PORT}`)
})

app.use('/', routes);

module.exports = app;