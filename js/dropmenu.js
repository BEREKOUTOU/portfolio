let navLinks = document.querySelector('.nav-links');
let toggleButton = document.querySelector('.toggle-button');

// Add event listener to toggle the active class on the nav-links element when the toggle button is clicked.
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

   
}

