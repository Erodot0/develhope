const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise(function (resolve, reject) {
    if (persons.find(x => x.id === id)) {
      resolve(persons.find(x => x.id === id))
    } else {
      reject("Id not found, please retry")
    }
  })
}

fetchPersonById(2).then(console.log).catch(error => {
  console.log("Error: " + error)
})