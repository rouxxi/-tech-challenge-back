const express = require('express');
const app = express();
const cors= require('cors');
const PORT = 8080;
const routes = require('./Routes/route')

app.listen(PORT, () => {
    console.log(`Vous etes bien sur le port : ${PORT}`)
})

app.use(cors())
app.use(express.json());


app.use('/', routes);

module.exports = app;