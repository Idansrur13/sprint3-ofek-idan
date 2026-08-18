const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
import { demoEmails } from "../services/demoDataMail.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { emailsService } from "../services/mail.service.js"
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
  const [emails, setEmails] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(emailsService.getDefaultFilter())

  useEffect(() => {
    loademails(filterBy)
  }, [])

  useEffectUpdate(() => {
    loademails(filterBy)
    setSearchParams(utilService.trimObj(filterBy))
  }, [filterBy])

  function loademails() {
    emailsService.query(filterBy).then((emails) => {
      console.log("emails from storage:", emails)
      setEmails(emails)
    })
  }

  function onToggleRead(mailId, mailRead) {
    const mail = emails.find((mail) => mail.id === mailId)
    const updatedMail = { ...mail, isRead: mailRead ? true : !mail.isRead }

    emailsService
      .save(updatedMail)
      .then(() => {
        setEmails((prevEmails) =>
          prevEmails.map((mail) => (mail.id === mailId ? updatedMail : mail)),
        )
      })
      .catch((err) => showErrorMsg(`Couldn't update mail`))
  }

  function onRemoveMail(mailId) {
    emailsService
      .remove(mailId)
      .then(() => {
        setEmails((prev) => prev.filter((mail) => mail.id !== mailId))
        showSuccessMsg(`mail ${mailId} removed`)
      })
      .catch((err) => showErrorMsg(`Couldn't remove ${mailId}`))
  }

  function onClearFilter() {
    setFilterBy(emailsService.getDefaultFilter())
  }

  if (!emails)
    return (
      <h2>Loading...</h2>
      // <div className="loader">
      //   <img src="./assets/img/loader.svg" alt="A loader." />
      // </div>
    )

  return (
    <section className="mail-index">
      <MailHeader
        filterBy={filterBy}
        onSetFilterBy={setFilterBy}
        onClearFilter={onClearFilter}
      />

      <MailLeftSideBar emails={emails} />
      <MailRightSideBar />

      <MailList
        emails={emails}
        onRemoveMail={onRemoveMail}
        onToggleRead={onToggleRead}
      />
      <footer>foooter</footer>
    </section>
  )
}
