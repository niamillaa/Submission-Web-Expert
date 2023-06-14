/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/order */
/* eslint-disable no-trailing-spaces */
import './component/footer';
import '../styles/main.css';
import 'regenerator-runtime';
import './component/app-bar';
import App from './views/app';
import './component/jumbotron';
import swRegister from './utils/sw-register';
// import '@fortawesome/fontawesome-free/js/all';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import filter from 'lodash.filter';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
//   .forEach(renderContact);

// const filterContacts = (filter) => {
//   filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
//     .forEach(renderContact);
// };
