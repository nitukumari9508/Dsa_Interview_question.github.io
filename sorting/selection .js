// it takes more time as compare to another sorting 

// selection sort says  first element consider it minimum 
let arr =[0,2,34,22,10]
function selection(arr){ 
    
    for(let i=0;i<arr.length-1;i++){
        let minimum=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j] <arr[minimum]){
             minimum =j
             
            }
        // let temp = arr[i]
        // arr[i]= arr[minimum]
        // arr[minimum] = temp
        if(minimum!==i)
        [arr[i], arr[minimum]]=[arr[minimum], arr[i]]
    
        }
    }
    return arr
}
console.log(selection(arr))

        //    p
//let array =[0,2,34,,22,10]
         //  p
//case 1:[0,2,34,,22,10] - no change

          //  p  
//case 2:[0,2,34,,22,10] - no change

              // p  min
//case 3:[0,2,34,,22,10] - 0,2,22,34

             // p  min
//case 3:[0,2,34,,22,10] - 0,2,22,34