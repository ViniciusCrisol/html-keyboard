const keys = document.querySelectorAll('.key');

function playNote(event) {
  const audioKeyCode = getKeyCode(event);

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  if (!key) return;

  playAudio(audioKeyCode);
  addPlayngClas(key);
}

function getKeyCode(event) {
  const isKeyboard = event.type === 'keydown';

  if (isKeyboard) return event.keyCode;

  return event.target.dataset.key;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

  audio.currentTime = 0;
  audio.play();
}

function addPlayngClas(key) {
  key.classList.add('playing');
}

function removePLayingClass(event) {
  event.target.classList.remove('playing');
}

keys.forEach((key) => {
  key.addEventListener('click', playNote);
  key.addEventListener('transitionend', removePLayingClass);
});

window.addEventListener('keydown', playNote);
