document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const textarea = document.getElementById("comment-area");
    const commentList = document.getElementById("comment-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentText = textarea.value.trim();
        if (commentText === "") return;

        // Crea un nuevo comentario
        const comment = document.createElement("article");
        comment.classList.add("comment-input");

        comment.innerHTML = `
            <div class="profile-side">
                <img src="./img/eulaSimilingProfilePic.png" alt="Perfil" width="70" height="70">
                <span class="username">Usuario</span>
            </div>
            <div class="comment-bubble">
                <p>${commentText}</p>
            </div>
        `;

        // Agregar al contenedor
        commentList.appendChild(comment);

        // Limpiar textarea
        textarea.value = "";
    });
});
