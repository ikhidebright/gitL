const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.listen(7000, function () {
    console.log('Port started at port:' + 7000)
})