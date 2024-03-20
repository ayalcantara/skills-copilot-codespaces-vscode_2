// create web server
// create a route that accepts a POST request to /comments
// and saves the comment in the comments array
// if the request is successful, send a response with a status code of 201
// and the comment in the body of the response
// if there is an error, send a response with a status code of 400
// and an error message in the body of the response

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [];

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  if (comment) {
    comments.push(comment);
    res.status(201).send(comment);
  } else {
    res.status(400).send('error');
  }
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});