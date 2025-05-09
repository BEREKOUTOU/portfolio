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


// IntersectionObserver for smooth animations on scroll for about, skills, projects, contact items
const animateOnScrollItems = [
  ...document.querySelectorAll('#about .cardss'),
  ...document.querySelectorAll('#Section-skills .card'),
  ...document.querySelectorAll('#projects .project-card'),
  ...document.querySelectorAll('#contact .contact-info, #contact .contact-form')
];

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -200px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log('IntersectionObserver entry:', entry.target, 'isIntersecting:', entry.isIntersecting);
    if (entry.isIntersecting) {
      const target = entry.target;
      // Add animation classes
      target.classList.add('animate__animated', 'animate__slideInUp');
      // Make item visible
      target.style.opacity = 1;
      // Add staggered delay based on index among siblings
      const parent = target.parentElement;
      if (parent) {
        const children = Array.from(parent.children);
        const index = children.indexOf(target);
        target.style.animationDelay = (index * 0.2) + 's';
      }
      // Stop observing after animation triggered once
      observer.unobserve(target);
    }
  });
}, observerOptions);

window.addEventListener('load', () => {
  animateOnScrollItems.forEach((item) => {
    // Initially hide items (optional)
    item.style.opacity = 0;
    observer.observe(item);
  });
});
 