let arr =[2,5,7,4]
// it break into halves
// pzair in broke item  temp = [left] 2nd case if left is emppty push right
// if left>right temp= [right]
// then compare ifleft<right



function mergedividing(arr ){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
 let leftarray= arr.slice(0,mid)//[ 2, 5 ]
 let rightarray = arr.slice(mid)// [ 7, 4 ]
 console.log(leftarray,rightarray)
 return mergeAndSort(mergedividing(leftarray),mergedividing(rightarray))
}
function mergeAndSort(leftarray,rightarray){
    let temp =[]
    while(leftarray.length && rightarray.length){
        if(leftarray[0]<=rightarray[0]){
        temp.push(leftarray.shift())
    }
    else{
        temp.push(rightarray.shift())
    }
}
 return [...temp,...leftarray,...rightarray]
}
console.log(mergedividing(arr))