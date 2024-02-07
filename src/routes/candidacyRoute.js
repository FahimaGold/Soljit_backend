const { Router } = require('express'); 
const candidacyController = require('../controllers/candidacyController');
const router = Router();

router.get('/candidacy/record', candidacyController.getCandidacyRecordDetails);
router.post('/candidacy/add', candidacyController.insertNewCandidate);
router.patch('/candidacy/update', candidacyController.updateCandidacyLastName)
module.exports = router;