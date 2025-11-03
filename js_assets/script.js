// CODE ATTRIBUTION //
// TITLE: IIE Modual Manual 2025 //
// AUTHOR: The Independent Institute of Education (Pty) Ltd //
// VERSION: FIRST EDITION: 2012 //
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true//
// DATE ACCESSED: 1 November 2025 //

console.log("JavaScript is connected!");

// accordion.js
document.addEventListener("DOMContentLoaded", function () {
  // Select all accordion items
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((item) => {
    const question = item.querySelector(".accordion-question");

    // Create a down arrow icon dynamically (so no need for extra HTML)
    const arrow = document.createElement("span");
    arrow.innerHTML = "▼";
    arrow.style.float = "right";
    arrow.style.transition = "transform 0.3s ease";
    question.appendChild(arrow);

    // Add click event for each accordion question
    question.addEventListener("click", () => {
      // Close any other open accordion
      accordions.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          const otherArrow = i.querySelector("span");
          if (otherArrow) otherArrow.style.transform = "rotate(0deg)";
        }
      });

      // Toggle the current accordion
      item.classList.toggle("active");

      // Rotate the arrow depending on open/close state
      if (item.classList.contains("active")) {
        arrow.style.transform = "rotate(180deg)";
      } else {
        arrow.style.transform = "rotate(0deg)";
      }
    });
  });
});

// search box
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const serviceList = document.querySelectorAll("#Servicelist li");

  // Live search filter
  searchBox.addEventListener("keyup", function () {
    const query = searchBox.value.toLowerCase();

    serviceList.forEach((item) => {
      const text = item.textContent.toLowerCase();

      if (text.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let feedback = document.getElementById("formFeedback");

  if (name && email.includes("@") && message.length > 5) {
    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Please fill in all fields correctly.";
    feedback.style.color = "red";
  }
});


