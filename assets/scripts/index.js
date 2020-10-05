var gameSoundEffects = true;
var backgroundMusic = true;
var persistentHighScoreData = true;
var exitButtonUsed = false;



if (JSON.parse(localStorage.getItem('backgroundMusic')) != "undefined") {
  backgroundMusic = JSON.parse(localStorage.getItem('backgroundMusic'));
  if (backgroundMusic) {
    $('#bsfx').prop('checked',true);
  }
  else {
    $('audio')[0].pause();
    $('#bsfx').prop('checked',false);
  }
}



if (JSON.parse(sessionStorage.getItem('exitButtonUsed'))) {
  console.log("Exit button was used");
  openingScreenAnimations();
  sessionStorage.setItem('exitButtonUsed', false);
  }
  else {
    $('.startGameModal').modal('toggle');
  }

// Workaround for Chrome block audio autoplay


$('#startButton').click(function() {
  openingScreenAnimations();
});


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}



$('#apply').click(function() {
  gameSoundEffects = $('#gsfx').is(':checked')
  backgroundMusic = $('#bsfx').is(':checked');
  persistentHighScoreData = $('#phsd').is(':checked');
  console.log(gameSoundEffects, backgroundMusic, persistentHighScoreData);
  if (!backgroundMusic) {
    $('audio')[0].pause();
    localStorage.setItem('backgroundMusic', false);
  }
  else {
    $('audio')[0].play();
    localStorage.setItem('backgroundMusic', true);
  }
});

$('#cancel').click(function() {
  if(!$('#gsfx').is(':checked') && gameSoundEffects == true) {
    console.log("gsfx is off");
    $('#gsfx').prop('checked', true);
  }
  else if ($('#gsfx').is(':checked') && gameSoundEffects == false){
    $('#gsfx').prop('checked', false);
  }
  if(!$('#bsfx').is(':checked') && backgroundMusic == true) {
    console.log("bsfx is off");
    $('#bsfx').prop('checked', true);
  }
  else if ($('#bsfx').is(':checked') && backgroundMusic == false){
    $('#bsfx').prop('checked', false);
  }
  if(!$('#phsd').is(':checked') && persistentHighScoreData == true) {
    console.log("phsd is off");
    $('#phsd').prop('checked', true);
  }
  else if ($('#phsd').is(':checked') && persistentHighScoreData == false) {
    $('#phsd').prop('checked', false);
  }
})



  // Game difficulty select
  $('#easy').click(function() {
  sessionStorage.setItem("gameMode", "easy");
  });
  $('#medium').click(function() {
  sessionStorage.setItem("gameMode", "medium");
  });
  $('#hard').click(function() {
  sessionStorage.setItem("gameMode", "hard");
  });


  function openingScreenAnimations() {
    $('.opening-screen')[0].classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
    if(backgroundMusic) {
      $('audio')[0].play();
    }
    else {
      $('audio')[0].pause();
    }
    $('.opening-screen').css('visibility','visible');
    setTimeout(function() {
      $('.opening-screen')[0].classList.add('animate__zoomOutUp')
      $('.menu-items').css('visibility','visible');
      $('.menu-items')[0].classList.add('animate__animated', 'animate__backInUp', 'animate__delay-1s')

    },3000);
  }
