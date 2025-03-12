// Sélection des éléments du DOM
const grid = document.getElementById('grid');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
let tiles = [];
const size = 3;
const totalTiles = size * size - 1; // 8 carreaux + 1 case vide

// Ordre correct des carreaux (basé sur les noms logo1.PNG à logo9.PNG)
const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1 à 8 pour les images, 9 pour la case vide
let currentOrder = [...correctOrder].sort(() => Math.random() - 0.5);

// Initialiser la grille
function initGrid() {
    grid.innerHTML = '';
    tiles = [];
    currentOrder.forEach((value, index) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        if (value === 9) {
            tile.classList.add('empty');
        } else {
            tile.style.backgroundImage = `url('./images/logo${value}.PNG')`;
        }
        tile.dataset.index = index;
        tile.addEventListener('click', handleTileClick);
        grid.appendChild(tile);
        tiles.push(tile);
    });
    message.style.display = 'none';
    restartBtn.style.display = 'none';
}

// Gérer le clic sur un carreau
function handleTileClick(e) {
    const clickedIndex = parseInt(e.target.dataset.index);
    const emptyIndex = currentOrder.indexOf(9);

    if (isValidMove(clickedIndex, emptyIndex)) {
        // Échanger les positions
        [currentOrder[clickedIndex], currentOrder[emptyIndex]] = [currentOrder[emptyIndex], currentOrder[clickedIndex]];

        // Mettre à jour les images des carreaux
        if (currentOrder[clickedIndex] === 9) {
            tiles[clickedIndex].classList.add('empty');
            tiles[clickedIndex].style.backgroundImage = `url('logo9.PNG')`;
        } else {
            tiles[clickedIndex].classList.remove('empty');
            tiles[clickedIndex].style.backgroundImage = `url('logo${currentOrder[clickedIndex]}.PNG')`;
        }

        if (currentOrder[emptyIndex] === 9) {
            tiles[emptyIndex].classList.add('empty');
            tiles[emptyIndex].style.backgroundImage = `url('logo9.PNG')`;
        } else {
            tiles[emptyIndex].classList.remove('empty');
            tiles[emptyIndex].style.backgroundImage = `url('logo${currentOrder[emptyIndex]}.PNG')`;
        }

        // Vérifier la victoire
        if (checkWin()) {
            message.textContent = 'Vous avez gagné !';
            message.classList.add('won');
            message.style.display = 'block';
            restartBtn.style.display = 'block';
            tiles.forEach(tile => tile.removeEventListener('click', handleTileClick));
        }
    }
}

// Vérifier si le mouvement est valide (adjacent à la case vide)
function isValidMove(clickedIndex, emptyIndex) {
    const rowDiff = Math.abs(Math.floor(clickedIndex / size) - Math.floor(emptyIndex / size));
    const colDiff = Math.abs((clickedIndex % size) - (emptyIndex % size));
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

// Vérifier si l'ordre est correct
function checkWin() {
    return currentOrder.every((value, index) => value === correctOrder[index]);
}

// Réinitialiser le jeu
restartBtn.addEventListener('click', () => {
    currentOrder = [...correctOrder].sort(() => Math.random() - 0.5);
    initGrid();
});

// Lancer le jeu
initGrid();