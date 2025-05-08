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

// Progress bar animation on scroll
const skillsSection = document.getElementById('Section-skills');
const skillSpans = document.querySelectorAll('.skill-bar span');
let animationDone = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function animateSkills() {
    if (!animationDone && isInViewport(skillsSection)) {
        skillSpans.forEach(span => {
            const width = span.getAttribute('data-width');
            if (width) {
                span.style.width = width;
            }
        });
        animationDone = true;
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
