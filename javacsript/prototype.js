let obj={
    name:"rajwesh",
    getname:function(){
        return this.name
    },
    getroll:function(){
        return this.roll
    }
}
let obj1={
    roll:1,
    name:"vivek",
    __proto__:obj // pehela obj durser obj1 m asa prototype means acess trhe property of obj
}
console.log(obj1.getroll()) // y vivek dega agar nhi hota to to obj m dekhta 
let obj2={
    class:"mca",
    __proto__:obj1
}
console.log(obj2.name)
// ==============araray===
// const arr=["ajay"]
const arr=new Array()
console.log(arr)
Array.prototype.show=function(){
    return this
}
let brr=["delhi"]
console.log(brr.show())
Array.prototype.convert=function(){
    let obj={}
    this.forEach((ele)=>{
        obj[ele]=ele
    })
    return obj
}
console.log(brr.convert())
function myproto(name){
    this.name=name
}
myproto.prototype=obj
let proto=new myproto("dikljit")
console.log(proto.getname())