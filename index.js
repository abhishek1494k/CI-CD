const app = require('express')();
const YAML = require('yaml')

app.get('/', function(req, res){
    // value=100;
    res.send('Hello World !!');

})

app.listen(8080,() => {
    console.log('App is live at 8080');   
})