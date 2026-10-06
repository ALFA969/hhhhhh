// Fungsi untuk mengecek jika pengguna belum login
function requireAuth() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (!activeUser) {
        window.location.href = 'login.html';
    }
}

// Fungsi untuk mengecek jika pengguna sudah login (mencegah balik ke halaman login/register)
function redirectIfLoggedIn() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
        window.location.href = 'dashboard.html';
    }
}