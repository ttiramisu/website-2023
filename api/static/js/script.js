'use strict'

console.log('bull crap shit')

function scrollInto(id) {
    var elmnts = document.getElementById(id);
    elmnt.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
    elmnt.style.marginTop = "10px";
  }