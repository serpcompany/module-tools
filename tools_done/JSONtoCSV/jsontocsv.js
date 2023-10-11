document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("convertJSONtoCSVbutton").addEventListener("click", convertJSONtoCSV);
    document.getElementById("downloadJSONtoCSV").addEventListener("click", downloadCSV);
});

function convertJSONtoCSV() {
    let progressBar = document.querySelector(".ldBar");
    progressBar.setAttribute("data-value", "50");

    setTimeout(() => {
        let jsonInput = document.getElementById("jsonInput").value;
        let parsedJson;

        try {
            parsedJson = JSON.parse(jsonInput);
        } catch (error) {
            alert("Invalid JSON format.");
            progressBar.setAttribute("data-value", "0");
            return;
        }

        let csv = Papa.unparse(parsedJson);
        document.getElementById("csvOutput").value = csv;
        progressBar.setAttribute("data-value", "100");
    }, 500);
}

function downloadCSV() {
    let csvContent = document.getElementById("csvOutput").value;

    if (!csvContent) {
        alert("Please convert the JSON to CSV first.");
        return;
    }

    let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    let downloadLink = document.createElement("a");

    let url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "data.csv";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
