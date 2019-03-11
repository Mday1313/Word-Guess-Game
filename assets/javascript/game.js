


var wordChoices = ["malcolm reynolds", "han solo", "rick sanchez", "morpheus", "turanga leela", "william adama", "the doctor", "zaphod beeblebrox", "jean-luc picard", "james t kirk", "john robinson", "captain dallas"];

// var to hold scores
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var maxTries = 10;
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var currentWordIndex = Array.from(currentWord);

// set variables to hold event guesses wrong and correct
var wrongGuesses = [];
var lettersInWord = [];

 // Connecting js with html printout

 var directionsText = document.getElementById("directions-text");
 var wrongGuessesText = document.getElementById("lettersguessed-text");
 var currentWordText = document.getElementById("currentword-text");
 var winsText = document.getElementById("wins-text");
 var tiesText = document.getElementById("ties-text");
 var lossesText = document.getElementById("losses-text");


 //    set conditions for game; start game

function startGame() {
    for (i = 0; i < currentWord.length; i++) {
      lettersInWord[i] = "__";
    }
    
    document.getElementById("currentword-text").innerHTML = lettersInWord.join(" ");
   console.log(currentWord);
  }
  
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
      }
      }
  
 
  

startGame();
lettersGuessed();