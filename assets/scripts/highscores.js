$( document ).ready(function() {
  let storage;
  let score = $('.score');
  let backgroundMusic;
  // Check local storage for high scores
  if (JSON.parse(localStorage.getItem("highScores"))){
    storage = localStorage;
    highScores = JSON.parse(storage.getItem("highScores"));
    listScores();
  }
  else if (JSON.parse(sessionStorage.getItem("highScores"))) {
    storage = sessionStorage
    highScores = JSON.parse(storage.getItem("highScores"));
    listScores();
  }
  // Check Music settings
  if ((JSON.parse(localStorage.getItem('backgroundMusic')) == true) || (JSON.parse(localStorage.getItem('backgroundMusic')) == false)) {
    backgroundMusic = JSON.parse(localStorage.getItem('backgroundMusic'));
    if (!backgroundMusic) {
      $('audio')[0].pause();
    }
    else {
      $('audio')[0].play();
    }
  }
  $('#clearScores').click(function() {
    $('#clearScoresModal').modal('toggle');
    $('#confirmClearScores').click(function() {
      sessionStorage.removeItem('highScores');
      localStorage.removeItem('highScores');
      window.location.reload();
    });
  });
  //Check if an exit button was used to access main screen to enable index.js to prevent start button.
  $('.exit-buttons').click(function() {
    sessionStorage.setItem('exitButtonUsed', true);
  });

  function listScores() {
    for(let i = 0; (i < highScores.length) && (i < 10) ; i++) {
        $(score[i]).append(`<td>${highScores[i][0]}</td><td>${highScores[i][1]}</td><td style="text-transform: uppercase;">${highScores[i][2]}</td>`);
    }
  }
});
