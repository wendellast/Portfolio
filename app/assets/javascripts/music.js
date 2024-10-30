document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var audioPlayer = document.getElementById('audioPlayer');
    var screenSize = window.innerWidth;
  
  
    if (screenSize > 600) {
    
      playButton.style.display = 'none';
  
    }
  
    
    var newAudioPlayer = document.getElementById('audioPlayer');
    playButton.addEventListener('click', function () {
      if (newAudioPlayer && newAudioPlayer.paused) {
        newAudioPlayer.play();
        playButton.textContent = 'Pause';
      } else {
        newAudioPlayer.pause();
        playButton.textContent = 'Play';
      }
    });
  
    if (newAudioPlayer) {
      newAudioPlayer.addEventListener('ended', function () {
        playButton.textContent = 'Play';
      });
    } else {
      audioPlayer.addEventListener('ended', function () {
        playButton.textContent = 'Play';
      });
    }
  });
  