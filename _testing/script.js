// script.js

function handleButtonClick() {
    const textarea = document.getElementById('text-input');
    const count = countParagraphs(textarea.value);
    document.getElementById('result').innerText = "Result: " + count;
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('submit-button');
    btn.addEventListener('click', handleButtonClick);
});
