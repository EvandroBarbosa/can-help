const generateUniqueId = require('../util/generateUniqueId')
const cnn = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ongs = await cnn('ongs').select('*')

    return res.json(ongs)
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await cnn('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id });
  }
}
