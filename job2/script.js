function showhide() {
    let article = document.getElementById("citation");

    if (article) {
        article.remove();
    } else {
        article = document.createElement("article");
        article.id = "citation";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

document.getElementById("button").addEventListener("click", showhide);
