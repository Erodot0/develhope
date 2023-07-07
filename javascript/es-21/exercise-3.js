const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

/*  JSON.stringify() per convertire l'oggetto in una stringa 
JSON e quindi JSON.parse() per riconvertire la stringa in 
un oggetto JavaScript (completamente nuovo)*/
const person2 = JSON.parse(JSON.stringify(person1));

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);