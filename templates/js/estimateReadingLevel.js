// estimateReadingLevel.js

function syllableCount(word) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
}

function estimateReadingLevel(text) {
    const sentenceCount = countSentences(text);
    const wordCount = countWords(text);
    const words = tokenize(text);
    const syllableCounts = words.map(word => syllableCount(word));
    const totalSyllables = syllableCounts.reduce((a, b) => a + b, 0);

    const averageWordsPerSentence = wordCount / sentenceCount;
    const averageSyllablesPerWord = totalSyllables / wordCount;

    // Flesch-Kincaid Grade Level formula
    return (0.39 * averageWordsPerSentence) + (11.8 * averageSyllablesPerWord) - 15.59;
}
