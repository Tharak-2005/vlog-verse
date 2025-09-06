//Arithmetic operations

let x=10,y=10

console.log(x+y)
console.log(x*y)
console.log(x%y)
console.log(x-y)

let z=5
z+=3
console.log(z)
z*=2
console.log(z)
z-=4
console.log(z)
z%=3
console.log(z)

//comparision 

let a=18,b="18"

console.log(a==b)
console.log(a+b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

//logical operators

let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))
//string operators

let firstname="Tharaka"
let lastname="Ram"
let fullname=firstname+" "+lastname
console.log(fullname)
let correctName=`Hello ${firstname} ${lastname},Welcome`
console.log(correctName)

//ternary operators
let myAge=19
if(myAge>=18){
    console.log("eligible for vote")
}
else{
    console.log("not eligible for vote")
}

let result=myAge>=18 ? "elibile for vote":"not eligible"
console.log(result)

//increment decrement

let count=5
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "Tharak")
console.log(typeof 18)