const express = require('express');
var bodyParser = require('body-parser');

const path = require('path');

const app = express();


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