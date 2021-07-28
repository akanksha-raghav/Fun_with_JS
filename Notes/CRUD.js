// push
const names = ["cow","dog","cat","tiger"];
console.log(names.push("rat")); // return the length
console.log(names);
// push on first
names.unshift("Rabbit");
console.log(names);

// pop
console.log(names.pop());
console.log(names);
 // pop on first
console.log(names.shift());
console.log(names);

//Splice method
const color = ["red","yellow","green","pink"];
console.log(color.splice(4,0,"orange")); // returns empty array
//(position to add , delete count, string)
console.log(color);
//update
const index = color.indexOf("yellow");
if(index !== -1){ 
    color.splice(index,1,"Yellow");
}
console.log(color);
// delete
const del = color.indexOf("green");
if(del !== -1){
    const arr =color.splice(del,1);
    console.log(color);
    console.log(arr);
}