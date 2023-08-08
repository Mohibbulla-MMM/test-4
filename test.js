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
let arrayInput = [0, 10];
// let arrayInput = 10
function sortMaker(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return "Please enter valid number type array";
  } else {
    if (arr[0] > arr[1]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      result.push(arr[0], arr[1]);
      return result;
    } else if (arr[1] > arr[0]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      result.push(arr[1], arr[0]);
      return result;
    } else if (arr[1] === arr[0]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      return "equal";
    }
  }
}
// console.log(sortMaker(arrayInput));
/**
 * Problem - 4
ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
তি নটি property থাকবে ।
Task:
1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
দি য়ে replace হবে । (২য় output এর format এ )
Input Output
{street: 10,house: “15A”,society: “Earth
Perfect”}
10,15A,Earth Perfect
{street: 10,society: “Earth Perfect”} 10,__,Earth Perfect
{street: 10} 10,__,__
 * 
 * 
 */
let objecta = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
// let a = objecta.house;
// let b = undefined;
// console.log(typeof b);

function findAddress(obj) {
  //   let street = obj.street || "__";
  //   let house = obj.house || "__";
  //   let society = obj.society || "__";
  let street = obj.street;
  if (typeof street === "undefined") {
    street = "__";
  }
  let house = obj.house;
  if (typeof house === "undefined") {
    house = "__";
  }
  let society = obj.society;
  if (typeof society === "undefined") {
    society = "__";
  }

  let result = street + ", " + house + ", " + society;
  return result;
}

// console.log(findAddress(objecta));

/**
 * Problem - 5
তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
1 taka
2 taka
5 taka
2. second input টা বঝু াই চি প্স এর দাম।
Task:
1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দামে র সমান বা তার বে শি হয় তাহলে boolean true রি টার্ন
করবে
2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে boolean false রি টার্ন করবে ।
3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
রি টার্ন করে দি বে ।
 */

let arraya = [1, 5, 1, 10];
// let arraya = [];
let taka = 10;
function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
    return "please enter valid array and number.";
  } else if (changeArray.length < 1) {
    return "Empty array not allowed.";
  } else {
    let arraySum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      arraySum += changeArray[i];
    }
    if (arraySum < taka) {
      return false;
    }
    if (arraySum > taka) {
      return true;
    }

    return;
  }
}
console.log(canPay(arraya, taka));
