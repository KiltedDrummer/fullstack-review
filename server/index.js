const express = require('express');
let app = express();
let getReposByUsername = require('../helpers/github.js');
let { save } = require('../database/index.js');
let { get } = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  console.log('server', req.body, req.params);

  // passes mongoose save function as call back to execute with the returned data 
  getReposByUsername(req.params, save);

  // may have to rework, I think this response will send before the data is finished writing
  // and thus trigger the get too soon.
  res.send(305);

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  // send query request to mongoose for results limit 25, sort {updated_at : -1}
  // I believe mongoose requests funtion with .then, but are not really promises
  get().then(() => {
  	res.send(306);
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
  console.log()
});

