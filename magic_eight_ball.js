let userName = 'Luis';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Would you like to ask a question to the Magic Eight Ball?';

userName ? console.log(userName + ', ' + userQuestion) : console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8)
//randomNumber = 0;
//console.log(randomNumber);
let eightBall = '';
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly';
    break;
  case 2:
    eightBall = 'reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);