const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Message Page</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
  res.write('</hmtl>');
  return res.end();
  }
  if (url === '/message' && method === 'POST') {
  // before writing to the file we need to request data adding an Event Listener, also function to be executed for every incoing data piece
    const body = [];
    req.on('data', (chunk) => {
    console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, (err) => {
              res.statusCode = 302;
              res.setHeader('Location', '/');
              return res.end();
              });
    });
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<hmtl>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>From server</h1></body');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;
exports.someText = "text";