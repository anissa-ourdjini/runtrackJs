// Gestion du bouton "Rebooter le Monde"
document.getElementById('rebootButton').addEventListener('click', function() {
    this.classList.add('loading');
    this.disabled = true;

    setTimeout(() => {
        this.classList.remove('loading');
        this.disabled = false;
    }, 2000);
});