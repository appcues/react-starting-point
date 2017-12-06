const express = require('express')
const fs = require('fs')
const app = express()

app.get('/buildings/:buildingId', (req, res) => {
  fs.readFile(`./data/${req.params.buildingId}`, 'utf8', (err, data) => {
    if (err) {
      res.status(404)
      res.json({message: "Specified :buildingId not found"})
    } else {
      setTimeout(() => {
        res.header("Access-Control-Allow-Origin", "*")
        res.json({description: data})
      }, 1500)
    }
  });
});
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4000, () => console.log('Example app listening on port 4000!'))