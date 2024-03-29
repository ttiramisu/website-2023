"use strict";

console.log(
  `%cWARNING!`,
  "color: red; background-color: yellow; font-size: 2rem; font-family: sans-serif"
);

console.log(
  `%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. \nDo not enter or paste code that you don\'t understand.`,
  "font-size: 1.2rem; font-family: monospace; font-weight: 300;"
);
// console.log(`%cDo not enter or paste code that you don\'t understand.`, 'font-size: 1.2rem; font-family: monospace;')

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
