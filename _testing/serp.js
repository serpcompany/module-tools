// serp.js //

// countCharacters.js

function countCharacters(text) {
    return text.length;
}

// button click handler
function handleButtonClickCountCharacters() {
    const textarea = document.getElementById('input-count-characters');
    const count = countCharacters(textarea.value);
    document.getElementById('result-count-characters').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('button-count-characters');
    btn.addEventListener('click', handleButtonClickCountCharacters);
});



// countCharactersNoWhitespace.js

function countCharactersNoWhitespace(text) {
    const charactersNoWhitespace = text.replace(/\s+/g, '');
    return charactersNoWhitespace.length;
}

// button click handler
function handleButtonClickCountCharactersNoWhitespace() {
    const textarea = document.getElementById('input-count-characters-no-whitespace');
    const count = countCharactersNoWhitespace(textarea.value);
    document.getElementById('result-count-characters-no-whitespace').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('button-count-characters-no-whitespace');
    btn.addEventListener('click', handleButtonClickCountCharactersNoWhitespace);
})


// getSitemapUrlsFromText.js

function getUrlsFromXmlText(xmlText) {
    try {
        // Parse the XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // get the URLs
        const urlElements = xmlDoc.querySelectorAll('url > loc');
        const urls = Array.from(urlElements).map(urlElem => urlElem.textContent);

        return urls;
    } catch (error) {
        console.error("Error parsing the XML:", error);
        return [];
    }
}

function handleXmlContentGetUrls() {
    const textarea = document.getElementById('xmlContent');
    const xmlText = textarea.value;
    const urls = getUrlsFromXmlText(xmlText);

    // Display the geted URLs
    const output = document.getElementById('result-get-urls-from-xml-text');
    output.textContent = urls.join('\n');
}

// getSitemapUrlsFromFile.js

function handleFileUploadGetSitemapUrlsFromFile() {
    const fileInput = document.getElementById('sitemapFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const xmlText = event.target.result;

            // Parsing the XML content
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");

            // Extracting the URLs
            const urlElements = xmlDoc.querySelectorAll('url > loc');
            const urls = Array.from(urlElements).map(urlElem => urlElem.textContent);

            const output = document.getElementById('outputFile');
            output.textContent = urls.join('\n');
        };

        reader.readAsText(file);
    } else {
        console.error("No file selected.");
    }
}


// getSitemapUrlsFromUrl.js

async function handleExtractUrlsGetSitemapUrlsFromUrl() {
    const sitemapUrlInput = document.getElementById('sitemapUrl');
    const sitemapUrl = sitemapUrlInput.value;

    const urls = await getUrlsFromSitemap(sitemapUrl);

    // Display the extracted URLs
    const output = document.getElementById('outputUrl');
    output.textContent = urls.join('\n');
}

async function getUrlsFromSitemap(sitemapUrl) {
    try {
        // Fetch the sitemap content
        const response = await fetch(sitemapUrl);
        const xmlText = await response.text();

        return extractUrlsFromXmlText(xmlText);
    } catch (error) {
        console.error("Error fetching or parsing the sitemap:", error);
        return [];
    }
}

function extractUrlsFromXmlText(xmlText) {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Extract the URLs
        const urlElements = xmlDoc.querySelectorAll('url > loc');
        const urls = Array.from(urlElements).map(urlElem => urlElem.textContent);

        return urls;
    } catch (error) {
        console.error("Error extracting URLs from the XML:", error);
        return [];
    }
}


// countParagraphs.js

function countParagraphs(text) {
    const paragraphs = text.match(/(^|\n\n)[^\n]+/g) || [];
    return paragraphs.length;
}


// handler
function handleButtonClickCountParagraphs() {
    const textarea = document.getElementById('input-count-paragraphs');
    const count = countParagraphs(textarea.value);
    document.getElementById('result-count-paragraphs').innerText = "Result: " + count;
}

// event listener
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('button-count-paragraphs');
    btn.addEventListener('click', handleButtonClickCountParagraphs);
});