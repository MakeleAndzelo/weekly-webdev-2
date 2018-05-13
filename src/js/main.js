import '../sass/main.sass';
import 'normalize-css';

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let hamburgerIcon = document.querySelector('.nav-btn');

window.addEventListener('scroll', () => {
  if (0 < window.scrollY) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

hamburgerIcon.addEventListener('click', (event) => {
  event.preventDefault();
  header.classList.toggle('nav-open');
});
