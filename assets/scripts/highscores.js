

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
