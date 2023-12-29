const countTo = "1 Jan 2024";


const c = setInterval(() => {

  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60 ) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const countDown = document.getElementById("countdown");

  countDown.textContent = `${days} Days ${hours} hours ${minutes} minutes ${seconds} seconds`

  if (totalSeconds <= 0){
    clearInterval(c);
    countDown.textContent = "Happy New Year"
  }

}, 1000)