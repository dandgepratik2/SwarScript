function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;  

  key.classList.add('playing');
  audio.currentTime = 0;  
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
 
keys.forEach(key => {
  key.addEventListener('click', function() {
    const keyCode = this.getAttribute('data-key');
    playSound(keyCode);
  });
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', function(e) {
  playSound(e.keyCode);
});