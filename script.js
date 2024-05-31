document.addEventListener('DOMContentLoaded', function() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let chances = 3;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const chancesDisplay = document.getElementById('chances');

    guessButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        if (guess === secretNumber) {
            message.textContent = `Congratulations! You guessed the number ${secretNumber}!`;
            disableInput();
        } else {
            chances--;
            if (chances === 0) {
                message.textContent = `Game over! The number was ${secretNumber}.`;
                disableInput();
            } else {
                message.textContent = guess < secretNumber ? "Too low. Try again!" : "Too high. Try again!";
                chancesDisplay.textContent = chances;
            }
        }
    });

    function disableInput() {
        guessInput.disabled = true;
        guessButton.disabled = true;
    }
});