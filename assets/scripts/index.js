var gameSoundEffects = true;
var backgroundSoundEffects = true;
var persistentHighScoreData = true;

$('#apply').click(function() {
  gameSoundEffects = $('#gsfx').is(':checked')
  backgroundSoundEffects = $('#bsfx').is(':checked');
  persistentHighScoreData = $('#phsd').is(':checked');
  console.log(gameSoundEffects, backgroundSoundEffects, persistentHighScoreData);
});

$('#cancel').click(function() {
  if(!$('#gsfx').is(':checked') && gameSoundEffects == true) {
    console.log("gsfx is off");
    $('#gsfx').prop('checked', true);
  }
  else if ($('#gsfx').is(':checked') && gameSoundEffects == false){
    $('#gsfx').prop('checked', false);
  }
  if(!$('#bsfx').is(':checked') && backgroundSoundEffects == true) {
    console.log("bsfx is off");
    $('#bsfx').prop('checked', true);
  }
  else if ($('#bsfx').is(':checked') && backgroundSoundEffects == false){
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

setTimeout(function() {
  $('.opening-screen')[0].classList.add('animate__zoomOutUp')
  $('.menu-items').css('visibility','visible');
  $('.menu-items')[0].classList.add('animate__animated', 'animate__backInUp', 'animate__delay-1s')

},3000);

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
