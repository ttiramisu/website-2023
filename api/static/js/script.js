'use strict';

console.log('bull crap shit');

function scrollInto(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
  }