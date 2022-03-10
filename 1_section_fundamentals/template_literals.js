const name = "John";
const age = 34;
const job = "Associate Support Engineer";
const city = "Chicago";
let html;

// Without template strings
html = '<ul><li>Name: ' + name +  '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li></ul>'

// With template strings (es6)

html = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>`

document.body.innerHTML = html