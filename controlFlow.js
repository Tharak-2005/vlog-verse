// let marks=85
// if(marks>=90){
//     console.log("A+ Grade")
// }
// else if(marks>=80){
//     console.log("A Grade")
// }
// else if(marks>=70){
//     console.log("B Grade")
// }
// else{
//     console.log("Fail")
// }
// let day=1
// do{
// switch(day){
//     case 1 : console.log("Monday")
//              day++
//              break;
//     case 2 : console.log("Tuesday")
//              day++
//              break;
//     case 3 : console.log("Wednesday")
//              day++
//              break;
//     case 4 : console.log("Thursday")
//              day++
//              break;
//     case 5 : console.log("Friday")
//              day++
//              break;
//     case 6 : console.log("Saturday")
//              day++
//              break;
//     case 7 : console.log("Sunday")
//              day++
//              break;
//     default:console.log("invalid date")
//              break;         
// }}while(day<=7)
// for(let i=0;i<5;i++)
// {
//         console.log("hi")
// }
// let i=2
// while(i>0)
//     {
//         console.log(i)
//         i--
//     }    

// let color=["green","blue","red"]
// for(let i=0;i<color.length;i++)
//     {
//         console.log(color[i])
//     }    
// for(let pic of color){
//     console.log(pic)
// }

let person={
    name:"Tharak",
    age:26,
    college:"JNTUGV"
}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i--)
{
    if(i===3){
        continue;
    }
    else if(i===2){
        break;
    }
    console.log(i)
}