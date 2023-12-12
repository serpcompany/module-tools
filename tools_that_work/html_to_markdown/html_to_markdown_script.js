
// JavaScript for HTML to Markdown Converter Tool

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertToMarkdown').addEventListener('click', function () {
        convertToMarkdown();
    });
});

function convertToMarkdown() {
    var htmlContent = document.getElementById('htmlInput').value;
    var turndownService = new TurndownService();
    var markdown = turndownService.turndown(htmlContent);
    document.getElementById('markdownOutput').value = markdown;
}
