// translationScript.js

// Function to translate English text to Hindi
function translateToHindi(text) {
    // Replace English text with Hindi equivalents using a predefined vocabulary
    const hindiVocabulary = {
        "Welcome to My English Website": "मेरी अंग्रेजी वेबसाइट में आपका स्वागत है",
        "This is a sample English webpage.": "यह एक नमूना अंग्रेजी वेबपेज है",
        // Add more translations as needed
    };

    return hindiVocabulary[text] || text; // Return the translation or the original text
}

// Function to translate the entire page to Hindi
function translatePageToHindi() {
    const allElements = document.querySelectorAll("*"); // Select all elements on the page

    allElements.forEach((element) => {
        if (element.textContent) {
            // Translate the text content of each element
            element.textContent = translateToHindi(element.textContent);
        }
    });
}
