// div h1 and script are children of body tag
// body head are children of html
// p and span are sibling because their parent is same

console.log(document.body.firstChild) //it will show text because there is text between body and div
// if there is no space it will show div
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)