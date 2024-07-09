// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
console.log(ctitles)
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="green"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))