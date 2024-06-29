// function is a block of code designed to perform particular task
function OneplusAvg(x,y){
    return Math.round(1+(x+y)/2);
    console.log("Done");
}

// function should be invoked/called
const hello = ()=>{
    console.log("How are you I am fine");
    return "hi";
}

let a=1;
let b=3;
let c=4;

let v = hello();
console.log(v);
console.log("One plus average of a and b is ", OneplusAvg(a,b));
console.log("One plus average of b and c is ",OneplusAvg(b,c));
console.log("One plus average of c and a is ",OneplusAvg(a,c));

// arrow function
const sum = (p,q) =>{
    return p+q
}
console.log(sum(157,156))