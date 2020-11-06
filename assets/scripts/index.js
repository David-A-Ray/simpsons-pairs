$(document).ready(function() {
  let exitButtonUsed = false;
  $('#gsfx').prop('checked', true);
  $('#bsfx').prop('checked', true);
  $('#phsd').prop('checked', true);

  checkDataStorage()

  // Workaround for Web Browsers blocking audio autoplay
  $('#startButton').click(function() {
    openingScreenAnimations();
  });

  // Check storage mode (Session or Local) and toggle setting switch to match
  if (storage == localStorage) {
    $('#phsd').prop('checked', true);
  } else {
    $('#phsd').prop('checked', false);
  }

  // Check if mute button was set in local storage
  if (!muteButtonClicked || (backgroundMusic || gameSoundEffects)) {
    $('#speakerButton').html('<img src="assets/images/speaker_on.png" alt="Mute button" width="50px">');
    muteButtonClicked = false;
  } else {
    $('#speakerButton').html('<img src="assets/images/speaker_off.png" alt="Mute button" width="50px">');
  }

  // Check if background music was set in local storage
  if (backgroundMusic) {
    $('#bsfx').prop('checked', true);
  } else {
    $('audio')[0].pause();
    $('#bsfx').prop('checked', false);
  }

  // Check if sound effects was set in local storage
  if (!gameSoundEffects) {
    $('#gsfx').prop('checked', false);
  }

  // Check if exit button was used to get to home screen to prevent start button popup
  if (JSON.parse(sessionStorage.getItem('exitButtonUsed'))) {
    openingScreenAnimations();
    sessionStorage.setItem('exitButtonUsed', false);
  } else {
    $('.startGameModal').modal('toggle');
  }


  // ***************** Settings Menu Confirm and Cancel buttons ******************

  // Confirm settings
  $('#apply').click(function() {
    gameSoundEffects = $('#gsfx').is(':checked');
    backgroundMusic = $('#bsfx').is(':checked');
    persistentHighScoreData = $('#phsd').is(':checked');
    if (!backgroundMusic) {
      $('audio')[0].pause();
      localStorage.setItem('backgroundMusic', false);
    } else {
      $('audio')[0].play();
      localStorage.setItem('backgroundMusic', true);
    }
    if (!persistentHighScoreData) {
      localStorage.setItem('persistentHighScoreData', false);
    } else {
      localStorage.setItem('persistentHighScoreData', true);
    }
    if (!gameSoundEffects) {
      localStorage.setItem('gameSoundEffects', false);
    } else {
      localStorage.setItem('gameSoundEffects', true);
    }
  });

  // Cancel settings
  $('#cancel').click(function() {
    if (!$('#gsfx').is(':checked') && gameSoundEffects == true) {
      $('#gsfx').prop('checked', true);
    } else if ($('#gsfx').is(':checked') && gameSoundEffects == false) {
      $('#gsfx').prop('checked', false);
    }
    if (!$('#bsfx').is(':checked') && backgroundMusic == true) {
      $('#bsfx').prop('checked', true);
    } else if ($('#bsfx').is(':checked') && backgroundMusic == false) {
      $('#bsfx').prop('checked', false);
    }
    if (!$('#phsd').is(':checked') && persistentHighScoreData == true) {
      $('#phsd').prop('checked', true);
    } else if ($('#phsd').is(':checked') && persistentHighScoreData == false) {
      $('#phsd').prop('checked', false);
    }
  });


  // ********************* Mute button on opening modal ****************************

  $('#speakerButton').click(function() {
    if (muteButtonClicked == false) {
      $('#speakerButton').html('<img src="assets/images/speaker_off.png" alt="Mute button" width="50px">');
      muteButtonClicked = true;
      localStorage.setItem('muteButtonClicked', true);
      $('#gsfx').prop('checked', false);
      $('#bsfx').prop('checked', false);
      backgroundMusic = false;
      localStorage.setItem('backgroundMusic', false);
      gameSoundEffects = false;
      localStorage.setItem('gameSoundEffects', false);
      $('audio')[0].pause();
    } else {
      $('#speakerButton').html('<img src="assets/images/speaker_on.png" alt="Mute button" width="50px">');
      muteButtonClicked = false;
      localStorage.setItem('muteButtonClicked', false);
      $('#gsfx').prop('checked', true);
      $('#bsfx').prop('checked', true);
      backgroundMusic = true;
      localStorage.setItem('backgroundMusic', true);
      gameSoundEffects = true;
      localStorage.setItem('gameSoundEffects', true);
    }
  });

  // Game difficulty select. Assign selection to session storage to be retrieved by game.js
  $('#easy').click(function() {
    sessionStorage.setItem("gameMode", "easy");
  });
  $('#medium').click(function() {
    sessionStorage.setItem("gameMode", "medium");
  });
  $('#hard').click(function() {
    sessionStorage.setItem("gameMode", "hard");
  });

  // After clicking Start button, check for sound settings and start animations
  function openingScreenAnimations() {
    $('.opening-screen')[0].classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
    if (backgroundMusic && !muteButtonClicked) {
      $('audio')[0].play();
    } else {
      $('audio')[0].pause();
    }
    $('.opening-screen').css('visibility', 'visible');
    setTimeout(function() {
      $('.opening-screen')[0].classList.add('animate__zoomOutUp');
      $('.menu-items').css('visibility', 'visible');
      $('.menu-items')[0].classList.add('animate__animated', 'animate__backInUp', 'animate__delay-1s');
    }, 3000);
  }
});
