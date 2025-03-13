document.addEventListener("DOMContentLoaded", async () => {
    const filterBtn = document.getElementById("filterBtn");
    const resultsList = document.getElementById("results");
    const typeSelect = document.getElementById("type");

    let pokemonData = [];

    // Charger les données depuis le fichier pokemon.json
    async function loadPokemonData() {
        try {
            const response = await fetch("pokemon.json"); // Assurez-vous que ce fichier existe
            const text = await response.text();
            pokemonData = JSON.parse(text);

            populateTypeFilter(pokemonData);
        } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
        }
    }

    // Remplir la liste déroulante avec les types uniques
    function populateTypeFilter(data) {
        let types = new Set();
        data.forEach(pokemon => {
            pokemon.type.forEach(t => types.add(t));
        });

        types.forEach(type => {
            let option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    }

    // Filtrer les Pokémon
    filterBtn.addEventListener("click", () => {
        const id = document.getElementById("id").value.trim();
        const name = document.getElementById("name").value.trim().toLowerCase();
        const type = typeSelect.value;

        const filteredPokemons = pokemonData.filter(pokemon => {
            return (!id || pokemon.id.toString() === id) &&
                   (!name || pokemon.name.french.toLowerCase().includes(name)) &&
                   (!type || pokemon.type.includes(type));
        });

        displayResults(filteredPokemons);
    });

    // Afficher les résultats
    function displayResults(pokemons) {
        resultsList.innerHTML = "";
        if (pokemons.length === 0) {
            resultsList.innerHTML = "<li>Aucun Pokémon trouvé.</li>";
            return;
        }

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = `#${pokemon.id} - ${pokemon.name.french} (${pokemon.type.join(", ")})`;
            resultsList.appendChild(li);
        });
    }

    // Charger les données au démarrage
    await loadPokemonData();
});
