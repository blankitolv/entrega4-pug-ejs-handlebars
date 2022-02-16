const express = require ('express');
const app = express();
const path = require('path')

const homeRouter = require ('./routes/home')

const PORT = process.env.PORT || 8080;

app.set('views','./views')
app.set('view engine','ejs')

// midd
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter)

app.listen(PORT,
   ()=> console.log (`listening in port ${PORT}`));