const date = new Date()

const ms     = date.getMilliseconds()
const second = date.getSeconds()
const minute = date.getMinutes()
const hour   = date.getHours()

const secondHand = document.querySelector('#second-container')
const minuteHand = document.querySelector('#minute-container')
const hourHand   = document.querySelector('#hour-container')

const secDeg  =  6 * second + 6 * (ms / 1000)
const minDeg  =  6 * minute + 6 * (secDeg / 360)
const hourDeg = 30 * (hour % 12) + 30 * (minDeg / 360)

secondHand.style.webkitTransform = 'rotate(' + secDeg + 'deg)'
minuteHand.style.webkitTransform = 'rotate(' + minDeg + 'deg)'
  hourHand.style.webkitTransform = 'rotate(' + hourDeg + 'deg)'

secondHand.style.MozTransform    = 'rotate(' + secDeg + 'deg)'
minuteHand.style.MozTransform    = 'rotate(' + minDeg + 'deg)'
  hourHand.style.MozTransform    = 'rotate(' + hourDeg + 'deg)'


const secondDelay = second / 60
const minuteDelay = minute / 60
const hourDelay = (hour % 12) / 12

document.querySelector('#second line').style.webkitAnimationDelay = secondDelay + 's'
document.querySelector('#minute line').style.webkitAnimationDelay = minuteDelay + 's'
document.querySelector('#hour line').style.webkitAnimationDelay = hourDelay + 's'
