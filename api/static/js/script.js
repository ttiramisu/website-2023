'use strict'

console.log(`%cWARNING!`, 'color: red; background-color: yellow; font-size: 2rem; font-family: sans-serif')

console.log(`%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. \nDo not enter or paste code that you don\'t understand.`, 'font-size: 1.2rem; font-family: monospace; font-weight: 300;')
// console.log(`%cDo not enter or paste code that you don\'t understand.`, 'font-size: 1.2rem; font-family: monospace;')

let nav = document.getElementById('nav');
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    nav.classList.add("navbar-dark");
    nav.classList.add("bg-dark");
    nav.classList.remove("navbar-expand-lg");
  }
  else {
    nav.classList.add("navbar-expand-lg");
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-dark");
  }
};