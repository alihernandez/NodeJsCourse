const http = require("http");

const server = http.createServer((req, res) => {

const url = req.url;
if (url === '/') {
	res.write('<html>');
	res.write('<head><title>Message Page</title><head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
res.write('</hmtl>');
return res.end();
}
  res.setHeader('Content-Type', 'text/html');
  res.write('<hmtl>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h1>From server</h1></body');
  res.write('</html>');
  res.end();
});

server.listen(3000);