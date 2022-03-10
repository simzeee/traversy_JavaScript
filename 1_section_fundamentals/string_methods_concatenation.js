const firstName = "William";
const lastName = "Johnson";
const age = 36;

let val;

val = firstName + lastName;
val = firstName + " " + lastName;

// Append

val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " And I am " + age;

// Escaping
val = "That's awesome, I can't wait";

// Length

val = firstName.length;

// concat

val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2]

val = firstName.indexOf('l') //2

val = firstName.lastIndexOf('l') // 3

// charAt()
val = firstName.charAt(3) // l

// Get last char
val = firstName.charAt(firstName.length - 1)

// Get sub strings

val = firstName.substring(0, 4);

// slice 
val = firstName.slice(0, 4)
val = firstName.slice(-3) //last three

// split
str = "Hello there my name is John"

val = str.split(" ")

const tags = "web design, web dev, backend"
val = tags.split(',')


// Replace

val = str.replace('John', 'Jack')

// includes
val = str.includes('there')
val = str.includes('foo')

console.log(val);

