let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; // Change this variable for testing
let runnerAge = 26; // Change this variable for testing
if(runnerAge >= 18 && registeredEarly){
  raceNumber += 1000;
}
if(runnerAge > 18 && registeredEarly){
  console.log('Your number is: ' + raceNumber + '. And you are going to start at 9:30');
}else if(runnerAge > 18 && !registeredEarly){
  console.log('Your number is: ' + raceNumber + '. And you are going to start at 11:00');
}else if(runnerAge < 18){
  console.log('Your number is: ' + raceNumber + '. And you are going to start at 12:30');
}else{
  console.log('Your must attend at the Registration Desk.');
}

