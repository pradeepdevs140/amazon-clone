document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('.panel').classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('.panel')) {
            document.querySelector('.panel').classList.remove('active');
        }
    });
    
    // Existing functionality
    const seeMoreLinks = document.querySelectorAll('.box-content p');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function() {
            alert('This would normally take you to the category page!');
        });
    });
    
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        } else {
            alert('Please enter a search term');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchIcon.click();
        }
    });
    
    const backToTop = document.querySelector('.foot-panel1');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const panelItems = document.querySelectorAll('.panel-ops p');
    panelItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.border = '1px solid white';
            this.style.padding = '5px';
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.border = 'none';
            this.style.padding = '0';
        });
        
        // For touch devices
        item.addEventListener('touchstart', function() {
            this.style.border = '1px solid white';
            this.style.padding = '5px';
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('touchend', function() {
            this.style.border = 'none';
            this.style.padding = '0';
        });
    });
});