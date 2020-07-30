const db = require('./db')

async function addPassword(req, res) {
  const {
    body:{ password },
  } = req

  await db.password.insert({
    password,
  })

  res.sendStatus(204)
}

module.exports = { addPassword }
