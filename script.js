const arr = [2, 3, "ui", "eu", 8.9];
const char = [];
const num = [];
arr.forEach((element) => {
  if (typeof element === "number") {
    num.push(element);
  } else {
    char.push(element);
  }
});
console.log(num);
console.log(char);
console.log(typeof ("1" + 1));
console.log("11");
console.log(11);
console.log(1 + 3 + "1");
const double = num.map((each) => each * 2);
console.log(double);
console.log(double);
console.log(![]);
console.log([]);
