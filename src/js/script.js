const hoursSpan = document.getElementById("hours-span");
const minutesSpan = document.getElementById("minutes-span");
const secondsSpan = document.getElementById("seconds-span");

setInterval(() => {
    const dateTime = new Date()
    let currentHour = dateTime.getHours();
    let currentMinute = dateTime.getMinutes();
    let currentSecond = dateTime.getSeconds();

    hoursSpan.innerText = currentHour < 10 ? `0${currentHour}` : currentHour;
    minutesSpan.innerText = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
    secondsSpan.innerText = currentSecond < 10 ? `0${currentSecond}` : currentSecond;
    
}, 1000);