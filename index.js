const app = require('express')();
const YAML = require('yaml')

app.get('/', function(req, res){

    res.send('Hello World !!');
    value=100;
})

app.listen(8080,() => {
    console.log('App is live at 8080');   
})