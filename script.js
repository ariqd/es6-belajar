// ES5
// var myName = "Ariq";
// myName = "Richard";
// console.log(myName);

var myCarsVar = ["BMW", "Tesla", "Toyota"];

for (var i = 0; i < myCarsVar.length; i++) {
  console.log("My Cars var = " + myCarsVar[i]);
}

console.log(i);

// ES6
// let myNameLet = "Ariq"
// myNameLet = "Calvin"
// console.log(myNameLet)

const myCarsLet = ["BMW", "Tesla", "Toyota"];

for (let x = 0; x < myCarsLet.length; x++) {
  console.log("My Cars let = " + myCarsLet[x]);
}

console.log(x);

// function abc() {
//   var myNameFunc = "hello";
//   console.log(myNameFunc);
// }

// abc();
// console.log(myNameFunc);
