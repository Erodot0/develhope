function sumUntil(maxValue) {
  let total = 0; 
 
  for (let i = 1; i <= maxValue;  i++) {

    total += i 
  
  }
  return total
}

console.log(sumUntil(5));