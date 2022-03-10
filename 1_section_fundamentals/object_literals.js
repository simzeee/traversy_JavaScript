const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music','sports'],
  address: {
    city: "Miami",
    state: 'Fl'
  },
  getBirthYear: function(){
    return 2022 - this.age
  }
}

let val;

val = person
val = person.firstName

// get specific value
val = person['firstName']
val = person

// console.log(val.getBirthYear())

const people = [
  {name: 'John', age: 30},
  {name: 'John', age: 30},
  {name: 'John', age: 30},
]

for(let i = 0; i < people.length; i++){
  console.log(people[i])
}