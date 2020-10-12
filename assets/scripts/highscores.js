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
  else {
    console.log("No storage");
  }

  if ((JSON.parse(localStorage.getItem('backgroundMusic')) == true) || (JSON.parse(localStorage.getItem('backgroundMusic')) == false)) {
    backgroundMusic = JSON.parse(localStorage.getItem('backgroundMusic'));
    if (!backgroundMusic) {
      $('audio')[0].pause();
      console.log('line 23')
    }
    else {
      $('audio')[0].play();
      console.log('line 27')
    }
  }
  else {
    console.log("No storage 2");
  }

    $('#clearScores').click(function() {
      $('#clearScoresModal').modal('toggle');

      $('#confirmClearScores').click(function() {
        sessionStorage.removeItem('highScores');
        localStorage.removeItem('highScores');
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
