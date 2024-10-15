//  memeoization is a optimization technique 
let sum=0
let calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i
    }
    return sum;
}
const memo=(fun)=>{
let cache={} //{'5':10} work as lexical scope
return function(...res)
{
    let n=res[0]
    if(n in cache){
        return cache[n]
    }
    else{
        let res=fun(n)
        cache[n]=res;
        return res;
    }
}
}
console.time()
let eff=memo(calc)
console.log(eff(5))
console.timeEnd()

console.time()
console.log(eff(5))
console.timeEnd()