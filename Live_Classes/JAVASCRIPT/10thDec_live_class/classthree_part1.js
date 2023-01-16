/*
    Data Types
    Variables and typeof
    Date
    Loops
    Conditions
    OP
    Indexing
    Math
    object and array
*/

//Todays Agenda : Array In Depth And For of loop
//Array Methods.
let names =["saieesh","Vipul","varad","shubam"];
// console.log(names);
// console.log(names.length); // to find the length of the Array

// console.log(names[2]);
// console.log(names[names.length-1]);

// names[1] = 'vinay'; // To change the element in array
// console.log(names);

//one more way to declare array but not recommended
// let namess = new Array("hello","hi","howareyou");
// console.log(namess);

//push - used to insert new value in the array
// names.push('shubash');
// console.log(names);

//Slice - used to extract multiple values
console.log(names); //[ 'saieesh', 'Vipul', 'varad', 'shubam' ]
console.log(names.slice(1,3)); // ending point will be exclusive [ 'Vipul', 'varad' ]

//Splice - To insert value inside a array

let fruit =["Apple","bada Apple","CHota apple",'Double Apple'];
console.log(fruit);
fruit.splice(2,0,'kharab Apple','Acha Apple');
console.log(fruit);

//Concatenation
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
let arr3 = [6, 7, 8, 9];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3))


//fill
let arr4 =[1,2,3,4,5,6,7,8,9];
arr4.fill('Anurag',2,4);
console.log(arr4);

//include --it means wheter conatins(to check wheter the particular element is at particular index in a array)

let num =[1,2,3,4,5,6,7,8];
console.log(num.includes(6,5));

//Indexof - returns the array index of particular element present in the array
//Note - in case of duplicate value first one will be considered
let num1 =[1,2,3,4,5,6,7,8];
console.log(num.indexOf(6));

//isArray()
let num2 =[1,2,3,4,5,6,7,8,'saieesh','naik'];
console.log(Array.isArray(num2));

//join
let Arr1 = [1,2,3,4,5,6,7];
console.log(Arr1.join('And'));
console.log(typeof Arr1);

//lastindexof -- if 3 elements are same it will five me the index of last one
// let num3 =[1,2,3,4,5,6,7,8,'saieesh','saieesh'];
// console.log(num3.indexOf('saieesh'));

//Map - it is applies to every each element/values in the array
// let maths =[1,4,9,16,25];
// console.log(maths.map(Math.sqrt));

//pop - to remove value and modifies the array
// let maths =[1,4,9,16,25];
// console.log(maths.pop());
// console.log(maths);

//Reverse - used to reverse the array
// let maths = [1,4,9,16,25];
// console.log(maths.reverse());

//Shift()
// let maths =[1,4,9,16,25];
// console.log(maths.shift());

//sort - used to sort the array values
// let names1 =['hitesh','ANurag','surya','Anirudh','Bipul'];
// console.log(names1.sort());

//unshift
// let fruits=["Apple","bada Apple","CHota apple",'Double Apple'];
// console.log(fruits.unshift('Apple','Grapes 2'));
// console.log(fruits);

//Converting to Array
// let name = "Anurag";
// let array1 =name.split('');
// console.log(array1);


//for of
// let fruits=["Apple","bada Apple","CHota apple",'Double Apple'];
// let upperfruit =[]; // empty array
// for(let badaletter of fruit){
//     upperfruit.push(badaletter.toUpperCase());
// }
// console.log(upperfruit);

//Break and Continue

// for(let i=0; i<=5; i++){
//     if(i==3){
//         break; // Terminate everything and come out of the block
//     }
//     console.log(i);
// }

// for(let i=0; i<=5; i++){
//     if(i==3){
//         continue; //skip, omit
//     }
//     console.log(i);
// }

// Assignments
//Array Methods in javascript and write a blog on it =>(Compulsary)