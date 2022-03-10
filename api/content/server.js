const express = require('express');
const dotenv = require('dotenv').config({path: `${__dirname}/../../cms/.env`});

const fetch = require('node-fetch');

const hostname = "0.0.0.0";
const port = 4000;

const app = express();

app.use('/content', (req, res) => {
  // const slug = req.params.slug || false;
  fetch('http://host.docker.internal:1337/api/movies').then(res => res.json()).then(data => {
    if (!data.data) {
      res.status(404).send('No movies found');
      return;
    }

    if (!data.data.length > 0) {
      res.status(404).send('No movies found');
      return;
    }
  
    res.status(200).send(data);
  }).catch((e) => {
    res.status(500).send({error: e.message});
    return;
  })
})

// Prints a log once the server starts listening
app.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})



