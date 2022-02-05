require('dotenv').config();
const express = require('express');
const router = require('./routers/index');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api', router);

let port = process.env.PORT || 8080;

server.get('/', (req, res) => {
    res.json({mensaje: 'Funcionamiento correcto'});
});

const app = server.listen(port, ()=>{
    console.log(`Servidor corriendo en ${port}`);
});

app.on('error', (error)=>{
    console.log(`Error: ${error}`);
});