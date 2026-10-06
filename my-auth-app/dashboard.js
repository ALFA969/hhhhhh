document.addEventListener('DOMContentLoaded', () => {
    // Wajibkan autentikasi (proteksi halaman)
    requireAuth();

    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    // Tampilkan data user yang sedang aktif
    if (activeUser) {
        userNameDisplay.textContent = activeUser.name;
        userEmailDisplay.textContent = activeUser.email;
    }

    // Fitur Log Out
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('activeUser');
        alert('Anda berhasil logout.');
        window.location.href = 'login.html';
    });
});