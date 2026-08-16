import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

const MAIL_KEY = "mailDB"
// _createMails()

export const mailService = {
  testFunction,
  query,
  get,
  remove,
  save,
  getEmptyMail,
  getDefaultFilter,
  // getSpeedStats,
  //   getVendorStats,
  getFilterFromSearchParams,
}
// For Debug (easy access from console):
// window.cs = mailService

function query(filterBy = {}) {
  return storageService.query(MAIL_KEY).then((mails) => {
    if (filterBy.txt) {
      //   const regExp = new RegExp(filterBy.txt, 'i')
      mails = mails.filter(
        (mail) =>
          mail.subject.includes(filterBy.txt) ||
          mail.from.includes(filterBy.txt) ||
          mail.to.includes(filterBy.txt),
      )
    }

    // if (filterBy.minSpeed) {
    //   mails = mails.filter((mail) => mail.maxSpeed >= filterBy.minSpeed)
    // }

    return mails
  })
}

function testFunction() {
  return "test success"
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId).then((mail) => {
    mail = _setNextPrevmailId(mail)
    return mail
  })
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) {
    return storageService.put(MAIL_KEY, mail)
  } else {
    return storageService.post(MAIL_KEY, mail)
  }
}

function getEmptyMail(subject = "hello", to = "") {
  return { subject, to }
}

function getDefaultFilter(filterBy = { txt: ""}) {
  return { txt: filterBy.txt }
}

function getFilterFromSearchParams(searchParams) {
  const defaultFilter = getDefaultFilter()
  const filterBy = {}

  for (const field in defaultFilter) {
    filterBy[field] = searchParams.get(field) || ""
  }
  return filterBy
}

// function getSpeedStats() {
//   return storageService.query(MAIL_KEY).then((mails) => {
//     const mailCountBySpeedMap = _getmailCountBySpeedMap(mails)
//     const data = Object.keys(mailCountBySpeedMap).map((speedName) => ({
//       title: speedName,
//       value: mailCountBySpeedMap[speedName],
//     }))
//     return data
//   })
// }

// function getVendorStats() {
//   return storageService.query(MAIL_KEY).then((mails) => {
//     const mailCountByVendorMap = _getmailCountByVendorMap(mails)
//     const data = Object.keys(mailCountByVendorMap).map((vendor) => ({
//       title: vendor,
//       value: Math.round((mailCountByVendorMap[vendor] / mails.length) * 100),
//     }))
//     return data
//   })
// }

function _createMails() {
  let mails = utilService.loadFromStorage(MAIL_KEY)
  if (!mails || !mails.length) {
    mails = []
    const recipients = ["baba", "bobo", "lulu", "coco"]
    for (let i = 0; i < 6; i++) {
      const to =
        recipients[utilService.getRandomIntInclusive(0, recipients.length - 1)]
      mails.push(_createmail("Hello!@#", to))
    }
    utilService.saveToStorage(MAIL_KEY, mails)
  }
}

function _createmail(subject = "hi:D", to = "baba") {
  const mail = getEmptymail(subject, to)
  mail.id = utilService.makeId()
  return mail
}

function _setNextPrevmailId(mail) {
  return storageService.query(MAIL_KEY).then((mails) => {
    const mailIdx = mails.findIndex((currmail) => currmail.id === mail.id)
    const nextmail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
    const prevmail = mails[mailIdx - 1]
      ? mails[mailIdx - 1]
      : mails[mails.length - 1]
    mail.nextmailId = nextmail.id
    mail.prevmailId = prevmail.id
    return mail
  })
}

// function _getmailCountBySpeedMap(mails) {
//   const mailCountBySpeedMap = mails.reduce(
//     (map, mail) => {
//       if (mail.maxSpeed < 120) map.slow++
//       else if (mail.maxSpeed < 200) map.normal++
//       else map.fast++
//       return map
//     },
//     { slow: 0, normal: 0, fast: 0 },
//   )
//   return mailCountBySpeedMap
// }

// function _getmailCountByVendorMap(mails) {
//   const mailCountByVendorMap = mails.reduce((map, mail) => {
//     if (!map[mail.vendor]) map[mail.vendor] = 0
//     map[mail.vendor]++
//     return map
//   }, {})
//   return mailCountByVendorMap
// }
