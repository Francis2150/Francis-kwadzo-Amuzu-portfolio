// ============================================
// Initialize Lucide Icons
// ============================================
lucide.createIcons();

// ============================================
// Project Data
// ============================================
const projectsData = [
    {
        title: "Accounting Record Management System",
        tag: "Finance • Web App",
        category: "finance web",
        image: "https://picsum.photos/seed/acct-rec-sys/800/500.jpg",
        description: "Designed and developed a web-based application for small enterprises to manage and track financial records. Implemented features for organized record storage, real-time financial tracking, and automated data management. Replaces manual financial tracking with a digital solution that improves record retrieval efficiency and reduces errors.",
        techs: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        github: "https://github.com/Francis2150",
        live: "#"
    },
    {
        title: "Financial Modelling & Valuation Projects",
        tag: "Finance • Excel",
        category: "finance",
        image: "https://picsum.photos/seed/fin-model-val/800/500.jpg",
        description: "Built dynamic three-statement financial models and discounted cash flow (DCF) valuation models for corporate analysis. Applied scenario and sensitivity analysis techniques to support budgeting and financial decision-making. These models support corporate financial planning and investment analysis workflows.",
        techs: ["Microsoft Excel", "Financial Modelling", "DCF Analysis", "Scenario Analysis"],
        github: "https://github.com/Francis2150",
        live: "#"
    },
    {
        title: "Digital Accounting System",
        tag: "Automation • Tool",
        category: "automation",
        image: "https://picsum.photos/seed/digital-acct/800/500.jpg",
        description: "Designed and implemented a digital accounting system for White Spoon Enterprise to replace manual financial tracking, improving record retrieval efficiency. Led the transition from manual to structured electronic financial records while ensuring zero data loss during migration. Enhanced financial reporting accuracy through data organization solutions.",
        techs: ["Accounting Systems", "Cloud Data", "Process Automation", "Excel"],
        github: "https://github.com/Francis2150",
        live: "#"
    },
    {
        title: "Cloud-Based Data Management System",
        tag: "Automation • Cloud",
        category: "automation",
        image: "https://picsum.photos/seed/cloud-data-mgmt/800/500.jpg",
        description: "Spearheaded the introduction of a cloud-based data management system within the Estate Accounts Unit at the Registrar General's Department. Improved data organization and secure access to records. Managed the preparation, organization, and maintenance of high-volume financial records with accuracy in filing and auditing processes.",
        techs: ["Cloud Systems", "Data Management", "Records Admin", "Security"],
        github: "https://github.com/Francis2150",
        live: "#"
    },
    {
        title: "Expense Tracker App",
        tag: "Finance • Web App",
        category: "finance web",
        image: "https://picsum.photos/seed/expense-tracker-fka/800/500.jpg",
        description: "A comprehensive expense tracking application with real-time categorization, visual analytics, and monthly budget monitoring. Features include transaction history, category-wise breakdown, export to CSV functionality, and a clean dashboard interface for personal and small business finance management.",
        techs: ["HTML", "CSS", "JavaScript", "Chart.js"],
        github: "https://github.com/Francis2150",
        live: "#"
    },
    {
        title: "Bank Reconciliation System",
        tag: "Finance • Automation",
        category: "finance automation",
        image: "https://picsum.photos/seed/bank-recon-fka/800/500.jpg",
        description: "Automated reconciliation tool that compares bank statements with internal records, flags discrepancies, and generates detailed reports. Built to reduce time spent on manual matching from hours to minutes. Handles multiple account reconciliation with error detection and variance analysis based on real-world banking experience at GCB Bank PLC.",
        techs: ["JavaScript", "CSS", "Excel Integration", "API"],
        github: "https://github.com/Francis2150",
        live: "#"
    }
];

// ============================================
// Render Projects
// ============================================
const projectsGrid = document.getElementById('projectsGrid');

function renderProjects() {
    projectsGrid.innerHTML = '';
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.setAttribute('data-category', project.category);
        card.setAttribute('data-project', index);
        card.innerHTML = `
            <div class="project-card-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-card-overlay">
                    <button class="btn btn-primary btn-sm project-view-btn">
                        <i data-lucide="eye" style="width:14px;height:14px;"></i> View Details
                    </button>
                </div>
            </div>
            <div class="project-card-body">
                <div class="project-card-tag">${project.tag}</div>
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-card-desc">${project.description.substring(0, 120)}...</p>
                <div class="project-card-techs">
                    ${project.techs.map(t => `<span class="project-tech">${t}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // Re-init icons and observers for new elements
    lucide.createIcons();
    initProjectClicks();
    initRevealObserver();
}

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 600);
});

// ============================================
// Theme Toggle
// ============================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    html.setAttribute('data-theme', 'light');
}

function updateThemeIcon() {
    const isLight = html.getAttribute('data-theme') === 'light';
    themeIcon.setAttribute('data-lucide', isLight ? 'sun' : 'moon');
    lucide.createIcons();
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// ============================================
// Navbar Scroll
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// Active Nav Link
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
            });
        }
    });
}
window.addEventListener('scroll', updateActiveLink);

// ============================================
// Mobile Menu
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ============================================
// Typing Animation
// ============================================
const typingTexts = [
    "Hybrid Accounting & Technology Professional",
    "Financial Systems Specialist",
    "Process Automation Enthusiast",
    "Accounting Systems Developer",
    "Cloud Data Management Advocate"
];

let textIndex = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeText() {
    const currentText = typingTexts[textIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 30 : 60;
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        speed = 500;
    }
    setTimeout(typeText, speed);
}
typeText();

// ============================================
// Hero Particles
// ============================================
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 18; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    particlesContainer.appendChild(particle);
}

// ============================================
// Scroll Reveal
// ============================================
function initRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));
}
initRevealObserver();

// ============================================
// Animated Counters
// ============================================
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.floor(easeOut * target);
                if (progress < 1) requestAnimationFrame(update);
                else counter.textContent = target;
            }
            requestAnimationFrame(update);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ============================================
// Skill Bars
// ============================================
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            setTimeout(() => { bar.style.width = bar.getAttribute('data-width') + '%'; }, 200);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });
skillBars.forEach(b => skillObserver.observe(b));

// ============================================
// Project Filters
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category.includes(filter)) {
                card.style.display = '';
                setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

// ============================================
// Project Modal
// ============================================
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

function initProjectClicks() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-project'));
            const project = projectsData[index];
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalTag').textContent = project.tag;
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDesc').textContent = project.description;
            document.getElementById('modalGithub').href = project.github;
            document.getElementById('modalLive').href = project.live;
            const techsEl = document.getElementById('modalTechs');
            techsEl.innerHTML = '';
            project.techs.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'project-tech';
                span.textContent = tech;
                techsEl.appendChild(span);
            });
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        });
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

// ============================================
// Contact Form
// ============================================
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) { showToast('Please fill in all fields.'); return; }
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.innerHTML = '<span style="display:inline-flex;align-items:center;gap:8px;"><span class="loader-spinner" style="width:18px;height:18px;border-width:2px;"></span> Sending...</span>';
    submitBtn.disabled = true;
    setTimeout(() => {
        showToast("Message sent successfully! I'll get back to you soon.");
        contactForm.reset();
        submitBtn.innerHTML = '<i data-lucide="send" style="width:18px;height:18px;"></i> Send Message';
        submitBtn.disabled = false;
        lucide.createIcons();
    }, 1500);
});


// ============================================
// Download / View CV
// ============================================
document.getElementById('downloadCV').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('Amuzu_Francis_Kwadzo-CV.pdf', '_blank');
});
document.getElementById('downloadCVFooter').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('Amuzu_Francis_Kwadzo-CV.pdf', '_blank');
});
document.getElementById('viewCV').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://docs.google.com/document/d/1NrbQpWXIb9BFskUqhToBA6SJzYoCSb5TXozIOIHSwBM/edit?usp=sharing', '_blank');
});

// ============================================
// Back to Top
// ============================================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Current Year
// ============================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// Render projects on load
// ============================================
renderProjects();
