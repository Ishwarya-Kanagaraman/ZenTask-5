
var data = { name: 'Holly', age: 35, role: 'producer' }

function toArray(obj) {
    var out=Object.keys(obj);
  return out.map(e => [e, obj[e]])
}

console.log(toArray(data));