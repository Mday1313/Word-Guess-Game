


var wordChoices = ["reynolds", "solo", "ricksanchez", "morpheus", "leela", "adama", "doctor", "beeblebrox", "picard", "kirk", "robinson", "dallas"];

// var to hold scores
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var maxTries = 10;
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var currentWordIndex = Array.from(currentWord);

// set variables to hold event guesses wrong and correct


var wrongLetters = [];
var lettersInWord = [];

 // Connecting js with html printout

 var directionsText = document.getElementById("directions-text");
 var wrongGuessesText = document.getElementById("wrongGuesses");
 var currentWordText = document.getElementById("currentword-text");
 var winsText = document.getElementById("wins-text");
 var guessesRemainingText = document.getElementById("guessesremaining-text");
 var lossesText = document.getElementById("losses-text");


 //    set conditions for game; start game

function startGame() {
    for (i = 0; i < currentWord.length; i++) {
      lettersInWord[i] = "__";
    }
    guessesRemaining = 10;
    wrongLetters = [];
    document.getElementById("currentword-text").innerHTML = lettersInWord.join(" ");
    document.getElementById("guessesremaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wrongGuesses").innerHTML = (" ");
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    console.log(currentWord);

  }


   function updateImage() {
     var image = document.getElementById("airlock-image");
     if (guessesRemaining === 9) {
        image.src = "./assets/images/airlock9.jpg";
     } if (guessesRemaining === 8) {
      image.src = "./assets/images/airlock8.jpg";
     }  if (guessesRemaining === 7) {
      image.src = "./assets/images/airlock7.jpg";
     }  if (guessesRemaining === 6) {
      image.src = "./assets/images/airlock6.jpg";
     }  if (guessesRemaining === 5) {
      image.src = "./assets/images/airlock5.jpg";
     }  if (guessesRemaining === 4) {
      image.src = "./assets/images/airlock4.jpg";
     }  if (guessesRemaining === 0) {
      image.src = "./assets/images/airlock0.jpg";
     }
};
  
  function lettersGuessed() {
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase(); 
        var found = false;
          console.log(userGuess);
       
          for (i = 0; i < currentWord.length; i++) {
            if (userGuess === currentWord[i]) {
              lettersInWord[i] = userGuess;
                document.getElementById("currentword-text").innerHTML = lettersInWord.join(" ");
                found = true;
               
                }
            } 

        
        if (found) return;

        if (wrongLetters.indexOf(userGuess) < 0) {
          wrongLetters.push(userGuess);
          document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
          guessesRemaining--;
          
          document.getElementById("guessesremaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;
         
          console.log(guessesRemaining);
          
        }
        updateImage();

        if (guessesRemaining <= 0) {
          losses++;
          lossesText.textContent = losses + 1;
          startGame();
        }
      }
      
    }
     
  
 
  

startGame();
lettersGuessed();