const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = "Simon";

// Modifica la proprietà "firstName" di person2 in "Simon"
/* in quanto person2 riprende l'object di person1, cambiando
 uno dei due l'altro cambia automaticamente*/
console.log(person1);
console.log(person2);