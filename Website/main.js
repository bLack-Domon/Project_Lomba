document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navButtons = document.querySelector('.nav-buttons');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Active nav item saat scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.frame-slider');
    const prevBtn = document.querySelector('.control-prev');
    const nextBtn = document.querySelector('.control-next');
    const frames = document.querySelectorAll('.photo-frame');
    const frameWidth = frames[0].offsetWidth + 40; // width + gap
    
    let currentScroll = 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    
    // Next button
    nextBtn.addEventListener('click', function() {
        currentScroll += frameWidth;
        if (currentScroll > maxScroll) currentScroll = maxScroll;
        slider.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    });
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        currentScroll -= frameWidth;
        if (currentScroll < 0) currentScroll = 0;
        slider.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next
            currentScroll += frameWidth;
            if (currentScroll > maxScroll) currentScroll = maxScroll;
            slider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        }
        
        if (touchEndX > touchStartX + 50) {
            // Swipe right - previous
            currentScroll -= frameWidth;
            if (currentScroll < 0) currentScroll = 0;
            slider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        }
    }
    
    // Auto-rotate (optional)
    /*
    let autoRotate = setInterval(function() {
        currentScroll += frameWidth;
        if (currentScroll > maxScroll) currentScroll = 0;
        slider.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    }, 4000);
    
    slider.addEventListener('mouseenter', function() {
        clearInterval(autoRotate);
    });
    
    slider.addEventListener('mouseleave', function() {
        autoRotate = setInterval(function() {
            currentScroll += frameWidth;
            if (currentScroll > maxScroll) currentScroll = 0;
            slider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        }, 4000);
    });
    */
});