
/**
 * 
 */
export const formatTime = (hours: number, minutes: number, seconds: number) => {
    let formatHours = `${hours}`;
    let formatMinutes = minutes < 1 ? '00' : `0${minutes}`;
    
    if (hours < 1) {
        formatHours = '00'
    }
    else if (hours <= 9) {
        formatHours = `0${hours}`
    }
    


    if (minutes < 1) {
        formatMinutes = '00'
    }
    else if (minutes <= 9) {
        formatMinutes = `0${minutes}`
    }
    else {
        formatMinutes = `${minutes}`
    }
    
    let formatSeconds = seconds > 9 ? seconds : `0${seconds}`;

    return `${formatHours} : ${formatMinutes} : ${formatSeconds}`;
}