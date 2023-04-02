let arr = [2,5,3,8]
function bubble (){
  for (let i=0;i<arr.length;i++){
    swapped = false
    for(let j=0;j<arr.length-1;j++){
if(arr[j]>arr[j+1]){
    let temp=arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
    swapped= true
}
    }
    if(!swapped){
        break;
    }
  } 
  return arr 
}
console.log(bubble(arr))