document.addEventListener('DOMContentLoaded', () => {
    // Redirect ke dashboard jika sudah login
    redirectIfLoggedIn();

    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === loginEmail.value.trim() && u.password === loginPassword.value);

        if (user) {
            // Simpan sesi user aktif
            localStorage.setItem('activeUser', JSON.stringify(user));
            alert('Login berhasil!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Email atau Password salah!');
        }
    });
});