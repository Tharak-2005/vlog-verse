let person={
    name:"Tharak",
    age:19
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;//Destructuring assignment**
console.log(name)
console.log(age)

let fruits=["Apple","WaterMelon","Carrot"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num) //Transform Each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0)//filter values based on conditions
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0)//Reduce
console.log(sum)

let arr=[{name:"Tharak",marks:80},{name:"Trisha",marks:90},{name:"Vinay",marks:85}]
let maxmarks=0
let topper="";
for(let person of arr){
    if(person.marks>maxmarks){
        maxmarks=person.marks
        topper=person.name
    }
}
console.log(`topper is ${topper} and she got ${maxmarks}`)