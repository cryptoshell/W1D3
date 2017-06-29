function countLetters(string) {
  var noSpace = string.replace(/\s+/g, '').toLowerCase();
  console.log(noSpace);
  var results = {};

  for (var i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]].push(i);
    } else {
      results[noSpace[i]] = [i];
    }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));

// Expected output
// {
//   l: 0,
//   i: [1, 10],
//   g: 2.
//   h: 3, 5, 13, 15,
//   ...
// }
