function stringReformatting(s, k) {
  newString = [];
  dashCounter = 0;
  for (let i = s.length-1; i >= 0; i--) {
    if(dashCounter === k && i != 0 && i != s.length-1) {
      dashCounter = 0;
      newString.unshift("-");
      if (s[i] != "-"){
      newString.unshift(s[i]);
      dashCounter++;
      }
    }else if (s[i] != "-"){
      newString.unshift(s[i]);
      dashCounter++;
    }

  }
  return newString.join('');
}
