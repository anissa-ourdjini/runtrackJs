const showButton = document.querySelector('#showButton');
const hideButton = document.querySelector('#hideButton');

showButton.addEventListener('click', () => {
    const text = document.createElement('p');
    text.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";
    text.id = 'quote';
    document.body.appendChild(text);
});

hideButton.addEventListener('click', () => {
    const text = document.querySelector('#quote');
    if (text) {
        text.remove();
    }
});