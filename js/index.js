
        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const closeMenu = document.getElementById('close-menu');
        const navLinks = document.getElementById('nav-links');
        const links = document.querySelectorAll('.nav-link');

        mobileToggle.addEventListener('click', () => {
            navLinks.classList.add('active');
            mobileToggle.classList.add('active')
        });

        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');


            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Intersection Observer for scroll animations
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Portfolio filters
        const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Case Study Modal Functions
    const modal = document.getElementById('caseStudyModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-modal');
    const caseStudyBtns = document.querySelectorAll('.case-study-btn');
    const templates = document.getElementById('caseStudyTemplates');

    // Open modal when "View Case Study" is clicked
    caseStudyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const template = document.getElementById(`${projectId}-template`);
            if (template) {
                modalContent.innerHTML = template.innerHTML;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close the modal when X is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Prevent scrolling when modal is open
    modal.addEventListener('wheel', (e) => {
        e.stopPropagation();
    });

        // Form submission (for demo purposes only)
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form, so no data is being sent.');
            contactForm.reset();
        });
     
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
        
        // If experience tab is active at start, init its animations
        if (document.getElementById('experience').classList.contains('active')) {
            initTimelineAnimation();
        }
    });
    
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            this.style.color = 'white';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
            this.style.color = 'inherit';
        });
    });



    const blogData = [
            {
                id: 1,
                title: "10 Essential Liquid Code Snippets Every Shopify Developer Should Know",
                date: "April 10, 2025",
                category: "Development",
                image: "https://placehold.co/1200x800/4a61dd/ffffff?text=Shopify+Development",
                content: `
                    <p>As a Shopify developer, mastering Liquid is essential for creating custom, high-performing online stores. In this article, I'll share 10 powerful Liquid code snippets that I use regularly in my client projects to solve common challenges and add custom functionality.</p>
                    
                    <h3>1. Dynamic Collection Filtering</h3>
                    <p>This snippet allows customers to filter products in a collection without page reloads, significantly improving the shopping experience:</p>
                    
                    <blockquote>Implementing dynamic filters reduced bounce rates by an average of 23% for my e-commerce clients and increased time-on-site by nearly 40%.</blockquote>
                    
                    <p>The key is to use AJAX calls to fetch filtered results and update the DOM without disrupting the shopping experience. Here's an example of how to structure your code.</p>
                    
                    <h3>2. Custom Price Calculator</h3>
                    <p>For products sold by area or with complex pricing structures, a custom calculator can dramatically improve conversion rates:</p>
                    
                    <img src="https://placehold.co/800x500/25b0bc/ffffff?text=Custom+Calculator+Example" alt="Custom Price Calculator">
                    
                    <p>The calculator combines Liquid for initial rendering with JavaScript to handle real-time calculations. For one client, this solution increased average order value by 27%.</p>
                    
                    <h3>3. Advanced Product Recommendations</h3>
                    <p>Beyond Shopify's built-in recommendations, you can create sophisticated recommendation algorithms based on browsing history, purchase patterns, and more.</p>
                    
                    <p>These snippets are just the beginning. The power of Liquid lies in its flexibility and how it can be combined with JavaScript, CSS, and Shopify's API to create truly custom experiences.</p>
                `,
                tags: ["Liquid", "Shopify Development", "Code Snippets", "E-commerce", "Custom Functionality"]
            },
            {
                id: 2,
                title: "How to Optimize Your Shopify Store for Mobile Commerce in 2025",
                date: "March 28, 2025",
                category: "Tips & Tricks",
                image: "https://placehold.co/1200x800/25b0bc/ffffff?text=Shopify+Tips",
                content: `
                    <p>With over 70% of e-commerce traffic now coming from mobile devices, optimizing your Shopify store for mobile commerce isn't just nice to have—it's essential for survival. In this guide, I'll walk you through the latest mobile optimization strategies I'm implementing for my clients in 2025.</p>
                    
                    <h3>The Mobile-First Mindset</h3>
                    <p>Rather than designing for desktop and then adapting for mobile, start with the mobile experience and expand to larger screens. This ensures your core functionality works seamlessly on the devices most of your customers are using.</p>
                    
                    <img src="https://placehold.co/800x500/4a61dd/ffffff?text=Mobile+First+Design" alt="Mobile First Design">
                    
                    <p>When designing with a mobile-first approach, focus on these key elements:</p>
                    <p>- Streamlined navigation that works with thumb-based browsing<br>
                    - Large, touch-friendly buttons and input fields<br>
                    - Content prioritization that puts the most important information at the top<br>
                    - Performance optimization for varying connection speeds</p>
                    
                    <h3>Accelerated Mobile Pages (AMP) for Shopify</h3>
                    <p>Implementing AMP for your collection and product pages can significantly improve load times and search visibility. While Shopify doesn't have native AMP support, there are several approaches to implement it:</p>
                    
                    <blockquote>For a recent client, implementing AMP versions of their product pages reduced load times from 3.2 seconds to under 0.8 seconds, contributing to a 15% increase in mobile conversion rates.</blockquote>
                    
                    <h3>Mobile Payment Optimization</h3>
                    <p>The checkout experience is where many mobile conversions are lost. Optimizing for mobile payments means:</p>
                    <p>- Implementing Shop Pay, Apple Pay, and Google Pay<br>
                    - Minimizing form fields and using autofill where possible<br>
                    - Testing the checkout flow on multiple devices and connections</p>
                    
                    <p>Mobile optimization is an ongoing process, not a one-time task. Regularly test your store on different devices, gather user feedback, and keep up with emerging mobile commerce trends to stay ahead of the competition.</p>
                `,
                tags: ["Mobile Optimization", "E-commerce", "UI/UX", "Conversion Rate", "Shopify"]
            },
            {
                id: 3,
                title: "From $0 to $250K: How I Helped a Startup Scale Their Shopify Business",
                date: "March 15, 2025",
                category: "Case Study",
                image: "https://placehold.co/1200x800/ff7171/ffffff?text=Case+Study",
                content: `
                    <p>In this case study, I'll share the complete journey of how I helped transform a struggling startup into a thriving e-commerce business generating over $250,000 in monthly revenue. This 12-month project involved comprehensive Shopify development, strategic optimizations, and custom solutions tailored to their unique business model.</p>
                    
                    <h3>The Client Challenge</h3>
                    <p>When I first met with the founders of HomeAesthetics (name changed for privacy), they were struggling with:</p>
                    <p>- A basic Shopify store with poor conversion rates (under 1%)<br>
                    - Limited technical capabilities to implement their vision<br>
                    - High cart abandonment (over 80%)<br>
                    - Minimal traffic despite having quality products</p>
                    
                    <img src="https://placehold.co/800x500/ff7171/ffffff?text=Before+and+After+Comparison" alt="Before and After Store Comparison">
                    
                    <h3>The Strategy</h3>
                    <p>Rather than making incremental improvements, we decided on a complete overhaul with a focus on:</p>
                    
                    <blockquote>The key insight was that their unique value proposition wasn't being communicated effectively through the user experience. The product was excellent, but the digital storefront didn't inspire confidence or showcase quality.</blockquote>
                    
                    <p>We developed a custom theme that emphasized product quality and craftsmanship, with:</p>
                    <p>- High-resolution imagery with zoom capabilities<br>
                    - Custom product configurator for personalization<br>
                    - Dynamic pricing calculator for custom sizes<br>
                    - Social proof integration throughout the buying journey</p>
                    
                    <h3>Technical Implementation</h3>
                    <p>The technical stack included:</p>
                    <p>- Custom Shopify theme development<br>
                    - Integration with a headless CMS for enhanced content management<br>
                    - Custom app development for the product configurator<br>
                    - Advanced analytics setup to track the complete customer journey</p>
                    
                    <h3>Results and ROI</h3>
                    <p>Within 12 months of implementation:</p>
                    <p>- Conversion rate increased from 0.8% to 3.2%<br>
                    - Average order value grew by 40%<br>
                    - Cart abandonment decreased to 42%<br>
                    - Organic traffic increased by 320% due to improved SEO structure</p>
                    
                    <p>The investment in custom Shopify development paid for itself within 3 months, and the business continues to grow at approximately 15% month-over-month. The founders have since expanded their product line and are now exploring international markets.</p>
                `,
                tags: ["Case Study", "E-commerce Growth", "Shopify Development", "Conversion Optimization", "Custom Solutions"]
            }
        ];

        // Initialize blog modal functionality
        document.addEventListener('DOMContentLoaded', function() {
            const blogCards = document.querySelectorAll('.ob-blog-card');
            const blogModal = document.querySelector('.ob-blog-modal');
            const modalClose = document.querySelector('.ob-modal-close');
            const modalContent = document.querySelector('.ob-modal-content');
            
            // Open modal when clicking on a blog card
            blogCards.forEach(card => {
                const viewDetailsLink = card.querySelector('.ob-blog-link');
                viewDetailsLink.addEventListener('click', function() {
                    const blogId = parseInt(card.getAttribute('data-id'));
                    const blogPost = blogData.find(post => post.id === blogId);
                    
                    if (blogPost) {
                        // Populate modal content
                        modalContent.querySelector('.ob-modal-header img').src = blogPost.image;
                        modalContent.querySelector('.ob-modal-category').textContent = blogPost.category;
                        modalContent.querySelector('.ob-modal-title').textContent = blogPost.title;
                        modalContent.querySelector('.ob-modal-date').textContent = blogPost.date;
                        modalContent.querySelector('.ob-modal-body').innerHTML = blogPost.content;
                        
                        // Add tags if they exist
                        if (blogPost.tags && blogPost.tags.length > 0) {
                            let tagsHTML = '<div class="ob-modal-tags"><span>Tags:</span>';
                            blogPost.tags.forEach(tag => {
                                tagsHTML += `<span class="ob-tag">${tag}</span>`;
                            });
                            tagsHTML += '</div>';
                            modalContent.querySelector('.ob-modal-body').innerHTML += tagsHTML;
                        }
                        
                        // Show modal with animation
                        blogModal.classList.add('active');
                        document.body.style.overflow = 'hidden'; // Prevent background scrolling
                    }
                });
            });
            
            // Close modal
            modalClose.addEventListener('click', function() {
                blogModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            });
            
            // Close modal when clicking outside content
            blogModal.addEventListener('click', function(e) {
                if (e.target === blogModal) {
                    blogModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && blogModal.classList.contains('active')) {
                    blogModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });