function range(start, end, step) {
  if (arguments.length != 3 || step < 0) {
    return [];
  }

  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
