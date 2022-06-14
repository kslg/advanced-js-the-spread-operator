/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator //
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log("First array:", arr1);
console.log("Second array:", arr2);
// the second array is  not actually a copy of the first,  
// it's a new variable which points to the same  object as the other variable. Because of this,  
// anything we do to the second array will  be done to the first and vice versa. 

// Copying an array //
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; 

arr4.push(7);

console.log("Third Array:", arr3);
// Output: Third Array: [ 4, 5, 6 ]
console.log("Fourth Array:", arr4);
// Output: Fourth Array: [ 4, 5, 6, 7 ]



// Copying an object //
let obj1 = {a:1, b:2, c:3,};

// To make a copy of the object, I can simply  “spread” object 1 into a new object, called object 2.
let obj2 = {...obj1, d:4};

// if you want to change one of the  values in the original object, you can do that  
// by simply overwriting it in the new object. In  this object 3, I’m first spreading object 1, and  
// then overwriting the value
let obj3 = {...obj1, b:8};

console.log("Object 1:", obj1)
console.log("Object 2:", obj2)
console.log("Object 3:", obj3)


// Copying only part of an array/object //

// wanted to combine several of the objects
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
// Output: [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]