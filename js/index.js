let hourSui = document.querySelector('.hourSuiBox');
let minuteSui = document.querySelector('.minuteSuiBox');
let secondSui = document.querySelector('.secondSuiBox');
function timeUpdate() {
    time = new Date();
    let hour = time.getHours();
    if (hour > 12) {
        hour = (hour - 12);
    }
    secondSui.style.transform = `rotate(${(time.getSeconds() * 6)}deg)`;
    hourSui.style.transform = `rotate(${(hour + (time.getMinutes() / 60)) * 30}deg)`;
    minuteSui.style.transform = `rotate(${(time.getMinutes() + (time.getSeconds() / 60)) * 6}deg)`;
}
timeUpdate();
setInterval(() => { timeUpdate() }, 1000);