function sum(...num) {
  return num.reduce((a,b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));