let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("compteur").textContent = count;
}

document.getElementById("button").addEventListener("click", incrementCounter);
