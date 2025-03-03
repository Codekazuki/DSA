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
