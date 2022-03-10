// Create some arrays

const numbers = [12, 13, 532, 6, -3];
const numbers2 = new Array(22, 45, 33, 52, 62);
const fruit = ["Apple", "pear", "banana"];
const mixed = [22, "string", null, undefined, { a: 1, b: 2 }];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(fruit);

// Get value
val = numbers[3];

// Insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(6);

// Mutating arrays

// add onto end
numbers.push(250);

// add to front
numbers.unshift(235);

//pop from end
numbers.pop()

// Take off from front
numbers.shift()

// Splice values
// numbers.splice(1, 3)

// Reverse
numbers.reverse()

// Concatenate

val = numbers.concat(numbers2)

// sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use compare function
val = numbers.sort(function(x,y) {
  return y-x
})

// Find
function under50(num){
  return num < 50
}

val = numbers.find(under50) //finds first number under 50

console.log(numbers);
console.log(val);
