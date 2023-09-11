function showDateAndTime(){
      document.getElementById('showDate_and_time').innerHTML = Date();
}
showDateAndTime();
// setTimeout(showDateAndTime,1000);// 10000 bhnya 1 sec ho so 1 sec paxi matra show garxa
setInterval(showDateAndTime,1000);

function showClock()
{
      var todayDate = new Date();
      var hour = todayDate.getHours();
      var minute = todayDate.getMinutes();
      var second = todayDate.getSeconds();
      document.getElementById('display_clock').innerHTML = hour+":"+ minute+ ":"+second;

}
showClock();
setInterval(showClock,1000);