const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const path = require('path');

const app = express()

//mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://promo:promo@cluster0.gzwgqmr.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log('Conectado com sucesso');
}).catch(function(err){
    console.log(err.message);
})

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/',(req,res)=>{
    res.send('funcionando!');
})


app.listen(5000,()=>{
    console.log('server rodando!');
})