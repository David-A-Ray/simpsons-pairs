$( document ).ready(function() {


  // **************************** index.html  *********************************************

  setTimeout(function() {
    $('.opening-screen')[0].classList.add('animate__zoomOutUp')
    $('.menu-items').css('visibility','visible');
    $('.menu-items')[0].classList.add('animate__animated', 'animate__backInUp', 'animate__delay-1s')

  },3000);

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

  // Check for any high scores in local Storage
  checkDataStorage();


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

  cardShuffle(cardPictures);

  // *********************  Main Functionality of the game *********************************
  $.each(card, function(index) {
  $(card[index]).click(function() {
    firstClick++;
    if (firstClick == 1) {
      timer(60);
    }
    //Prevent clicking the same card twice to produce false True result
    if ((cardIndex == index)&&(!$(card[index]).hasClass('is-flipped'))) {console.log("here here here 1")}
    // Prevent card still flipping at 0 seconds
    else if (gameOver) {}
    else {
      clickCount++;
      cardIndex = index;
        if ((matchedPairs == maxPairs - 1)&&(clickCount == 2)) {
          clearInterval(gameTime);
        }
        // Prevent more than 2 cards being selected
        if (clickCount <= 2) {
          card[index].classList.remove('is-flipped');
          cards[z] = card[index];
          flippedCardIndex[z] = index;
          z++;
          card1Seen = false;
          card2Seen = false;

          if (cards[1]){
            let a = $(cards[0]).attr("class").split(" ")[1];
            let b = $(cards[1]).attr("class").split(" ")[1];
            if (flippedCards) {
              for (let i = 0 ; i < flippedCards.length ; i++) {
                if (flippedCards[i].index ==  flippedCardIndex[0]) {
                  console.log("Card 1 already seen!!")
                  card1Seen = true;
                }
              }
              for (let i = 0 ; i < flippedCards.length ; i++) {
                if (flippedCards[i].index ==  flippedCardIndex[1]) {
                  console.log("Card 2 already seen!!")
                  card2Seen = true;
                }
              }
              if (card1Seen == false) {
                flippedCards.push({"picture": a,"index": flippedCardIndex[0]});
                console.log("Card 1 not seen before");
              }
              if (card2Seen == false) {
                flippedCards.push({"picture": b,"index": flippedCardIndex[1]});
                console.log("Card 2 not seen before");
              }
            }
            else {
              flippedCards.push({"picture": a,"index": flippedCardIndex[0]});
              flippedCards.push({"picture": b,"index": flippedCardIndex[1]});
            }
            console.log(flippedCards)
            let c = {"picture": a,"index": flippedCardIndex[0]};
            console.log(`First flipped Card Picture = ${c.picture} ${c.index}`);

            // Added timeout to enable card flip animations to complete
            setTimeout(function() {
              // Check for matching pair
              if ((a === b)&&(!gameOver)) {
                console.log("TRUE");
                adjustScore(50);
                z= 0;
                matchedPairs++;
                timeAdjust -= timeBonus;
                console.log("Number of Matched pairs: " + matchedPairs);
                $.each(cards, function(index) {
                  cards[index].classList.add('animate__animated','animate__bounceOutUp', 'animate__slow');
                });
                cards[1] = null;
                clickCount = 0;

                // Check if all pairs have been matched
                if (matchedPairs === maxPairs) {
                  gameOver = true;
                  adjustScore(timeRemaining);
                    var scorePosition = highScorePos()
                    if (scorePosition){
                      gameCompletePopup(scorePosition);
                    }
                    else {
                      gameOverPopup();
                    }
                }
                else if (gameOver){
                }
              }
              else if (a != b){
                if (flippedCards) {
                  var matchKnown = false;
                  var check = 0;
                  for (let i = 0 ; i < flippedCards.length ; i++) {
                    // Check if matching card has already been seen
                    if (flippedCards[i].picture == c.picture && flippedCards[i].index != c.index) {
                      matchKnown = true;
                      console.log("The match was already seen!!  PENALTY !!!!! ");
                      adjustScore(-5);
                      timeAdjust += timePenalty;

                      mistakes++;
                      $('#mistakes').html(`Mistakes: ${mistakes}`)
                    }
                    else {
                      check++;
                    }
                  }
                  $.each(cards, function(index) {
                    cards[index].classList.add('is-flipped');
                  });
                  cards[1] = null;
                  clickCount = 0;
                  z = 0;
                  }
                }
              else {
                console.log("FALSE");
                $.each(cards, function(index) {
                  cards[index].classList.add('is-flipped');
                });
                cards[1] = null;
                clickCount = 0;
                z = 0;
              }
            }, 1000);
          }
        }
      }
    });
  });

  // **************************** GAME FUNCTIONS *********************************************


  function placeHighScore(name, scorePos) {

    // If no scores exist yet, add score to 1st place
    if (!JSON.parse(storage.getItem("highScores"))) {
      console.log("No High Scores");
      console.log("Name = " + name);
      highScores = [[name,gameScore,gameMode]];
      storage.setItem("highScores", JSON.stringify(highScores));
      console.log("New High Score: " + highScores[0][1]);
      console.log("Session Storage High Score: " + JSON.parse(storage.getItem("highScores"))[0][1]);
    }
    else {
      for (let i = 0 ; i < scorePositions.length ; i++) {
        if (scorePos == scorePositions[i]) {
          highScores = JSON.parse(storage.getItem("highScores"));
          highScores.splice(i,0,[name,gameScore,gameMode]);

          storage.setItem("highScores", JSON.stringify(highScores));
          console.log("New High Score: " + gameScore);
          console.log("Session Storage High Score: " + JSON.parse(storage.getItem("highScores"))[0][1]);
        }
        else if (typeof(scorePos) == "undefined") {
          console.log("Sorry, No High score today");
        }



        if (highScores[10]) {
          highScores.pop();
          for (let i = 0 ; i < highScores.length ; i ++){
            console.log(`${i+1}: ${highScores[i]}`)
          }
          storage.setItem("highScores", JSON.stringify(highScores));
        }
      }
    }
    for (let i = 0 ; i < highScores.length ; i ++){
      console.log(`${i+1}: ${highScores[i]}`)
    }
  }

  function highScorePos() {
    var scorePos;
    // If no scores exist yet, add score to 1st place
    if (!JSON.parse(storage.getItem("highScores"))) {
      console.log("No High Scores");
      scorePos = scorePositions[0]
    }
    // Else if scores do exist, find where to place score
    else if (JSON.parse(storage.getItem("highScores"))[0][1]) {

      highScores = JSON.parse(storage.getItem("highScores"));

      var l = highScores.length;
      // Boolen scorePlaced used to Stop score being listed more than once if more than 1 lower score exists.
      var scorePlaced = false;
      // Loop through existing scores to find correct position
      for (var j = 0 ; ((j < l) && (scorePlaced == false)) ; j++) {
        console.log("highScores.length = " + highScores.length)
        if (gameScore > highScores[j][1]) {
          scorePlaced = true;
          scorePos = scorePositions[j];
        }
        else if  ((typeof(highScores[j+1])=="undefined")&&(j+1 != 10)) {
            scorePlaced = true;
            scorePos = scorePositions[j+1];
        }
        else {
          console.log("here in the else - 307")
        }
      }

      if (scoreplaced = false) {
          console.log("I entered the else");
          // gameOverPopup();
      }
    }
    console.log("Score position " + scorePos);
    return scorePos;
  }


  function timer(time) {
    time = new Date().getTime() + (time * 1000);
    gameTime = setInterval(function() {
      var now = new Date().getTime()
      timeDiff = time - now - timeAdjust;
      var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      timeRemaining = (minutes * 60) + seconds;
      $("#timer").html(minutes + "m " + seconds + "s ");

      if (timeDiff < 1000) {
        console.log("Time Diff: " + timeDiff);
         clearInterval(gameTime);
         $("#timer").html("Time's Up");
         gameOver = true;
         timesUpPopup();
         setTimeout(function() {
           highScore();
         },1000);
      } else if (gameOver) {
         clearInterval(gameTime);
      }
      else {
      }
    }, 1000);
  }


  function timesUpPopup() {
    setTimeout(function() {
      $('#gameOverModal').modal('toggle');
      let score = gameScore - timeRemaining;
      $('#gameCompleteText').html("<p>Sorry you ran out of time</p>");
      $('.modal-footer').html('<button type="button" class="btn btn-secondary"><a href="index.html">Exit to Main Menu</a></button><button type="button" class="btn btn-primary"><a href="game.html">New Game</a></button>')
    }, 500);
  }

  function gameOverPopup() {
    setTimeout(function() {
      let score = gameScore - timeRemaining;
      $('#gameOverModal').modal('toggle');
      $('#gameCompleteText button:first').remove();
      $('#gameCompleteText button:first').remove();
      $('.player-name').remove();
      $('.game-results:first').html(mistakes);
      //https://stackoverflow.com/questions/20782590/jquery-selector-with-nth-of-type
      $('.game-results:eq(1)').html(score);
      $('.game-results:eq(2)').html(timeRemaining);
      $('.game-results:last').html(gameScore);
      $('.modal-footer button:first').remove();

    }, 500);
  }

  function gameCompletePopup(scorePos) {
    setTimeout(function() {
      let score = gameScore - timeRemaining
      $('#gameCompleteText button:first').hide();
      $('#gameCompleteText button:eq(1)').hide();
      $('#gameOverModal h5').html(`Congratulations ${scorePos} place`)
      $('#gameOverModal').modal('toggle');
      $('.game-results:first').html(mistakes);
      //https://stackoverflow.com/questions/20782590/jquery-selector-with-nth-of-type
      $('.game-results:eq(1)').html(score);
      $('.game-results:eq(2)').html(timeRemaining);
      $('.game-results:last').html(gameScore);
      $('.modal-footer button:eq(1), .modal-footer button:eq(2)').remove();
      // $('.modal-footer button:eq(1)').remove();

      $('#nameEntry').click(function() {
        onClickOrEnter();
      })
      //https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
      $(document).on('keypress',function(e) {
        // If enter is pressed
        if(e.which == 13) {
          //https://stackoverflow.com/questions/45634088/how-to-prevent-page-from-reloading-after-form-submit-jquery/45634140
          event.preventDefault()
          onClickOrEnter();
        }
      });
      function onClickOrEnter() {
        let name = $('#playerName');
        name = name.val();
        console.log(name);
        placeHighScore(name, scorePos);
        $('#gameCompleteText button:first').show();
        $('#gameCompleteText button:eq(1)').show();
        $('#gameCompleteText button:first a').html("No");
        $('#gameCompleteText button:eq(1) a').html("Yes");
         $('.score-stats, .player-name').remove();
        $('.modal-footer').remove();
        $('.modal-header').html("Would you like to try again?");
      }
    }, 1500);
  }


  // Shuffle cards by assigning each picture class to 2 unique random array indices
  function cardShuffle(cardsArray) {
    // console.log(c);
    var i = 0;
    var j = 1;
    console.log("CardsArray 1 = " + cardsArray[1])
    var cardPicture = $('.card div:first-child');
    // var card = $('.card');
    var arr = randomIndices(card.length);
    $.each(card, function(index){
      card[arr[index]].classList.add(cardsArray[i]);
      // $(cardPicture[arr[index]]).html(cardsArray[i]);
      if ((j % 2) == 0) {
        i++;
      }
     j++;
    });
  }

  // generate randomised array of unique index numbers
  //https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  function randomIndices(arrayLength) {
    let l = arrayLength;
    let arr = [];
    while(arr.length < l) {
        let r = Math.floor(Math.random() * l) ;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  function adjustScore(points) {
    gameScore += points;
    $('#score').html('Score: ' + gameScore)

  }

  // Quit to main menu button
    $('#quit').click(function() {
      $('.main-menu').toggleClass('hide-menu');
    });

  // New Game selection
    $('#game').click(function() {
      $('.main-menu').toggleClass('hide-menu');
    });

    function checkDataStorage() {
      if (localStorage.getItem("persistentHighScoreData")) {
        persistentHighScoreData = JSON.parse(localStorage.getItem("persistentHighScoreData"));
        console.log("PHSD" + persistentHighScoreData);
        if(!$('#phsd').is(':checked') && persistentHighScoreData == true) {
          console.log("phsd is off");
          $('#phsd').prop('checked', true);
          storage = localStorage;
          storageModeChanged = false;
        }
        else if ($('#phsd').is(':checked') && persistentHighScoreData == false) {
          $('#phsd').prop('checked', false);
          console.log("phsd is on");
          storage = sessionStorage;
          storageModeChanged = true;
        }
        else if (!$('#phsd').is(':checked') && persistentHighScoreData == false){
          storage = sessionStorage;
          console.log("Here Here 1")
          storageModeChanged = true;
        }
        else {
          console.log("Here I am")
          storage = localStorage;
          storageModeChanged = false;
        }
      }
      else {
        persistentHighScoreData = true;
        storageModeChanged = false;
        storage = localStorage;
        console.log("Here Here 2")
      }
    }
    if (storage) {
      if (JSON.parse(storage.getItem("highScores"))) {
        highScores = JSON.parse(storage.getItem("highScores"));

        for(let i = 0; (i < highScores.length) && (i < 10) ; i++) {
            $(score[i]).append(`<td>${highScores[i][0]}</td><td>${highScores[i][1]}</td><td style="text-transform: uppercase;">${highScores[i][2]}</td>`);
        }
      }
    }

// **************************** HIGH SCORES FUNCTIONS *********************************************

    $('#clearScores').click(function() {
      $('#clearScoresModal').modal('toggle');

      $('#confirmClearScores').click(function() {
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
      });
    });



  });
