export const generateMatrix = (nOfCellsForAxis) => {
  const matrix = [];

  for (let rowIndex = 0; rowIndex < nOfCellsForAxis; rowIndex++) {
    matrix.push([]);
    for (let columnIndex = 0; columnIndex < nOfCellsForAxis; columnIndex++) {
      matrix[rowIndex].push({ isMatrix: true });
    }
  }
  return matrix;
};
