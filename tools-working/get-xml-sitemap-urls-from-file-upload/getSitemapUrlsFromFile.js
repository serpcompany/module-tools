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

