const express = require("express"); // import express
const Product = require('../models/product');
const newProducts = require('../models/seed');




/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////





//////////////////////////////////////////////
// Seed
//////////////////////////////////////////////
router.get('/', async (req, res) => {
 
  try {
    const seedItems = await Product.create(newProducts)
    res.send(seedItems)
    console.log(seedItems)
  } catch (err) {
    res.send(err.message)
  }
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;