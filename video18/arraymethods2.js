let num = [1,2,3,4,5,6,7,8,9]
let num_more = [10,11,12,13,14,15,16,17]
/*
console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length)
*/

let newArray = num.concat(num_more)
console.log(newArray)

const compare = (a,b)=>{
    return b-a
}
let arr = [56,99,37,555,222,29,13,27]
arr.sort(compare) //it is sorting alphabetically considering it as string
arr.reverse()
console.log(arr)

// splice and slice
let num1 = [551,22,3,14,5,6,7,8,229]
let deleted = num1.splice(2,3,1021,1022,1023)   // at index 2 , (3,14,5) will be removed and 1021,1022,1023 will be added
console.log(deleted) // deleted elements in the form of array
console.log(num1)

const newNum = num1.slice(2)
console.log(newNum)
