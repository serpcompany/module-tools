// countSentences.js

function countSentences(text) {
    const sentenceEndings = /[.!?]/g;
    const sentences = text.match(sentenceEndings);
    return sentences ? sentences.length : 0;
}