function getUserName(){
  let userName = prompt('What is your name?');
  console.log('userName: ', userName);

  if (userName == 'Beau'){
    document.write('<h2>Welcome ' + userName + '!!!!!!!</h2>');
  } else {
    document.write('<h2>Hi ' + userName + '!</h2>');
  }
}

function footballOpinion(){
  let likesFootball = prompt('Do you enjoy watching football?');
  console.log('likesFootball: ', likesFootball);

  if (likesFootball == 'Yes'){
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




