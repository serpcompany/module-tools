// countCharactersNoWhitespace.js

function countCharactersNoWhitespace(text) {
    const charactersNoWhitespace = text.replace(/\s+/g, '');
    return charactersNoWhitespace.length;
}

// button click handler
function handleButtonClickCountCharactersNoWhitespace() {
    const textarea = document.getElementById('input-count-characters-no-whitespace');
    const count = countCharactersNoWhitespace(textarea.value);
    document.getElementById('result-count-characters-no-whitespace').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('button-count-characters-no-whitespace');
    btn.addEventListener('click', handleButtonClickCountCharactersNoWhitespace);
})
