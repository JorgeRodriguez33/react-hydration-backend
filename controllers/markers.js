const { initialPlaces } = require("../database/data"); 


const getPlaces = (req, res) => {
    res.status(200).json(initialPlaces); 
};


module.exports = { getPlaces };