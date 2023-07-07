function Person(firstName, lastName) {
  this.fullName = function(){
    return `${firstName} ${lastName}`
  }
}

const john = new Person("john","cena")
const simon = new Person("simon","pranza")

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins