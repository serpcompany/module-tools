// script.js


// XML File Scripts

async function extractUrlsFromSitemap(sitemapUrl) {
    try {
        const response = await fetch(sitemapUrl);
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const urlElements = xmlDoc.querySelectorAll('url > loc');
        const urls = Array.from(urlElements).map(urlElem => urlElem.textContent);
        return urls;
    } catch (error) {
        console.error("Error fetching or parsing the sitemap:", error);
        return [];
    }
}

function handleExtractUrls() {
    const sitemapUrl = document.getElementById('sitemapUrl').value;
    extractUrlsFromSitemap(sitemapUrl).then(urls => {
        document.getElementById('output').value = urls.join('\n');
    });
}