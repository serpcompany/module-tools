document.getElementById('fileInput').addEventListener('change', function (e) {
    const files = e.target.files;
    const gif = new GIF({
        workers: 2,
        quality: 10  // Lower is better quality, but requires more processing
    });

    // Track the number of images that have loaded
    let imagesLoaded = 0;

    // Read each file and add to GIF
    Array.from(files).forEach(file => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;
            img.onload = function () {
                // Add the frame to the GIF
                gif.addFrame(img, { delay: 500 });  // 500ms delay between frames

                // Increment the counter
                imagesLoaded++;

                // If all images have loaded, render the GIF
                if (imagesLoaded === files.length) {
                    gif.render();
                }
            };
        };
        reader.readAsDataURL(file);
    });

    // When all frames are added, run the gif.js render process
    gif.on('finished', function (blob) {
        // Create a URL from the Blob and set it as src of the image element
        document.getElementById('outputGif').src = URL.createObjectURL(blob);

        // Enable and configure the download button
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'inline';  // Make the download button visible
        downloadButton.addEventListener('click', function () {
            // Create a temporary <a> element
            const a = document.createElement('a');
            // Set the download name for the GIF
            a.download = 'animated.gif';
            // Set the href to the Blob URL
            a.href = URL.createObjectURL(blob);
            // Trigger the download by simulating a click
            a.click();
        });
    });
});
