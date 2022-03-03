function analyzeArray(arr) {
  let out = {};

  out['length'] = arr.length;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }

  out.average = avg / arr.length;
  out.max = Math.max(...arr);
  out.min = Math.min(...arr);

  return out;
}

module.exports = analyzeArray;
