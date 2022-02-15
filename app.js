const clock = document.querySelector('#clock');

function getClock() {
  const christmas = new Date('2022-12-25:00:00:00');
  const today = new Date();
  //getTime은 밀리초 값 가져옴, 1000ms = 1s
  const dDay = christmas.getTime() - today.getTime();

  //1000*60=1분, (1000*60)*60=1시간, (1000*60*60)*24=1일
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dDay % (1000 * 60)) / 1000);
  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
