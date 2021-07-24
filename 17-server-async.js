const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Request')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Listening on PORT 5000...')
})
// listen is Asynchronous