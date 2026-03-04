//const fs = require('fs'); //'fs' is id for file system module in nodejs

//fs.writeFile('hello.txt', 'Hello World!' , ()=> {}) //doesnt work in browser but works in nodejs

//node internally wraps the code in a 'execute function'
// function execute(exports , require , module , __filename , __dirname){
//   const fs = require('fs');

//   fs.writeFile('hello.txt' , "Hello World!" , ()=> {})
//}

//console.log(require('fs'));
// console.log(__filename);
// console.log(__dirname);

//function require(moduleId){
//  //logic to find the module and return the exports
//}

// import and export is new way of doing things in nodejs. earlier we used to do it with the help of 'require' and  'module.exports'

//const math = require('./math');

// function require(id){
//     //if id starts with './' then its a local module ( user defined module)
//     //else its a core module ( inbuilt module) 
                    //if found , well and good
                    //else find it in node_modules folder
                    //else throw error
// }

// exports is an object  :
// const exports = {
//    key: value
//}

//console.log(math) //{ add: [Function: add], sub: [Function: sub] }
// console.log(math(2,3)) 


