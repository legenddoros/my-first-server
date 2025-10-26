// Import the built-in http and fs modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port and hostname
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Serve an HTML file for the root route
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error loading index.html');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    // 404 for any other route
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
