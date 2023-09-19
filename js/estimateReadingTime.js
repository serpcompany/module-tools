// estimateReadingTime.js

const readingSpeedByAge = {
    "6-7": 80,
    "7-8": 115,
    "8-9": 138,
    "9-10": 158,
    "10-11": 173,
    "11-12": 185,
    "12-13": 195,
    "13-14": 204,
    "14-15": 214,
    "15-16": 224,
    "16-17": 237,
    "17-18": 250
};

const readingTime = estimateReadingTime(myText, "9-10");


function estimateReadingTime(text, ageRange) {
    const totalWords = countWords(text); // Using countWords function to get the word count
    const averageReadingSpeed = readingSpeedByAge[ageRange] || 225; // Default to 225 wpm if age range not found
    const timeInMinutes = totalWords / averageReadingSpeed;
    return convertToMinutesAndSeconds(timeInMinutes);
}


function convertToMinutesAndSeconds(minutes) {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins} mins ${secs} sec`;
}
