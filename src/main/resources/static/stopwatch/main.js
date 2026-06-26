const timer = document.querySelector('#timer')
const startbtn = document.querySelector('#start-btn');
const stopbtn = document.querySelector('#stop-btn');
const resetbtn = document.querySelector('#reset-btn');
const toRatePageLink = document.querySelector('#toRatePage');

if (JSON.parse(localStorage.getItem('current-time')) === null) {
    currentTime = [0,0,0];
    localStorage.setItem('current-time',JSON.stringify(currentTime))
}
currentTime = JSON.parse(localStorage.getItem('current-time'));

timer.innerHTML = `00 : 00 : 00`

function update() {
    timer.innerHTML = `${String(currentTime[0]).padStart(2,'0')} : ${String(currentTime[1]).padStart(2,'0')} : ${String(currentTime[2]).padStart(2,'0')}`;
};
function timerMechanism() {
    if(timer.innerHTML == '00 : 00 : 00') {
        currentTime[0],currentTime[1],currentTime[2] = 0;
    }
    currentTime[2]++
    if (currentTime[2] > 59){
        currentTime[2] = 0
        currentTime[1]++
        update()
    }
    if (currentTime[1] > 59){
        currentTime[1] = 0
        currentTime[0]++
        update()
    }
    localStorage.setItem('current-time',JSON.stringify(currentTime))
    update()
    console.log('swsw')
}

let interval;
startbtn.addEventListener('click',function(){
    interval = setInterval(function(){
        timerMechanism();
    },1000)
    startbtn.setAttribute('disabled',true);
})

stopbtn.addEventListener('click',function(){
    clearInterval(interval);
    startbtn.removeAttribute('disabled');
});

resetbtn.addEventListener('click',function(){
    location.reload();
})

toRatePageLink.addEventListener('click',function(){
    location.href = '/reviewPage';
})
