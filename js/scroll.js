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

// Add click event listener for back to top button with animation and smooth scroll
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Add animate.css classes for animation
  backToTopButton.classList.add('animate__animated', 'animate__bounce');

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Remove animation classes after animation ends to allow re-trigger
  backToTopButton.addEventListener(
    'animationend',
    () => {
      backToTopButton.classList.remove('animate__animated', 'animate__bounce');
    },
    { once: true }
  );
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
    skillSpans.forEach((span) => {
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

// New code to add fadeOutTop animation to sections on scroll out of view
const sections = document.querySelectorAll('section');

function handleFadeOutTop() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // If section bottom is less than 100px from top, add fadeOutTop
    if (rect.bottom < 100) {
      if (!section.classList.contains('fadeOutTop')) {
        section.classList.add('fadeOutTop');
      }
    } else {
      if (section.classList.contains('fadeOutTop')) {
        section.classList.remove('fadeOutTop');
      }
    }
  });
}

window.addEventListener('scroll', handleFadeOutTop);
window.addEventListener('load', handleFadeOutTop);
