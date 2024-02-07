const { Router } = require('express'); 
const candidacyController = require('../controllers/candidacyController');
const router = Router();

router.get('/candidacy/record', candidacyController.getCandidacyRecordDetails);

module.exports = router;