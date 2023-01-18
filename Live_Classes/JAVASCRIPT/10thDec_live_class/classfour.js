//Stage One will Be Completed Today!

//Normal Function and Function with parameters
// function sum(value1, value2){ //Defination of Function
//     // let num1 = 16;
//     // let num2 = 25;
//     console.log("Addition of two numbers are: ", value1+value2);
// }

// sum(10,20); // calling of function

// sum(45,35);

//Function with return type
// function sum(val1,val2){
//     let result = val1 + val2;
//     return result;
// }

// let add=sum(10,20);
// console.log(add);

// let add1=sum(10,43);
// console.log(add1);

//string
// function URL(url , domain){
//     let con ="https://";
//     let result = con + url + domain;
//     return result;
// }

// let site = URL("Saieeshnaik",".me");
// console.log(site);

// function sum(arr){
//     let sum =0;
//     for(let i of arr){ //for of loop
//         sum = sum + i;
//     }
//     return sum;
// }
// let sumarray =[1,2,3,4,5,6];
// let result = sum(sumarray); //calling funtion
// console.log(result); //printing the result

// function nihal(){
//     //Arguments - memory will be created for arguements by default
//     let sum = 0;
//     for(let i =0; i<arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// console.log(nihal(7,8,9,10,11,12,14,15));

//Arrow Function

// let shiva = (var1,var2) =>{
//     console.log('Mein Bhagwan Hoon',var1,var2);
// };
// shiva(1,2);

//OBJECTS

let userName = {
    fName : "Saieesh",
    lName : "Naik",
    role: 'admin',
    loginCount:25,
};

// console.log(userName.role); //to print object data
// userName.loginCount =61; // to update value by accesing the key
// console.log(userName);

for (let x in userName){
    console.log(userName[x]);
}