const express = require ('express');
const app = express();
// handlebars
const { engine } = require('express-handlebars')
const PORT = process.env.PORT || 8080;
const homeRouter = require ('./routes/home');
const path = require ('path');

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));

app.engine("hbs",
   engine({
       extname: ".hbs"
   })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/',homeRouter);

app.listen(PORT,()=>{
   console.log(`Listening on PORT: ${PORT}`);
})