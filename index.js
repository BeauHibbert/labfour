let userInput = document.getElementById("userInput").value.toLowerCase();
console.log(userInput);
let button = document.getElementById("submitButton");
let pTag = document.getElementById("output");
let pTagContent = '';

function determineFavoriteTeam() {
  if (userInput === 'washington state') {
    pTagContent = "Go Cougs!";
  } else {
    pTagContent = "Booooo! Wrong answer!"
  }

  pTag.innerHTML = pTagContent;

  console.log(userInput);
  console.log(pTagContent);
}

button.addEventListener('click', determineFavoriteTeam);




