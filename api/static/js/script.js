'use strict'

console.log('bull crap shit')

function scrollInto(id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
  }