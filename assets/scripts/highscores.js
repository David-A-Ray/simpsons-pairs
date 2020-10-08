let storage;
let score = $('.score');
let backgroundMusic;

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

  if (JSON.parse(localStorage.getItem('backgroundMusic') != "undefined")) {
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
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
      });
    });

    $('.exit-buttons').click(function() {
      sessionStorage.setItem('exitButtonUsed', true);
    });


    function listScores() {
      for(let i = 0; (i < highScores.length) && (i < 10) ; i++) {
          $(score[i]).append(`<td>${highScores[i][0]}</td><td>${highScores[i][1]}</td><td style="text-transform: uppercase;">${highScores[i][2]}</td>`);
      }
    }
