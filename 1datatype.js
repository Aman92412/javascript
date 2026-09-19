//DATA TYPES
//-variables in js are not directly associated with any particular value type, and any variable can be reassigned to other type.

//-example
let x=49; //x is a number
x="nomad" //now x is a string
x= true;  //now x is a boolean
     
//js allow the implicit type conversion when operation involves mismatched types, instead of throwing type errors.

//Drawback -->this feature create bugs when conversions happens where they are not expected

//EXCEPTION-  symbols and BigInts, JS has intentionally disallowed certain implicit type conversion

//                    values
//                      |
//                ------------------------------
//                |                            |
//         Immutable values              mutable values
//     --whose content can't be         --whose value can be change without
//       changed without creating         creating an entirely new values 
//       an entirely new value
//     --primitive values are           --objects and array 
//       immutable

//Data types in JS
//1.String
//2.Number
//3.BigInt
//4.Boolean
//5.Object
//6.undefined
//7.null
//8.Symbol



//String -->string are the series of the character , written within the double or single quotes..

//let studentname="Aman raj"
// console.log(studentname)
// console.log(typeof"studentname")    //typeof operator is used to find the type of the js variable  -->> String
//console.table([{studentname:studentname,type:typeof"studentname"}])

// number -->  JS numbers are stored as decimal number(floating point),numbers can be written with decimal or without decimals
// let length=9
// let breadth=9
// let perimeter=length*breadth
// console.log(perimeter)

//Exponential Notation

//Bigint 
// let x=2665155566556565n;
// let y=BigInt(2665155566556565)
// console.log(y)

//boolean
let y=true;
let z=false;
