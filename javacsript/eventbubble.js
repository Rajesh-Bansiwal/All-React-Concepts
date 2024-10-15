var div=document.querySelector("div");
var btn=document.querySelector("button")
var a=document.querySelector("a")
// isme child se parentr phir uske parent tk execute ho jata hai
// pele btn fir div child to parent
// div.addEventListener("click",()=>{
//     console.log("div")
// },true) //isse y parent to chiold kaam karega true l;agane se isse capturing ketha h
// btn.addEventListener("click",(e)=>{
//     console.log("btn")
// },true)

// ===================
div.addEventListener("click",()=>{
    console.log("div")
}) //isse y parent to chiold kaam karega true l;agane se
btn.addEventListener("click",(e)=>{
    // e.stopPropagation() // b tbn chaloa phir stop krdo parent tk mt jao
    console.log("btn")
})
btn.addEventListener("click",(e)=>{
e.stopImmediatePropagation()
console.log("button1") // ek btn per do event ya kai lage hai to bs yaha tk chale or ruk jaye
})
btn.addEventListener("click",(e)=>{
    console.log("button3") // y nhi chalega
    })
a.addEventListener("click",(e)=>{
    e.preventDefault() //page refresh nhi hoga
    console.log("hjnhjk")
})