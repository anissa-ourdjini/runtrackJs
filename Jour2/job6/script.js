const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let inputSequence = [];

document.addEventListener("keydown", function(event) {
    inputSequence.push(event.key);

    // Garder uniquement les 10 dernières entrées
    if (inputSequence.length > konamiCode.length) {
        inputSequence.shift();
    }

    // Vérifier si le code Konami est entré correctement
    if (JSON.stringify(inputSequence) === JSON.stringify(konamiCode)) {
        activateKonamiStyle();
    }
});

function activateKonamiStyle() {
    document.body.classList.add("konami-style");

    // Ajouter du contenu sur la page
    document.body.innerHTML = `
        <h1>🎉 Code Konami Activé ! 🎉</h1>
        <p>Bienvenue dans le mode secret de <strong>La Plateforme_</strong> !</p>
    `;
}
