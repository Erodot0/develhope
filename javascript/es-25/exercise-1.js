const person = {
  get firstName1(){
    return this.firstName
  },
  set setfirstName(a){
    this.firstName = a; 
  },
  get lastName1(){
    return this.lastName
  },
  set setlastName(a){
    this.lastName = a;
  },
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = Object.create(person);
john.firstName = "john", 
john.lastName = "cena" 

const simon = Object.create(person);
simon.firstName = "simon", 
simon.lastName = "pranzo" 

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins