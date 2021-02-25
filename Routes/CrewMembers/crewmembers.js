const crewmembers= {};

crewmembers.findAll = (req, res )=> {
    res.status(200).send('everybody')
}

module.exports = crewmembers;