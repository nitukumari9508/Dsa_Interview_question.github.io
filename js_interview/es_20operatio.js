// double question mark called as nullish operator  it removes bug || or operator
// The nullish coalescing operator (??) and the logical OR operator (||)
//  are both used for handling falsy values in JavaScript, 
//  but they have different behaviors and use cases.

// // The nullish coalescing operator (??) is a relatively new addition to JavaScript,
//  introduced in ES2020. It is used to check for null or undefined values and provide a default value 
//  if the checked value is falsy. The ?? operator evaluates the left-hand operand and, if it is null
//   or undefined, returns the right-hand operand. If the left-hand operand is anything else, including
//    falsy values such as 0 or an empty string '', the ?? operator returns the left-hand operand.



const a = null;
const b = undefined;
const c = 0;

console.log(a ?? 'default'); // Output: 'default'
console.log(b ?? 'default'); // Output: 'default'
// console.log(c ?? 'default'); // Output: 0

// In this example, the ?? operator checks if a and b are null or undefined, 
// and returns the default value 'default' if they are. It returns the value 0 for c, 
// which is falsy but not null or undefined.

// On the other hand, the logical OR operator (||) 
// is used to provide a default value for a variable when it is falsy. The || operator
//  evaluates the left-hand operand, and if it is falsy, returns the right-hand operand. 
//  If the left-hand operand is truthy, the || operator returns the left-hand operand.

// Here is an example:
const a1 = null;
const b1 = undefined;
const c1 = 0;

console.log(a1 || 'default'); // Output: 'default'
console.log(b1 || 'default'); // Output: 'default'
console.log(c1 || 'default'); // Output: 'default'


//  this example, the ||
//  operator returns the default value 'default' for all variables because null,
//   undefined, and 0 are all falsy.

// In summary, the nullish coalescing operator (??) checks only for
//  null or undefined values, while the logical OR operator (||) checks
//   for any falsy value. Therefore, the ?? operator is more suitable for
//    handling null or undefined values, while the ||
//  operator can be used for general falsy values.