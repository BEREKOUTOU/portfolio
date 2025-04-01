const translations = {
    fr: {
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Interlocuteur",
        // Add more translations as needed
    },
    en: {
        about: "About",
        skills: "Skills", 
        projects: "Projects",
        contact: "Contact",
        // Add more translations as needed
    },
    es: {
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos", 
        contact: "Contacto",
        // Add more translations as needed
    },
    ko: {
        about: "소개",
        skills: "기술",
        projects: "프로젝트",
        contact: "연락처",
        // Add more translations as needed
    },
    ja: {
        about: "約",
        skills: "スキル",
        projects: "プロジェクト",
        contact: "お問い合わせ",
        // Add more translations as needed
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.querySelector('.language-toggle');
    const languageOptions = document.querySelector('.language-options');
    const languageSelect = document.getElementById('language-select');

    // Show/hide language options
    languageToggle.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
        languageToggle.setAttribute('aria-expanded', languageOptions.style.display === 'block');
    });

    // Handle language selection
    languageOptions.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('value');
            changeLanguage(lang);
            languageSelect.textContent = option.textContent.trim();
            languageOptions.style.display = 'none';
            languageToggle.setAttribute('aria-expanded', 'false');
        });
    });
});

function changeLanguage(lang) {
    if (translations[lang]) {
        // Update navigation links
        document.querySelectorAll('.nav-links li a').forEach(link => {
            const key = link.getAttribute('href').replace('#', '');
            if (translations[lang][key]) {
                link.textContent = translations[lang][key];
            }
        });

        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
    }
}

// Initialize with stored language or default to French
const storedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
changeLanguage(storedLanguage);