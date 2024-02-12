const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle requests for different URLs
    if (req.url === '/' || req.url === '/index.html') {
        // Read the index.html file
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        // Return a simple about page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1><p>This is a simple web server created with Node.js(this is a server)</p>');
    } else {
        // Return a 404 Not Found error for other URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
