const { useState, useEffect } = React
import { demoMails } from "../services/demoDataMail.jsx"
import { utilService } from "../../../services/util.service.js"
import { MailList } from "../cmps/MailList.jsx"


export function MailIndex() {
  console.log(demoMails)
  const t=utilService.getRandomColor()
  console.log({t})
  const mails= demoMails

  return (
    <section className="container">
      <MailList mails={mails} />
    </section>
  )
}
