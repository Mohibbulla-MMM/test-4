/*Problem - 1(basic math)
ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা input নাম্বার নি বে ।
Task:
1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
করে দি বে ফাংশন থে কে ।
*/

function cubeNumber(number) {
  let numberTypeCheck = typeof number;
  if (numberTypeCheck !== "number") {
    return "please give me valid number";
  } else {
    let result = number ** 3;
    return result;
  }
}
// let base = 10;
// let result = cubeNumber(base);
// console.log(result);
/* Problem - 2
1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
Task:
1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশে র সাথে দ্বি তীয় স্ট্রি ংটির পুর োপুরি মি ল খুজে পাও সে ক্ষে ত্রে তুমি
boolean রি টার্ন করবে এক্ষে ত্রে ত োমাকে true রি টার্ন করতে হবে ।
2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
3. Bonus: দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।
 */
function matchFinder(string1, string2) {
  let result = false;
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please enter valid string ";
  } else {
    let checked1 = string1.includes(string2);
    if (checked1 === true) {
      return true;
    }
    let checked2 = string2.includes(string1);
    if (checked2 === true) {
      return true;
    }
    return result;
  }
}
// let a1 = "Peter Parker";
// let a2 = "Pen";
// let c = a1.includes(a2);
// console.log(matchFinder(a1, a2));

/*

ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
এই array তে সবসময় দইুটি উপাদান থাকবে ।
Task:
1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
করবে ।
2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
Input”

 */
let arrayInput = [20, 30];
function sortMaker(arr) {
     
    
}
console.log(sortMaker(arrayInput));
