// countCharacters.js
function countCharacters(text) {
    return text.length;
}

// handler
function handleButtonClickCountCharacters() {
    const textarea = document.getElementById('input-count-characters');
    const count = countCharacters(textarea.value);
    document.getElementById('result-count-characters').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('button-count-characters');
    btn.addEventListener('click', handleButtonClickCountCharacters);
});