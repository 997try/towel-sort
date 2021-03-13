
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length == 0){
    return [];
  }else{
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      if( i%2 !== 0){
        matrix[i].reverse();
      }
    }
    matrix.forEach(element => {
      for (let j = 0; j < element.length; j++) {
        arr.push(element[j]);
      }
    });
    return arr;
  }
}
