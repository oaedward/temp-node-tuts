const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage')
  } else if (req.url === '/about') {
    res.end('This is a brief story about us')
  } else {
    res.end(
      `<h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Return to the homepage</a>`,
    )
  }
})

server.listen(5000)
