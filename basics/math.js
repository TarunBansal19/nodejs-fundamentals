function add(x , y){
    return x+y;
}
function sub(x , y){
    return x-y;
}

//exports.add = add; //named export
module.exports = sub; //default export -> 1 export per file
 //or exports.fxn = function(){}