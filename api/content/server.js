const fetch = require('node-fetch');
const express = require('express');

// const dev = process.env.NODE_ENV !== 'production';

const http = require("http");

const hostname = "localhost";
const port = 4000;


const app = express();

app.get('/', (req, res) => {
  const slug = req.params.slug || false;

  fetch('localhost:1337/api/movies', {
      method: 'get',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => res.json()).then(data => console.log(data))

  console.log('slug', slug);
})

// Prints a log once the server starts listening
app.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})



