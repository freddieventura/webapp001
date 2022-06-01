// Script by freddieventura
// https://github.com/freddieventura/

const http = require('http');

const serverRef = http.createServer((req, res) => {
	console.log(req.headers);
	
});
serverRef.listen(3000);

console.log('Listening on port 3000...');

serverRef.on('connection' , (req, res) => {
	console.log('Connection established');
//	console.log(req.headers);
 });
