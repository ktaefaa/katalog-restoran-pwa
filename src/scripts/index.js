import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/style.scss';

import App from './views/app';

const app = new App({
  button: document.querySelector('#menu-btn'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
});

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
};

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');

  if (window.scrollY > 50) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
};
