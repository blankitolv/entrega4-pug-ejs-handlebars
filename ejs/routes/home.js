const path = require ('path')
const { Router } = require('express');
const router = Router();
const Contenedor = require ('../model/Contenedor')
const oneContainer = new Contenedor('./database/productos.txt')


//muestra los productos 
router.get ('/productos', async (req,res)=>{
     let response = JSON.parse (await oneContainer.getAll());
     if (response.length==0){
          res.render('noproducts')
     } else {
          res.render('index',{ response })
     }
})
router.post('/productos', async(req,res)=>{
     const obj = req.body 
     let response=null;
     if (obj.title != '' || obj.price != ''){
          response = await oneContainer.save(obj)
          res.redirect("../")
     } else {
          res.render("error")
     }
})
router.get('/',(req,res)=>{
     res.render('add')
})
module.exports = router;