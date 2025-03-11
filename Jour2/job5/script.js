document.addEventListener("DOMContentLoaded", function() {
    let footer = document.getElementById("footer");

    if (!footer) {
        console.error("Le footer n'a pas été trouvé !");
        return;
    }

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollTop / docHeight) * 100;

        let red = Math.round((scrollPercent / 100) * 255);
        let blue = Math.round(255 - (scrollPercent / 100) * 255);

        footer.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
    });
});
