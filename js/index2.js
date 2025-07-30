// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('active'));
        // Show the tab content that matches the clicked tab
        document.getElementById(this.dataset.tab).classList.add('active');
        
        // Reset and animate progress bars if skills tab is selected
        if (this.dataset.tab === 'skills') {
            initProgressBars();
        }
        
        // Reset and animate timeline items
        initTimelineAnimation();
    });
});

// Animate skill progress bars
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
        }, 100);
    });
}

// Timeline animation on scroll
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.classList.remove('visible');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTimelineAnimation();
    
    // If skills tab is active at start, init progress bars
    if (document.getElementById('skills').classList.contains('active')) {
        initProgressBars();
    }
});