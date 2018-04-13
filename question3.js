function getClosingParen(sentence, openingParenIndex){
  if (sentence[openingParenIndex] !== '(') return false;
  var leftParenCount = 0;
  for(var i = openingParenIndex, j = sentence.length; i < j; i++ ){
    if (sentence[i] == '(') {
      leftParenCount++;
    }else if (sentence[i] == ')'){
      leftParenCount--;
      if (leftParenCount == 0) {
        return i;
      }
    }
  }
}
