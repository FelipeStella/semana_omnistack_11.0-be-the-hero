const express = require('express');//importar pacote
const cors = require('cors');
const routes = require('./routes');//forma de importar alguma variável de dentro de um arquivo.

const app = express();

app.use(cors());
app.use(express.json()); //Faz com que as requisições recebidas no formato Json sejam convertidas em algo intendivel pela aplicação
app.use(routes);//utilizando a variável

app.listen(3333);