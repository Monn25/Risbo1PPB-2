// JavaScript for Srawung Tani Website

// Function to handle button clicks
function handleButtonClick(event) {
  alert("You clicked the button! Stay tuned for more updates.");
}

// Function to initialize event listeners
function initializeEventListeners() {
  // Add click event to all buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
  });

  // Add hover effect to navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          link.style.color = '#4CAF50'; // Change color on hover
      });
      link.addEventListener('mouseleave', () => {
          link.style.color = 'white'; // Revert color on mouse leave
      });
  });
}

// Function to dynamically update the footer year
function updateFooterYear() {
  const footer = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Srawung Tani. All rights reserved.`;
}

// Initialize all functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  updateFooterYear();
});

