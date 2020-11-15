const http = require('http');
const fs   = require('fs');
const url  = require('url');

const server = http.createServer((req, res) => {

	const path = url.parse(req.url, true).pathname;

	fs.readFile(`./${path}`, (err, data) => {

		if(err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.write('<h1>File Not Found</h1>');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
		}

		res.end();
	});

});

server.listen(8080, () => console.log('Server running on port http://127.0.0.1:8080'));