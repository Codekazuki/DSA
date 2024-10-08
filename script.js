console.log("hello");
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
console.log(check);

// fibonacci sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(100));
