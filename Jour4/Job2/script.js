function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject[key] || `Clé "${key}" non trouvée`;
    } catch (error) {
        return "Erreur : Chaîne JSON invalide";
    }
}

// Exemple d'utilisation
const jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
console.log(jsonValueKey(jsonString, "city")); // Affiche "Marseille"
