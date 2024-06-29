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