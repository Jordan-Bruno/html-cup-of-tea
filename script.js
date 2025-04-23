// Function to copy text from a textarea
function copyToClipboard(event) {
    const targetId = event.currentTarget.getAttribute('data-target');
    const textarea = document.getElementById(targetId);
    
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Show feedback
    event.currentTarget.classList.add('copied');
    setTimeout(() => {
        event.currentTarget.classList.remove('copied');
    }, 1000);
}

// Attach event listeners to all copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', copyToClipboard);
});

// Resize all textareas on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("textarea.code-block").forEach(textarea => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    });
});

// Theme toggle functionality
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');

    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
});
