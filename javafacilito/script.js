// Código hecho por chatGPT, no me hago responsable de daños ni perjuicios que puedan causar este código.

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
