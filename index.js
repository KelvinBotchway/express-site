const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}`))