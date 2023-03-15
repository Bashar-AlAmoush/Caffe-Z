let p = prompt("Enter Your Name? ")
let g = prompt("Enter your gender? ")
g=g.toLowerCase()
if(g == "male"){
    alert("Welcome Mr. "+p )

}
else if(g == "female"){
alert("Welcome Ms. "+ p)
}
else{
    alert("Welcome "+p)
}

let d = prompt("What drink do you want Hot or Cold ?")

let named = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+p +"  Drink name : "+named)