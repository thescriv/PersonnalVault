const monk = require('monk')
const config = require('../config')

const db = monk(config.MONGO_URL)

const password = db.get('password')

module.exports = {
    password
}