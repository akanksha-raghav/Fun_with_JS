var data = new Array; //not mandatory
var data = ["Akanksha",23,true,"female"]; // multiple data types
console.log(data);
// travesal
var names =["Akku","tanu","bittu","tutu"];
for(let i =0;i<names.length;i++){
  console.log(names[i]);
}
// for in and for of loop
for (var elements in names) {
  console.log(elements); // elements index
}
for (var elements of names) {
  console.log(elements);
}
// for each loop
names.forEach(function(item, i,array){
  console.log(item);
});
// by fat arrow
names.forEach((elements, i) => {
  console.log(elements);
});
