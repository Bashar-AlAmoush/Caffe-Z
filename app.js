
let p = prompt("Enter Your Name? ")
let g = prompt("Enter your gender? ")
g=g.toLowerCase()

g= gender(g)
let d = prompt("What drink do you want Hot or Cold ?")

let named = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+p +"  Drink name : "+named)
let a=[p,g,d,named];
for(let i=0;i<a.length;i++){
console.log(a[i])
}
 function gender( g){

    while(g !="male" &&  g !="female"){
        g = prompt("Please enter a correct gender")
    
        }
    if(g == "male"){
        alert("Welcome Mr. "+p )
    
    }
    else if(g == "female"){
    alert("Welcome Ms. "+ p)
    }
    else{
        alert("Welcome "+p)
    }
return g
    
}