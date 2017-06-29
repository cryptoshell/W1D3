function countLetters(string) {
  var noSpace = string.replace(/\s/g, '').toLowerCase().split('');
  var results = {};
  noSpace.forEach(function(el) {
    if (results[el]) {
      results[el] += 1;
    } else {
      results[el] = 1;
    }
  });
  return results;
}

console.log(countLetters("lighthouse in the house"));
