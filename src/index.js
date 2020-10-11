// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix) { return []; }

    return matrix.map((e, i) => (i % 2) ? e.reverse() : e).flat();
}