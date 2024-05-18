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

  router.get("/ver", (req, res) => {
    res.render("Admin.ejs");
  }); 
  module.exports = router;