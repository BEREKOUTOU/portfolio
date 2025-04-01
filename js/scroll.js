// scroll.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
 // Back to top button
const backToTopButton = document.querySelector('.back-to-top');

   window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.style.display = 'none';
        backToTopButton.classList.remove('active');
    }
});