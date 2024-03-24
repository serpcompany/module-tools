// countParagraphs.js

function countParagraphs(text) {
    const paragraphs = text.match(/(^|\n\n)[^\n]+/g) || [];
    return paragraphs.length;
}


// handler
function handleButtonClickCountParagraphs() {
    const textarea = document.getElementById('input-count-paragraphs');
    const count = countParagraphs(textarea.value);
    document.getElementById('result-count-paragraphs').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('button-count-paragraphs');
    btn.addEventListener('click', handleButtonClickCountParagraphs);
});