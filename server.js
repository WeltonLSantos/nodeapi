const express = require ('express');
const mongoose = require ('mongoose');
const requiredDir = require ('require-dir');

//iniciando o App
const app = express('');
//aceita método post via json
app.use(express.json());

//iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi",{
  useUnifiedTopology: true, 
  useNewUrlParser: true
});
requiredDir('./src/models/');


// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);