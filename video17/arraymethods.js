let num = [1,2,3,34,5,6]
let b = num.toString()
console.log(b, typeof b)
let c = num.join("-")
console.log(c, typeof c)

let r = num.pop()
console.log(num,r)

let s = num.push(56)
console.log(num,s)

let t = num.shift() //removes the element from the first position of array
console.log(t,num)

let k = num.unshift(78) //adds the element in the front
console.log(num)