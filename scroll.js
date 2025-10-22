document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    const progressBar = document.querySelector('.scroll-progress');
    let isScrolling = false;
    
    // Update scroll progress and button visibility
    function updateScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const winScroll = window.pageYOffset;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = (winScroll / height) * 100;
                
                // Update progress bar
                progressBar.style.width = `${scrolled}%`;
                
                // Toggle button visibility
                if (winScroll > 300) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
                
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', updateScroll, { passive: true });
    scrollBtn.addEventListener('click', scrollToTop);

    // Touch events for mobile
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;
        
        if (Math.abs(diff) > 50) {
            updateScroll();
        }
    }, { passive: true });
});