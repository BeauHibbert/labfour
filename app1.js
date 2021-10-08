function getUserName(){
  let userName = prompt('What is your name?');
  console.log('userName: ', userName);

  if (userName == 'Beau'){
    document.write('<h2>Welcome ' + userName + '!!!!!!!</h2>');
  } else {
    document.write('<h2>Hi ' + userName + '!</h2>');
  }

  return userName;
}

function footballOpinion(){
  let likesFootball = prompt('Do you enjoy watching football?');
  let lowercaseAnswer = likesFootball.toLowerCase();
  console.log('likesFootball: ', likesFootball);
  console.log('lowercaseAnswer ', lowercaseAnswer);

  if (lowercaseAnswer == 'yes'){
    document.write('<h2>You are in the right place then!</h2>');
  } else {
    document.write('<h2>Get outta here!</h2>');
  }
}

// let pTag = document.getElementById('output');
// let pTagContent = '';

// function determineFavoriteTeam() {
//   let userInput = document.getElementById('userInput').value.toLowerCase();


//   if (userInput === 'washington state') {
//     pTagContent = 'Go Cougs!';
//   } else {
//     pTagContent = 'Booooo! Wrong answer!';
//   }

//   pTag.innerHTML = pTagContent;

//   console.log(userInput);
//   console.log(pTagContent);
// }

// // let button = document.getElementById('submitButton');
// // button.addEventListener('click', determineFavoriteTeam);
// document.getElementById('submitButton').addEventListener('click', determineFavoriteTeam);

// Guessing game

function guessingGame(){
  let userAnswer = prompt('How many games are there in a season?');
  let correctAnswer = 12;
  let maxAttempts = 3;
  let minimum = 1;
  let maximum = 100;
}



