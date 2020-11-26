'use strict'

const app = require('express')()
const compression = require('compression')
const fs = require('fs')
const sharp = require('sharp')
const images = require('./src/images.json')

app.use(compression())

app.get('/images', ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images

  return res.status(200).json(i)
})

app.get('/resize', ({ query }, res) => {
  const readStream = fs.createReadStream(`./public${query.src}`)
  let transform = sharp().resize(parseInt(query.size) || 700)

  return readStream.pipe(transform).pipe(res)
})

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n')
})
