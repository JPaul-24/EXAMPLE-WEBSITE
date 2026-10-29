// Select elements from the HTML DOM
const clickBtn = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counter');

// Initialize click counter variable
let count = 0;

// Add an event listener to listen for clicks on the button
clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = `Clicks: ${count}`;
});