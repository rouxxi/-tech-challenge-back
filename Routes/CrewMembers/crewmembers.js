const crewmembers= {};
const connection = require('../../service/mysql/connection');

crewmembers.findAll = (req, res )=> {
    connection.query('SELECT * from member', (error, result)=> {
        error ? res.status(500).send(error) : res.status(200).send(result)
    })
}

crewmembers.oneMore = (req, res)=> {
    console.log(req.body);

    const {name} = req.body;
    connection.query('SELECT * from member WHERE name = ?', [name], (err, resu) => {
        if (err) {
            res.status(500).send(error);
        }else if (resu.length > 0) {
            res.status(200).send({
                msg: `Sorry but ${resu[0].name} is already in the crew!`,
                result: resu
            })
        }else {
            connection.query('INSERT into member set name = ? ', [name], (error, result)=> {
                error ? res.status(500).send(error) : res.status(200).send(result);
            })
        }
    })
    
}

module.exports = crewmembers;