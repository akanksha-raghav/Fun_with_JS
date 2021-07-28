// Async/ await
// There's a special syntax to work with promises in a more comfortable
// fashion , called "async/await". It's surprisingly easy to understand and use.
// The word "async" before a function means one simple thing: a function always
// returns a Promise.
// So the async keyword is added to functions to tell them to return a promise rather 
// than directly returning the value
// we can use await when calling any function that returns a promise, including web api function
// The keyword await makes javascript wait until that promise settle and returns the result.
// a promise is an object thatkeep track about whether a certain event has happened already or not

//Example: 2s baad roll no uske 2s baad name aur biodata
const roll_no = () =>{
    let arr = [1,2,3,4];
    setTimeout(()=>{
        console.log(arr);
    },2000)
}
