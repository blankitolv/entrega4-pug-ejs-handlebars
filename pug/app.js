const express = require ('express')
const app = express();
const PORT = process.env.PORT || 8080
const path = require('path')

const homeRouter = require('./routes/home')
// seteo que las vista se hagan en views
app.set('views', './views')
// y de esas vistas, que las haga pug
app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// establece la ruta estática donde va a servir index,nueva y result.html
app.use("/static", express.static(path.join(__dirname, 'public')));
// establece el root para las consultas
app.use("/", homeRouter)
app.listen(PORT,()=>{
     console.log (`Listening in port ${PORT}`)
})

