/* validation.js */
document.addEventListener("DOMContentLoaded", () => {
    function validateField(input, errorElement, validationFunction) {
        input.addEventListener("input", () => {
            const errorMessage = validationFunction(input.value);
            errorElement.textContent = errorMessage;
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email invalide";
    }

    function validatePassword(password) {
        return password.length >= 6 ? "" : "Le mot de passe doit contenir au moins 6 caractères";
    }

    function validateCodePostal(code) {
        return /^\d{5}$/.test(code) ? "" : "Code postal invalide";
    }

    validateField(document.getElementById("email"), document.getElementById("emailError"), validateEmail);
    validateField(document.getElementById("password"), document.getElementById("passwordError"), validatePassword);
    validateField(document.getElementById("emailSignup"), document.getElementById("emailSignupError"), validateEmail);
    validateField(document.getElementById("passwordSignup"), document.getElementById("passwordSignupError"), validatePassword);
    validateField(document.getElementById("codePostal"), document.getElementById("codePostalError"), validateCodePostal);
});
