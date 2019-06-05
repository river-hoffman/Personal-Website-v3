function clock() {
    const fullDate = new Date();
    var hr = fullDate.getHours();
    var min = fullDate.getMinutes();
    var sec = fullDate.getSeconds();
    
    hr = (hr > 12) ? hr - 12 : hr;
    hr = (hr == 0) ? 12 : hr;
    
    
    if (hr < 10) {
    hr = "0" + hr;
    }
    if (min < 10) {
    min = "0" + min;
    }
    if (sec < 10) {
    sec = "0" + sec;
    }
    
document.getElementById('hr').innerHTML = hr;
document.getElementById('min').innerHTML = ": " + min;
document.getElementById('sec').innerHTML = ": " + sec;
}
setInterval(clock, 100);