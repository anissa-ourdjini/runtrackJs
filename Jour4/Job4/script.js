// Fonction pour charger les utilisateurs à partir du fichier JSON et mettre à jour le tableau
function updateTable() {
    // Récupérer le tableau HTML
    const tableBody = document.querySelector("#table-utilisateurs tbody");
  
    // Réinitialiser le tableau avant de l'actualiser
    tableBody.innerHTML = '';
  
    // Charger le fichier utilisateur.json
    fetch('utilisateur.json')
      .then(response => response.json())
      .then(users => {
        // Ajouter chaque utilisateur dans une nouvelle ligne du tableau
        users.forEach(user => {
          const row = document.createElement('tr');
          
          const cellId = document.createElement('td');
          cellId.textContent = user.id;
          
          const cellNom = document.createElement('td');
          cellNom.textContent = user.nom;
          
          const cellPrenom = document.createElement('td');
          cellPrenom.textContent = user.prenom;
          
          const cellEmail = document.createElement('td');
          cellEmail.textContent = user.email;
  
          row.appendChild(cellId);
          row.appendChild(cellNom);
          row.appendChild(cellPrenom);
          row.appendChild(cellEmail);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }
  
  // Ajouter un écouteur d'événement au bouton pour mettre à jour le tableau
  document.getElementById("update-btn").addEventListener("click", updateTable);
  
  // Optionnel : mettre à jour le tableau lors du chargement initial de la page
  document.addEventListener("DOMContentLoaded", updateTable);
  