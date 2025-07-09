export function timeToSeconds(timeStr) {
    if (!timeStr || typeof timeStr !== 'string' || timeStr.toLowerCase() === 'nt' || timeStr.toLowerCase() === 'dq') {
        return Infinity;
    }
    const parts = timeStr.split(':');
    if (parts.length === 2) {
        const [minutes, secondsAndMillis] = parts;
        const [seconds, milliseconds = '0'] = secondsAndMillis.split('.');
        return (parseInt(minutes) * 60) + parseInt(seconds) + (parseInt(milliseconds) / 100);
    } else if (parts.length === 1) {
        const [seconds, milliseconds = '0'] = parts[0].split('.');
        return parseInt(seconds) + (parseInt(milliseconds) / 100);
    }
    return Infinity;
}

export function secondsToTime(totalSeconds) {
    if (totalSeconds === Infinity || isNaN(totalSeconds)) return 'N/A';
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(2)}`;
}

export function formatDate(dateString) {
    const parts = String(dateString).split('-');
    let date;
    if (parts.length === 3) {
        date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    } else {
        date = new Date(dateString);
    }

    if (isNaN(date.getTime())) return 'Invalid Date';
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function formatMMDDYYYY(dateString) {
    const parts = String(dateString).split('-');
    let date;
    if (parts.length === 3) {
        date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    } else {
        date = new Date(dateString);
    }

    if (isNaN(date.getTime())) return 'Invalid Date';

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export const weeklyFileNames = [
    "20240605results.json",
    "20240612results.json",
    "20240619results.json",
    "20240626results.json",
    "20240701results.json",
    "20240708results.json",
    "20240720results.json",
    "20250607results.json",
    "20250611results.json",
    "20250618results.json",
    "20250625results.json",
    "20250702results.json"
];
