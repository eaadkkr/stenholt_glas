/* KILDER: 

https://www.youtube.com/watch?v=iI345M8nTXw

*/

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

let callback = (entries, observer) => {

  entries.forEach(entry => {
    if (entry.target.id == 'video') {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    }
  });
}

let observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('#video'));


/* MED KOMMENTARER:

// options er et objekt med værdier.
let options = {

  // Vi vil tjekke for hele browserens viewport. Derfor sættes root til null.
  // root tager dokumentets rod-element (DOM-træ). Dvs. det svarer til HTML-elementet i HTML.
  root: null,

  // rootMargin er området omkring root. 
  // rootMargin skal involveres, når vi observerer om video-elementet skærer med root eller ikke.
  rootMargin: '0px',

  // threshold er området i hvilket ethvert element, vi oberverer vil blive synlige i browserens viewport.
  // Så vil callback blive kaldt og fortælle os, at nu er elementet synligt.
  // Tallet er ratioen, så 1.0 = 100%. Dvs., at når 100% af elementet (videoen) bliver synligt i root'ens viewport, bliver callback kaldt.
  threshold: 1.0
};

// callback bliver kaldt, når videoen enten går ind i eller ud af viewport.
// Har to parametre, entries er en liste og observer er defineret længere nede.
// observer kan bruges til at observere forskellige elementer. Hver har deres egen entry i entries listen i funtionens krop.
// Vi skal derfor i funktionskroppen specificere hvilket element, vi vil observere.
let callback = (entries, observer) => {

  // Vi vil afspille videoen, når entry skærer med viewport og pause videoen, når den ikke gør.
  entries.forEach(entry => {

    // Vi tjekker at entry tilhører videoen, som vi gerne vil observere. Altså om id'et er lig videoens id.
    // Hvis der er tale om det rigtige id:
    if (entry.target.id == 'video') {

      // Hvis entry skærer med viewport
      if (entry.isIntersecting) {

        // Afspil videoen.
        entry.target.play();

      // Ellers (hvis entry ikke skærer med viewport)
      } else {

        // Sæt video på pause.
        entry.target.pause();
      }
    }
  });
}

// IntersectionObserver er et API i JS (en konstruktion i JS, der gør det lettere at kode avanceret).
// Vi bruger den, så vi kan observere et HTML-element, der bevæger sig ind i og ud af parent-elementets viewport.
let observer = new IntersectionObserver(callback, options);

// Begynd at observer videoen.
observer.observe(document.querySelector('#video'));
*/


/* I HTML er videoen sat til autoplay, sådan at den i dens default instillinger afspiller og dermed afspiller
allerede første gang, den bevæger sig ind i viewport. Eller ville man selv skulle sætte den i gang og herefter
ville det virke. */