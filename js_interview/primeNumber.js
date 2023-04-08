/* what is prime number?
prime number is a whole number that is greater than 1 , it has eaxactly two factors that iis 1 and number itself
ther is only 1 even prime number is 2*/
function prime(num){
var isPrime = true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime = false
        }

    }
    if(isPrime===true){
        console.log(`${num} is prime`)
    }else{
        console.log(`${num} is not prime`)
    }
   
    }
    console.log(prime(10))
