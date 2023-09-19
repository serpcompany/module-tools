function countParagraphs(text) {
    // This splits the text wherever there are two newlines
    return text.split(/\n\s*\n/).filter(Boolean).length;
}
