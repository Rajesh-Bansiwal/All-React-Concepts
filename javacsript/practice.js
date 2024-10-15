// // console.log(a)
// // var a
// class a{
//     constructor(name){
//         this.name=name
//     }
//     static hello="hiii"
//     eat(){
//         console.log(this.name,"fodd")
//     }
// }
// // class b extends a{
// // eat(){
// //     super.eat()
// //     console.log(this.name,"fish")
// // }
// // }
// // let obk=new b("mufti")
// // console.log(obk.eat())
// let obj=new a("rajesh")
// console.log(a.hello)
let arr=[,3,4,2,9,7]
for(let i=0;i<arr.length;i++){
    let a=arr[i]
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
        }
    }
}
console.log(arr)