// what is fibonacci series -0,1,1,2,3,5,8 - startying k 0 & 1 always same & third ine is dependenf previus two value addition is depend
// one thirrd number same 


// write a program 100
//0,1,1,2,3,5
function fibonacci(num){
x=0
y=1
var fn = x+y
while(fn<num){
console.log(fn)
fn = x+y;
x = y
y=fn

}
return fn
}

console.log(fibonacci(100))