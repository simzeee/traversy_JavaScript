// window.alert()

// Prompt
// const input = prompt()
// alert(input)

// Confirm

// if (confirm("Are you sure?")) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

let val;

// Outer height and width

val = window.outerHeight;
val = window.outerWidth;

// Inner height and width

val = window.innerHeight;
val = window.innerHeight;

// Scroll points

val = window.scrollY; //0 at the top
val = window.scrollX;

// Location Object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //url params

// Redirect

window.location.href = "http://google.com";

// Reload
window.location.reload();

// History Object

window.history.go(-1); //Bring us back to other sites we've been to. This will go back one (-2, -3, etc.)

val = window.history.length; // how many sites you've visited

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; 

console.log(val);
