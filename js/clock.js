'use strict'

const date = new Date();
const clock = document.querySelector('.clock');
clock.textContent= date.toLocaleTimeString('hu');