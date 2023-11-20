function digitalClock(){


const span = document.querySelectorAll('section span')
span[0].textContent = new Date().getHours() >= 10 ? new Date().getHours() : '0'.concat(new Date().getHours())
span[1].textContent = new Date().getMinutes() >= 10 ? new Date().getMinutes() : '0'.concat(new Date().getMinutes())
span[2].textContent = new Date().getSeconds() >= 10 ? new Date().getSeconds() : '0'.concat(new Date().getSeconds())
span[3].textContent = new Date().getMilliseconds()
span[4].textContent = new Date().getHours() >=  12 ? 'pm' : 'am'

setTimeout(() => digitalClock(), 50)

}

digitalClock()
const yr = new Date().getFullYear()

document.querySelector('footer span:last-of-type').textContent = yr

document.querySelector('footer span:nth-of-type(2)').textContent = 
new Date().getMonth() == 0 ? 'Jan' :
new Date().getMonth() == 1 ? 'Feb' :
new Date().getMonth() == 2 ? 'Mar' :
new Date().getMonth() == 3 ? 'Apr' :
new Date().getMonth() == 4 ? 'May' :
new Date().getMonth() == 5 ? 'Jun' :
new Date().getMonth() == 6 ? 'Jul' :
new Date().getMonth() == 7 ? 'Aug' :
new Date().getMonth() == 8 ? 'Sep' :
new Date().getMonth() == 9 ? 'Oct' :
new Date().getMonth() == 10 ? 'Nov' : 'Dec'
