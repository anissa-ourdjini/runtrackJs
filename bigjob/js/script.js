// Simulation des fichiers JSON (en mémoire pour le front-end)
let users = JSON.parse(localStorage.getItem('users')) || [];
let requests = JSON.parse(localStorage.getItem('requests')) || [];

// Gestion de l'inscription
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Vérification du domaine @laplateforme.io
    if (!email.endsWith('@laplateforme.io')) {
        alert('Seuls les emails @laplateforme.io sont autorisés.');
        return;
    }

    // Vérification si l'utilisateur existe déjà
    if (users.find(user => user.email === email)) {
        alert('Cet email est déjà enregistré.');
        return;
    }

    // Ajout de l'utilisateur
    users.push({ email, password, role: 'user' });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Inscription réussie ! Vous pouvez vous connecter.');
    this.reset();
});

// Gestion de la connexion
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'calendar.html'; // Redirection vers le calendrier
    } else {
        alert('Email ou mot de passe incorrect.');
    }
});

// Gestion du calendrier
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            selectable: true,
            select: function(info) {
                const today = new Date();
                if (info.start < today) {
                    alert('Vous ne pouvez pas sélectionner une date passée.');
                    return;
                }
                if (confirm('Confirmer votre présence pour le ' + info.startStr + ' ?')) {
                    requests.push({
                        user: JSON.parse(localStorage.getItem('currentUser')).email,
                        date: info.startStr,
                        status: 'pending'
                    });
                    localStorage.setItem('requests', JSON.stringify(requests));
                    alert('Demande envoyée !');
                    calendar.refetchEvents();
                }
            }
        });
        calendar.render();
    }

    // Déconnexion
    document.getElementById('logoutBtn')?.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
});