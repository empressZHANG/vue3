// 时间戳(秒)获取 天数+时分秒
export function getDHMSBySecond(allSecond) {
    let day = Math.floor(allSecond / (24 * 60 * 60));
    let hour = Math.floor((allSecond - (day * 24 * 60 * 60)) / (60 * 60))
    let minute = Math.floor((allSecond - (day * 24 * 60 * 60) - (hour * 60 *60))/60)
    let second = allSecond - (day * 24 * 60 * 60) - (hour * 60 *60) - (minute * 60)
    
    return {
        day:formatNumber(day),
        hour:formatNumber(hour),
        minute:formatNumber(minute),
        second:formatNumber(second)
    }
}

export function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n
}