$(document).ready(function() {
  let score = $('.score');
  let backgroundMusic;

  checkDataStorage();

  // Check local storage and session storage for high scores
  if (JSON.parse(localStorage.getItem("highScores"))) {
    highScores = JSON.parse(localStorage.getItem("highScores"));
    listScores();
  } else if (JSON.parse(sessionStorage.getItem("highScores"))) {
    highScores = JSON.parse(sessionStorage.getItem("highScores"));
    listScores();
  } else {
    highScores = defaultScores;
    listScores();
  }

  $('#clearScores').click(function() {
    $('#clearScoresModal').modal('toggle');
    $('#confirmClearScores').click(function() {
      sessionStorage.removeItem('highScores');
      localStorage.removeItem('highScores');
      highScores = defaultScores;
      storage.setItem("highScores", JSON.stringify(highScores));
      listScores();
      window.location.reload();
    });
  });

  // Insert high scores into highscores.html table
  function listScores() {
    for (let i = 0; (i < highScores.length) && (i < 10); i++) {
      $(score[i]).html(`<td>${scorePositions[i]}</td><td>${highScores[i][0]}
      </td><td>${highScores[i][1]}</td><td style="text-transform: uppercase;">
      ${highScores[i][2]}</td>`);
    }
  }
});
