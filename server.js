const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const app = express();

//middlewares
app.engine('hbs',hbs({
    extname:'hbs',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials',
    defaultLayout:'layout',
}));
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));   

app.get('/',(req,res)=>{
    res.render('main/index');
})

app.listen(3000,()=>{
    console.log('The server is running');
})
