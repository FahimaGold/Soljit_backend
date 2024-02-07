const { Router } = require('express'); 
const oAuthController = require('../controllers/oAuthController');
const router = Router();

router.post('/oauth2/token', oAuthController.getOAuthAccessToken);

module.exports = router;