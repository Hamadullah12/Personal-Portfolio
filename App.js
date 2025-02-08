function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  // Toggle the 'active' class on the navbar links
  navLinks.classList.toggle("active");

  // Toggle the visibility of hamburger and close icons
  hamburgerIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
}

// for text animation

document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector(".heading-part h1");

  // Store the original HTML to keep <span> elements
  const textHTML = `Hello, I am Hamad <span> Ullah </span> Frontend <span> Developer </span>`;
  heading.innerHTML = ""; // Clear the text initially

  let i = 0;
  const typingSpeed = 100; // Speed of typing (in milliseconds)

  function typeWriter() {
    if (i < textHTML.length) {
      // Add one character at a time while preserving spans
      heading.innerHTML = textHTML.slice(0, i + 1);
      i++;
      setTimeout(typeWriter, typingSpeed); // Recursive typing effect
    } else {
      heading.style.borderRight = "none"; // Remove cursor after typing is done
    }
  }

  typeWriter(); // Start the typing animation
});
