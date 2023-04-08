// find smallest & largest


const arr = [5,8,9,7]

function getSum(arr){
let smallest = Number.POSITIVE_INFINITY
let largest = Number.NEGATIVE_INFINITY

for(let num of arr){
    if(num<smallest){
        smallest= num
        
    }if(num>largest){
        largest = num
    }
        
    
}
return smallest,largest
}
console.log(getSum(arr))



// // using reduce method
//  const sum = getSum((arr)=>{
//   return  arr.reduce((smallest,num1)=>{
//         Math.min(arr)
//     })
//  })

//  console.log(sum())



function getSum(callback) {
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce(callback, 0);
    return sum;
}

const smallest = getSum((smallest, num) => Math.min(smallest, num));
console.log(smallest);
