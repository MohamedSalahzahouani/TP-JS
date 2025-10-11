// 1) Variables et types
const age = 25;
const userName = "Alice";
const isStudent = true;

console.log("=== Variables ===");
console.log("Age :", age);
console.log("Nom :", userName);
console.log("Est étudiant(e) ? :", isStudent);

// 2) Opérateurs :
let x = 5;
let y = 10;

console.log("=== Opérations ===");
console.log("Addition:", x + y);
console.log("Soustraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

console.log("Comparaisons:");
console.log("x == y ?", x == y);
console.log("x === y ?", x === y);
console.log("x > y ?", x > y);
console.log("x < y ?", x < y);
console.log("x >= y ?", x >= y);

// 3) Structures de contrôle :

// if majeur/mineur
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

// for 1 à 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while pour tableau
const fruits = ["pomme", "banane", "orange"];
let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// 4) Fonctions
function addition(a, b) {
  return a + b;
}
console.log("addition(2, 3) =", addition(2, 3));

const multiply = (a, b) => a * b;
console.log("multiply(2, 3) =", multiply(2, 3));
