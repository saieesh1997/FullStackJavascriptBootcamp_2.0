//Conditions

//If Else
//Switch Case
//Ternary Operator / Ternary Conditions

//Rating Mini App
console.log("-----------------------------------If Else-----------------------------------");
let rating =7;

if(rating==5){
    console.log("5 stars");
}else if(rating==4){
    console.log("4 Stars");
}else if(rating==3){
    console.log("3 Stars");
}else{
    console.log("i am else");
}

//Switch Case
console.log("-----------------------------------Switch Case-----------------------------------");

let user = 'Admin';

switch(user){
    case 'Admin':
        console.log("Redirect Him/Her to Admin Page");
        break;
    case 'User':
        console.log("Redirect Him/Her to the mentor Dashboard");
        break;

    default:
        console.log("I am Simple User");
}

console.log("----------------------------------Ternary Condition------------------------------------");
//Syantax--Condition?True:False

let raining = true;

raining? console.log("It is raining") : console.log("It is not raining");

//Array and Object
console.log("----------------------------------Array ------------------------------------");

let name =["Saieesh","Shubhash","Bishal","Prajwal","Anirudh"];

console.log(name);
console.log(name[3]);

console.log("----------------------------------objects ------------------------------------");

let bankaccount = {
    firstName : 'Nabeela',
    lastName : 'Lastname',
    mobileno : 454525552,
    balance: 100000,
};

console.log(bankaccount);
console.log(bankaccount.balance);


//Date and Math
console.log("----------------------------------Date ------------------------------------");
const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//Math
console.log("----------------------------------Math------------------------------------");
const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI));
console.log(Math.floor(9.4));
console.log(Math.ceil(9.4));

//Min and Max
console.log("----------------------------------Min Max------------------------------------");
console.log(Math.min(10,1,2,3,4));
console.log(Math.max(10,1,2,3,4));

//Random
console.log("----------------------------------Random------------------------------------");
console.log(Math.round(Math.random() * 51)); // 0 - 0.99999

//power
console.log(Math.pow(3,3));

//log
console.log(Math.log(2));
//sin
console.log(Math.sin(90));

//LOOPS(Total 5 are there we will be studying 3 now rest 2 will be used further)
//do while, while , for
console.log("----------------------------------Loops------------------------------------");

//do while - execute once then checcks condition
let i=0;
do{
    console.log("Value of i is",i);
    i++;
}while(i<=5);

//While loop- first checks and then execute

let j=0
while(j<=5) {
    console.log('value of j is',j);
    j++;
}

//for loop

for (let i = 0; i<=5; i++){
    console.log(`${i}*${i} = ${i * i}`);
}