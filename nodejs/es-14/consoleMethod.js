// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

console.group("Challenge 1");
console.info("Surprising fact:", surprisingFact);
console.warn("Surprising fact:", surprisingFact);
console.groupEnd();

console.group("Challenge 2");
console.table(familyTree);
console.dir({ familyTree }, { depth: null });
console.groupEnd();

console.group("Challenge 3");
function importantTask() {
  console.count("Important task");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("Important task");
importantTask();
importantTask();
console.groupEnd();