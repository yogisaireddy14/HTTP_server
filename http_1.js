var http = require('http');

http.createServer(function (req, res) {
  res.write(`<html>
<body>

<h1>Heading</h1>
<p>paragraph</p>

</body>
</html>`);
  res.end();
}).listen(9000); 