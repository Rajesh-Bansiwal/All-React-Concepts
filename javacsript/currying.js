// // its a approach/method to  write a code
// function add(a){
//     return function(b){
//         return function(c){
// return a+b+c
//         }
//     }
// }
// // const sum=add(2)
// // const res=sum(5)
// // console.log(res(3))
// let res=add(2)(3)(5)
// console.log(res)
// obj={
//     name:"raj",
//     age:99
// }
// function user(obj){
//     return function(key){
//         return obj[key]
//     }
// }
// let ans=user(obj)
// console.log(ans('name'))
// ===============infinmite currying========
function add(a){
    return function(b){
        if(b) return add(a+b)
        return a;
    }
}
console.log(add(2)(2)(4)(2)())