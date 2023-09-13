var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', userController.all);
router.post('/', userController.store);
router.get('/:id(\\d+)',  userController.show);
router.get('/staticdata', (req, res) => {
    res.json({a:1})
});
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy)

module.exports = router;
