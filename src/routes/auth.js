/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/
const express = require("express"); 
const {check} = require("express-validator"); 

const {validarCampos} = require("../middlewares/validar-campos")
const {
    login,
  } = require("../controllers/auth");

  const router = express.Router();


  router.get("/", (req, response) => {
    response.json({
      ok: true,
      msg: "get",
    });
  });

  router.post(
  "/",
  [ //middlewares
    check("username","El usuario es obligatorio").isEmpty(),
    check("password","El password es obligatorio que cuenta con 3 cracteres").isLength({min:3}),
    validarCampos 
  ] ,
   login);


   module.exports = router;