console.log("hello");
// maximum subarray

const maxSubArray = () => {
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
const nums = [3, 4, 6, -1, -6, 4];
const check = maxSubArray(nums);
console.log(check);
