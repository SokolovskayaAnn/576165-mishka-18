var link = document.querySelector('.hit__order-button');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
  overlay.classList.add('overlay--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
    }
  }
});
