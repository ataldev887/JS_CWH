/*
for loop
let sum = 0;
let n = prompt("Enter the number");
n = Number.parseInt(n);
for(let i=1;i<=n;i++){
    sum+=(i);
}
console.log(sum);
*/

// for in loop

let obj = {
    dev : 95,
    harry : 90,
    neha : 50,
    dhruv : 74,
    modi : 34
}

for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

// for of loop
for(let b of "Harry"){
    console.log(b);
}