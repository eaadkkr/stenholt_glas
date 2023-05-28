/* KILDER

Burgermenu åbnes og lukkes: 
https://codepen.io/AlHakem/pen/pKoEYp

Deaktiver scroll i body, når burgermenuen er åden:
https://stackoverflow.com/questions/27230955/how-to-disable-scrolling-in-the-background-when-the-mobile-menu-is-open

*/

// Variable
var burgerMenuStreger = document.getElementById('burgermenu_streger');
var overlay = document.getElementById('burgermenu');
var body = document.getElementById('body');

// Event listener & function
burgerMenuStreger.addEventListener('click', function () {

  // Burgermenu åbner og lukker, når der klikkes på burgermenu_streger
  // classList.toggle: class'en i parantes skifter mellem at sidde på variablen og ikke sidde der ved 'click'.
  burgerMenuStreger.classList.toggle("close");
  overlay.classList.toggle("overlay");

  // Deaktiver scroll i body, når burgermenuen er åben.
  body.classList.toggle('lock-scroll');
});