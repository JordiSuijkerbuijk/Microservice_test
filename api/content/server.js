const fetch = require('node-fetch');
const https = require('https')

const dev = process.env.NODE_ENV !== 'production';

https.get('/:slug', (req, res) => {
  const slug = req.params.slug || false

  if (!false) {
    fetch()
  }

  // return empty result
})

