let navLinks = document.querySelector('.nav-links');
let toggleButton = document.querySelector('.toggle-button');

// Add event listener to toggle the active class on the nav-links element when the toggle button is clicked.
if (toggleButton) {
    toggleButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action of the button
        // Toggle the 'active' class on the nav-links element to show/hide the menu.
        navLinks.classList.toggle('active');
        // Toggle the 'active' class on the toggle button to change its appearance.
        toggleButton.classList.toggle('active');
        toggleButton.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        // Set the aria-label attribute to indicate the current state of the menu.
        toggleButton.setAttribute('aria-label', navLinks.classList.contains('active') ? 'Close menu' : 'Open menu');
    });

   
}

