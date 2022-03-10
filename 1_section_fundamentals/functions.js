// function declarations

function declaration(
  firstName = "default firstName",
  lastName = "default lastName"
) {
  console.log("I'm a declaration.");
  return "hello " + firstName + " " + lastName;
}

console.log(declaration("John", "Sims"));
console.log(declaration());

// function expressions

const square = function (x) {
  return x * x;
};

console.log(square("3"));
  

//  Immediately invoked function expression = iife

  (function (word) {
   console.log('What ' + word) 
  }
)('the');

const todo = {
  add: function(){
    console.log('add todo')
  },
  edit: function(id){
    console.log(`Edit todo for this id: ${id}`)
  },
  delete: function(){
    console.log('We gonna delete')
  }
}

todo.add()
todo.edit(22)
todo.delete()