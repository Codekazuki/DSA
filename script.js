// console.log("hello");
// maximum subarray

const maxSubArray = (par) => {
  let maxSoFar = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      maxSoFar = 0;
    }
    currSum += nums[i];
    if (currSum > maxSoFar) {
      maxSoFar = currSum;
    }
  }
  return maxSoFar;
};
const nums = [3, 4, 9, 6, -1, -6, 4];
const check = maxSubArray(nums);
// console.log(check);

// fibonacci sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

// summation
const summation = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(summation(8));

// Factorial of an integer
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(15));

//prime number

const isPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(8));
//power of two

const powerTwo = (n) => {
  let number = n * n;

  return number;
};

console.log(powerTwo(5));

//isPowerOfTwo
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
console.log(isPowerOfTwo(25));

const addUp = (a, b) => {
  return a + b;
};

function addition(a, b) {
  return a + b;
}

console.log(addition(1, 5));
console.log(addUp(100, 50));
