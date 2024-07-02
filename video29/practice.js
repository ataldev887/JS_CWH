let runAgain = true;

const canDrive = (age)=>{
    return age>18?true:false
}
while(runAgain){
let age = prompt("Enter the age")
age = Number.parseInt(age)
if(age<0){
    console.error("Please Enter the valid age")
    break;
}
if(canDrive(age)){
    alert("Yes you can drive")
}else{
    alert("you cannot drive")
}
runAgain = confirm("Do you want to play again")
}