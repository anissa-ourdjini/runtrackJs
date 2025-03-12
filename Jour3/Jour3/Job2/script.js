const images = Array.from(container.children);
for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.insertBefore(images[j], images[i]);
}
checkOrder();


// Gestion du drag and drop
container.addEventListener('dragstart', (e) => {
if (e.target.classList.contains('rainbow-piece')) {
    draggedElement = e.target;
    e.target.style.opacity = '0.5';
}
});

container.addEventListener('dragend', (e) => {
if (e.target.classList.contains('rainbow-piece')) {
    e.target.style.opacity = '1';
}
});

container.addEventListener('dragover', (e) => {
e.preventDefault();
});

container.addEventListener('drop', (e) => {
e.preventDefault();
if (e.target.classList.contains('rainbow-piece') && draggedElement !== e.target) {
    const allImages = Array.from(container.children);
    const draggedIndex = allImages.indexOf(draggedElement);
    const targetIndex = allImages.indexOf(e.target);
    
    if (draggedIndex < targetIndex) {
        e.target.after(draggedElement);
    } else {
        e.target.before(draggedElement);
    }
    checkOrder();
}
});

// Vérification de l'ordre
function checkOrder() {
const images = Array.from(container.children);
let isCorrect = true;

for (let i = 0; i < images.length; i++) {
    if (parseInt(images[i].dataset.order) !== i + 1) {
        isCorrect = false;
        break;
    }
}

if (isCorrect) {
    message.textContent = "Vous avez gagné";
    message.style.color = "green";
} else {
    message.textContent = "Vous avez perdu";
    message.style.color = "red";
}
}

// Événement du bouton
shuffleBtn.addEventListener('click', shuffleImages);

