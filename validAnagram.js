function anagram(s, t) {
  /*

    Example 1:

    Input: s = "anagram", t = "nagaram"

    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false

    create an object for storing key value    
    */

  if (s.length !== t.length) {
    console.log("Not anagram");
    return false;
  }

  let map = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    map[letter] = (map[letter] || 0) + 1; //left side is key right side is value we are calculating

// i=0, letter="a": map["a"] = (undefined || 0) + 1 = 1   → map = { a: 1 }
// i=1, letter="a": map["a"] = (1 || 0) + 1 = 2            → map = { a: 2 }
// i=2, letter="b": map["b"] = (undefined || 0) + 1 = 1   → map = { a: 2, b: 1 }

}

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!(letter in map) || map[letter] === 0) {
      return false;
    } else {
      map[letter] = (map[letter] || 0) - 1;
      console.log( map[letter] = (map[letter] || 0) - 1)
    }
  }
  return true;
}

console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car")); // false
