$(document).ready(function() {
    // Modal pour l'achat du papillon
    $('.buy-butterfly').click(function() {
        $('#butterflyModal').modal('show');
    });

    // Rebooter le Monde avec citations de Blade Runner
    const bladeRunnerQuotes = [
        "I've seen things you people wouldn't believe...",
        "All those moments will be lost in time, like tears in rain...",
        "Time to die.",
        "Quite an experience to live in fear, isn't it?"
    ];

    $('#rebootButton').click(function() {
        $(this).addClass('loading');
        $(this).prop('disabled', true);
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        $('.jumbotron-text').text(randomQuote);
        setTimeout(() => {
            $(this).removeClass('loading');
            $(this).prop('disabled', false);
        }, 2000);
    });

    // Pagination
    const customContents = [
        "Contenu 1 : Une nouvelle aventure commence !",
        "Contenu 2 : Explorez l'infini et au-delà !",
        "Contenu 3 : Le futur est maintenant !"
    ];
    let currentPage = 0;

    $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        if (page >= 0 && page < customContents.length) {
            currentPage = page;
            $('.jumbotron-text').text(customContents[currentPage]);
        }
    });

    // Activer un élément de la liste groupée
    $('#sidebarList .list-group-item').click(function() {
        $('#sidebarList .list-group-item').removeClass('active');
        $(this).addClass('active');
    });

    // Progress bar control
    let progress = 100;
    $('#progressBar').css('width', progress + '%').attr('aria-valuenow', progress);

    $('.progress-decrement').click(function() {
        if (progress > 0) {
            progress -= 10;
            $('#progressBar').css('width', progress + '%').attr('aria-valuenow', progress);
        }
    });

    $('.progress-increment').click(function() {
        if (progress < 100) {
            progress += 10;
            $('#progressBar').css('width', progress + '%').attr('aria-valuenow', progress);
        }
    });

    // Détection des touches D, G, C pour la modale
    let keySequence = [];
    $(document).keyup(function(e) {
        keySequence.push(e.key.toUpperCase());
        if (keySequence.length > 3) keySequence.shift();
        if (keySequence.join('') === 'DGC') {
            const summary = `
                Login: ${$('#login').val()}<br>
                Password: ${$('#password').val()}<br>
                URL: ${$('#url').val()}<br>
                Dogecoin: ${$('#dogecoin').val()}<br>
                Email: ${$('#email').val()}<br>
                Password2: ${$('#password2').val()}<br>
                Check: ${$('#checkMe').is(':checked') ? 'Oui' : 'Non'}
            `;
            $('#summaryContent').html(summary);
            $('#summaryModal').modal('show');
            keySequence = [];
        }
    });

    // Validation du formulaire
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password2').val();
        if (email && password) {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            $('.spinner-grow').css('background-color', randomColor);
            alert('Formulaire soumis avec succès !');
        } else {
            alert('Veuillez remplir l\'email et le mot de passe.');
        }
    });
});