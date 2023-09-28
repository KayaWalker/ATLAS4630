// import { hello as hellostr, year, printYear } from "./script2.js"; //Always at the top
// console.log(hello);
// console.log(year);
// console.log(printYear);

import * as constStuff from "./script2.js";
import month from "./script3.js";

console.log(constStuff.hello);
console.log(constStuff.year);
constStuff.printYear();

console.log(month);