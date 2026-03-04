const http = require('http');

function handlerFunction(req,res){
    if(req.method === 'GET' && req.url === '/')
    {
        res.end("Home page");
    }
    if(req.method === 'GET' && req.url === '/about-me')
    {
        res.end("About page");
    }
    
}
const server = http.createServer(handlerFunction);

server.listen(4000 , () => {
    console.log("Server is listening...")
})
