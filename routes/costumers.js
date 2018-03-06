var express = require('express');
const CostumerController = require('../controllers/costumerController.js').CostumerController
var router = express.Router();


router.post('/add', CostumerController.createCostumer);

router.get('/', CostumerController.readCostumer);
router.get('/:_id', CostumerController.readOneCostumer);

router.put('/edit/:_id', CostumerController.updateCostumer);
router.delete('/delete/:_id', CostumerController.deleteCostumer);

module.exports = router;
