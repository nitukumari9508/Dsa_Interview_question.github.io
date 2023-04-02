// Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.

// Example 1:

// Input:
// 5
// 4 2 -3 1 6
//-3,1,2,4,6
// Output: 
// Yes

// Explanation: 
// 2, -3, 1 is the subarray 
// with sum 0.
// Example 2:

// Input:
// 5
// 4 2 0 1 6

// Output: 
// Yes

// Explanation: 
// 0 is one of the element 
// in the array so there exist a 
// subarray with sum 0.


    function subArray(array){
        let sum = 0;
        let map = new Map(); // create a new map
        console.log(map)
        for(let i=0; i<array.length; i++){
          sum += array[i];
          console.log(sum)
          if(sum === 0 || map.has(sum)){ // if sum is 0 or if map already has the sum, subarray exists
            return "Yes";
          }
         map.set(sum, i); // store the sum in the map with the index as its value
        }
        return "No"; // if no subarray with sum 0 is found
      }
      
      

console.log(subArray([4, 2, -3, 1, 6])); // Yes
      console.log(subArray([4, 2, 0, 1, 6])); // Yes
      console.log(subArray([1, 2, 3])); // No