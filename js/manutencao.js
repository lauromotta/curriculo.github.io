document.addEventListener("DOMContentLoaded", function () {
    // Exibe a camada de fumaça e a mensagem de manutenção
    var overlay = document.getElementById("fumaca");
    overlay.style.display = "flex";

    // Remove a camada de fumaça após 2 segundos
    setTimeout(function () {
        overlay.style.display = "none";
    }, 2000); // 2000 milissegundos = 2 segundos
});