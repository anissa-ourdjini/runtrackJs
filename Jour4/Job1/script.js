document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
        .then(response => response.text())
        .then(text => {
            let p = document.createElement("p");
            p.textContent = text;
            document.body.appendChild(p);
        })
        .catch(error => console.error("Erreur de chargement :", error));
});
