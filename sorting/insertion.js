// 1. step consider 2nd element index 1 
// make two loops outer looop is go to right side & inner loop go go left side compare
// step-3: arr[j]>current  in the sense index 1 it performs swapping 
  let arr = [5,2,6,7,8]
function insertion(arr){
   for(let i=1;i<arr.length;i++){
    let current = arr[i] // 5//6 //7 //8
    let j= i-1// 0 //1//2 //3
    while(j>=0 && arr[j]>current){
     arr[j+1] =  arr[j]// step 1- 5,5,7,8 step 2 -- do not perform swapping stepm3- do not perform aswapping step 4- do not perform a swapping
     j--//-1
    }
    arr[j+1] =current//2,5,6,7,8// j=-1+1=0 // this conditoon whoile loop has fail maintain the pattern 

   }
   return arr
}
console.log(insertion(arr))// time complexity 0(n2)

// 1st interation -- 2,5,6,7,8
// 2nd interation -- 2,5,6,7,8
// 3rd interation -- 2,5,6,7,8
// 4th interation -- 2,5,6,7,8
// 