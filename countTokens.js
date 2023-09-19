// countTokens.js

function tokenize(text) {
    return text.toLowerCase().split(/\s+/).filter(Boolean);
}

function countTokens(text) {
    return tokenize(text).length;
}
