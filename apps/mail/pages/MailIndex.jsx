const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
import { demoMails } from "../services/demoDataMail.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import {
  showErrorMsg,
  showSuccessMsg,
} from "../../../services/event-bus.service.js"
import { utilService } from "../../../services/util.service.js"
import { useEffectUpdate } from "../custom-hooks/useEffectUpdate.js"
import { MailRightSideBar } from "../cmps/MailRightSideBar.jsx"
import { MailLeftSideBar } from "../cmps/MailLeftSideBar.jsx"

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    loadMails(filterBy)
  }, [])

  useEffectUpdate(() => {
    loadMails(filterBy)
    setSearchParams(utilService.trimObj(filterBy))
  }, [filterBy])

  function loadMails() {
    mailService.query(filterBy).then((mails) => {
      console.log("mails from storage:", mails)
      setMails(mails)
    })
  }

  function onToggleRead(mailId, mailRead) {
    const mail = mails.find((mail) => mail.id === mailId)
    const updatedMail = { ...mail, isRead: mailRead ? true : !mail.isRead }

    mailService
      .save(updatedMail)
      .then(() => {
        setMails((prevMails) =>
          prevMails.map((mail) => (mail.id === mailId ? updatedMail : mail)),
        )
      })
      .catch((err) => showErrorMsg(`Couldn't update mail`))
  }

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        setMails((prev) => prev.filter((mail) => mail.id !== mailId))
        showSuccessMsg(`mail ${mailId} removed`)
      })
      .catch((err) => showErrorMsg(`Couldn't remove ${mailId}`))
  }

  function onClearFilter() {
    setFilterBy(mailService.getDefaultFilter())
  }

  if (!mails)
    return (
      <h2>Loading...</h2>
      // <div className="loader">
      //   <img src="./assets/img/loader.svg" alt="A loader." />
      // </div>
    )
  const unreadMailCount = mails.filter((mail) => (mail.isRead === false)).length

  return (
    <section className="mail-index">
      <MailHeader
        filterBy={filterBy}
        onSetFilterBy={setFilterBy}
        onClearFilter={onClearFilter}
      />

      <MailLeftSideBar unreadMailCount={unreadMailCount} />
      <MailRightSideBar />

      <MailList
        mails={mails}
        onRemoveMail={onRemoveMail}
        onToggleRead={onToggleRead}
      />
      <footer>foooter</footer>
    </section>
  )
}
