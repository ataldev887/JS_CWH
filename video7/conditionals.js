let a = prompt("Hey whats your age?")
console.log(typeof a)
a = Number.parseInt(a) //used to convert string to number
console.log(typeof a)

if(a<0){
    alert("This is not a valid age");
}
else if(a<18){
    alert("You cannot think of driving");
}
else{
    alert("You can drive car");
}

console.log("You can" , (a<18? "Not drive":"Drive"))

