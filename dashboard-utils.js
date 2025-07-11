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
    "resultsdata/2021/20210609.json",
    "resultsdata/2021/20210616.json",
    "resultsdata/2021/20210623.json",
    "resultsdata/2021/20210630.json",
    "resultsdata/2021/20210707.json",
    "resultsdata/2021/20210714.json",
    "resultsdata/2021/20210721.json",
    "resultsdata/2023/20230607.json",
    "resultsdata/2023/20230614.json",
    "resultsdata/2023/20230626.json",
    "resultsdata/2023/20230628.json",
    "resultsdata/2023/20230706.json",
    "resultsdata/2023/20230710.json",
    "resultsdata/2023/20230722.json",
    "resultsdata/2023/20220609.json",
    "resultsdata/2022/20220615.json",
    "resultsdata/2022/20220623.json",
    "resultsdata/2022/20220629.json",
    "resultsdata/2022/20220706.json",
    "resultsdata/2022/20220711.json",
    "resultsdata/2022/20220713.json",
    "resultsdata/2022/20220730.json",
    "resultsdata/2024/20240605.json",
    "resultsdata/2024/20240612.json",
    "resultsdata/2024/20240619.json",
    "resultsdata/2024/20240626.json",
    "resultsdata/2024/20240701.json",
    "resultsdata/2024/20240708.json",
    "resultsdata/2024/20240720.json",
    "resultsdata/2025/20250607.json",
    "resultsdata/2025/20250611.json",
    "resultsdata/2025/20250618.json",
    "resultsdata/2025/20250625.json",
    "resultsdata/2025/20250702.json",
    "resultsdata/2025/20250710.json"
  
];
