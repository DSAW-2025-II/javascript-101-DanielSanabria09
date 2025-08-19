// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr.every((item) => typeof item === "number")
  ) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
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
