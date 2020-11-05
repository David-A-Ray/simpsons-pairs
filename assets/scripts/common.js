let storage;
let backgroundMusic;
let gameSoundEffects;
let persistentHighScoreData;
const defaultScores = [
  ['Bart', 600, 'Hard'],
  ['Lisa', 600, 'Hard'],
  ['Marge', 599, 'Hard'],
  ['Maggie', 590, 'Hard'],
  ['Homer', 500, 'Hard'],
  ['Homer', 350, 'Medium'],
  ['Homer', 325, 'Medium'],
  ['Homer', 250, 'Easy'],
  ['Homer', 200, 'Easy'],
  ['Homer', 195, 'Easy']
]
const scorePositions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

checkDataStorage();

// Calculate the score position based on existing scores in the highScores array
function highScorePos(gameScore) {
  let scorePos;
  // If no scores exist yet, add default scores
  if (!JSON.parse(storage.getItem("highScores"))) {
    highScores = defaultScores;
    scorePos = scorePositions[0];
    storage.setItem("highScores", JSON.stringify(highScores));
  }
  // If scores do exist, find score position
  highScores = JSON.parse(storage.getItem("highScores"));
  let l = highScores.length;
  // Boolen scorePlaced used to Stop score being listed more than once if more than 1 lower score exists.
  let scorePlaced = false;
  // Loop through existing scores to find correct position
  for (let j = 0;
    ((j < l) && (scorePlaced == false)); j++) {
    if (gameScore > highScores[j][1]) {
      scorePlaced = true;
      scorePos = scorePositions[j];
    } else if ((typeof(highScores[j + 1]) == "undefined") && (j + 1 != 10)) {
      scorePlaced = true;
      scorePos = scorePositions[j + 1];
    }
  }
  return scorePos;
}

// Insert high score into highScores array
function placeHighScore(name, scorePos, gameScore, gameMode) {
  for (let i = 0; i < scorePositions.length; i++) {
    if (scorePos == scorePositions[i]) {
      // highScores = JSON.parse(storage.getItem("highScores"));
      highScores.splice(i, 0, [name, gameScore, gameMode]);
      storage.setItem("highScores", JSON.stringify(highScores));
    }
    // Stop scores going over 10 places
    if (highScores[10]) {
      highScores.pop();
      storage.setItem("highScores", JSON.stringify(highScores));
    }
  }
}

// Check local and session storage for settings and assign values to variables.
function checkDataStorage() {
  // Check local storage for storage mode setting (local or session).
  if (localStorage.getItem("persistentHighScoreData")) {
    persistentHighScoreData = JSON.parse(localStorage.getItem("persistentHighScoreData"));
    if (persistentHighScoreData == true) {
      storage = localStorage;
    } else if (persistentHighScoreData == false) {
      storage = sessionStorage;
    } else {
      storage = localStorage;
    }
  } else {
    persistentHighScoreData = true;
    storage = localStorage;
  }

  // Check local storage for mute button setting
  if (((JSON.parse(localStorage.getItem('muteButtonClicked')) == true) ||
      (JSON.parse(localStorage.getItem('muteButtonClicked')) == false))) {
    muteButtonClicked = JSON.parse(localStorage.getItem('muteButtonClicked'));
  }

  // Check local storage for background music setting
  if ((JSON.parse(localStorage.getItem('backgroundMusic')) == true) ||
    (JSON.parse(localStorage.getItem('backgroundMusic')) == false)) {
    backgroundMusic = JSON.parse(localStorage.getItem('backgroundMusic'));
    if (!backgroundMusic) {
      $('audio')[0].pause();
    }
  }

  // Check local storage for sound effects setting
  if ((JSON.parse(localStorage.getItem('gameSoundEffects')) == true) ||
    (JSON.parse(localStorage.getItem('gameSoundEffects')) == false)) {
    gameSoundEffects = JSON.parse(localStorage.getItem('gameSoundEffects'));
  }
}

//Check if an exit button was used to access main screen to enable index.js to prevent start button.
$('.exit-buttons').click(function() {
  sessionStorage.setItem('exitButtonUsed', true);
});
