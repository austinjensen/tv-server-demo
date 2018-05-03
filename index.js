const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

const inMemoryDatabase = {
    shows: [
        {
            name: 'Walking Dead',
            rating: 4,
            image: 'https://pbs.twimg.com/profile_images/956941358219931649/2rsLjOg-_400x400.jpg'
        },
        {
            name: 'Sing',
            rating: 1,
            image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQeTMzh3aGw46IVUdS6N2tToanuLOc9dO7f6CgWVQlq1laJjuXa'
        },
        {
            name: 'The Office',
            rating: 2,
            image: 'https://media.gq.com/photos/5a53e9fca929253c4d20a04f/3:2/w_800/does-the-office-hold-up-gq.jpg'
        }
    ]

}

app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body
    inMemoryDatabase.shows.push(newShow)
    res.send(newShow)
})
app.listen('3001', () => console.log('running on port 3001'))