function countTokens(text) {
    return text.split(/\s+|[.,!?;()\[\]{}]/).filter(Boolean).length;
}
