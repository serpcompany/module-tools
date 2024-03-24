document.getElementById('fileInput').addEventListener('change', function () {
    document.getElementById('compressButton').style.display = 'inline';
});

document.getElementById('compressButton').addEventListener('click', function () {
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const originalGif = new SuperGif({
            gif: document.getElementById('originalImg')
        });

        originalGif.load_raw(new Uint8Array(e.target.result), function () {
            const compressedGif = new GIF({
                workers: 500,  // Max number of workers
                quality: 7,  // Adjusted quality
                workerScript: './gif.worker.js',
                width: originalGif.get_canvas().width,
                height: originalGif.get_canvas().height
            });

            for (let i = 0; i < originalGif.get_length(); i++) {
                originalGif.move_to(i);
                compressedGif.addFrame(originalGif.get_canvas(), { copy: true, delay: originalGif.get_frames()[i].delay });
            }

            compressedGif.on('progress', function (p) {
                document.getElementById('progressBar').value = p * 100;
            });

            compressedGif.on('finished', function (blob) {
                document.getElementById('outputImg').src = URL.createObjectURL(blob);
                document.getElementById('downloadButton').style.display = 'inline';
                document.getElementById('downloadButton').addEventListener('click', function () {
                    saveAs(blob, "compressed.gif");
                });
            });

            compressedGif.render();
        });
    };
    reader.readAsArrayBuffer(file);
});

function saveAs(blob, filename) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
