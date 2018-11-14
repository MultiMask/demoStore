var express = require("express");
var bodyParser = require('body-parser');
var app = express();

const redis = require('redis');

var host = 'redis';
var port = 6379;

var client = redis.createClient(port, host);

client.on('error', (err) => {
  console.log("Error " + err);
});

app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.send("v1");
});

app.post("/orders", function(req, res) {
  const {id} = req.body
  console.log("id", id)
  if (!id) return res.sendStatus(400)
  
  client.set(id, JSON.stringify(req.body), redis.print);

  res.sendStatus(200)
});

app.get("/orders/:id", function(req, res) {
  return client.get(req.params.id, (err, result) => {
    if (result) {
      const resultJSON = JSON.parse(result);
      return res.status(200).json(resultJSON);
    } else {
      return res.sendStatus(404);
    }
  }) 
});

app.listen(8000, function() {
  console.log("Example app listening on port 8000!");
});
