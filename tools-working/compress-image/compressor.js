document.getElementById('fileInput').addEventListener('change', function (e) {
    document.getElementById('compressButton').style.display = 'inline';  // Show compress button
});

document.getElementById('compressButton').addEventListener('click', function () {
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    reader.onload = function (e) {
        img.src = e.target.result;
    };

    img.onload = function () {
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // Dynamically determine the MIME type
        const fileType = file.type ? file.type : 'image/jpeg';

        const compressedImageSrc = canvas.toDataURL(fileType, 0.8);

        document.getElementById('outputImg').src = compressedImageSrc;
        document.getElementById('downloadButton').style.display = 'inline';  // Show download button
    };

    reader.readAsDataURL(file);
});

document.getElementById('downloadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const originalFileType = fileInput.files[0].type.split('/').pop();
    const a = document.createElement('a');
    a.download = 'compressed_image.' + originalFileType;
    a.href = document.getElementById('outputImg').src;
    a.click();
});
