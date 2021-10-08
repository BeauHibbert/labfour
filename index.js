let pTag = document.getElementById('output');
let pTagContent = '';

function determineFavoriteTeam() {
  let userInput = document.getElementById('userInput').value.toLowerCase();


  if (userInput === 'washington state') {
    pTagContent = 'Go Cougs!';
  } else {
    pTagContent = 'Booooo! Wrong answer!';
  }

  pTag.innerHTML = pTagContent;

  console.log(userInput);
  console.log(pTagContent);
}

let button = document.getElementById('submitButton');
button.addEventListener('click', determineFavoriteTeam);




