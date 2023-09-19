// getSitemapUrlsFromUrl.js

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

async function getUrlsFromSitemap(sitemapUrl) {
    try {
        // Using the CORS proxy to bypass CORS issues
        const response = await fetch(PROXY_URL + sitemapUrl);
        const arrayBuffer = await response.arrayBuffer();
        
        let data;
        // Check if the content is gzipped based on the URL extension
        if (sitemapUrl.endsWith('.gz')) {
            data = pako.inflate(arrayBuffer, { to: 'string' });
        } else {
            data = new TextDecoder().decode(arrayBuffer);
        }
        
        return extractUrlsFromXmlText(data);
    } catch (error) {
        console.error("Error fetching or parsing the sitemap:", error);
        return [];
    }
}


async function handleExtractUrlsGetSitemapUrlsFromUrl() {
    const sitemapUrlInput = document.getElementById('sitemapUrl');
    const sitemapUrl = sitemapUrlInput.value;

    const urls = await getUrlsFromSitemap(sitemapUrl);

    // Display the extracted URLs
    const output = document.getElementById('outputUrl');
    output.textContent = urls.join('\n');
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
