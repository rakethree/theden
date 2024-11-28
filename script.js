// script.js
function toggleAnswer(questionElement) {
    // Select the next sibling element (the paragraph with the answer)
    const answer = questionElement.nextElementSibling;
  
    // Toggle the display property
    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block"; // Show the answer
    } else {
      answer.style.display = "none"; // Hide the answer
    }
  }

d
  