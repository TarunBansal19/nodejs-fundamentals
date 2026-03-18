// my-express : wrapper of http module which is similar to express
const http = require('http');

class app{
    constructor() {
        this.routes = {
            GET: {},
            POST: {},
            PUT: {},
            DELETE: {}
        }
    }
    get(path , handler) {
        this.routes.GET[path] = handler;
    }
    post(path , handler) {
        this.routes.POST[path] = handler;
    }
    put(path , handler) {
        this.routes.PUT[path] = handler;
    }
    delete(path , handler) {
        this.routes.DELETE[path] = handler;
    }
    listen(port , callback){
        const server = http.createServer((req , res) => {
            const method = req.method;
            const url = req.url;
            const handler = this.routes[method][url];
            if(handler){
                handler(req,res);
            }
            else{
                res.statusCode = 404;
                res.end('Not Found');
            }
        })
        server.listen(port,callback);
    }    
}
module.exports = app; 