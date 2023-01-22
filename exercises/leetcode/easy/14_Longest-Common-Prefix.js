// Runtime: 77 ms
// Memory: 41.9 MB

var longestCommonPrefix = function(strs) {
  if(strs.length === 1) return strs[0]
  
  let preffix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(preffix)) {
      preffix = preffix.substring(0, preffix.length - 1)
    }
  }

  return preffix
};