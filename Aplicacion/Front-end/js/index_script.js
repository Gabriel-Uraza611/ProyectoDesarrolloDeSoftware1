// Código hecho por chatGPT, no me hago responsable de daños ni perjuicios que puedan causar este código.
// Igual voy a comentar lo que entiendo y lo que le pido que haga.

//En esta parte se maneja las direcciones url para que el navegador esté estático y el contenido cambie dinámicamente
//Esto primero es para que el código no se ejecute hasta que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");
    const contentDiv = document.querySelector(".content");
    // Aquí se carga la página inicial por defecto
    // Se define la función loadPage que carga el contenido de una página HTML en el div correspondiente
    function loadPage(page) {
        // Cambia el contenido del div con la respuesta de la petición
        // Se utiliza fetch para obtener el contenido de la página
        
        fetch(`${page}`)
        // Se utiliza el método text() para obtener el contenido como texto
            .then(res => res.text())
            .then(html => {
                // Se utiliza el método innerHTML para insertar el contenido en el div
                contentDiv.innerHTML = html;
                 // Activar el enlace correspondiente
                 // Se utiliza el método forEach para recorrer todos los enlaces del menú
                menuLinks.forEach(link => {
                    // Se utiliza el método getAttribute para obtener el valor del atributo data-page
                    const linkPage = link.getAttribute("data-page");
                    if (linkPage === page) {
                        // Si el valor del atributo data-page es igual a la página cargada, se añade la clase active
                        // Se utiliza el método classList para añadir la clase active
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            });
    };
// Aquí si recargaba la página, se perdía el estado del menú activo (volvía al homepage) y no quremos eso, entonces
// Se define la función getPageFromHash que obtiene la página a cargar a partir del hash de la URL
// ASí se guarda la página donde el usuario estaba incluso si recarga la página 
    function getPageFromHash() {
        const hash = location.hash.slice(1); // elimina el "#"
        return hash || "homepage.html"; // por defecto: homepage.html
    }
    // Aquí se define la función handleHashChange que maneja el evento hashchange
    // Cuando se produce el evento, se llama a la función loadPage con la página obtenida del hash
    // Se utiliza el método loadPage para cargar la página correspondiente
    function handleHashChange() {
        const page = getPageFromHash();
        loadPage(page);
    }
    // Aquí se añade un evento click a cada enlace del menú
    // Cuando se hace clic en un enlace, se previene el comportamiento por defecto (recargar la página)
    // Manejar clics en el menú
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Cambia el hash de la URL sin recargar la página
            // Se utiliza el método preventDefault para evitar que se recargue la página
            e.preventDefault();
            const page = link.getAttribute("data-page");
            location.hash = page; // Cambia el hash, lo que activa el evento "hashchange"
        });
    });
    
    // Cargar página inicial desde el hash
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);
});

    // Cargar la página de inicio por defecto
    loadPage("homepage.html");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);

            // Estilo activo
            menuLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });


// Código para el modo oscuro y claro
document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.getElementById("toggle-theme");

    toggleThemeButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");

        // Guardar el estado en el localStorage para que se mantenga al recargar
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    // Recuperar el tema guardado
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
});
