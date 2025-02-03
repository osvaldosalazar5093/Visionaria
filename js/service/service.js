document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');

    if(!service) {
        // Si no se encuentra el servicio, redirecciona a la página de inicio
        window.location.href = '/index.html';
        return;
    }


    // Función para cargar los datos del JSON
    fetch('./data/services/service.json')
        .then(response => response.json())
        .then(data => {
            // Obtiene el contenido del servicio seleccionado
            const serviceContent = data[service];

            // Si se encuentra el servicio, muestra el contenido
            if (serviceContent) {
                const serviceDiv = document.getElementById('serviceContent');

                // Crear el carrusel de imágenes
                let carouselIndicators = '';
                let carouselInner = '';
                serviceContent.images.forEach((image, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    carouselIndicators += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeClass}"></li>`;
                    carouselInner += `
                        <div class="carousel-item ${activeClass}">
                            <img src="${image}" class="d-block w-100" alt="${serviceContent.title}">
                        </div>
                    `;
                });

                serviceDiv.innerHTML = `
                    <h1>${serviceContent.title}</h1>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            ${carouselIndicators}
                        </ol>
                        <div class="carousel-inner">
                            ${carouselInner}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <p>${serviceContent.description}</p>
                    <a href="./services.html" class="text-warning">Regresar</a>
                `;
            } else {
                // Si no se encuentra el servicio, muestra un mensaje de error
                document.getElementById('serviceContent').innerHTML = '<p>Servicio no encontrado.</p>';
            }
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
            document.getElementById('serviceContent').innerHTML = '<p>Error al cargar el servicio.</p>';
        });
});