'use strict'

const date = new Date();
const clock = document.querySelector('.clock');
clock.textContent=date.toLocaleTimeString('hu');

setTimeout('refresh()', 1000); 	

function refresh() {
    location.reload();
};