console.log(console)

console.error("This is an error")

console.assert(55>56) //assertion failed
console.assert(55<56) //working fine

//console.clear() //used to clear the console

marks = {
    'Dev' : 95,
    'Harry' : 89,
    'Neha' : 70,
    'Raja' : 50
}

console.table(marks)

//to show warning
console.warn("Hey dont drink alcohol")

// used to calculate time of particular code
// console.time("ForLoop")
// for(let i=0;i<10000;i++){
//     console.log(233)
// }
// console.timeEnd("ForLoop")

//we can similarly check for while loop
// console.time("WhileLoop")
// let i=0;
// while(i<10000){
//     console.log(233)
//     i++;
// }
// console.timeEnd("WhileLoop")

console.table(console)