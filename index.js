const express = require('express');
const app = express();
const cors= require('cors');
const routes = require('./Routes/route')

app.listen(process.env.PORT, () => {
    console.log(`Vous etes bien sur le port : ${PORT}`)
})

app.use(cors())
app.use(express.json());


app.use('/', routes);

module.exports = app;