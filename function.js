function sayhi(){
    console.log("hello vivek")
}
function add(a,b){
    console.log("addition is :",a+b)
}
sayhi();
add(5,5)

function mul(a,b){
    return a*b;
}
let ans=mul(5,5);
console.log(ans);

//first class citizens
let a=function(x,y){
    console.log(x+y);
}
a(20,100)

let b=function(x,y){
    return (x+y);
}
let temp=b(20,60);
console.log(temp);

///////////IFEE

(function(){
    console.log("hello ifee");
})();

(function(x,y){
    console.log("hello ifee :",x*y);
})(10,20);