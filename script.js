// Get references to HTML elements
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Display initial slider value and update it dynamically
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value; // Update displayed value on slider input
});

// Generate password when the button is clicked
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword(); // Call password generation function
});

// Character sets for password generation
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// Function to generate a random password
function generatePassword() {
    let genPassword = ""; // Initialize empty password
    let allChars = ""; // Initialize possible character set

    // Add selected character sets based on checkboxes
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    // If no character set is selected, return empty password
    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    // Generate password of length equal to slider value
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length)); // Select random characters
        i++;
    }

    return genPassword; // Return generated password
}

// Copy the generated password to clipboard when the copy icon is clicked
copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value); // Copy password to clipboard
        copyIcon.innerText = "check"; // Change icon to indicate success
        copyIcon.title = "Password Copied"; // Add tooltip for success message

        // Revert icon and tooltip after 3 seconds
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000);
    }
});
