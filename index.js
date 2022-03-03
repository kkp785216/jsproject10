function updateTime(){
    let time = new Date();
    hour = (time.getHours() + time.getMinutes() / 60) * 30
    minute = time.getMinutes() * 6
    second = time.getSeconds() * 6
    document.getElementById('hour').style.transform = `rotate(${hour}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minute}deg)`;
    document.getElementById('second').style.transform = `rotate(${second}deg)`;
}
updateTime();
setInterval(()=>{updateTime()}, 1000);

// for changing clock img
bottons = document.querySelector('.bottons');
function changeClock(url){
    let clockImg = document.querySelector('.clock img');
    clockImg.setAttribute('src', url);
}