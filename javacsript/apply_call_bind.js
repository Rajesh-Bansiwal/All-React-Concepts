function print(state,country){
    console.log(this.name,state,country)
}
let user={
  name:"hkhj",
  age:90,
//   print:function(){
//     console.log(this.name)
//   }  
}
let user1={
    name:"lopl",
    age:95,
     
  }
//   function borrowing==========
// user.print.call(user1)
print.call(user1,"delhi")
print.apply(user,["delhi","india"]) //bs parameter ko bhejne ka hi function hai
let newfun=print.bind(user,"delhi","goa")
newfun()