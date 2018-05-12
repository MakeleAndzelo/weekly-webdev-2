import '../sass/main.sass';
import 'normalize-css';

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
  if (0 < window.scrollY) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

