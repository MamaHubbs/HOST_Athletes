// shared-utils.js

function timeToSeconds(timeStr) {
    if (!timeStr || timeStr === 'NT' || timeStr === 'NS' || timeStr === 'DQ') return Infinity;
    const parts = String(timeStr).split(':');
    if (parts.length === 2) {
        const minutes = parseInt(parts[0]);
        const seconds = parseFloat(parts[1]);
        return minutes * 60 + seconds;
    } else if (parts.length === 1) {
        return parseFloat(parts[0]);
    }
    return Infinity;
}

function secondsToTime(totalSeconds) {
    if (totalSeconds === Infinity || isNaN(totalSeconds)) return 'N/A';
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(2)}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

function formatMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

const weeklyFileNames = [
    "2024results.json.json",
    "20250607results.json",
    "20250611results.json",
    "20250618results.json",
    "20250625results.json",
    "20250702results.json"
  
];
