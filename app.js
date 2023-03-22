
// let namea = prompt("Enter Your Name? ")
// let age = prompt("Enter Your age? ")
// let gender = prompt("Enter your gender? ")
// gender=gender.toLowerCase()

// gender= genderr(gender)
// let drink = prompt("What drink do you want Hot or Cold ?")

// let named = prompt("Name of your drink ?")
// alert("Your drink is being prepared .")
// console.log("Name : "+namea +"  Drink name : "+named)
// let a=[namea,gender,drink,named];
// for(let i=0;i<a.length;i++){
// console.log(a[i])
// }
//  function genderr( g){

//     while(g !="male" &&  g !="female"){
//         g = prompt("Please enter a correct gender")
    
//         }
//     if(g == "male"){
//         alert("Welcome Mr. "+namea )
    
//     }
//     else if(g == "female"){
//     alert("Welcome Ms. "+ namea)
//     }
// return g
    
// }
// let div=document.createElement("div");
// let par=document.createElement("p");
// par.textContent=`${namea}`;
// let ull =document.createElement("ul");
// let li1 =document.createElement("li");
// let li2 =document.createElement("li");
// let li3 =document.createElement("li");
// li1.textContent=`gender : ${gender}`;
// li2.textContent=`age : ${age}`;
// li3.textContent=`drink : ${drink} ${named}`;
// ull.appendChild(li1)
// ull.appendChild(li2)
// ull.appendChild(li3)
// div.appendChild(par)
// div.appendChild(ull)
// let main=document.getElementById("div")
// main.appendChild(div)


let form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
let name=e.target.username.value;
let age=e.target.userage.value; 
let drink=e.target.drinktype.value;
let drinktype=e.target.drinkname.value;
Write(name,age,drink,drinktype)
console.log(drink);

});

function Write  (name,age,drink,drinktype) {
let p=document.getElementById("p");
let p1=document.createElement("p");
let p2=document.createElement("p");
let p3=document.createElement("p");
let p4=document.createElement("p");
p1.textContent=name;
p2.textContent= age;
p3.textContent= drink;
p4.textContent= drinktype;
p.appendChild(p1);
p.appendChild(p2);
p.appendChild(p3);
p.appendChild(p4);
form.reset;
}