const comapany=[{name:"googel",start:2000},
    {name:"flipkart",start:1900},
    {name:"amazone",start:2007},
    {name:"wipro",start:1999},
]
comapany.forEach((ele)=>console.log(ele.name))
let arr=[,20,16,90,40,33,32,19]
let c=arr.filter((ele)=>ele>20)
console.log(c)
const dummy=comapany.map((ele)=>`${ele.name}`)
console.log(dummy)
let sort=comapany.sort((a,b)=>b.start-a.start)
console.log(sort)
let sum=comapany.reduce((tot,curr)=>{
return tot+Number(curr.start) 
},0)
console.log(sum)