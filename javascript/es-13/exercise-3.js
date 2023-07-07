const sum =  (a, b) => {
  return a + b;
}

const subtract =  (a, b)  => {
  return a - b;
}

const multiply =  (a, b) =>  {
  return a * b;
}

const divide =  (a, b) => {
  return a / b;
}

/*  log(value){...} 
puoi vedere la funzione scritta anche così
*/

const log =  (value) => {
  console.log(value);
}

// con questo vai a riprendere la funzione e dargli un argomento, così la fai funzionare
log(divide(subtract(multiply(sum(2, 4), sum(5, 2)),2),5))