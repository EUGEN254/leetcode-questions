function duplicate(nums) {
  /*
    first we define an object we know it will take key and value 

    let map={};

    
    
    */
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    map[number] = (map[number] || 0) + 1;
    if (map[number] === 2) {
      return true;
    }
  }

  console.log(map);
  return false;
}

console.log(duplicate([1, 2, 3, 1]));
