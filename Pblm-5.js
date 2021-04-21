var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(array) {
  var obj = {};
  var collection = array;
  for(var i = 0; i < array.length; i++){
    var dataArray =collection[i];
      obj[dataArray[0]] = dataArray[1];
  }
  return obj;
}

console.log(fromListToObject(array));