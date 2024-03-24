
// JavaScript for Strikethrough Text Generator Tool

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertToStrikethrough').addEventListener('click', function () {
        convertToStrikethrough();
    });
});

function convertToStrikethrough() {
    var inputText = document.getElementById('textInput').value;
    var strikethroughText = applyStrikethrough(inputText);
    document.getElementById('strikethroughOutput').value = strikethroughText;
}

function applyStrikethrough(text) {
    return text.split('').map(char => char + '\u0336').join('');
}
