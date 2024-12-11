// smooth-animation.js
const smoothAnimation = {
  init: function(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    
    // Show element when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });
    
    observer.observe(element);
  },
  
  // Method to manually trigger animation
  animate: function(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    // Force reflow
    element.offsetHeight;
    
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }
};

export default smoothAnimation;