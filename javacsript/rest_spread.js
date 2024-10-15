// rest===================
// function fun(a,b,c,...res){
//     console.log(res)
//     return a+b+c;
// }
// console.log(fun(1,2,3,4,5,6,7,))
// spread===============
// var nam=[1,2,3,4]
// function fun(a,b,c){
//     console.log(a,b,c)
// }
// console.log(fun(...nam))
// ================obj====
let obj={
    name:"tuy",
    age:90
}
const{name,age}=obj
console.log(name)
let obj1={
    ...obj,
    age:23
}
console.log(obj1)