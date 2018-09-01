const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
let { save } = require('../database/index.js');
let { get } = require('../database/index.js');


app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  // passes mongoose save function as call back to execute with the returned data 
  getReposByUsername.getReposByUsername(req.body.query, save);

  // may have to rework, I think this response will send before the data is finished writing
  // and thus trigger the get too soon.
  res.sendStatus(204);

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  // send query request to mongoose for results limit 25, sort {updated_at : -1}
  // I believe mongoose requests funtion with .then, but are not really promises
  get().then((results) => {
  	res.status(206).send(results)
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

