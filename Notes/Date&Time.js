// 4 ways to create a new date object
// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// new Date(milliseconds)
// new Date(date string)
let currDate = new Date();
console.log(currDate);
console.log(currDate.toLocaleString());
console.log(currDate.toString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDay());
// no of millisecond since 1 jan 1970
console.log(Date.now());
//custom date
var d = new Date(2021,5); //min etna to dena h aur(months 0-11)
console.log(d.toLocaleString());
// object
var dat = new Date("September 15, 2020 14:09:23")
console.log(dat.toLocaleString());

// time
const time = new Date();
console.log(time.getTime());
console.log(time.getHours()); // 0-23
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());