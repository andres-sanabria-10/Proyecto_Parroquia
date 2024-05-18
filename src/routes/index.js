const router = require("express").Router();
const { renderFile } = require("ejs");
const path = require("path");
const fs = require("fs");


router.get("/", (req, res) => {
    res.render("index.ejs");
    
  });

  router.get("/noticias", (req, res) => {
    res.render("noticias.ejs");
  });

<<<<<<< HEAD
  router.get("/ver", (req, res) => {
    res.render("Admin.ejs");
  }); 
=======
  // Redirecciona a la pagina de la secretaria.ejs
  router.get("/ver", (req, res) => {
    res.render("secretaria.ejs");
  });


>>>>>>> 92c41566b998f16237451666c44914507fb5f220
  module.exports = router;