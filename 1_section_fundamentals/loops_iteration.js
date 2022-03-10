// For loop

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favorite number so I'm going to stop the loop and go to the next iteration.");
//     continue
//   }
//   if (i === 5 ){
//     console.log('break on five!')
//     break
//   }
//   console.log("Number " + i);
// }

// // while

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i)
//   i++
// }

// Do while

// let i = 100;
//going to run once and show 100

// do {
//   console.log('Number ' + i)
//   i++;
// }
// while(i < 10)

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i])
// }

cars.forEach(function (car, i, theEntireArray) {
  console.log(
    car + " " + i + "\n" + "\n" + "\n" + theEntireArray + "\n" + "\n"
  );
  // console.log("/n ", what)
});

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Lizzie" },
  { id: 3, name: "Bees" },
];

const ids = users.map(function (user, index, array) {
return user.id
});

console.log(ids);


const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
}