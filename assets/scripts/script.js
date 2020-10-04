$( document ).ready(function() {

  var card = $('.easy .card');
  // var card = $('.active div');
  var cards = [];
  var z = 0;
  var clickCount = 0;
  var firstClick = 0;
  var matchedPairs = 0;
  var cardIndex;
  var gameOver = false;
  var gameTime;
  var gameScore = 0;
  var timeAdjust = 0;
  var timePenalty = 0;
  var timeBonus = 0;
  var mistakes = 0;
  var timeRemaining;
  var highScores = [];
  var flippedCards = [];
  var card1Seen = false;
  var card2Seen = false;
  var flippedCardIndex = []
  var storageModeChanged;
  var gameSoundEffects = true;
  var backgroundSoundEffects = true;
  var storage;
  var persistentHighScoreData;
  var score = $('.score');
  var cardPictures = ['homer','bart','marge','lisa','maggie','milhouse','krusty','willie', 'wiggum', 'apu', 'lovejoy', 'flanders', 'moe', 'skinner'];
  var maxPairs = 14;
  var gameMode = sessionStorage.getItem("gameMode");
  var scorePositions = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"];
  var matchPoints;




  $('#easy').click(function() {
    sessionStorage.setItem("gameMode", "easy");
  });
  $('#medium').click(function() {
    sessionStorage.setItem("gameMode", "medium");
  });
  $('#hard').click(function() {
    sessionStorage.setItem("gameMode", "hard");
  });

  // Check which game mode has been selected

  switch (gameMode) {
    case ("easy"):
      console.log("Easy selected");
      $('.medium-remove').remove();
      $('.hard-remove').remove();
      maxPairs = 6;
      matchPoints = 40;
      timePenalty = 2000;
      timeBonus = 5000;
      card = $('.easy .card');
      break;
    case ("medium"):
      $('.hard-remove').remove();
      maxPairs = 10;
      matchPoints = 50;
      timePenalty = 3000;
      timeBonus = 6000;
      card = $('.medium .card');
      break;
    console.log("Medium selected");
    case ("hard"):
      console.log("Hard selected");
      maxPairs = 14;
      matchPoints = 60;
      timePenalty = 4000;
      timeBonus = 7000;
      card = $('.hard .card');
    Default:
    console.log(gameMode);
  }


// **************************** Main Menu  *********************************************

setTimeout(function() {
  $('.opening-screen')[0].classList.add('animate__zoomOutUp')
  $('.menu-items').css('visibility','visible');
  $('.menu-items')[0].classList.add('animate__animated', 'animate__backInUp', 'animate__delay-1s')

},3000);

});
