document.addEventListener('DOMContentLoaded', function() {
    
    const currentPage = window.location.pathname;
    // Extraer solo el nombre de la página y la extensión .html
    const currentPageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);

    if(currentPageName != 'index.html'){
        loadSlider('selectedProperty');
    }
    localStorage.removeItem('selectedService')
  });

'Casa Puma s architectural design is a masterclass in elegance and innovation, featuring sleek lines, open spaces, and expansive glass walls that invite the outside in. Every element has been carefully considered to harmonize with the surrounding tropical landscape, creating a seamless blend of indoor and outdoor living spaces. The result is a home that is not only a work of art but also a sanctuary of peace and tranquility.'
function setProperty(property) {
    switch(property) {
        case 'Boyer':
            localStorage.setItem('selectedProperty', JSON.stringify({
            title: 'Exceptional Accommodation',
            name: 'Boyer',
            description: 'Casa Boyer welcomes you with striking architecture that blends modern elegance with traditional Costa Rican touches, creating a cozy and luxurious atmosphere. Designed to comfortably accommodate families or groups of friends, each spacious room is crafted to provide the utmost comfort, ensuring a relaxing and rejuvenating stay.',
            backgroundImage: 'images/home-boyer/img-casa-boyer-04.jpeg',
            image: 'images/home-boyer/img-casa-boyer-01.jpeg',
            image2: 'images/home-boyer/img-casa-boyer-02.jpeg',
            image3: 'images/home-boyer/img-casa-boyer-03.jpeg',
            image4: 'images/home-puma/img-casa-puma-04.jpeg'
            }));
        break;
        case 'Puma':
                localStorage.setItem('selectedProperty', JSON.stringify({
            title: 'A Masterpiece of Luxury in Papagayo',
            name: 'Puma',
            description: 'Casa Puma s architectural design is a masterclass in elegance and innovation, featuring sleek lines, open spaces, and expansive glass walls that invite the outside in. Every element has been carefully considered to harmonize with the surrounding tropical landscape, creating a seamless blend of indoor and outdoor living spaces. The result is a home that is not only a work of art but also a sanctuary of peace and tranquility.',
            backgroundImage: 'images/home-puma/img-casa-puma-view-gathering-06.jpeg',
            image: 'images/home-puma/img-casa-puma-02.jpeg',
            image2: 'images/home-puma/img-casa-puma-view-gathering-06.jpeg',
            image3: 'images/home-puma/img-casa-puma-view-gathering-04.jpeg',
            image4: 'images/home-puma/img-casa-puma-view-gathering-03.jpeg'
            }));
        break;
        case 'commingSoon':
            localStorage.setItem('selectedProperty', JSON.stringify({
                name: 'Comming Soon',
                description: 'Home',
                backgroundImage: 'images/home-boyer/img-casa-boyer-05.jpeg',
                image: 'images/home-boyer/img-casa-boyer-05.jpeg',
                image2: 'images/home-boyer/img-casa-boyer-02.jpeg',
                image3: 'images/home-boyer/img-casa-boyer-03.jpeg'
                }));
        break;
      default:
        console.error('Servicio no encontrado');
        break;
    }

    window.location.href = 'property-single.html';

  }
  