name1 = ["john","ann","peter",a,[1,2,3,4,5]]; //array, mutable data type
console.log(name1,typeof name1, name1[0+1]);
name1[2]='david';
console.log(name1);
function a() {console.log(name1);};
name1[3]();
console.log(name1[4][2]);