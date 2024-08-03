// Step 1 - Select elements
let input = document.querySelector('#price');
let error = document.querySelector('small');
let form = document.querySelector('#guess-form');

// Step 2 - Hide error message
error.style.display = "none";

// Step 3 - Generate a random number
let randomNumber = Math.floor(Math.random() * 1001);
let attempts = 0;
let chosenNumber;

// Step 6 - Create the check function
function check(number) {
  
    let instruction = document.createElement('div');
  
    if(number < randomNumber) {
        // It's higher
        instruction.textContent = "#" + attempts + " ( " + number + " ) It's higher!";
        instruction.className = "instruction higher";
    }
    else if(number > randomNumber) {
        // It's lower
        instruction.textContent = "#" + attempts + " ( " + number + " ) It's lower!";
        instruction.className = "instruction lower";
    }
    else {
        // Congratulations, you found the correct price!
        instruction.textContent = "#" + attempts + " ( " + number + " ) Congratulations, you found the correct price!";
        instruction.className = "instruction correct";
        input.disabled = true;
    }
  
    // Add the element before others
    document.querySelector('#instructions').prepend(instruction);
}

// Step 4 - Verify that the user enters a number
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        // Show the error message
        error.style.display = "inline";
    }
    else {
        // Hide the error message
        error.style.display = "none";
    }
});

// Step 5 - Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if(isNaN(input.value) || input.value == ''){
        // Set form border color to red
        input.style.borderColor = "red";
    }
    else {
        // Set form border color to silver
        attempts++;
        input.style.borderColor = "silver";
        chosenNumber = input.value;
        input.value = '';
        check(chosenNumber);
    }
});
