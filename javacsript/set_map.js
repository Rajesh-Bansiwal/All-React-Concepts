// set 
// 1 it contaibns only unique value
//  object constructor
// let arr=[1,2,2,3,4,5,5,]
// let obj=new Set(arr)
// // console.log(obj.size)
// obj.add(9)
// console.log(obj)
// obj.delete(5)
// console.log(obj)
// let obj1={name:"raj"}
// obj.add(obj1)
// console.log(obj)
// console.log(obj.has(9))
// for(let vl of obj){
//     console.log(vl)
// }
// =====================map====================
//  map m bhi uniqueness hoti hai y updated value ko rkhtahai
// let map=new Map([["a1","rajesh"],["a2","rahul"]])
// console.log(map)
// map.set("a2","paro")
// console.log(map.get("a2"))
// console.log(map)
// map.delete("a2")
// console.log(map)
// for(let [key,val] of map){
//     console.log(key,val)
// }
// =======================weak set==
// obj store bs or iterate nhi kr skte==
// let ws=new WeakSet()
// let obj={"name":"rajesh"}
// let abj1={"name":"rahu"}
// ws.add(obj)
// ws.add(obj1)
// ws.delete(obj1)
// console.log(ws.has(obj))
// ==================weak map===
//  same as weakset
let wm=new WeakMap()
let obj={"name":"vivek"}
let obj1={}
wm.set(obj,"private")
console.log(wm.has(obj1))