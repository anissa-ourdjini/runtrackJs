document.addEventListener("keydown", function(event) {
    let textarea = document.getElementById("keylogger");
    let key = event.key;

    if (/^[a-z]$/i.test(key)) { // Vérifie si la touche est une lettre (a-z, A-Z)
        if (document.activeElement === textarea) {
            textarea.value += key + key; // Double ajout si le focus est sur le textarea
        } else {
            textarea.value += key; // Ajout simple sinon
        }
    }
});
