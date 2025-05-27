// Capitalize function
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reverse string function
export function reverseString(string) {
  return string.split('').reverse().join('');
}

// Calculator object
export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
};

// Caesar cipher function
export function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
    }
    if (/[A-Z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
    }
    return char;
  }).join('');
}

// Array analyzer
export function analyzeArray(arr) {
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}
