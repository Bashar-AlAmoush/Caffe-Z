
let namea = prompt("Enter Your Name? ")
let age = prompt("Enter Your age? ")
let gender = prompt("Enter your gender? ")
gender=gender.toLowerCase()

gender= genderr(gender)
let drink = prompt("What drink do you want Hot or Cold ?")

let named = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+namea +"  Drink name : "+named)
let a=[namea,gender,drink,named];
for(let i=0;i<a.length;i++){
console.log(a[i])
}
 function genderr( g){

    while(g !="male" &&  g !="female"){
        g = prompt("Please enter a correct gender")
    
        }
    if(g == "male"){
        alert("Welcome Mr. "+namea )
    
    }
    else if(g == "female"){
    alert("Welcome Ms. "+ namea)
    }
return g
    
}
let div=document.createElement("div");
let par=document.createElement("p");
par.textContent=`${namea}`;
let ull =document.createElement("ul");
let li1 =document.createElement("li");
let li2 =document.createElement("li");
let li3 =document.createElement("li");
li1.textContent=`gender : ${gender}`;
li2.textContent=`age : ${age}`;
li3.textContent=`drink : ${drink} ${named}`;
ull.appendChild(li1)
ull.appendChild(li2)
ull.appendChild(li3)
div.appendChild(par)
div.appendChild(ull)
let main=document.getElementById("div")
main.appendChild(div)


