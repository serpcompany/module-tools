let selectedFile;

document.getElementById('upload').addEventListener('change', function (event) {
    var reader = new FileReader();
    reader.onload = function (event) {
        selectedFile = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}, false);

function processFile() {
    if (selectedFile) {
        convertPdfToImage(selectedFile);
    } else {
        alert('Please select a PDF file first.');
    }
}

function convertPdfToImage(dataUrl) {
    var loadingTask = pdfjsLib.getDocument(dataUrl);
    loadingTask.promise.then(function (pdf) {
        pdf.getPage(1).then(function (page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                document.getElementById('output').src = canvas.toDataURL('image/jpeg');
                document.getElementById('downloadButton').disabled = false;
            });
        });
    });
}

document.getElementById('downloadButton').addEventListener('click', function () {
    let outputImage = document.getElementById('output');
    let link = document.createElement('a');
    link.href = outputImage.src;
    link.download = 'converted-image.jpg';
    link.click();
});
