var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5};
var testname="isEqualObjects";
function objectEquality(expected,actual){
var arr1=Object.keys(expected);
var arr2=Object.keys(actual);
var count=0;
for(var i=0;i<arr1.length;i++){
    if(arr2[i]===arr1[i]){
         count=count+1;
    }
}
var arr3=Object.values(expected);
var arr4=Object.values(actual);
var count1=0;
for(var j=0;j<arr3.length;j++){
    if(arr3[j]===arr4[j]){
         count1=count1+1;
    }
}
if(count==arr1.length&&count1==arr3.length){
    console.log("passed");
}
else{
    console.log(`FAILED [${testname}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
}
}
objectEquality(expected,actual,testname);