import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"
import { demoEmails } from "./demoDataMail.jsx"

const MAIL_KEY = "mailDB"
_createMails()

export const emailsService = {
  testFunction,
  query,
  get,
  remove,
  save,
  getEmptyMail,
  getDefaultFilter,

  getFilterFromSearchParams,
}
// For Debug  access from console):
// window.cs = mailService

function query(filterBy = {}, inboxShown) {
  let toFrom

  return storageService.query(MAIL_KEY).then((mails) => {
    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, "i")
      mails = mails.filter(
        (mail) =>
          regExp.test(mail.subject) ||
          regExp.test(inboxShown ? mail.from : mail.to) ||
          regExp.test(mail.body),
      )
    }

    return mails
  })
}

function testFunction() {
  return "test success"
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId).then((mail) => {
    mail = _setNextPrevMailId(mail)
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

function getEmptyMail(
  to = "",
  from = "",
  subject = "",
  body = "",
  createdAt = Date.now(),
  sentAt = "",
  isRead = "false",
  isStarred = "",
  labels = "",
  removedAt = "",
) {
  return {
    to,
    from,
    subject,
    body,
    createdAt,
    sentAt,
    isRead,
    isStarred,
    labels,
    removedAt,
  }
}

function getDefaultFilter(filterBy = { txt: "" }) {
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

function _createMails() {
  let mails = utilService.loadFromStorage(MAIL_KEY)
  if (!mails || !mails.length) {
    mails = []
    const recipients = ["baba", "bobo", "lulu", "coco"]
    const words = ["Hello", "WOW", "Oh", "Why"]
    const sentences = [
      "Miss you!",
      "Your package left our warehouse and should arrive within 2 business days.",
      "You have won a brand new car!!!",
      "Thanks! Fixed the trash folder",
    ]
    mails.push(...demoEmails)
    for (let i = 0; i < 26; i++) {
      const from =
        recipients[utilService.getRandomIntInclusive(0, recipients.length - 1)]
      const subject =
        words[utilService.getRandomIntInclusive(0, words.length - 1)]
      const body =
        sentences[utilService.getRandomIntInclusive(0, sentences.length - 1)]
      mails.push(
        _createMail(
          "",
          from,
          subject,
          body,
          Date.now(),
          "",
          false,
          false,
          "",
          "",
        ),
      )
    }
    utilService.saveToStorage(MAIL_KEY, mails)
  }
}

function _createMail(
  to,
  from,
  subject,
  body,
  createdAt,
  sentAt,
  isRead,
  isStarred,
  labels,
  removedAt,
) {
  const mail = getEmptyMail(
    to,
    from,
    subject,
    body,
    createdAt,
    sentAt,
    isRead,
    isStarred,
    labels,
    removedAt,
  )
  mail.id = utilService.makeId()
  return mail
}

function _setNextPrevMailId(mail) {
  return storageService.query(MAIL_KEY).then((mails) => {
    const mailIdx = mails.findIndex((currmail) => currmail.id === mail.id)
    const nextMail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
    const prevMail = mails[mailIdx - 1]
      ? mails[mailIdx - 1]
      : mails[mails.length - 1]
    mail.nextMailId = nextMail.id
    mail.prevMailId = prevMail.id
    return mail
  })
}
