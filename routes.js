const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/create-users" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Usernames</title></head>');
    res.write('<body><ul>');

    let usernames = ['User1', 'User2', 'User3']; // More appropriate placeholder names
    for (let name of usernames) {
      res.write(`<li>${name}</li>`);
    }

    res.write('</ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-users' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  return res.end();
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';