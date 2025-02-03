

// JS SECCION DE CLIENTES LINEA AUTOMATICA
// function scrollWindow() {
//   var scroll = document.querySelector(".trusted-row");
//   if (scroll.offsetWidth + scroll.scrollLeft == scroll.scrollWidth) {
//     var container = document.createElement("div");
//     container.classList.add("trusted-column");

//     var image1 = document.createElement("img");
//     image1.src = images[imageIndex];

//     container.appendChild(image1);

//     scroll.appendChild(container);

//     if (imageIndex == images.length - 1) {
//       imageIndex = 0;
//     } else {
//       imageIndex += 2;
//     }
//   }
//   scroll.scrollLeft += 1;
// }

// function handleScroll() {
//   if (!scrollStatus) {
//     startScroll();
//   } else {
//     stopScroll();
//   }
// }

// function startScroll() {
//   timeout = setInterval(scrollWindow, 20);
//   scrollStatus = true;
// }

// function stopScroll() {
//   clearInterval(timeout);
//   scrollStatus = false;
// }

// const images = [
//   "https://cdn.d1baseball.com/logos/teams/256/georgemas.png",
//   "https://logos-download.com/wp-content/uploads/2016/06/Lockheed_Martin_logo.png",
//   "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
//   "https://1000logos.net/wp-content/uploads/2019/11/facebook-logo-png.png",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   "https://appcmsprod.viewlift.com/07f03878-2e8b-4f70-a4d9-ebb2a920da80/images/eagle-bank-arena.png",
//   "https://logodix.com/logo/1810537.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1280px-Deloitte.svg.png",
//   "https://www.cs.umd.edu/cscareerfair/sites/default/files/cs.umd.edu.openhouse/images/company/mitre_0.png",
//   "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/leidos-logo.png",
//   "https://cdn.discordapp.com/attachments/620652013088407595/697112575271239811/GMU_foundation.png",
//   "https://media.discordapp.net/attachments/620652013088407595/697112610730016778/Sodexo_logo.png",
//   "https://pac.gmu.edu/wp-content/uploads/2018/07/cropped-paclogogreen.png"
// ];

// var scrollStatus = false;
// var imageIndex = 0;

// handleScroll();

// document.querySelector(".trusted-row").addEventListener("click", function () {
//   handleScroll();
// });

document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los elementos con la clase 'number'
  const counters = document.querySelectorAll('.number');

  // Define la configuración del IntersectionObserver
  const options = {
    threshold: 0.5 // Define el umbral de visibilidad al 50%
  };

  // Define la función callback para el IntersectionObserver
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Verifica si el elemento está dentro del área visible
        const counter = entry.target;
        const target = +counter.getAttribute('data-count');
        let speed = 800; // La velocidad de la animación en milisegundos

        // Ajusta la velocidad para los contadores específicos
        if (target >= 50 || target === 120) {
          speed = 1000; // Ajusta la velocidad para el número 50 y 12 (más lento)
        }

        const updateCount = () => {
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();

        // Una vez que se ha activado el contador, detenemos la observación para este contador
        observer.unobserve(counter);
      }
    });
  };

  // Crea una nueva instancia del IntersectionObserver con la función de devolución de llamada y las opciones
  const observer = new IntersectionObserver(callback, options);

  // Observa cada contador individualmente
  counters.forEach(counter => {
    observer.observe(counter);
  });
});





