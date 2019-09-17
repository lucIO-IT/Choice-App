export function calculateTimeAgo(tsp) {
    let od = new Date();
    let d = Math.floor((Date.now() - tsp)/1000);
    let interval =  Math.floor(d / 31536000);
    if (interval > 1) {
        return interval + " anni fa";
    }
    interval = Math.floor(d / 2592000);
    if (interval > 1) {
        return interval + " mesi fa";
    }
    interval = Math.floor(d / 86400);
    if (interval > 1) {
        return interval + " giorni fa";
    }
    interval = Math.floor(d / 3600);
    if (interval > 1) {
        return interval + " ore fa";
    }
    interval = Math.floor(d / 60);
    if (interval > 1) {
        return interval + " minuti fa";
    }
    return Math.floor(d) + " secondi fa";
}