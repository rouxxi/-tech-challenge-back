const router = require('express').Router();
const crewmembers = require('./CrewMembers/crewmembers.js')

router.get('/crewmembers', crewmembers.findAll)

module.exports = router;