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
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector(".heading-part h1");

  // Structured text without raw HTML slicing
  const textSegments = [
    { text: "Hello, I am Hamad ", isSpan: false },
    { text: "Ullah", isSpan: true },
    { text: " Frontend ", isSpan: false },
    { text: "Developer", isSpan: true },
  ];

  heading.innerHTML = ""; // Clear the text initially

  let segmentIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Typing speed in milliseconds

  function typeWriter() {
    if (segmentIndex < textSegments.length) {
      const segment = textSegments[segmentIndex];

      if (!segment.isSpan) {
        // Normal text, type character by character
        if (charIndex < segment.text.length) {
          heading.innerHTML += segment.text[charIndex];
          charIndex++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          charIndex = 0;
          segmentIndex++;
          setTimeout(typeWriter, typingSpeed);
        }
      } else {
        // Text inside a span
        const span = document.createElement("span");
        heading.appendChild(span);

        function typeSpanText() {
          if (charIndex < segment.text.length) {
            span.innerHTML += segment.text[charIndex];
            charIndex++;
            setTimeout(typeSpanText, typingSpeed);
          } else {
            charIndex = 0;
            segmentIndex++;
            setTimeout(typeWriter, typingSpeed);
          }
        }

        typeSpanText();
      }
    }
  }

  typeWriter(); // Start the animation
});
