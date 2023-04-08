// find intersection  - intersection means suppose you have two array 
// find out common value in both array
// 

const arr1 = [3,5,7,8,9,3]
const arr2= [4,5,6,7,8,3,3]
// output-[5,7,8]

const intersection = arr1.filter((currentElm)=>{
    return arr2.includes(currentElm)
})
    console.log(intersection) 
   


    // find union - union means addition but does not contain duplicate value 

    const union = [...arr1,...arr2]
    console.log([...new Set(union)])


// 2nd method find out intersection 
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [4, 5, 6, 7, 8];
const intersection1 = [];

for (let i = 0; i < arr3.length; i++) {
  if (arr4.includes(arr3[i])) {
    intersection1.push(arr3[i]);
  }

}

console.log(intersection1); // Output: [4, 5]
// find union using for loop
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const union1 = [];

// Add all elements of arr1 to union
for (let i = 0; i < array1.length; i++) {
  if (!union1.includes(array1[i])) {
    union1.push(array1[i]);
  }
}

// Add all unique elements of arr2 to union
for (let j = 0; j < array2.length; j++) {
  if (!union1.includes(array2[j])) {
    union1.push(array2[j]);
  }
}

console.log(union1); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



