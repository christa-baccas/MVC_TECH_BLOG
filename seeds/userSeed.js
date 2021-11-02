const { User } = require('../models');

const userData = [
    {
        username: "baccas",
        email: "christa@me.com",
        password: 'password123',
    },
    {
        username: "poche",
        email: "nicolle@me.com",
        password: 'password123',
    },
    {
        username: "jack",
        email: "jones@me.com",
        password: 'password123',
    },
    {
        username: "time",
        email: "lee@me.com",
        password: 'password123',
    },
]

const seedComments = () => User.bulkCreate(userData);

module.exports = seedComments;