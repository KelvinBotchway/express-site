const express = require('express')
const app = express();

app.use(express.static('files'));


app.get('/', (req, res) => {
  res.send('Hello World! This is my first website')
});

app.get('/home', (req,res)=> {
    res.sendFile(__dirname + '/page.html')
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
});