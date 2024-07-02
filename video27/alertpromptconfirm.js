alert("Enter the value of a")
let a = prompt("Enter a here")
a = Number.parseInt(a)
alert("type of a is "+ typeof a)
let write = confirm("Do you want it to write to the main page")
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write")
}