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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// funzione persons

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
      if (persons.find(x => x.id === id)) {
        let fullName = persons.find(x => x.id === id).firstName + " " + persons.find(x => x.id === id).lastName
        resolve(fullName)
      }
      reject("Id not found, please retry")
  })
}

// funzione jobs

function fetchJobById(id){
  return new Promise((resolve, reject) => {
      if (jobs.find(x => x.id === id)) {
        resolve(jobs.find(x => x.id === id).jobTitle)
      }
      reject("Id not found, please retry")
  } )
}


Promise.all([fetchPersonById(2), fetchJobById(2)])
.then(console.log)
.catch(error => {
  console.log('Error: ' + error)
})
// core here