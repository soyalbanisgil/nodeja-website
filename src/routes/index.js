const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  /*esto es para enviar el archivo
      tomaen cuenta que la ruta debe ser absoluta
  
      res.sendFile(path.join(__dirname, 'views/index.html'));
      
      esta comentado porque ya no se va a utilizar esto sino el motor de plantillas
      */
  res.render("index.html", { title: "First Website with node" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact page" });
});

module.exports = router;
