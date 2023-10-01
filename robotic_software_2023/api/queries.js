const mysql = require('mysql')
const connection = new mysql.createConnection({
    user: 'jojox', host: '127.0.0.1', database: 'robotcomp', password: 'grc', port: 3306
})

const getUsers = (request, response) => {
    connection.query('SELECT * FROM teams', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results)
    })
}

const getUseAmountOfMoneyById = (request, response) => {
    const id = request.params.id
    console.log("getUserById", id)
    connection.query(`SELECT amountofmoney FROM teams WHERE ID='${id + 1}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result)
    })
}

const getCurrentTeams = (request, response) => {
    connection.query('SELECT * FROM currentround', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results)
    })
}

const getCurrentTeamsById = (request, response) => {
    const id = parseInt(request.params.id)
    connection.query(`SELECT * FROM currentround WHERE id=${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results)
    })
}


const changeTeam = (request, response) => {
    const {displayID, newTeam, finalAmountOfPoints, currentTeam} = request.body
    const id = parseInt(request.params.id)
    connection.query(`UPDATE teams SET amountofpoints=amountofpoints+${finalAmountOfPoints} WHERE teamname='${currentTeam}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).end("added points to the teams table")
    })

    connection.query(`UPDATE currentround SET teamname='${newTeam}', amountofpoints=${0} WHERE id=${displayID + 1}`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).end('done update teamDisplay')
    })
}

const changeScore = (request, response) => {
    const {newScore} = request.body
    const id = parseInt(request.params.id)

    if (newScore < 0) {
        throw new Error("cannot have negative points")
    }

    connection.query(`UPDATE currentround SET amountofpoints = ${newScore} WHERE id=${id + 1}`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).end("done update scores")
    })
}

const purchaseItem = (request, response) => {
    const teamname = request.body.teamname
    const itemname = request.body.itemname
    const amount = request.body.amount
    const price = request.body.price
    let maxPerTeam = 0;

    console.log(price, "price", itemname)

    connection.query(`INSERT INTO purchases (teamname, itemname, amount, price) VALUES ('${teamname}', '${itemname}', '${amount}', '${price * amount}')`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).end("inserted purchase into DB")
    })

    connection.query(`UPDATE teams SET amountofmoney=amountofmoney-'${price * amount}' WHERE teamname='${teamname}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).end("updated teams")
    })
}

const refundItem = (request, response) => {
    const teamname = request.body.teamname
    const itemname = request.body.itemname
    const amount = request.body.amount
    const price = request.body.price
    let maxPerTeam = 0

    connection.query(`INSERT INTO refunds (teamname, itemname, amount, price) VALUES ('${teamname}', '${itemname}', '${amount}', '${price}')`, (error, result) => {
        if (error) {
            throw error
        }
        response.status("added into refunds")
    })

    connection.query(`UPDATE teams SET amountofmoney=amountofmoney+'${price * amount * 0.5}' WHERE teamname='${teamname}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status("refunded money *0.5")
    })
}

const getItemData = (request, response) => {
    const id = parseInt(request.params.id)
    connection.query(`SELECT * FROM items WHERE ID='${id + 1}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result)
    })
}

const getAllItems = (request, response) => {
    connection.query(`SELECT * FROM items`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result)
    })
}

const getTeamByPassword = (request, response) => {
    const password = request.params.id
    console.log("password", password)

    connection.query(`SELECT ID from teams WHERE password='${password}'`, (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result)
    })
}

module.exports = {
    getUsers,
    getUserById: getUseAmountOfMoneyById,
    getCurrentTeams,
    getAllItems,
    getCurrentTeamsById,
    changeTeam,
    changeScore,
    purchaseItem,
    refundItem,
    getItemData,
    getTeamByPassword
}