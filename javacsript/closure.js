// var sum=(a)=>{
// console.log(a)
// let c=9;
// return function(b){
//     return a+b+c;
// }
// }
// var store=sum(5)
// console.log(store(4))
//=== ====================
let fun=(a,b,c)=>{
    return {
        sum2:()=>{
            return a+b
        },
        sum3:()=>{
            return a+b+c
        }
    }
}
let store=fun(1,2,3)
console.log(store.sum2())