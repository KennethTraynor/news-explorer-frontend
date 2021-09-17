export const countKeywords = (keywords) => {
    return keywords.reduce((previous, current) => {
        previous[current] = (previous[current] || 0) + 1;
        return previous;
    }, {});
}
