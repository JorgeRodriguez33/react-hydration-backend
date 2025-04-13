/* 
    Rutas de markas / Markers
    host + /api/markers

*/
const express = require("express"); 
const {getPlaces} = require("../controllers/markers")

const router = express.Router();

router.get("/getMarkers", getPlaces); // Define una ruta GET para "/places"



  module.exports = router;