
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }
  let final = [];
  if (matrix.length === 0) {
    return matrix;
  }
  for (let i = 0; i < matrix.length - 1; i+=2) {
      final.push(matrix[i], matrix[i + 1].reverse());
  }
  if (matrix.length % 2 === 0) {
    return final.flat(matrix.length);
  }
  if (matrix.length % 2 !== 0) {
     return final.concat(matrix[matrix.length - 1]).flat(matrix.length);
  }
}
