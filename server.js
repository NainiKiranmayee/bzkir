const express = require('express')
cnst path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.get(express.static(__dirname + '/dist/ngproject'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/ngproject/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

