let val;

const today = new Date(); //todays date by default
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");

val = today;
val = today.toString();

val = birthday;

val = today.getMonth(); //0 indexed
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2022);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
