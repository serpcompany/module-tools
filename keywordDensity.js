// keywordDensity.js

function tokenize(text) {
    return text.toLowerCase().split(/\s+/).filter(Boolean);
}

function countOccurrences(tokens) {
    const counts = {};
    tokens.forEach(token => {
        counts[token] = (counts[token] || 0) + 1;
    });
    return counts;
}

function computeDensity(counts, totalWords) {
    const densities = {};
    for (const word in counts) {
        densities[word] = (counts[word] / totalWords) * 100;
    }
    return densities;
}

function keywordDensity(text, n = 1, topN = 10) {
    const tokens = tokenize(text);
    const ngrams = generateNgrams(tokens, n);
    const counts = countOccurrences(ngrams);
    const densities = computeDensity(counts, tokens.length);

    return Object.entries(densities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN);
}
