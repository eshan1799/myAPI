const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
const port = 3000;

server.use(cors());
server.use(bodyParser.text());

server.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`));

const recipes = ['muffins', 'cookies'];

server.get('/', (req, res) => res.send(JSON.stringify(recipes)));
server.post('/', (req, res) => res.send({message: '/recipes was called'}))

server.post('/', (req, res) => {
    const newRecipe = JSON.parse(req.body);
    cats.push(newRecipe);
    res.send({message: `${newRecipe} successfully added to our collection.`})
})