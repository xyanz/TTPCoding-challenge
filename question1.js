## Brute Force Solution:
function sumOfTwo(a,b,v){
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < b.length - 1; j++) {
      if (a[i] + b[j] == v) {
        return true;
      }
    }
  }
  return false;
}

## HashMap Solution:

function sumOfTwo(a,b,v) {
  arr1 = {};
  arr2 = {};
  i = 0;
  while(a[i] || b[i]){
    if (a[i]){
      arr1[a[i]] = true;
      if(arr2[v - a[i]]){
        return true;
      }
    }
    if (b[i]){
      arr2[b[i]] = true;
      if(arr1[v - b[i]]){
        return true;
      }
    }
    i++;
  }
  return false;
}
