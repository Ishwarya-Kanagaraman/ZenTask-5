var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
 [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ["role", 'Coder']]];
function fromListToObject(array) {
  var obj = {};
  var collection = array;
  for(var i = 0; i < array.length; i++){
    var dataArray =collection[i];
      for(var j=0;j<dataArray.length;j++){
          var TArray=dataArray[j];
          obj[TArray[0]]=TArray[1];
      }
      console.log(obj);
  }
  
}
fromListToObject(array);