// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/*  
nums = [2,7,11,15], target = 9 
Output: [0,1]
*/

var twoSum = function (nums, target) {
  //   for i from 0 to end of  array:
  //      for j from i+1 to end of array:
  //          if nums[i] + nums[j] == target:
  //             return [i,j]

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

function twoSum(nums, target) {
  let map = {};//this is an object element there are key  valu pari

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];//9-2 so its 7 =>7 is the compliment
    if (complement in map) {
      return [map[complement], i];
    } else {
      map[nums[i]] = i;// /it will return string 2 : and  0
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,3],6))
