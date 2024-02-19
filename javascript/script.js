//1
const firstName = prompt('Scrivi qui il tuo nome');

//2
const lastName = prompt('Scrivi qui il tuo cognome');

//3
const favColor = prompt('Scrivi qui il tuo colore preferito');

//4
const password = firstName + lastName + favColor 

// console control 
console.log(firstName, lastName, favColor, password);

//5

//soluzione senza template literal
document.getElementById('output').innerHTML = password + 24


