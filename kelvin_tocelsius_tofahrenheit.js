//This is the temperature in Kelvin
const kelvin = 0;

//This is the teemperature in Celsius 
let celsius = kelvin - 273;

//This is the convertion Celsius in Fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
