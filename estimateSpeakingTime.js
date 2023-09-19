// estimateSpeakingTime.js

function estimateSpeakingTime(text) {
    const totalWords = countWords(text); // Using countWords function to get the word count
    const averageSpeakingSpeed = 137.5; // words per minute
    const timeInMinutes = totalWords / averageSpeakingSpeed;
    return convertToMinutesAndSeconds(timeInMinutes);
}

function convertToMinutesAndSeconds(minutes) {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins} mins ${secs} sec`;
}
