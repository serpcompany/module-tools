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
