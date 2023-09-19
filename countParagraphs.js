// countParagraphs.js

function countParagraphs(text) {
    const paragraphs = text.split(/\n+/).filter(Boolean);
    return paragraphs.length;
}
