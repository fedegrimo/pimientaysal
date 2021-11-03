const express = require("express");
const path = require("path");
const app = express();

const indexRouter = require('./routes/index');
const port = process.env.PORT ||  3000;

//Static Files
app.use (express.static(path.join('public')));
app.use('/stylesheets',express.static(path.join('public/css')));
app.use('/images',express.static(path.join('public/images')));


//Set Template Engine
app.set('views',path.join('views'));
app.set('view engine','ejs');

//Navigation
app.get('/',indexRouter);
app.get('/detalle',indexRouter);


app.listen(port,()=>{
    console.log("Server Start!");
})