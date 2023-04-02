// checking sum zero problem


 let arr = [ -5,-4,-2,0,1,2,4,6,8]
// function getSumPair(arr){
//     for(let num of arr){
//         console.log(num)
//         for(let j=1;j<arr.length;j++){
//            if(num+arr[j]=== 0) {
//             return [num,arr[j]]
//            }
//         }
//     }
// }
//  const result = getSumPair(arr)
//  console.log(result)

 // optimized solution == two pointe
 function getSum(){
    left=0;
    right= arr.length-1
   while(left<right){
    let sum = arr[left] + arr[right]
    if(sum==0){
        return [arr[left],arr[right]]
    }
else if(sum>0){
    right--
}else{
    left++
}
   }

   
 }
  let result1=getSum(arr)
  console.log(result1)