const data=[
{name:"rah",age:45},
{name:"mnmn",age:25}
]
function fun(){
    setTimeout(() => {
        data.forEach((ele)=>console.log(ele.name))
    }, 1000);
}
// function create(newdata,callback){
//     setTimeout(() => {
//         data.push(newdata)
// callback()
//     }, 2000);
// }
// create({name:"tyt",qge:99},fun)*
// ============promise===================
function create(newdata){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            data.push(newdata)
    res(2)
        }, 2000);
    })
}
// create({name:"tyt",qge:99}).then((val)=>{
//     if(val){
//         fun()
//     }
// })
// ===========async await==
async function run(params) {
    await create({name:"iuy",age:99})
    fun()
}
run()
// ==============
