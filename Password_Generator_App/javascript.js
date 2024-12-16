
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
a=Math.random()// generate 0 to 1 floting point numbers
randam=Math.random()*uppercase.length //generate 0 to lenght of uppercase floting point number
randam=Math.floor(randam) //generate integer number b/w 0 to lenght of uppercase
console.log(randam) //print index value.
console.log(uppercase[randam])