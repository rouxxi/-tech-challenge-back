const router = require('express').Router();
const crewmembers = require('./CrewMembers/crewmembers.js')

router.get('/crewmembers', crewmembers.findAll);
router.post('/crewmembers', crewmembers.oneMore);

module.exports = router;