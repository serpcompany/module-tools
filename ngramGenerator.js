// ngramGenerator.js

function generateNgrams(text, n) {
    const tokens = tokenize(text);
    const ngrams = [];
    for (let i = 0; i <= tokens.length - n; i++) {
        ngrams.push(tokens.slice(i, i + n).join(' '));
    }
    return ngrams;
}
