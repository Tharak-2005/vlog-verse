function hello(){
    console.log("Hi guys,i am a function")
}
hello()

function add(x,y){
    return x+y
}
let result=add(2,4)
console.log(result)

const pi=3.14
console.log(pi)

const multiply = function(x,y){
    return x*y
}
// function multiply(x,y){
//     return x*y
// }
console.log(multiply(5,3))

//arrow function
const square=(x)=>x*x
console.log(square(6))

const Substract =(x,y)=>{
    console.log(x,y)
    return x-y
}
console.log(Substract(20,15))