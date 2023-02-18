const app = require('express')();

app.get('/', function(req, res){
    value=100;
    res.send('Hello World !!');
})

app.listen(8080,() => {
    console.log('App is live at 8080');   
})