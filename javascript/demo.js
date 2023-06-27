
alert("Introduction to JS")
alert("HI Manav Sharma");
prompt("How are you");

console.log("Welcome to console");
alert("operation")
var a =prompt("Enter the 1st number = ");
var b =prompt("Enter the 2nd number = ");
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);
alert(a>b);
alert(a<b);
alert(a==b);
alert("conditionl Statements ");
var age = prompt("Enter your age ")
if(age>=18){
    alert("YOU ARE ELIGIBLE FOR WEBSITE");
}else{
    alert("THIS WEBSITE IS NOT APPLICABLE ");
}
alert("Loop statement");
alert("While loop");
var a=1;
while(a<=5){
    alert(a);
    a++;
}
alert("For loop");
var a;
for(a=1;a<=5;a++){
    alert(a);
}
alert("FUNTION")
alert("SWAP FUNTION")

function swap(){
    var a=10,b=20,c;
    alert("value of a = "+a)
    alert("value of b = "+b);
    
    c=a;
    a=b;
    b=c;
    alert("After SWAP");
    alert("value of a = "+a);
    alert("value of b = "+b);

}
swap();

function Myname(name="Manav"){
    alert("HI"+name);
}

Myname();


alert("ARRAY");
var names =["Manav","Pranav","Sunny"];
alert(names);
names[2]="money";
alert(names);
names.pop()
alert(names);
names.push("Manas");
alert(names);
var item = [2,3,4,5,[6,7,8]]
alert(item);
alert(item[4]);
for(it of item){ // 1st method 
    alert(it);
}
item.forEach(alert); // 2nd method 

alert("Object");
var person = { 
name :"Manav SHARMA",
DOB : "02/08/2000" ,
address: "171-A POCKET-12 Jasola Vihar",
study: function(){
alert(" BTECH CSE IN JEMTEC 2ND YEAR");
alert(this.address.length);
alert(this.name.split(" ")[1]);
}
}
alert(person[`name`]);
for(var key in person) {
    alert(key); 
    alert(person[key]);

}
person.study();
document
console.dir(document);
var p = document.querySelector("h1")
p.addEventListener('click',function(){
    p.style.color = "red"
})

