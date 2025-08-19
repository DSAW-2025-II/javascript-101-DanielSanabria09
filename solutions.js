// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !=="number" || typeof b !=="number"){
    console.log(" Los datos de entrada no son válidos ");
    return;
  }
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !=="number" || n<0 || !Number.isInteger(n)){
    console.log(" El dato no es válido ");
    return;
  }
  let result=1;
  for(let rep=1;rep<n;rep++){
    result=result+1;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length===0 || !arr.every(num => typeof num=== "number")){
    console.log(" Los datos del arreglo no son válidos ");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if(typeof str!=="string"){
    console.log(" Los datos no son válidos ");
    return;
  }
  const vowels="aeiouAEIOU";
  let count=0;
  for(const char of str){
    if(vowels.includes(char)){
      count=count+1;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if(typeof n!=="number" || !Number.isInteger(n)){
    console.log(" El dato no es válido ");
    return;
  }
  if(n<=1){
    return false;
  }
  if(n<=3){
    return true;
  }
  if(n % 2===0 || n % 3===0){
    return false;
  }
  for(let rep=5; rep*rep<=n; rep+=6 ){
    if(n % rep===0 || n % (rep+2)===0){
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
