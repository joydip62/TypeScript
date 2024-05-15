const http = require('http');
const fs = require('fs');


// creating a server instance 
const server = http.createServer()

// listening on port
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

        // streaming file reading
    const readableStream = fs.createReadStream(__dirname + '/read.txt')
    readableStream.on('data', (chunk) => {
        res.write(chunk);
    })
    readableStream.on('end', () => {
        res.end("Hello World!");
    })
    
})

server.listen(5000, () => {
    console.log(`server lister on port ${server.port}`);
})