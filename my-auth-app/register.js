document.addEventListener('DOMContentLoaded', () => {
    // Redirect ke dashboard jika sudah login
    redirectIfLoggedIn();

    const registerForm = document.getElementById('registerForm');
    const regName = document.getElementById('regName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(u => u.email === regEmail.value.trim());

        if (emailExists) {
            alert('Email sudah terdaftar! Silakan gunakan email lain.');
            return;
        }

        const newUser = {
            name: regName.value.trim(),
            email: regEmail.value.trim(),
            password: regPassword.value
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Akun berhasil dibuat! Silakan login.');
        window.location.href = 'login.html';
    });
});