function getKeys(obj) {
  
  let objKeys = [];
  // for (let i = 0; i < Object.keys(person).length ; i++) {
  //   objKeys.push(Object.keys(person)[i])

  //   /* objKeys.push(Object.values(person)[i]) 
  //     da usare nel caso si volessero i valori delle chiavi
  //   */
  // }
  for (let key of Object.keys(obj)){
    objKeys.push(key)
  }
  return objKeys
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
