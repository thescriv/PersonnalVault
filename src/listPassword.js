const db = require('./db')

async function listPassword (req, res) {
    const passwords = await db.password.find()

    console.log(passwords)

    res.json(passwords)
}

module.exports = {listPassword }