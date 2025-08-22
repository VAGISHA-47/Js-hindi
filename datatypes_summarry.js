//Primitive Datatype
//7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 244262736766367637n

//Reference (Non Primitive Datatype )
// Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"];
let myobj = {
    name: "tashu",
    age: 22,

}
const myFunction = function(){
    console.log("hello World");
}
//console.log(typeof outsideTemp);
console.log(typeof scoreValue);