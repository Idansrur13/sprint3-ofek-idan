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

export function MailIndex() {
  console.log(demoMails)

  const [mails, setMails] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(
    mailService.getFilterFromSearchParams(searchParams),
  )

  function onClearFilter() {
    setFilterBy(mailService.getDefaultFilter())
  }


  return (
    <section className="mail-index">
      <MailHeader />
      {/* <MailLeftSideBar /> */}
      {/* <MailRightSideBar /> */}

      <MailList mails={demoMails} />
      <footer>foooter</footer>
      <MailFilter
        filterBy={filterBy}
        onSetFilterBy={setFilterBy}
        onClearFilter={onClearFilter}
      />
    </section>
  )
}
