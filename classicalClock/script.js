const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

setInterval(function () {

    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegree = seconds * 6;
    const minuteDegree = minutes * 6;
    const hourDegree = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDegree}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDegree}deg)`;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDegree}deg)`;

}, 1000);
