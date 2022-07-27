const express = require('express');
const router = express.Router();
const linkControllers = require('../controllers/linksController');
const verifyToken = require('../middlewares/authJwt')

router.get('/', verifyToken, linkControllers.getLinks); 
router.get('/:id', verifyToken, linkControllers.getLinksId);
router.post('/', verifyToken, linkControllers.postLink);
router.delete('/:id', verifyToken, linkControllers.deletLink);
router.put('/:id', verifyToken, linkControllers.updateLink);



module.exports = router;