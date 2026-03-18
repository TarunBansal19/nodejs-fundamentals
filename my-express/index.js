const myExpress = require('./my-express');
const app = new myExpress();
const port = 3000;

app.get('/' , (req,res) => {
    res.end("Hello World");
})

app.listen(port , () => {
     console.log(`Example app listening on port ${port}`)
})