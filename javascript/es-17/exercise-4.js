function calculate() {
  let operations = {
    result : 0,
    add(a) {
      this.result += a;
      return this
    },
    sub(a) {
      this.result -= a;
      return this
    },
    multiply(a) {
      this.result *= a;
      return this
    },
    divide(a) {
      this.result /= a;
      return this
    },
    printResult() {
      console.log(this.result);
    }
  };
  return operations
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7