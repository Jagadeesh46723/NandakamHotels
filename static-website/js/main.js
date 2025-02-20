// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContent = mobileMenu.querySelector('div');
    const viewMenuBtn = document.getElementById('view-menu-btn');

    // Toggle mobile menu
    function toggleMobileMenu(event) {
        if (event) event.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        // Use requestAnimationFrame to ensure the transition works
        requestAnimationFrame(() => {
            mobileMenuContent.classList.toggle('translate-x-full');
        });
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuContent.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // Match the transition duration
    }

    // Event Listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileMenuContent.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMobileMenu();
        }
    });

    // Handle mobile menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            closeMobileMenu();

            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });

    // View Menu button smooth scroll
    if (viewMenuBtn) {
        viewMenuBtn.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
