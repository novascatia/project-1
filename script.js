document.addEventListener('DOMContentLoaded', () => {
    // --- Captcha Logic ---
    const captchaText = document.getElementById('captcha-text');
    const loginForm = document.getElementById('loginForm');
    const captchaInput = document.getElementById('captcha');

    let num1, num2;

    function generateCaptcha() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        captchaText.textContent = `${num1} + ${num2}`;
        captchaInput.value = '';
    }

    generateCaptcha(); // Generate initial captcha

    // --- Login Form Submission ---
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            const userCaptcha = parseInt(captchaInput.value, 10);
            const correctCaptcha = num1 + num2;

            if (userCaptcha === correctCaptcha) {
                // Simulasi login berhasil, redirect ke halaman home
                window.location.href = 'home.html';
            } else {
                alert('Captcha salah. Silakan coba lagi.');
                generateCaptcha(); // Generate captcha baru
            }
        });
    }
});