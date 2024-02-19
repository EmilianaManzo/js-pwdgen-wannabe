//1
const firstName = prompt('Scrivi qui il tuo nome');

//2
const lastName = prompt('Scrivi qui il tuo cognome');

//3
const favColor = prompt('Scrivi qui il tuo colore preferito');

//4
const securityNumber = 24

//5
const password = firstName + lastName + favColor + securityNumber



// console control 
console.log(firstName, lastName, favColor, password, securityNumber);

//6

//soluzione senza template literal e senza variabile securityNumber
// document.getElementById('output').innerHTML = password + 24


//soluzione con template literal
document.getElementById('output').innerHTML =
`
<p class="red"> ${password}</p>

`


