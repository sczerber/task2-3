const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class User {
    constructor(name, username, email) {
        this.name = name
        this.username = username
        this.email = email
        this.id = uuidv4()
    }

    static all() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'db', 'users.json'),
                'utf-8',
                (e, content) => {
                    if (e) {
                        reject(e)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    async save() {

        const users = await User.all()

        users.push({
            name: this.name,
            username: this.username,
            email: this.email,
            id: this.id,
        })

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'db', 'users.json'),
                JSON.stringify(users),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static async getById(id) {
        const users = await User.all()
        return users.find((u) => u.id == id)
    }

    static async update(id, data) {
        const users = await User.all()
        const idx = users.findIndex((u) => u.id == id)
        const updatedCourse = {
            id: id,
            name: data.name,
            username: data.username,
            email: data.email,
        }
        users[idx] = updatedCourse
        new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'db', 'users.json'),
                JSON.stringify(users),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
        return updatedCourse
    }

    static async destroy(id) {
        const users = await User.all()
        const idx = users.findIndex((u) => u.id == id)
        users.splice(idx, 1)
        new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'db', 'users.json'),
                JSON.stringify(users),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

}



module.exports = User


