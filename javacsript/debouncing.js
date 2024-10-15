// imko achieve kiya jaat hai  settimeout ko use krke 
// unwanted function calls ko staop krna
// inputy filed m jitni baar value type kre utni baaar functiobn call ho rha hai its not good its down the perfotmace
let count=0;
function getdata(e){
    console.log("fect data",++count)
}
function mydebounce(call,d){
    let time;
    return function(...res){
        console.log(res)
if(time) clearTimeout(time)
    setTimeout(() => {
        call()
    }, d);
    }
}
const better=mydebounce(getdata,200)