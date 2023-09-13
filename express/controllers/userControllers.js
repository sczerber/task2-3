const User = require('../models/user')

const all = async (req, res) => {
    const users = await User.all()
    res.json(users)
}

const store = async (req, res) => {
    const user = new User(req.body.name, req.body.username, req.body.email)
    await user.save()
    res.status(201).json(user)
}

const show = async (req, res) => {
    const user = await User.getById(req.params.id)
    res.json(user)
}

const update = async (req, res) => {
    const user = await User.update(req.params.id, req.body)
    res.json(user)
}

const destroy = async (req, res) => {
    await User.destroy(req.params.id)
    res.status(204).send()
}

module.exports = { all, store, show, update, destroy }
