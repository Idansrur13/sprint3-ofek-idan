export const utilService = {
  loadFromStorage,
  saveToStorage,
  makeId,
  makeLorem,
  getRandomIntInclusive,
  getRandomColor,
  padNum,
  getNumericDate,
  getDayNumericDate,
  getYearName,
  getMonthName,
  getDayName,
  getTimeOfDay,
  animateCSS,
  trimObj,
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  const val = localStorage.getItem(key)
  return JSON.parse(val)
}

function makeId(length = 6) {
  var txt = ""
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ]
  var txt = ""
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + " "
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function padNum(num) {
  return num > 9 ? num + "" : "0" + num
}

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  var color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getDayName(date, locale) {
  date = new Date(date)
  return date.toLocaleDateString(locale, { weekday: "short" })
}

// doesn't work
// function getMonthName(date) {
//     const monthNames = [
//         "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ]
// return monthNames[date.getMonth()]
// }

///added ---------------------------------------------------

function getNumericDate(date, locale) {
  date = new Date(date)
  const options = {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  }

  return date.toLocaleDateString(locale, options)
}
function getDayNumericDate(date, locale) {
  date = new Date(date)
  const num = date.toLocaleDateString(locale, date)
  return num.slice(0, num.indexOf("."))
}

function getYearName(date, locale) {
  date = new Date(date)
  return date.toLocaleDateString(locale, { year: "numeric" })
}

function getMonthName(date, locale) {
  date = new Date(date)
  return date.toLocaleDateString(locale, { month: "long" }) // "August"
}

function getTimeOfDay(date, locale) {
  date = new Date(date)
  return date.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit" }) // "2:30 PM"
}

function animateCSS(el, animation = "bounce") {
  const prefix = "animate__"
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    el.classList.add(`${prefix}animated`, animationName)
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve("Animation ended")
    }

    el.addEventListener("animationend", handleAnimationEnd, { once: true })
  })
}

function trimObj(obj) {
  const trimmedObj = {}

  for (const key in obj) {
    if (obj[key]) trimmedObj[key] = obj[key]
  }
  return trimmedObj
}
