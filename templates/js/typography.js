// typography.js
// Paste this into the dev tools 'console' and press RETURN to get the typography/typescale of the web page


function getSelectedComputedStyle(elem) {
    const computedStyles = window.getComputedStyle(elem);
    return {
        style: computedStyles.getPropertyValue('font-style'),
        weight: computedStyles.getPropertyValue('font-weight'),
        size: computedStyles.getPropertyValue('font-size'),
        lineHeight: computedStyles.getPropertyValue('line-height'),
        marginTop: computedStyles.getPropertyValue('margin-top'),
        marginBottom: computedStyles.getPropertyValue('margin-bottom'),
        fontFamily: computedStyles.getPropertyValue('font-family'),
        letterSpacing: computedStyles.getPropertyValue('letter-spacing'),
        wordSpacing: computedStyles.getPropertyValue('word-spacing'),
        fontVariant: computedStyles.getPropertyValue('font-variant')
    };
}

// Function to get all tags and their specified computed styles
function getTagsAndSelectedStyles(tags) {
    const results = {};

    tags.forEach(tag => {
        const elements = document.getElementsByTagName(tag);
        if (elements.length > 0) {
            results[tag] = getSelectedComputedStyle(elements[0]);
        }
    });

    return results;
}

const tagsToExtract = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'IMG', 'PRE', 'CODE', 'LI', 'OL'];

// Run the function and log the results
console.log(getTagsAndSelectedStyles(tagsToExtract));

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function generateDownloadableText(tagsData) {
    let outputText = "";
    for (const tag in tagsData) {
        outputText += `Tag: ${tag}\n`;
        for (const prop in tagsData[tag]) {
            outputText += `  ${prop}: ${tagsData[tag][prop]}\n`;
        }
        outputText += '\n';
    }
    return outputText;
}

const extractedData = getTagsAndSelectedStyles(tagsToExtract);
const textContent = generateDownloadableText(extractedData);

download("typography_data.txt", textContent);