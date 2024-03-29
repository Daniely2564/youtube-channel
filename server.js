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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const mainRouter = require('./routes/main');
app.use('/',mainRouter);

const channelRouter = require('./routes/channels');
app.use('/channel',channelRouter);

const contactRouter = require('./routes/contact');
app.use('/contact',contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('The server is running on', PORT);
});


