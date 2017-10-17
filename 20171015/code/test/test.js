module.exports = 'haha';
console.log(module.exports); //haha
console.log(exports); //{}


// exports = 'haha';
// console.log(module.exports); //{}
// console.log(exports); //haha




// exports = module.exports = {};   exports是module.exports的别名
// require的时候，用的是module.exports