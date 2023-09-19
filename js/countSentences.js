function countSentences(text) {
    // This will split the text by ., !, and ? but will filter out empty strings
    return text.split(/[.!?]/).filter(Boolean).length;
}
