// First prompt
const age = parseInt(prompt("Quanti anni hai?"));
console.log("age", age);

// Second prompt
const distance = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log("distance", distance);

// Conditions and output
if (!isNaN(age) && !isNaN(distance)) {
  let ticketPrice = 0.21 * distance;
  let discountedPrice;
  if (age <= 18) {
    discountedPrice = ticketPrice - ticketPrice * 0.2;
  } else if (age >= 18) {
    discountedPrice = ticketPrice - ticketPrice * 0.4;
  } else {
    discountedPrice = ticketPrice;
  }
  console.log(
    `Il tuo biglietto verrà a costare: ${discountedPrice.toFixed(2)} Euro`
  );
} else {
  console.log("Per favore, inserire valori numerici");
}
