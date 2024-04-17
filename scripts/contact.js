// Variable to select the submit button
const submitButton = document.querySelector('.submit-button');

// Event listener for submit button
submitButton.addEventListener('click', () => {
    // Select the contact-page element
    const contactPage = document.querySelector('.contact-page');
    
    // Create a new <p> element
    const thankYouMessage = document.createElement('p');
    
    // Set the text content of the <p> element
    thankYouMessage.textContent = "Thank you for your message";
    
    // Set the font size of the <p> element
    thankYouMessage.style.fontSize = "24px";
    
    // Replace the contents of the contact-page with the <p> element
    contactPage.innerHTML = ''; // Clear existing content
    contactPage.appendChild(thankYouMessage); // Append the new <p> element
});
