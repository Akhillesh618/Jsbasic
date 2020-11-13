console.log(2 + 2);

console.log(2 + "2");

console.log(2 + "2" + 2);

console.log(2 + 2 + "2" + 2 + 2);

console.log(2 + "2" + 2 + "2" + 2);

var b = 618;

console.log(b);

console.log(typeof b);

var c = "akhil";

console.log(c);

console.log(typeof c);

var s = typeof 12;
console.log(s);

console.log(isNaN("akhil"));

var t = "123";

console.log(Number(t));

var ar = [11, 12, 13, 14, 15];

console.log(ar[2]);

var tiger = "Dog";
var tizen = "Dog";
var Kitty = "cat";

var obj = { tiger, tizen, Kitty };

console.log(obj);
//////////////////

var myname = { firstname: "akhil", lastname: "vemula" };
console.log(myname);

var sdate = new Date();
console.log(sdate);

var myname = new Object();

myname.firstname = "akhil";
myname.lastname = "vemula";

console.log(myname.firstname + " " + myname.lastname);

function divide(a, b, c = 1) {
  var val1 = a + b;
  var val2 = a - b;
}

var ans = divide(1, 1);
console.log(ans);

function fullname(fname, lname) {
  return fname + " " + lname;
}
var x = fullname("akhil", "vemula");

console.log(x);
