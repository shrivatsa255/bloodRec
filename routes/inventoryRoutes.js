const express = require('express')
const authentMiddleware = require('../middlewares/authentMiddleware')
const{
    createInventoryController, getInventoryController, 
} = require('../controllers/inventoryController');

const router = express.Router();

//routes
//ADD INVENTORY || POST 
router.post('/create-inventory', authentMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authentMiddleware, getInventoryController)

module.exports = router;