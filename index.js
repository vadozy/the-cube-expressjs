const express = require('express')
const app = express()

app.use('/json/files/topsecret', express.static('static'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000, () => console.log('Server ready'))