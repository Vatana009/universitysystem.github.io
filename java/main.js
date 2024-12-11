document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Mobile Navigation Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    // Show or hide the register button
    const registerBtn = document.querySelector('.register-btn');
    if (navLinks.classList.contains('active')) {
        registerBtn.style.display = 'block';
    } else {
        registerBtn.style.display = 'none';
    }
});