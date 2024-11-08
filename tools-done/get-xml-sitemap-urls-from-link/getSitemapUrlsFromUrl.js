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
