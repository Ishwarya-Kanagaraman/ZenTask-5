var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
  var newObject=`{${arr[0]}:"${arr[arr.length-1]}"}`;
 console.log(newObject);
}

transformFirstAndLast(arr);