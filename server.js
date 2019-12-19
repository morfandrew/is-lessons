const {createServer} = require('http');
const {resolve} = require('path');
const {readFile} = require('fs');
const port = 80;

const listener = createServer().listen(port, () => console.log(`Server is running on http://localhost:${port}/index.html`));

const handleError = (error, response) => {
    if (error.code === 'ENOENT') {
        response.writeHead(404);
        response.end()
    } else {
        response.writeHead(500);
        response.end(`Sorry, check with the site admin for error: ${error.code}`);
        response.end();
    }
};

listener.on('request', (request, response) => {
    
    const relativePath = request.url === '/' ? './index.html' : `./${request.url}`;
    const filePath = resolve(__dirname, './assets', relativePath);
    readFile(filePath, (error, content) => {
        if (error) {
            handleError(error, response);
        } else {
            response.end(content, 'utf-8');
        }
    });
});