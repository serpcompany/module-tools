// countCharactersNoWhitespace.js

function countCharactersNoWhitespace(text) {
    const textWithoutWhitespace = text.replace(/\s+/g, '');
    return textWithoutWhitespace.length;
}
