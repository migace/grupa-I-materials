const tax = 0.23;

let name = "Agnieszka";
let surname;

name = "Tomek";

function greetings(name = "World") {
  return `Hello ${name}`;
}

console.log(greetings(name));
console.log(greetings(name));
const greetingsA = greetings();

console.log("surname", surname);

const age = 20;

if (age < 18) {
  console.log("You are too young");
} else if (age === 18) {
  console.log("You are 18");
} else {
  console.log("You are adult");
}

// =
// age = 22;
// == ===

// if (age >= 18 && age <= 30)

function getMonthDescription(month) {
  //   if (month === "January") {
  //     return "It's cold";
  //   } else if (month === "February") {
  //     return "It's cold";
  //   } else if (month === "March") {
  //     return "It's cold";
  //   } else if (month === "April") {
  //     return "It's warm";
  //   }

  switch (month) {
    case "January":
    case "February":
    case "March":
      return "It's cold";
    case "April":
      return "It's warm";
    default:
      return "";
  }
}

// Funkcje + switch. Zdefiniuj funkcję, która zadziała jak kalkulator
// i obsłuży różne typy działań:
// calculator(type, val1, val2) → calculator("add", 4, 5) -> 9

// 1. napisać funkcję calculator
// 2. switch (type) -> działanie -> zwróć rezultat

// const ocena1 = 4;
// const ocena2 = 5;
// const ocena3 = 3;

// const avg = (ocena1 + ocena2 + ocena3) / 3;

// console.log(avg);

const oceny = [4, 5, 3];

// const avg = (oceny[0] + oceny[1] + oceny[2]) / oceny.length;

// console.log(avg);

function getAvg(data = []) {
  let sum = 0;

  for (let i = 0; i < data.length; i = i + 1) {
    sum = sum + data[i];
  }

  return sum / data.length;
}

console.log(getAvg(oceny));

// user
const user = {
  name: "Test",
  age: 20,
  oceny: [4, 5, 6, 7],
};

console.log(`${user.name} (${user.age}) - avg = ${getAvg(user.oceny)}`);
