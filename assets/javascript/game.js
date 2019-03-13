// declare array with all the word for the game

var wordChoices = ["roy batty", "khan singh", "rick sanchez", "sentinels", "daleks", "weeping angels", "xenomorph queen", "darth vader", "the republic", "reavers", "agent smith", "vogons", "the borg", "cthulhu", "klingons", "cylons"];

// Create variables to hold scores and guesses remaining
// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var winCounter = 0;
var guessesRemaining = 10;
// container to hold current word outside start function 
var currentWord;  
// create arrays to be filled later for word in play and wrongly guessed letters
var wrongLetters = [];
var lettersInPlay = [];
// Link html display to js variable to write later in game

var directionsText = document.getElementById("directions-text");
 var wrongGuessesText = document.getElementById("wrongGuesses");
 var currentWordText = document.getElementById("currentword-text");
 var winsText = document.getElementById("wins-text");
 var guessesRemainingText = document.getElementById("guessesremaining-text");
 var lossesText = document.getElementById("losses-text");



// set conditions for game; resets each round

function startGame() {

    // reset guess count, this should also reset the image to closed airlock

    guessesRemaining = 10; 

    // assign random word to variable
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// reset arrays to empty

    wrongLetters = [];
    lettersInPlay = [];

// build word to guess
for (i = 0; i < currentWord.length; i++) {
  if (currentWord[i] === " ") {
    lettersInPlay[i] = "-";
    space = 1;
  } else {
    lettersInPlay[i] = "__";
  }
  }
  document.getElementById("currentword-text").innerHTML = lettersInPlay.join(" ");
  document.getElementById("guessesremaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;
  document.getElementById("wrongGuesses").innerHTML = (" ");
  document.getElementById("wins-text").innerHTML = "Wins: " + wins;
  document.getElementById("losses-text").innerHTML = "Losses: " + losses;
  console.log(currentWord);

  lettersGuessed();
}

// cycle images through as the guessRemaining, make DRY if time
function updateImage() {
    var image = document.getElementById("airlock-image");
    if (guessesRemaining === 10) {
     image.src = "./assets/images/airlock10.jpg";
    } if (guessesRemaining === 9) {
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
    } if (guessesRemaining === 3) {
     image.src = "./assets/images/airlock3.jpg";
    } if (guessesRemaining === 2) {
     image.src = "./assets/images/airlock2.jpg";
    } if (guessesRemaining === 1) {
     image.src = "./assets/images/airlock1.jpg";
    } if (guessesRemaining === 0) {
     image.src = "./assets/images/airlock0.jpg";
    }
};


// Assign key press to random word, 
function lettersGuessed() {
    document.onkeyup = function(event) {
       // record those guesses in le
        var userGuess = event.key.toLowerCase();
        var match = false;
        updateImage();
        console.log(userGuess);


        // compare and send letters found in current to replace _,
        for (i = 0; i < currentWord.length; i++) {
            if (userGuess === currentWord[i]) {
              lettersInPlay[i] = userGuess;
             
                document.getElementById("currentword-text").innerHTML = lettersInPlay.join(" ");
                match = true;
                winCounter++;
              
               console.log(lettersInPlay);
               console.log(winCounter);
            } 
          
            } 
          

           
          if (winCounter === currentWord.length) {
            match = true;
            wins++;
            winCounter = 0;
            winsText.textContent = wins + 1;
            startGame();
        }





            // When current is correctly guessed ++ wins and reset game
            if (match) return;
           

            // send wrong guesses to an array to be display on page, count down remaining guesses

            if (wrongLetters.indexOf(userGuess) < 0) {
                wrongLetters.push(userGuess);
                document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
                guessesRemaining--;
                
                document.getElementById("guessesremaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;
               
                console.log(guessesRemaining);
                
              }
              updateImage();
      
          // if user runs out of guesses add loss and start over with new word
              if (guessesRemaining <= 0) {
                losses++;
                lossesText.textContent = losses + 1;
                startGame();
                
                
              }
            }
            
          };



          startGame();
