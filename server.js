const express = require('express')

const app = express()
const port = process.env.PORT || 9999
const fileName = 'index.html'

app.get('/', (req, res) => {
  const options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})


app.listen(port, () => {
    console.log(__dirname);
	console.log("Listen: " + port);
})

